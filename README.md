# TaskLinkers

TaskLinkers is a SaaS task and project management app designed for small businesses and growing teams. It aims to give teams a shared place to organize projects, assign work, follow deadlines, and see progress, with organization-level workspaces and team collaboration.

The repository contains a Next.js frontend and an Express API backend. The current frontend includes a marketing page, login and registration routes, and a dashboard shell. The landing page presents the intended product features, including organizations, teams, and analytics; some of these areas are still represented as product direction or UI scaffolding rather than completed functionality.

## Technology

- **Frontend:** Next.js, React, TypeScript, and Tailwind CSS
- **Backend:** Node.js, Express, and JavaScript (ES modules)
- **Data and authentication dependencies:** Prisma, PostgreSQL client, bcrypt, and JWT
- **Package manager:** npm workspaces

## Repository layout

```text
frontend/   Next.js web application
backend/    Express API server
docs/       Product and API documentation
```

## Getting started

Install dependencies from the repository root:

```bash
npm install
```

Start the frontend and backend in separate terminals:

```bash
npm run frontend
```

```bash
npm run backend
```

The backend uses environment variables for its database and server configuration. Add a `backend/.env` file with the values required by the backend before starting it. Do not commit secrets. Database setup and migration commands are available in the backend package scripts:

```bash
npm run prisma:generate --workspace=tasklinkers-backend
npm run prisma:migrate --workspace=tasklinkers-backend
```

## Product direction


TaskLinkers is intended to help a team:

- Keep work organized by project and organization.
- Assign tasks and track statuses and due dates.
- Coordinate team members in a shared workspace.
- Gain visibility into progress as the team grows.

The landing page currently links to planned Features, Pricing, and About pages. Check the application routes and backend implementation for the functionality that is currently available.