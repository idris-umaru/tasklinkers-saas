"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  Circle,
  Eye,
  EyeOff,
  Layers3,
  LockKeyhole,
  Mail,
} from "lucide-react";

const previewTasks = [
  { title: "Finalize launch checklist", done: true },
  { title: "Review homepage copy", done: false },
  { title: "Share updates with the team", done: false },
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Sign-in is not connected yet. Your details have not been sent.");
  }

  return (
    <main className="auth-page">
      <section className="auth-showcase" aria-label="TaskLinkers workspace preview">
        <header className="auth-showcase-header">
          <Link className="auth-brand" href="/" aria-label="TaskLinkers home">
            <span className="auth-brand-mark">TL</span>
            <span>TaskLinkers</span>
          </Link>
          <span className="auth-private-note">
            <LockKeyhole size={14} aria-hidden="true" />
            PRIVATE WORKSPACE
          </span>
        </header>

        <div className="auth-story">
          <span className="auth-eyebrow">
            <span className="auth-eyebrow-dot" aria-hidden="true" />
            TEAM WORK, IN SYNC
          </span>
          <h1>
            Pick up where
            <br />
            good work gets <em>done.</em>
          </h1>
          <p className="auth-story-copy">
            Your projects, people, and next steps, together in one clear place.
          </p>

          <div className="auth-preview">
            <div className="auth-preview-topline">
              <span>MONDAY, OCTOBER 12</span>
              <span className="auth-preview-live">
                <span aria-hidden="true" />
                ON TRACK
              </span>
            </div>
            <div className="auth-project-heading">
              <span className="auth-project-icon">
                <Layers3 size={19} aria-hidden="true" />
              </span>
              <div>
                <span className="auth-project-label">YOUR PROJECT</span>
                <h2>Website refresh</h2>
              </div>
              <span className="auth-project-count">03</span>
            </div>
            <div className="auth-progress-copy">
              <span>Weekly priorities</span>
              <span>1 of 3 complete</span>
            </div>
            <div className="auth-progress-track" aria-hidden="true">
              <span />
            </div>
            <ul className="auth-preview-tasks">
              {previewTasks.map((task) => (
                <li key={task.title}>
                  <span className={task.done ? "auth-task-check is-done" : "auth-task-check"}>
                    {task.done ? (
                      <Check size={13} aria-hidden="true" />
                    ) : (
                      <Circle size={13} aria-hidden="true" />
                    )}
                  </span>
                  <span className={task.done ? "auth-task-title is-done" : "auth-task-title"}>
                    {task.title}
                  </span>
                  {task.done ? <span className="auth-task-status">DONE</span> : null}
                </li>
              ))}
            </ul>
            <div className="auth-preview-footer">
              <div className="auth-avatar-stack" aria-label="Four project members">
                <span>AL</span>
                <span>JR</span>
                <span>MK</span>
                <span>+1</span>
              </div>
              <span>Small steps. Shared progress.</span>
            </div>
          </div>
        </div>

        <footer className="auth-showcase-footer">
          <span>Thoughtful tools for focused teams.</span>
          <span>BUILT FOR THE WORK AHEAD</span>
        </footer>
      </section>

      <section className="auth-panel" aria-labelledby="login-title">
        <header className="auth-panel-header">
          <span>NEW TO TASKLINKERS?</span>
          <Link href="/register">
            Create an account <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </header>

        <div className="auth-form-wrap">
          <div className="auth-form-intro">
            <span className="auth-form-mark" aria-hidden="true">
              TL
            </span>
            <span className="auth-form-kicker">WELCOME BACK</span>
            <h2 id="login-title">Sign in to your workspace</h2>
            <p>Your team is right where you left it.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="email">Work email</label>
              <div className="auth-input-wrap">
                <Mail size={18} aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <div className="auth-label-row">
                <label htmlFor="password">Password</label>
              </div>
              <div className="auth-input-wrap">
                <LockKeyhole size={18} aria-hidden="true" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                />
                <button
                  className="auth-password-toggle"
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-controls="password"
                  onClick={() => setShowPassword((visible) => !visible)}
                >
                  {showPassword ? (
                    <EyeOff size={18} aria-hidden="true" />
                  ) : (
                    <Eye size={18} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <label className="auth-remember">
              <input type="checkbox" name="remember" />
              <span>Keep me signed in</span>
            </label>

            <button className="auth-submit" type="submit">
              Sign in <ArrowRight size={17} aria-hidden="true" />
            </button>
            <p className="auth-notice" role="status" aria-live="polite">
              {notice}
            </p>
          </form>

          <p className="auth-form-footnote">
            By continuing, you agree to keep your team&apos;s workspace secure.
          </p>
        </div>

        <footer className="auth-panel-footer">
          <Link href="/">Back to TaskLinkers</Link>
          <span>&copy; 2026 TaskLinkers</span>
        </footer>
      </section>
    </main>
  );
}
