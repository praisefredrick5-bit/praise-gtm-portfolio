# Praise Fredrick — personal portfolio

A responsive, dark portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and Lucide icons.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production validation: `npm run build`. Serve the production build with `npm start`.

## Structure

- `app/page.tsx`: homepage sections and expertise content
- `app/globals.css`: responsive design system, component styles, and motion preferences
- `components/navigation.tsx`: accessible mobile navigation
- `components/system-visual.tsx`: CSS/SVG revenue system illustration
- `components/projects.tsx`: project illustrations and native dialog previews
- `lib/content.ts`: editable placeholder case studies
- `app/layout.tsx`: document shell and SEO metadata

## Content before launch

The three projects are explicitly labeled as concept previews. Replace their descriptions and proposed scopes with verified case studies before publishing. No metrics or testimonials are included. The contact section intentionally says that direct details are coming soon; replace this with Praise's confirmed contact address or profile. Tool names are used as ecosystem context, not certifications or endorsements. No external fonts, analytics, or remote image requests are required.

## Accessibility

Includes a skip link, visible keyboard focus, labeled navigation, an expandable mobile menu, native modal dialogs (Escape to dismiss and browser focus handling), and reduced-motion support. Breakpoints cover mobile, tablet, and desktop layouts.

No deployment has been configured or performed.

## Deployment and GitHub handoff

Use Node.js 24 (`nvm use`). See [DEPLOYMENT.md](DEPLOYMENT.md) for Vercel settings, source archive import, and the exact pull request workflow. CI validates production builds and TypeScript. No environment variables are required.
