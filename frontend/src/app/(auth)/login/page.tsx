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
    <main className="[display:grid] [min-height:100vh] [grid-template-columns:minmax(0,_1.08fr)_minmax(420px,_.92fr)] [background:#fbfaf7] max-[900px]:[grid-template-columns:minmax(0,.92fr)_minmax(390px,1.08fr)] max-[700px]:[display:block] max-[700px]:[min-height:100vh]">
      <section className="[position:relative] [display:flex] [min-height:100vh] [flex-direction:column] [justify-content:space-between] [overflow:hidden] [padding:34px_clamp(28px,_6vw,_88px)_26px] [background:radial-gradient(ellipse_at_15%_90%,_rgba(245,202,110,.15),_transparent_36%),_linear-gradient(145deg,#102e2b,#16463f_52%,#0e332f)] [color:#f8f6ef] [&::before]:[position:absolute] [&::before]:[width:360px] [&::before]:[height:360px] [&::before]:[border:1px_solid_rgba(255,255,255,.08)] [&::before]:[border-radius:50%] [&::before]:[content:''] [&::before]:[pointer-events:none] [&::after]:[position:absolute] [&::after]:[width:360px] [&::after]:[height:360px] [&::after]:[border:1px_solid_rgba(255,255,255,.08)] [&::after]:[border-radius:50%] [&::after]:[content:''] [&::after]:[pointer-events:none] [&::before]:[top:18%] [&::before]:[right:-210px] [&::after]:[right:-135px] [&::after]:[bottom:8%] [&::after]:[width:220px] [&::after]:[height:220px] max-[900px]:[padding-right:34px] max-[900px]:[padding-left:34px] max-[700px]:[display:none]" aria-label="TaskLinkers workspace preview">
        <header className="[position:relative] [z-index:1] [display:flex] [align-items:center] [justify-content:space-between] [gap:16px]">
          <Link className="[display:inline-flex] [align-items:center] [gap:11px] [font-size:1.05rem] [font-weight:800] [letter-spacing:-.02em]" href="/" aria-label="TaskLinkers home">
            <span className="[display:grid] [width:38px] [height:38px] [place-items:center] [border-radius:12px] [background:#f1c96d] [color:#163c36] [font-size:.8rem] [font-weight:900] [letter-spacing:-.06em]">TL</span>
            <span>TaskLinkers</span>
          </Link>
          <span className="[font-size:.65rem] [font-weight:800] [letter-spacing:.12em] [display:inline-flex] [align-items:center] [gap:8px] [color:rgba(248,246,239,.68)]">
            <LockKeyhole size={14} aria-hidden="true" />
            PRIVATE WORKSPACE
          </span>
        </header>

        <div className="[position:relative] [z-index:1] [width:min(100%,570px)] [margin:56px_auto] [&_h1]:[margin:22px_0_14px] [&_h1]:[color:#fffdf7] [&_h1]:[font-family:Georgia,'Times_New_Roman',serif] [&_h1]:[font-size:clamp(2.8rem,5.3vw,5rem)] [&_h1]:[font-weight:500] [&_h1]:[letter-spacing:-.055em] [&_h1]:[line-height:1.02] [&_h1_em]:[color:#e7ca7e] [&_h1_em]:[font-weight:500] max-[900px]:[&_h1]:[font-size:clamp(2.6rem,5.4vw,4rem)]">
          <span className="[display:inline-flex] [align-items:center] [gap:9px] [color:#e6c979] [font-size:.68rem] [font-weight:800] [letter-spacing:.14em]">
            <span className="[width:7px] [height:7px] [border-radius:50%] [background:#e6c979] [box-shadow:0_0_0_4px_rgba(230,201,121,.13)]" aria-hidden="true" />
            TEAM WORK, IN SYNC
          </span>
          <h1>
            Pick up where
            <br />
            good work gets <em>done.</em>
          </h1>
          <p className="[max-width:390px] [margin:0] [color:rgba(248,246,239,.7)] [font-size:.98rem] [line-height:1.7]">
            Your projects, people, and next steps, together in one clear place.
          </p>

          <div className="[width:min(100%,440px)] [margin-top:34px] [border:1px_solid_rgba(255,255,255,.16)] [border-radius:17px] [padding:20px_22px_15px] [background:rgba(255,255,255,.095)] [box-shadow:0_22px_60px_rgba(4,20,18,.22)] [backdrop-filter:blur(16px)]">
            <div className="[font-size:.65rem] [font-weight:800] [letter-spacing:.12em] [display:flex] [align-items:center] [justify-content:space-between] [gap:12px] [color:rgba(248,246,239,.53)] [font-size:.59rem]">
              <span>MONDAY, OCTOBER 12</span>
              <span className="[display:inline-flex] [align-items:center] [gap:9px] [color:#e6c979] [font-size:.68rem] [font-weight:800] [letter-spacing:.14em] [&_span]:[width:7px] [&_span]:[height:7px] [&_span]:[border-radius:50%] [&_span]:[background:#e6c979] [&_span]:[box-shadow:0_0_0_4px_rgba(230,201,121,.13)] [color:#c4e0bd] [font-size:.59rem] [letter-spacing:.1em] [&_span]:[width:6px] [&_span]:[height:6px] [&_span]:[background:#9ed39a] [&_span]:[box-shadow:none]">
                <span aria-hidden="true" />
                ON TRACK
              </span>
            </div>
            <div className="[display:flex] [align-items:center] [justify-content:space-between] [gap:12px] [justify-content:flex-start] [margin-top:23px] [&_h2]:[margin:3px_0_0] [&_h2]:[color:#fffdf7] [&_h2]:[font-size:1rem] [&_h2]:[letter-spacing:-.02em]">
              <span className="[display:grid] [width:40px] [height:40px] [flex:0_0_auto] [place-items:center] [border:1px_solid_rgba(255,255,255,.13)] [border-radius:12px] [color:#e9cd82]">
                <Layers3 size={19} aria-hidden="true" />
              </span>
              <div>
                <span className="[font-size:.65rem] [font-weight:800] [letter-spacing:.12em] [color:rgba(248,246,239,.49)] [font-size:.56rem]">YOUR PROJECT</span>
                <h2>Website refresh</h2>
              </div>
              <span className="[margin-left:auto] [color:rgba(248,246,239,.57)] [font-size:.75rem] [font-weight:700]">03</span>
            </div>
            <div className="[display:flex] [align-items:center] [justify-content:space-between] [gap:12px] [margin-top:21px] [color:rgba(248,246,239,.73)] [font-size:.7rem] [&_span:last-child]:[color:rgba(248,246,239,.49)] [&_span:last-child]:[font-size:.65rem]">
              <span>Weekly priorities</span>
              <span>1 of 3 complete</span>
            </div>
            <div className="[height:5px] [margin-top:9px] [overflow:hidden] [border-radius:99px] [background:rgba(255,255,255,.13)] [&_span]:[display:block] [&_span]:[width:33.33%] [&_span]:[height:100%] [&_span]:[border-radius:inherit] [&_span]:[background:#e7ca7e]" aria-hidden="true">
              <span />
            </div>
            <ul className="[&_li]:[display:flex] [&_li]:[align-items:center] [&_li]:[justify-content:space-between] [&_li]:[gap:12px] [display:grid] [gap:13px] [margin:18px_0_16px] [padding:0] [list-style:none] [&_li]:[justify-content:flex-start] [&_li]:[font-size:.73rem]">
              {previewTasks.map((task) => (
                <li key={task.title}>
                  <span className={task.done ? "[display:grid] [width:19px] [height:19px] [flex:0_0_auto] [place-items:center] [border:1px_solid_rgba(255,255,255,.27)] [border-radius:6px] [color:rgba(255,255,255,.42)] [border-color:#e7ca7e] [background:#e7ca7e] [color:#163c36] [color:rgba(255,253,247,.52)] [text-decoration:line-through]" : "[display:grid] [width:19px] [height:19px] [flex:0_0_auto] [place-items:center] [border:1px_solid_rgba(255,255,255,.27)] [border-radius:6px] [color:rgba(255,255,255,.42)]"}>
                    {task.done ? (
                      <Check size={13} aria-hidden="true" />
                    ) : (
                      <Circle size={13} aria-hidden="true" />
                    )}
                  </span>
                  <span className={task.done ? "[color:rgba(255,253,247,.88)] [border-color:#e7ca7e] [background:#e7ca7e] [color:#163c36] [color:rgba(255,253,247,.52)] [text-decoration:line-through]" : "[color:rgba(255,253,247,.88)]"}>
                    {task.title}
                  </span>
                  {task.done ? <span className="[font-size:.65rem] [font-weight:800] [letter-spacing:.12em] [margin-left:auto] [color:#e7ca7e] [font-size:.55rem]">DONE</span> : null}
                </li>
              ))}
            </ul>
            <div className="[display:flex] [align-items:center] [justify-content:space-between] [gap:12px] [justify-content:flex-start] [border-top:1px_solid_rgba(255,255,255,.11)] [padding-top:13px] [color:rgba(248,246,239,.56)] [font-size:.65rem]">
              <div className="[display:flex] [padding-left:4px] [&_span]:[display:grid] [&_span]:[width:25px] [&_span]:[height:25px] [&_span]:[margin-left:-4px] [&_span]:[place-items:center] [&_span]:[border:2px_solid_#245148] [&_span]:[border-radius:50%] [&_span]:[background:#d6e0d1] [&_span]:[color:#24443c] [&_span]:[font-size:.48rem] [&_span]:[font-weight:900] [&_span:nth-child(2)]:[background:#e9c9aa] [&_span:nth-child(3)]:[background:#c9d6e7] [&_span:nth-child(4)]:[background:#f1d77f]" aria-label="Four project members">
                <span>AL</span>
                <span>JR</span>
                <span>MK</span>
                <span>+1</span>
              </div>
              <span>Small steps. Shared progress.</span>
            </div>
          </div>
        </div>

        <footer className="[position:relative] [z-index:1] [display:flex] [align-items:center] [justify-content:space-between] [gap:16px] [&_span:last-child]:[font-size:.65rem] [&_span:last-child]:[font-weight:800] [&_span:last-child]:[letter-spacing:.12em] [color:rgba(248,246,239,.57)] [font-size:.7rem] [&_span:last-child]:[font-size:.56rem]">
          <span>Thoughtful tools for focused teams.</span>
          <span>BUILT FOR THE WORK AHEAD</span>
        </footer>
      </section>

      <section className="[display:flex] [min-height:100vh] [flex-direction:column] [justify-content:space-between] [padding:34px_clamp(28px,5vw,72px)_25px] [background:#fbfaf7] max-[900px]:[padding-right:34px] max-[900px]:[padding-left:34px] max-[700px]:[min-height:100vh] max-[700px]:[padding:24px_clamp(22px,7vw,42px)_20px]" aria-labelledby="login-title">
        <header className="[position:relative] [z-index:1] [display:flex] [align-items:center] [justify-content:space-between] [gap:16px] [color:#8a8d87] [font-size:.65rem] [font-weight:800] [letter-spacing:.09em] [&_a]:[display:inline-flex] [&_a]:[align-items:center] [&_a]:[gap:7px] [&_a]:[color:#1b665a] [&_a]:[font-size:.75rem] [&_a]:[letter-spacing:0] max-[380px]:[font-size:.57rem] max-[380px]:[&_a]:[font-size:.68rem]">
          <span>NEW TO TASKLINKERS?</span>
          <Link href="/register">
            Create an account <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </header>

        <div className="[width:min(100%,390px)] [margin:55px_auto] max-[700px]:[margin:48px_auto]">
          <div className="[display:flex] [flex-direction:column] [align-items:flex-start] [&_h2]:[margin:10px_0_8px] [&_h2]:[color:#202b28] [&_h2]:[font-family:Georgia,'Times_New_Roman',serif] [&_h2]:[font-size:clamp(1.85rem,3vw,2.35rem)] [&_h2]:[font-weight:500] [&_h2]:[letter-spacing:-.045em] [&_h2]:[line-height:1.14] [&_p]:[margin:0] [&_p]:[color:#858983] [&_p]:[font-size:.87rem] max-[380px]:[&_h2]:[font-size:1.75rem]">
            <span className="[display:grid] [width:38px] [height:38px] [place-items:center] [border-radius:12px] [background:#f1c96d] [color:#163c36] [font-size:.8rem] [font-weight:900] [letter-spacing:-.06em] [width:43px] [height:43px] [margin-bottom:29px] [border-radius:13px] [background:#e6c66f]" aria-hidden="true">
              TL
            </span>
            <span className="[color:#277365] [font-size:.64rem] [font-weight:850] [letter-spacing:.15em]">WELCOME BACK</span>
            <h2 id="login-title">Sign in to your workspace</h2>
            <p>Your team is right where you left it.</p>
          </div>

          <form className="[display:grid] [gap:20px] [margin-top:34px]" onSubmit={handleSubmit}>
            <div className="[display:grid] [gap:9px] [&_label]:[color:#38433e] [&_label]:[font-size:.76rem] [&_label]:[font-weight:750]">
              <label htmlFor="email">Work email</label>
              <div className="[display:flex] [min-height:51px] [align-items:center] [gap:11px] [border:1px_solid_#e2e4de] [border-radius:9px] [padding:0_14px] [background:#fff] [color:#929a92] [transition:border-color_150ms_ease,box-shadow_150ms_ease] [&:focus-within]:[border-color:#438a7b] [&:focus-within]:[box-shadow:0_0_0_3px_rgba(39,115,101,.1)] [&_input]:[width:100%] [&_input]:[min-width:0] [&_input]:[border:0] [&_input]:[outline:0] [&_input]:[background:transparent] [&_input]:[color:#26332e] [&_input]:[font-size:.81rem] [&_input::placeholder]:[color:#b0b4ae]">
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

            <div className="[display:grid] [gap:9px] [&_label]:[color:#38433e] [&_label]:[font-size:.76rem] [&_label]:[font-weight:750]">
              <div className="[&_label]:[color:#38433e] [&_label]:[font-size:.76rem] [&_label]:[font-weight:750]">
                <label htmlFor="password">Password</label>
              </div>
              <div className="[display:flex] [min-height:51px] [align-items:center] [gap:11px] [border:1px_solid_#e2e4de] [border-radius:9px] [padding:0_14px] [background:#fff] [color:#929a92] [transition:border-color_150ms_ease,box-shadow_150ms_ease] [&:focus-within]:[border-color:#438a7b] [&:focus-within]:[box-shadow:0_0_0_3px_rgba(39,115,101,.1)] [&_input]:[width:100%] [&_input]:[min-width:0] [&_input]:[border:0] [&_input]:[outline:0] [&_input]:[background:transparent] [&_input]:[color:#26332e] [&_input]:[font-size:.81rem] [&_input::placeholder]:[color:#b0b4ae]">
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
                  className="[display:grid] [flex:0_0_auto] [place-items:center] [border:0] [padding:4px] [background:transparent] [color:#929a92] [cursor:pointer] [&:focus-visible]:[outline:3px_solid_#e6c66f] [&:focus-visible]:[outline-offset:3px]"
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

            <label className="[display:inline-flex] [align-items:center] [gap:9px] [color:#6f7771] [font-size:.75rem] [cursor:pointer] [&_input]:[width:15px] [&_input]:[height:15px] [&_input]:[margin:0] [&_input]:[accent-color:#277365]">
              <input type="checkbox" name="remember" />
              <span>Keep me signed in</span>
            </label>

            <button className="[display:flex] [min-height:51px] [align-items:center] [justify-content:center] [gap:9px] [border:0] [border-radius:9px] [background:#1d665a] [color:white] [font-size:.82rem] [font-weight:800] [cursor:pointer] [transition:background_150ms_ease,transform_150ms_ease] [&:hover]:[transform:translateY(-1px)] [&:hover]:[background:#17564c] [&:focus-visible]:[outline:3px_solid_#e6c66f] [&:focus-visible]:[outline-offset:3px]" type="submit">
              Sign in <ArrowRight size={17} aria-hidden="true" />
            </button>
            <p className="[min-height:1em] [margin:-12px_0_0] [color:#8a5d20] [font-size:.75rem] [line-height:1.5]" role="status" aria-live="polite">
              {notice}
            </p>
          </form>

          <p className="[margin:22px_0_0] [color:#969a94] [font-size:.69rem] [line-height:1.6] [text-align:center]">
            By continuing, you agree to keep your team&apos;s workspace secure.
          </p>
        </div>

        <footer className="[position:relative] [z-index:1] [display:flex] [align-items:center] [justify-content:space-between] [gap:16px] [color:#969a94] [font-size:.67rem] [&_a]:[color:#5d6c64]">
          <Link href="/">Back to TaskLinkers</Link>
          <span>&copy; 2026 TaskLinkers</span>
        </footer>
      </section>
    </main>
  );
}
