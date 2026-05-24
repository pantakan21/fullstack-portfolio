---
header:
  title: Projects & Systems
  description: A collection of professional systems and projects I've contributed to — spanning internal tools, CRM platforms, and independent work.

projects:
  - name: Manpower
    company: INET
    role: Frontend Developer
    description: Manages staff assignments by showing who is responsible for each task and tracking workload distribution across the team.
    modules:
      - Staff Assignment
      - Workload Tracking
    responsibilities:
      - Designed feature-based modules with clear separation of responsibilities between components, services, and state management.
      - Organized application state to reduce coupling and improve predictability across complex views.
      - Collaborated with BAs and UI/UX designers to align features with business requirements.

  - name: Adjust Level
    company: INET
    role: Frontend Developer
    description: Provides a standardized template for evaluating and scoring projects based on predefined criteria.
    modules:
      - Scoring Template
      - Evaluation Criteria
    responsibilities:
      - Built dynamic form structures to support flexible scoring criteria.
      - Worked with backend engineers to align data structures and edge cases before implementation.
      - Refactored shared components to improve reuse and long-term maintainability.

  - name: Sales Review Dashboard
    company: INET
    role: Frontend Developer
    description: A dashboard designed to support sales operations by presenting key data and summaries for day-to-day decision support.
    modules:
      - Sales Summary
      - Data Visualization
    responsibilities:
      - Structured data-driven UI components to clearly present operational metrics.
      - Worked closely with backend engineers to align API contracts and response formats.
      - Designed reusable dashboard components to support scalable feature growth.

  - name: Venio CRM
    company: Gofive
    role: Fullstack Developer · Branch Keeper · Sprint Owner
    description: A CRM platform built to streamline customer relationship management and sales operations.
    modules:
      - CRM
    responsibilities:
      - Integrated third-party services and external APIs into the platform.
      - Resolved product issues and defects across frontend and backend layers.
      - Piped product data into PostHog for behavioral analysis and product insights.
      - Used AI (Claude, DeepSource) to accelerate code fixes and reduce manual effort in code quality tasks.
      - Managed branch strategy and code merge flow as Branch Keeper.
      - Owned sprint planning and delivery as Sprint Owner.

freelance:
  title: Freelance & Independent Work
  description: In addition to full-time work, I've taken on freelance and independent projects, focusing on frontend implementation and system clarity.
  items:
    - Built and customized frontend interfaces based on client requirements.
    - Worked directly with clients to clarify scope, requirements, and technical constraints.
    - Delivered maintainable solutions with clear structure.

---

## วิธีแก้ไข

- `header.title` / `header.description` — ชื่อโปรเจกต์หลักและคำอธิบาย
- `modules` — รายการ module ย่อย (เพิ่ม/ลบ/แก้ name และ description)
- `role.responsibilities` — รายการความรับผิดชอบ (bullet points)
- `freelance.items` — รายการงาน freelance
