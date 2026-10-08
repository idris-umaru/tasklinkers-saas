"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  FolderKanban,
  LockKeyhole,
  Mail,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";

const benefits = [
  "Keep projects and priorities in one place",
  "Bring your team into the work",
  "See progress without chasing updates",
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notice, setNotice] = useState("");
  const [noticeIsError, setNoticeIsError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (formData.get("password") !== formData.get("confirmPassword")) {
      setNoticeIsError(true);
      setNotice("Those passwords don’t match. Check them and try again.");
      return;
    }

    setNoticeIsError(false);
    setNotice("Account creation isn’t connected yet. Your details haven’t been sent.");
  }

  return (
    <main className="grid min-h-screen grid-cols-[minmax(0,.9fr)_minmax(460px,1.1fr)] bg-[#fbfaf7] max-[820px]:grid-cols-1">
      <section
        className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[radial-gradient(ellipse_at_15%_90%,rgba(245,202,110,.15),transparent_36%),linear-gradient(145deg,#102e2b,#16463f_52%,#0e332f)] px-[clamp(28px,6vw,88px)] py-[34px] text-[#f8f6ef] max-[820px]:hidden"
        aria-label="About TaskLinkers"
      >
        <div className="pointer-events-none absolute -right-40 top-[18%] size-[360px] rounded-full border border-white/10" />
        <header className="relative z-10 flex items-center justify-between gap-4">
          <Link className="inline-flex items-center gap-3 text-[1.05rem] font-extrabold tracking-tight" href="/" aria-label="TaskLinkers home">
            <span className="grid size-[38px] place-items-center rounded-xl bg-[#f1c96d] text-[.8rem] font-black tracking-tight text-[#163c36]">TL</span>
            <span>TaskLinkers</span>
          </Link>
          <span className="inline-flex items-center gap-2 text-[.65rem] font-extrabold tracking-[.12em] text-white/70">
            <LockKeyhole size={14} aria-hidden="true" />
            PRIVATE WORKSPACE
          </span>
        </header>

        <div className="relative z-10 mx-auto my-12 w-full max-w-[500px]">
          <span className="inline-flex items-center gap-2.5 text-[.68rem] font-extrabold tracking-[.14em] text-[#e6c979]">
            <Sparkles size={15} aria-hidden="true" />
            A BETTER WAY TO WORK TOGETHER
          </span>
          <h1 className="mt-5 max-w-[480px] font-[Georgia,'Times_New_Roman',serif] text-[clamp(2.8rem,5vw,4.6rem)] font-medium leading-[1.03] tracking-[-.055em] text-[#fffdf7]">
            Make room for <em className="text-[#e7ca7e]">good work.</em>
          </h1>
          <p className="mt-4 max-w-[390px] text-[.98rem] leading-7 text-white/70">
            Start with a clear workspace for your projects, your people, and what comes next.
          </p>

          <div className="mt-9 rounded-[17px] border border-white/15 bg-white/[.08] p-6 shadow-[0_22px_60px_rgba(4,20,18,.22)] backdrop-blur-xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <span className="grid size-11 place-items-center rounded-xl border border-white/10 text-[#e9cd82]">
                <FolderKanban size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="m-0 text-[.58rem] font-extrabold tracking-[.14em] text-white/50">YOUR NEW WORKSPACE</p>
                <p className="mt-1 text-sm font-semibold text-white">One place to move forward</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-4 p-0">
              {benefits.map((benefit) => (
                <li className="flex items-center gap-3 text-[.76rem] text-white/80" key={benefit}>
                  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-[#e7ca7e] text-[#163c36]">
                    <Check size={13} aria-hidden="true" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4 text-[.68rem] text-white/55">
              <span className="flex -space-x-2" aria-hidden="true">
                <span className="grid size-7 place-items-center rounded-full border-2 border-[#245148] bg-[#d6e0d1] text-[.5rem] font-black text-[#24443c]">AL</span>
                <span className="grid size-7 place-items-center rounded-full border-2 border-[#245148] bg-[#e9c9aa] text-[.5rem] font-black text-[#24443c]">JR</span>
                <span className="grid size-7 place-items-center rounded-full border-2 border-[#245148] bg-[#c9d6e7] text-[.5rem] font-black text-[#24443c]">MK</span>
              </span>
              <UsersRound size={14} aria-hidden="true" />
              Built for teams that get things done
            </div>
          </div>
        </div>

        <footer className="relative z-10 flex items-center justify-between gap-4 text-[.7rem] text-white/55">
          <span>Thoughtful tools for focused teams.</span>
          <span className="text-[.56rem] font-extrabold tracking-[.12em]">BUILT FOR THE WORK AHEAD</span>
        </footer>
      </section>

      <section className="flex min-h-screen flex-col justify-between px-[clamp(24px,6vw,80px)] py-7 max-[820px]:min-h-screen" aria-labelledby="register-title">
        <header className="flex items-center justify-between gap-4 text-[.68rem] font-bold tracking-[.08em] text-[#8a8d87]">
          <Link className="inline-flex items-center gap-2 text-[#51645b] min-[821px]:invisible" href="/" aria-label="TaskLinkers home">
            <span className="grid size-8 place-items-center rounded-[10px] bg-[#e6c66f] text-[.7rem] font-black text-[#163c36]">TL</span>
            TaskLinkers
          </Link>
          <span className="ml-auto">ALREADY HAVE AN ACCOUNT?</span>
          <Link className="inline-flex items-center gap-1.5 text-[.76rem] tracking-normal text-[#1b665a]" href="/login">
            Sign in <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </header>

        <div className="mx-auto my-10 w-full max-w-[410px]">
          <div className="mb-7 grid size-11 place-items-center rounded-[13px] bg-[#e6c66f] text-[#163c36] min-[821px]:hidden" aria-hidden="true">
            <UserRound size={20} />
          </div>
          <span className="text-[.64rem] font-extrabold tracking-[.15em] text-[#277365]">GET STARTED</span>
          <h2 id="register-title" className="mt-2 font-[Georgia,'Times_New_Roman',serif] text-[clamp(1.9rem,3.5vw,2.5rem)] font-medium leading-tight tracking-[-.045em] text-[#202b28]">
            Create your account
          </h2>
          <p className="mt-2 text-[.87rem] text-[#858983]">Set up your workspace in just a few steps.</p>

          <form className="mt-8 grid gap-[18px]" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label className="text-[.76rem] font-bold text-[#38433e]" htmlFor="name">Your name</label>
              <div className="flex min-h-[50px] items-center gap-3 rounded-[9px] border border-[#e2e4de] bg-white px-3.5 text-[#929a92] transition focus-within:border-[#438a7b] focus-within:shadow-[0_0_0_3px_rgba(39,115,101,.1)]">
                <UserRound size={17} aria-hidden="true" />
                <input className="w-full min-w-0 border-0 bg-transparent text-[.81rem] text-[#26332e] outline-none placeholder:text-[#b0b4ae]" id="name" name="name" type="text" autoComplete="name" placeholder="e.g. Alex Johnson" required />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-[.76rem] font-bold text-[#38433e]" htmlFor="email">Work email</label>
              <div className="flex min-h-[50px] items-center gap-3 rounded-[9px] border border-[#e2e4de] bg-white px-3.5 text-[#929a92] transition focus-within:border-[#438a7b] focus-within:shadow-[0_0_0_3px_rgba(39,115,101,.1)]">
                <Mail size={17} aria-hidden="true" />
                <input className="w-full min-w-0 border-0 bg-transparent text-[.81rem] text-[#26332e] outline-none placeholder:text-[#b0b4ae]" id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-[.76rem] font-bold text-[#38433e]" htmlFor="password">Password</label>
              <div className="flex min-h-[50px] items-center gap-3 rounded-[9px] border border-[#e2e4de] bg-white px-3.5 text-[#929a92] transition focus-within:border-[#438a7b] focus-within:shadow-[0_0_0_3px_rgba(39,115,101,.1)]">
                <LockKeyhole size={17} aria-hidden="true" />
                <input className="w-full min-w-0 border-0 bg-transparent text-[.81rem] text-[#26332e] outline-none placeholder:text-[#b0b4ae]" id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" minLength={8} placeholder="At least 8 characters" required />
                <button className="grid shrink-0 place-items-center rounded p-1 text-[#929a92] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6c66f]" type="button" aria-label={showPassword ? "Hide password" : "Show password"} aria-controls="password" onClick={() => setShowPassword((visible) => !visible)}>
                  {showPassword ? <EyeOff size={17} aria-hidden="true" /> : <Eye size={17} aria-hidden="true" />}
                </button>
              </div>
              <span className="text-[.68rem] text-[#969a94]">Use at least 8 characters.</span>
            </div>

            <div className="grid gap-2">
              <label className="text-[.76rem] font-bold text-[#38433e]" htmlFor="confirmPassword">Confirm password</label>
              <div className="flex min-h-[50px] items-center gap-3 rounded-[9px] border border-[#e2e4de] bg-white px-3.5 text-[#929a92] transition focus-within:border-[#438a7b] focus-within:shadow-[0_0_0_3px_rgba(39,115,101,.1)]">
                <LockKeyhole size={17} aria-hidden="true" />
                <input className="w-full min-w-0 border-0 bg-transparent text-[.81rem] text-[#26332e] outline-none placeholder:text-[#b0b4ae]" id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} autoComplete="new-password" minLength={8} placeholder="Enter your password again" required />
                <button className="grid shrink-0 place-items-center rounded p-1 text-[#929a92] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6c66f]" type="button" aria-label={showConfirmPassword ? "Hide password" : "Show password"} aria-controls="confirmPassword" onClick={() => setShowConfirmPassword((visible) => !visible)}>
                  {showConfirmPassword ? <EyeOff size={17} aria-hidden="true" /> : <Eye size={17} aria-hidden="true" />}
                </button>
              </div>
            </div>

            <label className="mt-1 flex items-start gap-2.5 text-[.73rem] leading-5 text-[#6f7771]">
              <input className="mt-1 size-3.5 shrink-0 accent-[#277365]" type="checkbox" name="terms" required />
              <span>I agree to keep my team’s workspace secure and use TaskLinkers responsibly.</span>
            </label>

            <button className="mt-1 flex min-h-[50px] items-center justify-center gap-2 rounded-[9px] bg-[#1d665a] text-[.82rem] font-extrabold text-white transition hover:-translate-y-px hover:bg-[#17564c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6c66f]" type="submit">
              Create account <ArrowRight size={17} aria-hidden="true" />
            </button>
            <p className={`min-h-5 text-[.75rem] leading-5 ${noticeIsError ? "text-red-700" : "text-[#8a5d20]"}`} role="status" aria-live="polite">
              {notice}
            </p>
          </form>

          <p className="mt-1 text-center text-[.68rem] leading-5 text-[#969a94]">
            By creating an account, you agree to keep your team’s workspace secure.
          </p>
        </div>

        <footer className="flex items-center justify-between gap-4 text-[.67rem] text-[#969a94]">
          <Link className="text-[#5d6c64]" href="/">Back to TaskLinkers</Link>
          <span>&copy; 2026 TaskLinkers</span>
        </footer>
      </section>
    </main>
  );
}
