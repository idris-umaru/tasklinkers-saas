import Link from "next/link";
import { ArrowRight, BarChart3, Building2, CheckCircle2, Users2 } from "lucide-react";

const tasks = [
  {
    title: "Review landing page wireframes",
    status: "In Progress",
    statusClass: "[background:#dff3ef] [color:#126c63]",
    due: "Today",
  },
  {
    title: "Assign launch checklist",
    status: "Review",
    statusClass: "[background:#fff1c2] [color:#805c00]",
    due: "Jun 27",
  },
  {
    title: "Publish client onboarding board",
    status: "Done",
    statusClass: "[background:#e7edf8] [color:#244c89]",
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
    <main className="[min-height:100vh] [background:rgba(247,_244,_238,_0.78)]">
      <header className="[position:sticky] [top:0] [z-index:10] [border-bottom:1px_solid_rgba(23,_32,_51,_0.1)] [background:rgba(247,_244,_238,_0.86)] [backdrop-filter:blur(18px)]">
        <nav className="[width:min(1120px,_calc(100%_-_32px))] [margin:0_auto] [display:flex] [min-height:72px] [align-items:center] [justify-content:space-between] [gap:24px]" aria-label="Main navigation">
          <Link className="[display:inline-flex] [align-items:center] [gap:10px] [font-size:1.1rem] [font-weight:800]" href="/">
            <span className="[display:grid] [width:36px] [height:36px] [place-items:center] [border-radius:8px] [background:#172033] [color:#f8d36b]">TL</span>
            <span>TaskLinkers</span>
          </Link>

          <div className="[display:flex] [align-items:center] [gap:24px] [color:#455064] [font-size:0.95rem] [font-weight:650] max-[900px]:[display:none]">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
          </div>

          <div className="[display:flex] [align-items:center] [gap:12px] max-[620px]:[&_.button-secondary]:[display:none]">
            <Link className="[display:inline-flex] [min-height:44px] [align-items:center] [justify-content:center] [gap:8px] [border:1px_solid_transparent] [border-radius:8px] [padding:0_18px] [font-weight:800] max-[620px]:[width:100%] [border-color:rgba(23,_32,_51,_0.16)] [background:rgba(255,_255,_255,_0.66)]" href="/login">
              Login
            </Link>
            <Link className="[display:inline-flex] [min-height:44px] [align-items:center] [justify-content:center] [gap:8px] [border:1px_solid_transparent] [border-radius:8px] [padding:0_18px] [font-weight:800] max-[620px]:[width:100%] [background:#126c63] [color:white] [box-shadow:0_12px_24px_rgba(18,_108,_99,_0.18)]" href="/register">
              Start Free
            </Link>
          </div>
        </nav>
      </header>

      <section className="[display:grid] [min-height:calc(100vh_-_72px)] [align-items:center] [padding:72px_0_48px] [&_h1]:[max-width:760px] [&_h1]:[margin:22px_0_18px] [&_h1]:[color:#111827] [&_h1]:[font-size:clamp(3.1rem,_7vw,_6.8rem)] [&_h1]:[line-height:0.94] max-[620px]:[padding-top:48px] max-[620px]:[&_h1]:[font-size:3rem]">
        <div className="[width:min(1120px,_calc(100%_-_32px))] [margin:0_auto] [display:grid] [align-items:center] [gap:48px] [grid-template-columns:minmax(0,_1fr)_minmax(360px,_0.85fr)] max-[900px]:[grid-template-columns:1fr]">
          <div>
            <span className="[display:inline-flex] [align-items:center] [gap:8px] [border-radius:999px] [padding:8px_12px] [background:rgba(255,_255,_255,_0.72)] [color:#126c63] [font-size:0.86rem] [font-weight:800]">
              <CheckCircle2 size={18} aria-hidden="true" />
              Trello + Small projects,Business Control and Visibility
            </span>
            <h1>TaskLinkers</h1>
            <p className="[max-width:620px] [margin:0_0_28px] [color:#3c475b] [font-size:1.15rem] [line-height:1.75]">
             
            </p>
            <div className="[display:flex] [flex-wrap:wrap] [gap:12px]">
              <Link className="[display:inline-flex] [min-height:44px] [align-items:center] [justify-content:center] [gap:8px] [border:1px_solid_transparent] [border-radius:8px] [padding:0_18px] [font-weight:800] max-[620px]:[width:100%] [background:#126c63] [color:white] [box-shadow:0_12px_24px_rgba(18,_108,_99,_0.18)]" href="/register">
                Create workspace
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="[display:inline-flex] [min-height:44px] [align-items:center] [justify-content:center] [gap:8px] [border:1px_solid_transparent] [border-radius:8px] [padding:0_18px] [font-weight:800] max-[620px]:[width:100%] [border-color:rgba(23,_32,_51,_0.16)] [background:rgba(255,_255,_255,_0.66)]" href="/pricing">
                View plans
              </Link>
            </div>
          </div>

          <div className="[border:1px_solid_rgba(23,_32,_51,_0.12)] [border-radius:8px] [background:rgba(255,_255,_255,_0.82)] [box-shadow:0_24px_70px_rgba(23,_32,_51,_0.16)] [overflow:hidden] max-[900px]:[max-width:560px]" aria-label="Task preview">
            <div className="[display:flex] [align-items:center] [justify-content:space-between] [border-bottom:1px_solid_rgba(23,_32,_51,_0.1)] [padding:18px]">
              <p className="[margin:0] [font-size:0.95rem] [font-weight:850]">Website Redesign</p>
              <span className="[border-radius:999px] [background:#f8d36b] [padding:6px_10px] [font-size:0.75rem] [font-weight:900]">Pro</span>
            </div>
            <div className="[display:grid] [gap:12px] [padding:18px]">
              {tasks.map((task) => (
                <article className="[display:grid] [gap:12px] [border:1px_solid_rgba(23,_32,_51,_0.1)] [border-radius:8px] [background:#ffffff] [padding:16px]" key={task.title}>
                  <div className="[display:flex] [flex-wrap:wrap] [align-items:center] [justify-content:space-between] [gap:12px]">
                    <p className="[margin:0] [font-weight:850]">{task.title}</p>
                    <span className={`status ${task.statusClass}`}>{task.status}</span>
                  </div>
                  <div className="[display:flex] [align-items:center] [justify-content:space-between] [gap:12px] [color:#687386] [font-size:0.9rem]">
                    <span>Due {task.due}</span>
                    <div className="[display:flex]" aria-label="Assigned team members">
                      <span className="[display:grid] [width:30px] [height:30px] [margin-left:-8px] [place-items:center] [border:2px_solid_white] [border-radius:50%] [background:#172033] [color:white] [font-size:0.72rem] [font-weight:900] [&:first-child]:[margin-left:0]">ID</span>
                      <span className="[display:grid] [width:30px] [height:30px] [margin-left:-8px] [place-items:center] [border:2px_solid_white] [border-radius:50%] [background:#172033] [color:white] [font-size:0.72rem] [font-weight:900] [&:first-child]:[margin-left:0]">SA</span>
                      <span className="[display:grid] [width:30px] [height:30px] [margin-left:-8px] [place-items:center] [border:2px_solid_white] [border-radius:50%] [background:#172033] [color:white] [font-size:0.72rem] [font-weight:900] [&:first-child]:[margin-left:0]">DV</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="[padding:72px_0] [background:#ffffff]" id="features">
        <div className="[width:min(1120px,_calc(100%_-_32px))] [margin:0_auto]">
          <div className="[max-width:680px] [&_h2]:[margin:0_0_12px] [&_h2]:[color:#111827] [&_h2]:[font-size:clamp(2rem,_4vw,_3.2rem)] [&_h2]:[line-height:1.05] [&_p]:[margin:0] [&_p]:[color:#5a6578] [&_p]:[font-size:1.05rem] [&_p]:[line-height:1.7]">
            <h2>Built around the way small teams actually coordinate.</h2>
            <p>
              Start with tasks and projects, then layer in teams, plans, roles,
              and analytics as the product grows.
            </p>
          </div>

          <div className="[display:grid] [grid-template-columns:repeat(3,_minmax(0,_1fr))] [gap:18px] [margin-top:32px] max-[900px]:[grid-template-columns:1fr]">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="[border:1px_solid_rgba(23,_32,_51,_0.1)] [border-radius:8px] [padding:22px] [&_h3]:[margin:0_0_8px] [&_h3]:[font-size:1.05rem] [&_p]:[margin:0] [&_p]:[color:#5a6578] [&_p]:[line-height:1.65]" key={feature.title}>
                  <span className="[display:grid] [width:42px] [height:42px] [margin-bottom:18px] [place-items:center] [border-radius:8px] [background:#edf6f4] [color:#126c63]">
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
