# 📚 Project Documentation (`DOCS.md`)

Welcome to the project! This document outlines the current tech stack and provides useful links and notes to help new developers get up to speed quickly.

> 💡 *Note: This stack is still a work in progress (TBC). Expect updates as the project evolves.*

---

## 🧱 Tech Stack Overview

### 🧠 General
- **Language:** JavaScript  
  - ✅ Widely used  
  - ✅ Fast to prototype  
  - ✅ Most team members have experience  

---

### 🎨 Styling
- **CSS Framework:** Tailwind
  - Easy to use 
  - Quick coding
  - Most code in HTML rather than css

Offical Docs: https://tailwindcss.com/docs/installation/using-vite
---

### 💻 Frontend
- **Framework:** Next.js  


---

### 🧠 Backend
- **Also using Next.js API Routes**  


---

### 🗄️ Database: Supabase
Supabase is an open-source backend-as-a-service (BaaS) that includes:
- ✅ PostgreSQL database  
- ✅ Authentication  
- ✅ File storage  
- ✅ RESTful & real-time APIs  
- ✅ Easy integration with frontend frameworks like Next.js

📦 Package:  
Check `package.json` for the current version:  
```json
"@supabase/supabase-js": "^2.22.12"
```

📄 Official Docs:  
👉 [Supabase + Next.js Quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

---

### ☁️ Storage & Version Control
- **GitHub:** Used for code collaboration and storage  
  - Always push to feature branches and open PRs
  - Track updates via commit history

---

### 🤖 AI Integration
- **TBC**  

---

### 🔐 Authentication
- **Plugin-based (TBC):**  
  - Currently exploring **Supabase Auth** or **Auth0**  
  - Keep an eye on updates here

---

### 🚀 Hosting
- **TBC**  


---

### 🧩 Plugins
_This section is currently blank – we'll update this with key tools/libraries/plugins we standardize across the project._

---

## ✅ Getting Started (Coming Soon)
- [ ] Clone the repo  
- [ ] Install dependencies: `npm install`  
- [ ] Set up `.env.local` with Supabase + API keys  
- [ ] Run dev server: `npm run dev`  
- [ ] Review Supabase tables and seed data