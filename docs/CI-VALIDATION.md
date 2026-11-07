# Fork PR validation (CI-00)

Context: [#13](https://github.com/quangnd/thenotes/issues/13), [design direction #10](https://github.com/quangnd/thenotes/issues/10), and [visual baseline PR #12](https://github.com/quangnd/thenotes/pull/12). Base branch: `v5`. This change authorizes neither a merge nor deployment.

## Checks and permissions

`Build and Test` runs on every PR targeting `v5` in `quangnd/thenotes`, including fork-origin PRs (subject to GitHub's contributor approval policy). It has three separate Ubuntu/Node 24 check jobs, with fail-fast disabled:

- `PR / check (ubuntu-latest)` — `npm run check` (TypeScript and Prettier).
- `PR / test (ubuntu-latest)` — `npm test`.
- `PR / build (ubuntu-latest)` — `npm run quartz -- build --bundleInfo -d docs`.

Each job installs locked npm dependencies, installs Quartz plugins and applies the existing graph/slug patches. `npm run quartz -- …` invokes this checkout's CLI, avoiding an accidental npm registry fallback from `npx quartz`. npm/plugin caches use a validation-only key namespace; plugin cache keys include the lockfile, configuration, local plugins and installer. The upstream repository retains its OS matrix and release-tag guard. Fork push/manual events do not activate validation or release jobs; validate this change through a PR, not a deployment dispatch.

Validation uses `pull_request`, **not** `pull_request_target`. Its token has only `contents: read`; checkout does not persist credentials. No deployment environment, production secret, Pages/OIDC permission, write token or deployment action is passed to the jobs. No validation artifact feeds a privileged `workflow_run` job. Do not add `secrets: inherit` or inject deployment tokens into build/plugin/test processes. Dependencies and PR code execute on disposable GitHub-hosted runners.

This workflow cannot prevent a repository writer from editing another workflow to request repository-level secrets. Keep production credentials environment-scoped with owner approval/branch restrictions; repository writers remain trusted. Existing secret placement and environment protection rules were not changed or certified by this task. Do not put production credentials in PR workflows. See GitHub's [secure-use guidance](https://docs.github.com/en/actions/reference/security/secure-use) and [event/trust-boundary documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run).

## Formatting scope

The inherited whole-repository Prettier check included hundreds of existing author notes, theme exports and generated plugin bundles. `.prettierignore` excludes `content/`, the authored root `MEMORY.md`, `themes/` exports and `plugins/**/dist/` output, in addition to existing build/dependency exclusions. Source files, workflow files and `docs/` remain checked. The slug patch script receives only Prettier line wrapping. No author content, UI, theme, TypeScript strictness or test expectations are changed to make checks green.

Plugin installation regenerates the ignored `.quartz/plugins/index.ts`; this removes stale generated type exports. Generated files are not committed. Installing plugins after switching branches is important; checking a stale plugin cache alone is not equivalent to a clean CI run.

## Deployment topology — unchanged

| Workflow                  | Existing trigger / guard                                                       | Meaning in this fork                                                                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deploy-pages.yaml`       | Push to `v5` or manual dispatch; `github-pages` environment                    | Actual GitHub Pages production path. Pages metadata reports workflow publishing, custom domain `thenotes.quangnd.com`, HTTPS enforced. [Existing successful run](https://github.com/quangnd/thenotes/actions/runs/28079552256) was a `v5` push on 24 June 2026. |
| `deploy-v5.yaml`          | Push to `v5` / dispatch, upstream repository only                              | Cloudflare Pages `quartz` project / `v5` preview; disabled for this repository by guard.                                                                                                                                                                        |
| `build-preview.yaml`      | PR / dispatch, upstream repository only                                        | Upstream build artifact producer; still disabled here. A skipped run is not a working preview.                                                                                                                                                                  |
| `deploy-preview.yaml`     | Successful `Build Preview Deployment` `workflow_run`, upstream repository only | Privileged Cloudflare consumer of an artifact from another run; remains disabled here. Do not broaden its repository guard as a preview shortcut.                                                                                                               |
| `ci.yaml` / `publish-tag` | Upstream repository and `refs/heads/v5` only                                   | Release tagging remains disabled in this fork.                                                                                                                                                                                                                  |
| `docker-build-push.yaml`  | Upstream repository only; publishing gated away from PR events                 | Container publishing remains disabled in this fork.                                                                                                                                                                                                             |

No deployment/release workflow is edited. No Pages/Cloudflare settings or secrets are read as values or changed. A PR branch push cannot match the production `v5` push trigger. Merging even a documentation-only PR into `v5` can deploy; owner review is still required.

## Preview status and safe visual QA

**Hosted PR preview is unavailable for this fork. No preview URL or deployment success is claimed.** The existing Cloudflare setup is upstream-specific and consumes PR-produced artifacts in a privileged workflow. A separately authorized preview design must establish a distinct non-production project, constrained credentials, trusted provenance and owner approval; activating it is outside CI-00. Production Pages remains unchanged.

For an owner-reviewed local checkout of an implementation PR, use Node 24 and:

```sh
npm ci
npm run quartz -- plugin install
bash scripts/patch-quartz-plugins.sh
node scripts/patch-quartz-slugify.mjs
npm run check
npm test
npm run quartz -- build -d docs
# For site UI QA, build author content instead of the Quartz documentation:
npm run quartz -- build --serve
```

Open the localhost URL printed by Quartz. No hosting token or deployment is needed. Do not run untrusted PR code on a machine holding production credentials; review it first or use an isolated credential-free environment. Capture home, long article, MOC and image note at 1440 × 900, 390 × 844 and 375 × 812 in both themes; attach screenshots/artifacts to the PR with URL, viewport, mode, date and commit. Compare against PR #12's baseline and test mobile search, overflow, links, TOC, images and graph. Local serving is a manual QA path, not proof that a hosted preview exists.

## Finding results and evidence

On the PR, expand **Checks → Build and Test** and open each of the three named jobs. In each job, verify dependency/plugin setup and its corresponding command actually ran. The two non-selected matrix command steps are intentionally skipped; the selected command and the job must conclude `success`. A skipped upstream release/preview job is expected and does not substitute for any required validation job. `failure`, `cancelled`, `action_required`, missing jobs and whole-job `skipped` are not passing checks.

For CLI inspection:

```sh
gh pr checks <PR-number> --repo quangnd/thenotes
gh run view <run-id> --repo quangnd/thenotes
gh run view <run-id> --repo quangnd/thenotes --log
```

The PR description records the exact tested head, run URL, conclusions, selected-step logs and local limitations. Prefer run logs over a green overall badge: guards can produce a skipped workflow. Do not rerun or manually dispatch deployment workflows for CI validation.
