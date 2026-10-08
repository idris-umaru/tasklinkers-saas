import Link from "next/link";
import { ArrowRight, BarChart3, Building2, CheckCircle2, Users2 } from "lucide-react";

const tasks = [
  {
    title: "Review landing page wireframes",
    status: "In Progress",
    statusClass: "status-progress",
    due: "Today",
  },
  {
    title: "Assign launch checklist",
    status: "Review",
    statusClass: "status-review",
    due: "Jun 27",
  },
  {
    title: "Publish client onboarding board",
    status: "Done",
    statusClass: "status-done",
    due: "Oct 30",
  },
];

const features = [
  {
    icon: Building2,
    title: "Organizations",
    description: "Create a workspace for each business, invite members, and keep ownership clear.",
  },
  {
    icon: Users2,
    title: "Teams",
    description: "Group people by department, project, or client so assignments stay easy to scan.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track work volume, progress, and plan limits as your team grows from free to pro.",
  },
];

export default function LandingPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <nav className="container nav" aria-label="Main navigation">
          <Link className="brand" href="/">
            <span className="brand-mark">TL</span>
            <span>TaskLinkers</span>
          </Link>

          <div className="nav-links">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
          </div>

          <div className="nav-actions">
            <Link className="button button-secondary" href="/login">
              Login
            </Link>
            <Link className="button button-primary" href="/register">
              Start Free
            </Link>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <CheckCircle2 size={18} aria-hidden="true" />
              Trello + Small projects,Business Control and Visibility
            </span>
            <h1>TaskLinkers</h1>
            <p className="hero-copy">
              A collaborative workspace for teams that need simple task ownership,
              project visibility, deadlines, and organization-level control without
              enterprise clutter.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/register">
                Create workspace
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="button button-secondary" href="/pricing">
                View plans
              </Link>
            </div>
          </div>

          <div className="hero-panel" aria-label="Task preview">
            <div className="panel-top">
              <p className="panel-title">Website Redesign</p>
              <span className="panel-tag">Pro</span>
            </div>
            <div className="task-list">
              {tasks.map((task) => (
                <article className="task-card" key={task.title}>
                  <div className="task-meta">
                    <p className="task-name">{task.title}</p>
                    <span className={`status ${task.statusClass}`}>{task.status}</span>
                  </div>
                  <div className="task-footer">
                    <span>Due {task.due}</span>
                    <div className="avatar-row" aria-label="Assigned team members">
                      <span className="avatar">ID</span>
                      <span className="avatar">SA</span>
                      <span className="avatar">DV</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="section-heading">
            <h2>Built around the way small teams actually coordinate.</h2>
            <p>
              Start with tasks and projects, then layer in teams, plans, roles,
              and analytics as the product grows.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="feature-card" key={feature.title}>
                  <span className="feature-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
