---
draft: true
---
Tổng quan kho ghi chú. Các con số tự cập nhật qua Dataview (dùng dấu thời gian tệp: `file.ctime` / `file.mtime`).

```dataviewjs
// Ngưỡng "gần đây" = 30/05/2026. Đổi ngày ở đây nếu cần.
const cutoff = dv.date("2026-05-30");

const pages = dv.pages('"content"').where(p => !p.file.folder.includes("Attachments"));

let total = 0, isNew = 0, updated = 0, original = 0;
for (const p of pages) {
  total++;
  const c = p.file.ctime, m = p.file.mtime;
  if (c >= cutoff)        isNew++;       // ghi chú mới
  else if (m >= cutoff)   updated++;     // ghi chú cũ, vừa sửa
  else                    original++;    // gốc, chưa đụng tới
}

dv.table(["Nhóm", "Số lượng"], [
  ["Gốc (chưa cập nhật)", original],
  ["Đã cập nhật (từ 30/05)", updated],
  ["Mới (tạo từ 30/05)", isNew],
  ["**Tổng**", `**${total}**`],
]);
```

## Ghi chú mới nhất

```dataview
TABLE file.ctime AS "Tạo", file.mtime AS "Sửa"
FROM "content"
WHERE !contains(file.folder, "Attachments") AND file.name != "Vault Summary"
SORT file.mtime DESC
LIMIT 15
```

> [!note] Lưu ý về dấu thời gian
> Hầu hết ghi chú có ngày tạo 26/05/2026 (do import/sync), không phải ngày viết thật. Vì vậy "gốc" nghĩa là "đã import và chưa sửa lại", không phải "ghi chú đầu tiên bạn viết".
