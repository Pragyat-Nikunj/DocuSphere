# Docusphere

A modern, collaborative document editing platform built with Next.js, Convex, and Liveblocks. Docusphere enables real-time document editing, sharing, and seamless user experience with robust authentication and a rich UI component library.



## 📚 Documentation

Instead of cluttering this README, full guides and architecture are available here:

👉 https://mintlify.wiki/Pragyat-Nikunj/DocuSphere

Includes:
- Setup guide  
- Architecture explanation  
- API details  
- Feature breakdown  
---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Features

- Real-time collaborative document editing
- User authentication and access control (Clerk)
- Rich text editing with Tiptap
- Live presence and cursors (Liveblocks)
- Document sharing and management
- Responsive, modern UI (shadcn/ui, Tailwind CSS)
- Modular, scalable codebase

## Tech Stack

- **Frontend:** Next.js (App Router), React 19, TypeScript
- **Backend:** Convex (serverless database & functions)
- **Authentication:** Clerk
- **Collaboration:** Liveblocks
- **UI:** shadcn/ui, Tailwind CSS
- **State Management:** Zustand

## Project Structure

```
├── convex/                # Convex backend (schema, functions, API)
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js app directory (routing, pages)
│   │   ├── documents/     # Document-related routes & logic
│   │   └── ...
│   ├── components/        # Reusable UI and logic components
│   ├── constants/         # App-wide constants
│   ├── extensions/        # Editor and UI extensions
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── store/             # Zustand stores
├── package.json           # Project metadata & scripts
├── README.md              # Project documentation
└── ...
```

## Getting Started

### Prerequisites

### Environment Variables (.env.local example)

Create a `.env.local` file in the project root with the following example:

```env
# Convex
CONVEX_DEPLOYMENT=dev:your-convex-deployment
NEXT_PUBLIC_CONVEX_URL=https://your-convex-url.convex.cloud
NEXT_PUBLIC_CONVEX_SITE_URL=https://your-convex-url.convex.site

# Clerk (Authentication)
CLERK_JWT_ISSUER_DOMAIN=https://your-clerk-domain.clerk.accounts.dev
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key

# Liveblocks (Collaboration)
NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY=sk_dev_your_liveblocks_secret_key
```

Replace the example values with your actual credentials for Convex, Clerk, and Liveblocks.
### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

### Environment Variables

Configure Clerk, Convex, and Liveblocks credentials in your `.env` file as needed.

## Development

- Lint: `npm run lint`
- Build: `npm run build`
- Start: `npm run start`

## Deployment

Deploy on Vercel or any platform supporting Next.js and serverless functions. Configure environment variables for Clerk, Convex, and Liveblocks in your deployment settings.

## Contributing

Contributions are welcome! Please open issues and pull requests for improvements or bug fixes.

