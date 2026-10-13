# Mourad Daghar - CV Portfolio

A single-page, searchable CV built with Next.js and React. The content is in German. It includes live search across skills, projects and theses, technology icons, light and dark themes, and a print-friendly layout.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router) + React + TypeScript
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark theme handling
- [simple-icons](https://simpleicons.org/) and [react-icons](https://react-icons.github.io/react-icons/) for technology logos
- Plain CSS (one global stylesheet, scoped under `.cvp`)

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# production build
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx               Root layout, ThemeProvider, <html lang="de">
  page.tsx                 Page composition + search state
components/
  Icon.tsx                 Inline SVG icons (mail, pin, print, sun, moon, ...)
  TechIcon.tsx             Renders a technology logo by name
  Chips.tsx                Technology chips
  Timeline.tsx             Experience / projects / theses sections
  EduList.tsx              Education sections
  Toolbar.tsx              Search bar, theme toggle, print button (client)
  ThemeProvider.tsx        next-themes wrapper (client)
  ThemeToggle.tsx          Light/dark switch (client)
  Hero.tsx                 Header with photo, facts and links
  SkillsSection.tsx        Grouped technical skills
  PersonalAndLanguages.tsx Personal skills + languages
  AboutContact.tsx         About me + contact details
data/
  constants.ts             Email, GitHub, LinkedIn URLs
  types.ts                 Shared TypeScript types
  skills.ts                Skill groups, personal skills, languages
  techIcons.ts             Mapping: technology name -> icon
  experience.ts            Internships
  projects.ts              Projects
  theses.ts                Bachelor's / Master's theses
  education.ts             Education, further training, hobbies
lib/
  search.ts                Text normalization + filter helpers
public/
  md-8.jpeg                Profile photo
```

## Editing Content

All content lives in `data/`, so you rarely need to touch components.

| What you want to change      | File                             |
| ---------------------------- | -------------------------------- |
| Contact links                | `data/constants.ts`              |
| Skills and languages         | `data/skills.ts`                 |
| Internship                   | `data/experience.ts`             |
| Projects                     | `data/projects.ts`               |
| Theses                       | `data/theses.ts`                 |
| Education, hobbies           | `data/education.ts`              |
| Contact details, "Über mich" | `components/AboutContact.tsx`    |
| Hero text, profile photo     | `components/Hero.tsx`, `public/` |

### Adding a technology icon

1. Add the technology name to the `stack` array of an entry, or to a group in `data/skills.ts`.
2. Register its icon in `data/techIcons.ts`:

```ts
   Rust: { type: "simple", icon: siRust },   // from simple-icons
   Swift: { type: "react", icon: FaSwift },  // from react-icons/fa
```

If a name has no entry in `techIcons`, a neutral dot is shown instead.

## Theming

The site supports light and dark mode.

- **Default:** follows the visitor's system setting and updates live when the OS theme changes.
- **Manual switch:** the toolbar button overrides the system setting, and the choice is saved in `localStorage` under the key `theme`.
- **How it works:** `ThemeProvider` (next-themes) sets `data-theme="light"` or `data-theme="dark"` on `<html>` before first paint, so there is no flash on refresh.
- **Colors:** every color is a CSS variable in section 1 of the stylesheet, written as `light-dark(<light>, <dark>)`. To change the palette, edit those tokens.
- **Toggle label:** `ThemeToggle` renders both labels ("Dunkel" / "Hell") and CSS shows the right one based on `data-theme`. This keeps the toolbar from jumping on refresh.
- **Print:** always prints in light mode, even if the screen is dark.

`app/layout.tsx` needs `suppressHydrationWarning` on `<html>`, because the provider changes an attribute React didn't render:

```tsx
<html lang="de" suppressHydrationWarning>
  <body>
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  </body>
</html>
```

## Styling

All styles are in one global stylesheet, scoped under `.cvp`. It is organized in numbered sections:

1. Tokens (colors, radii, shadows, layout, spacing)
2. Base
3. Toolbar (search, pills, theme toggle)
4. Layout and cards
5. Hero
6. Skills and chips
7. Experience / timeline
8. Education
9. About and contact
10. Inline icons and status
11. Footer
12. Responsive (900 / 760 / 640 / 380 px breakpoints)
13. Accessibility (focus rings, reduced motion, high contrast)
14. Print (A4)

Notes:

- `<html lang="de">` is required for `hyphens: auto` to hyphenate German words.
- Inter is loaded with `@import` from Google Fonts. For better performance you can switch to `next/font/google` and remove the `@import` line.
- Colors use `light-dark()`, which needs Chrome/Edge 123+, Safari 17.5+ or Firefox 120+.

## Features

- **Live search** filters skills, internships, projects and theses. It ignores case and accents.
- **Light and dark mode** with system detection and a saved manual choice.
- **Print / PDF**: the "Drucken" button calls `window.print()`. The print layout hides the toolbar, uses A4 margins and avoids breaking small blocks across pages.
- **Responsive layout** from desktop down to small phones.
- **Accessibility**: visible focus rings, `prefers-reduced-motion` and `prefers-contrast` support.
- **Optimized image** via `next/image`.

## Deployment

The easiest option is [Vercel](https://vercel.com/):

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Deploy. No environment variables are required.

## Notes

- Imports use the `@/` path alias (configured in `tsconfig.json`). If your project uses a `src/` directory, keep the alias pointing to `src/`.
- Client components: `app/page.tsx`, `components/Toolbar.tsx`, `components/ThemeProvider.tsx` and `components/ThemeToggle.tsx`. Everything else renders on the server.
- If the profile photo has a bright white background, it may look harsh in dark mode. A transparent or darker background fits better.

## License

All rights reserved © Mourad Daghar. Content and photo are personal and not licensed for reuse.