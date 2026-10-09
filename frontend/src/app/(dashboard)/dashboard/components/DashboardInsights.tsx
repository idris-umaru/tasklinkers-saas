import { ArrowRight, CalendarDays, CheckCircle2, Clock3, MoreHorizontal } from "lucide-react";
import { projects } from "./dashboard-data";

export function DashboardInsights({ completedThisWeek }: { completedThisWeek: number }) {
  return (
    <div className="grid gap-6">
      <section className="rounded-2xl border border-[#e9ebe5] bg-white p-5 md:p-6" id="projects">
        <div className="flex items-start justify-between"><div><h2 className="text-[.95rem] font-bold tracking-[-.02em]">Your projects</h2><p className="mt-1 text-[.68rem] text-[#89948d]">A quick look at team progress.</p></div><button className="grid size-8 place-items-center rounded-lg text-[#88938b] hover:bg-[#f1f3ef]" type="button" aria-label="Project options"><MoreHorizontal size={18} /></button></div>
        <div className="mt-5 grid gap-5">{projects.map((project) => <article key={project.name}><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-[11px] bg-[#f2f4ef] text-[1rem]">{project.icon}</span><div className="min-w-0 flex-1"><h3 className="truncate text-[.74rem] font-bold">{project.name}</h3><p className="mt-0.5 text-[.63rem] text-[#929b94]">{project.detail}</p></div><span className="text-[.72rem] font-bold text-[#526158]">{project.progress}%</span></div><div className="ml-12 mt-3 h-1.5 overflow-hidden rounded-full bg-[#eef0eb]"><div className={`h-full rounded-full ${project.color}`} style={{ width: `${project.progress}%` }} /></div></article>)}</div>
        <a className="mt-5 inline-flex items-center gap-1.5 text-[.69rem] font-semibold text-[#277365] hover:underline" href="#projects">All projects <ArrowRight size={13} /></a>
      </section>
      <section className="rounded-2xl border border-[#e9ebe5] bg-white p-5 md:p-6" id="team">
        <div className="flex items-start justify-between"><div><h2 className="text-[.95rem] font-bold tracking-[-.02em]">Team activity</h2><p className="mt-1 text-[.68rem] text-[#89948d]">Recent updates from your people.</p></div><button className="grid size-8 place-items-center rounded-lg text-[#88938b] hover:bg-[#f1f3ef]" type="button" aria-label="Activity options"><MoreHorizontal size={18} /></button></div>
        <div className="mt-5 grid gap-4"><ActivityItem initials="MK" color="bg-[#f4e4d7] text-[#8b5737]" name="Maya Kim" action="completed a task in" subject="Product launch" time="12 min ago" /><ActivityItem initials="JR" color="bg-[#e4e8f5] text-[#4e5f99]" name="Jordan Reed" action="shared an update in" subject="Client onboarding" time="48 min ago" /><ActivityItem initials="AL" color="bg-[#f2e7bf] text-[#826b20]" name="Avery Lane" action="added a task to" subject="Website refresh" time="2 hrs ago" /></div>
        <button className="mt-5 inline-flex items-center gap-1.5 text-[.69rem] font-semibold text-[#277365] hover:underline" type="button">See all activity <ArrowRight size={13} /></button>
      </section>
      <section className="flex items-center gap-4 rounded-2xl border border-[#e9ebe5] bg-[#eff5f0] p-5"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-[#277365]"><CalendarDays size={18} /></span><div className="min-w-0 flex-1"><p className="text-[.73rem] font-bold">Your week is looking good</p><p className="mt-1 text-[.66rem] leading-5 text-[#7c8980]">You’ve wrapped up {completedThisWeek} tasks so far.</p></div><Clock3 size={16} className="text-[#82948a]" /></section>
    </div>
  );
}

function ActivityItem({ initials, color, name, action, subject, time }: { initials: string; color: string; name: string; action: string; subject: string; time: string }) {
  return <div className="flex items-start gap-3"><span className={`grid size-8 shrink-0 place-items-center rounded-full text-[.53rem] font-extrabold ${color}`}>{initials}</span><div className="min-w-0 flex-1"><p className="text-[.68rem] leading-5 text-[#7f8a82]"><span className="font-bold text-[#45544b]">{name}</span> {action} <span className="font-semibold text-[#596b60]">{subject}</span></p><p className="mt-1 text-[.61rem] text-[#a0a79f]">{time}</p></div><CheckCircle2 className="mt-1 shrink-0 text-[#94b7a6]" size={15} aria-hidden="true" /></div>;
}