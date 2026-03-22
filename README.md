# GrowLevel Digital — Portfolio Website

> "Building Systems. Driving Growth."

A modern, responsive portfolio website built with React, Tailwind CSS, Vite, and Supabase.

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free project
2. Open the **SQL Editor** in your Supabase dashboard
3. Paste and run the contents of `supabase_setup.sql`
4. Go to **Project Settings → API** and copy:
   - `Project URL`
   - `anon public` key

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and fill in your credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key-here
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 5. Build for production

```bash
npm run build
npm run preview
```

---

## 🗂️ Project Structure

```
growlevel/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed navigation with scroll effect
│   │   ├── Hero.jsx          # Full-screen hero with stats
│   │   ├── About.jsx         # Brand story + 3 pillars
│   │   ├── Services.jsx      # 4 service cards
│   │   ├── Portfolio.jsx     # Dynamic projects (Supabase)
│   │   ├── Process.jsx       # 3-step process
│   │   ├── Testimonials.jsx  # Dynamic testimonials (Supabase)
│   │   ├── Contact.jsx       # Form → Supabase insert
│   │   └── Footer.jsx        # Minimal dark footer
│   ├── hooks/
│   │   └── useScrollAnimation.js  # IntersectionObserver hook
│   ├── lib/
│   │   └── supabase.js       # Supabase client config
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Tailwind + custom animations
├── .env.example
├── supabase_setup.sql        # Run this in Supabase SQL Editor
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🗄️ Supabase Tables

| Table | Purpose | Access |
|-------|---------|--------|
| `contacts` | Stores form submissions | anon INSERT |
| `projects` | Portfolio projects | anon SELECT |
| `testimonials` | Client testimonials | anon SELECT |

---

## 🎨 Design System

- **Fonts**: Syne (display) + DM Sans (body) + DM Mono (code)
- **Colors**: White bg · Blue accent (`#2563eb`) · Dark ink (`#0f0f0f`)
- **Cards**: Glassmorphism — backdrop blur + soft borders + subtle shadows
- **Animations**: Fade + slide-up on scroll via IntersectionObserver
- **Hover**: Lift effect (translateY + shadow) on all cards

---

## 🔧 Customization

### Update brand info
- Edit taglines in `Hero.jsx`
- Update contact email in `Contact.jsx` and `Footer.jsx`
- Swap service descriptions in `Services.jsx`

### Add real projects
Insert rows into the `projects` table in Supabase — they'll appear automatically.

### Add testimonials
Insert rows into the `testimonials` table in Supabase.

### Change accent color
Update `accent` in `tailwind.config.js` and `index.css`.

---

## 📦 Deploy

Works out of the box on:
- **Vercel**: `npm run build` → deploy `dist/`
- **Netlify**: connect repo, build command `npm run build`, publish `dist/`
- **Cloudflare Pages**: same as above

Remember to add your environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) in your hosting platform's dashboard.
