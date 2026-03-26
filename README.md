# Rith Seyhak — Portfolio

Personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Features smooth scroll animations, a responsive layout, an interactive photo card stack, and a working contact form powered by EmailJS.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **Email** — EmailJS
- **Deployment** — Vercel

## Sections

| Section    | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| Hero       | Introduction with GitHub and LinkedIn links                      |
| About      | Bio, interests, and an auto-cycling interactive photo card stack |
| Skills     | Icon grid — frontend, backend, database, and tools               |
| Projects   | Modula POS, Melodia, FrostGuard, Portfolio Website               |
| Experience | Education at Cambodia Academy of Digital Technology              |
| Contact    | Contact form that sends directly to email via EmailJS            |

## Getting Started

```bash
npm install
```

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> See the [EmailJS website](https://www.emailjs.com) to get your credentials.

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
app/
├── data/          # All content — projects, skills, experience, about text
├── lib/           # Icons and skill icon map
├── sections/      # Page sections (Hero, About, Skills, Projects, Experience, Contact, Footer)
├── types/         # TypeScript types
├── layout.tsx     # Root layout with header and nav
├── page.tsx       # Main page — composes all sections
└── globals.css    # Global styles
public/
├── files/         # Resume PDF
└── photos/        # Project screenshots and personal photos
```

## Contact

- **Email** — seyhakrithwk@gmail.com
- **GitHub** — [KMernDabest](https://github.com/KMernDabest)
- **LinkedIn** — [seyhak-rith-wk](https://www.linkedin.com/in/seyhak-rith-wk)
