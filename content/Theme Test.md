---
title: Theme Test
description: Visual coverage note for testing themes (fonts, colors, components).
draft: true
tags:
  - meta
created: 2026-05-31
modified: 2026-06-10
---

# Heading 1 — The quick brown fox

## Heading 2 — Phương tiện ghi nhớ

### Heading 3 — Spaced repetition

#### Heading 4 — Smaller still

##### Heading 5

###### Heading 6

A normal paragraph to check the **body font**, line-height, and measure. It mixes
**bold text**, *italic text*, ***bold italic***, ~~strikethrough~~, `inline code`,
and ==highlighted text==. Vietnamese diacritics stress the font: Những thuộc tính
quan trọng nhất của thẻ trong hệ thống ghi nhớ lặp lại ngắt quãng tốt là gì? Đây là một câu dài
để kiểm tra chiều rộng dòng và cách ngắt dòng tự nhiên trên các kích thước màn hình.

## Links

- Internal: [[Anki]]
- External: [iA Writer](https://ia.net/writer)
- Broken: [[This Note Does Not Exist]]

## Lists

Unordered:

- First item with some text
- Second item
  - Nested item
  - Another nested item
- Third item

Ordered:

1. Step one
2. Step two
3. Step three

Tasks:

- [ ] Unchecked task
- [x] Checked task

## Code

Inline `const x = 42` inside a sentence, then a block:

```js
function greet(name) {
  const msg = `Hello, ${name}!`
  console.log(msg)
  return msg
}
```

```python
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

## Table

| Slot | Light | Dark |
|------|-------|------|
| light | `#fcf5e4` | `#262626` |
| secondary | `#7b6cd9` | `#483699` |
| body text | readable | readable |

## Callouts

> [!note]
> A note callout for testing accent colors.

> [!tip]
> A tip callout.

> [!warning]
> A warning callout.

> [!quote]
> A blockquote-style callout to check the left border width.

Plain blockquote:

> The point of a memory system is not to memorize, but to make remembering
> effortless so attention stays on understanding.

## Math

Inline: $e^{i\pi} + 1 = 0$

Display:

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

## Horizontal rule

---

## Footnote

Here is a claim that needs a source.[^1]

[^1]: This is the footnote text.
