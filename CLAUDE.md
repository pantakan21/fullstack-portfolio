# Portfolio — CLAUDE.md

## โครงสร้างโปรเจกต์

```
src/
├── content/          ← แก้เนื้อหา Resume ที่นี่
│   ├── About.md
│   ├── Skills.md
│   ├── Projects.md
│   ├── Experience.md
│   ├── Contact.md
│   └── loader.js     ← parser (ไม่ต้องแตะ)
├── components/       ← UI components (ไม่ต้องแตะถ้าแค่แก้เนื้อหา)
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
└── assets/
    ├── profilev2-image.png   ← รูปโปรไฟล์
    └── Resume.pdf            ← ไฟล์ Resume PDF
```

## วิธีอัปเดต Resume

**แก้เนื้อหาทั้งหมดที่ `src/content/*.md`** — ไม่ต้องแตะ component

แต่ละไฟล์มี YAML frontmatter (ระหว่าง `---`) เก็บข้อมูลที่ใช้แสดงผล:

| ต้องการแก้ | เปิดไฟล์ |
|-----------|---------|
| ชื่อ, bio, philosophy | `src/content/About.md` |
| Skill categories & tags | `src/content/Skills.md` |
| Projects, modules, responsibilities | `src/content/Projects.md` |
| ประวัติการทำงาน, การศึกษา | `src/content/Experience.md` |
| Email, phone, ช่องทางติดต่อ | `src/content/Contact.md` |

## วิธีเพิ่ม/ลบรายการ

ตัวอย่าง — เพิ่ม skill ใหม่ใน `Skills.md`:

```yaml
cards:
  - icon: web
    title: Frontend Technologies
    skills:
      - Angular
      - React        # ← เพิ่มตรงนี้
```

ตัวอย่าง — เพิ่มประสบการณ์ทำงานใน `Experience.md`:

```yaml
experiences:
  - icon: work
    role: Senior Frontend Developer
    period: "2025 - Present"
    company: บริษัทใหม่
    summary: คำอธิบายงาน
    tech:
      - React
      - TypeScript
    isPrimary: true   # ใส่เฉพาะงานปัจจุบัน
```

## Stack

- React 19 + Vite
- Tailwind CSS
- `js-yaml` — parse YAML frontmatter จาก .md files
- Material Symbols (Google Icons)

## Dev

```bash
npm run dev      # start dev server
npm run build    # production build
```
