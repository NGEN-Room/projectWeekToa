# 🏗️ next.js — Folder Structure (Explained Like a House)

These folders are the **building blocks** of our app.

---

## 🏠 `app/`
This is where we **route** our pages, like:
- `/` (homepage)
- `/dashboard`
- `/brand-builder`

We build the pages for each unique route here.  
> 🧱 **Think of this as building the *rooms* of our website.**

---

## 🪑 `components/`
Reusable blocks of code or logic.

- Can be as small or big as you want.
- Example: `Button`, `Navbar`, `UserCard`, `AuthForm`.

> 🪑 **Think of this as the *furniture* inside each room.**  
You build it once and reuse it anywhere in the house.

---

## 🔌 `lib/` (Library)
This is where we store **logic, helpers, or setup files** that we use across the app.

- For example: connecting to Supabase, talking to AI, checking if someone is logged in.
- These don’t **show up visually** in the browser, but power everything behind the scenes.

> ⚡ **Think of `lib/` like the *power lines and ethernet cables* in the walls.**

---

## ⚙️ `/app/api/`
(If using App Router in Next.js 13+)

This is where we can write **backend logic** — like saving data, calling a secret key, or securely updating the database.

**BUT:** This is only **needed** if:
- You want to **write your own backend logic**
- You need to protect logic from being exposed to the user

### 🧠 Difference between `lib/` and `api/`

| Folder | What it Does | Example |
|--------|---------------|---------|
| `lib/` | Sets up tools or reusable functions (used *in* pages/components) | Connecting Supabase, calling AI |
| `app/api/` | Server-side logic or backend endpoints (used *as* APIs) | Saving form data securely |

> 🧰 Think of `lib/` as the tools **inside the walls**, and `api/` as a **doorway for other services or systems to come in and do work.**

---

## 🎨 `styles/`
This holds our **styling files** (usually `globals.css`) and any other custom styles.

> 🖌️ **Think of this as the *paint and decorations* in each room.**

---

## 🖼️ `public/`
This holds images and files that anyone can access from the browser.

- Logos, favicons, background images

> 🖼️ **Think of this as the *family photos and art* hanging on the walls.**

---

## 📚 `docs/`
This is your **house manual** — not code, but documentation.

- Helps new people understand the project
- Includes guides like `DOCS.md`, how Supabase works, AI integration notes, etc.

> 📘 **Think of this as the *instructions taped to the fridge* for new whānau.**

---

## 🔄 TL;DR Metaphor Table

| Folder       | What it Does                         | Metaphor                          |
|--------------|--------------------------------------|-----------------------------------|
| `app/`       | All the routes/pages of your app     | Rooms in the house                |
| `components/`| Reusable UI parts (buttons, nav)     | Furniture                         |
| `lib/`       | Logic/helpers used everywhere        | Power lines and tools             |
| `app/api/`   | (Optional) Custom backend functions  | Doorway for external workers      |
| `styles/`    | Styling and design                   | Paint and decoration              |
| `public/`    | Brand images, icons, assets          | Family photos/art on the wall     |
| `docs/`      | Project documentation                | House manual                      |

---

## ✅ Final Advice for Students

> “Frontend is what people see. Backend is what makes it work.  
Put the furniture in your rooms, wire up your power, and don't forget to paint the walls!”