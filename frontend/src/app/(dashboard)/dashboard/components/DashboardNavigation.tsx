"use client";

import Link from "next/link";
import { useState } from "react";
import { Bell, ChevronDown, FolderKanban, LayoutDashboard, ListTodo, Menu, MoreHorizontal, Search, Settings2, Sparkles, UsersRound, X } from "lucide-react";
import { navItems, projects } from "./dashboard-data";

const icons = { overview: LayoutDashboard, tasks: ListTodo, projects: FolderKanban, team: UsersRound };

export function DashboardSidebar({ openTasks }: { openTasks: number }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[248px] flex-col border-r border-[#e8eae3] bg-[#fbfcf9] px-5 py-6 lg:flex">
      <Link className="mb-9 flex items-center gap-3 px-2" href="/" aria-label="TaskLinkers home">
        <span className="grid size-10 place-items-center rounded-[13px] bg-[#1d665a] text-sm font-black tracking-tight text-[#f3d47d]">TL</span>
        <span className="text-[1.05rem] font-extrabold tracking-[-.04em]">TaskLinkers</span>
      </Link>
      <div className="mb-3 px-3 text-[.62rem] font-extrabold tracking-[.15em] text-[#a0a69e]">WORKSPACE</div>
      <button className="mb-6 flex w-full items-center gap-3 rounded-xl border border-[#e8eae3] bg-white px-3 py-3 text-left shadow-sm" type="button">
        <span className="grid size-9 place-items-center rounded-[10px] bg-[#e9f2ed] text-sm font-black text-[#277365]">S</span>
        <span className="min-w-0 flex-1"><span className="block truncate text-[.78rem] font-bold">Studio North</span><span className="mt-0.5 block text-[.65rem] text-[#89928b]">Free workspace</span></span>
        <ChevronDown size={15} className="text-[#87918a]" aria-hidden="true" />
      </button>
      <nav className="grid gap-1.5" aria-label="Workspace navigation">
        {navItems.map(({ label, href, icon }, index) => {
          const Icon = icons[icon as keyof typeof icons];
          return <a className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[.8rem] font-semibold transition ${index === 0 ? "bg-[#eaf2ee] text-[#1d665a]" : "text-[#748079] hover:bg-[#f0f3ee] hover:text-[#25332d]"}`} href={href} key={label}><Icon size={17} aria-hidden="true" />{label}{label === "My tasks" && <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-[.62rem] text-[#76827b]">{openTasks}</span>}</a>;
        })}
      </nav>
      <div className="mb-3 mt-9 flex items-center justify-between px-3 text-[.62rem] font-extrabold tracking-[.15em] text-[#a0a69e]"><span>YOUR PROJECTS</span><button className="grid size-6 place-items-center rounded-md text-[#909991] hover:bg-[#eef1ec]" type="button" aria-label="Add project"><span aria-hidden="true">+</span></button></div>
      <div className="grid gap-1">{projects.map((project) => <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-[.77rem] text-[#758079] hover:bg-[#f0f3ee]" href="#projects" key={project.name}><span className={`size-2 rounded-full ${project.color}`} /><span className="truncate">{project.name}</span></a>)}</div>
      <div className="mt-auto rounded-2xl bg-[#183f38] p-4 text-white"><div className="flex items-center gap-2 text-[.75rem] font-bold"><Sparkles size={15} className="text-[#e8cb7e]" /> Make work flow</div><p className="mb-3 mt-2 text-[.68rem] leading-5 text-white/65">Invite your team to keep every project moving.</p><a className="inline-flex items-center gap-1.5 text-[.7rem] font-bold text-[#e8cb7e]" href="#team">Invite teammates <span aria-hidden="true">→</span></a></div>
      <button className="mt-5 flex items-center gap-3 rounded-xl p-2 text-left hover:bg-[#f0f3ee]" type="button"><span className="grid size-9 place-items-center rounded-full bg-[#e9c9aa] text-[.67rem] font-black text-[#64452e]">AJ</span><span className="min-w-0 flex-1"><span className="block text-[.76rem] font-bold">Alex Johnson</span><span className="text-[.64rem] text-[#89928b]">Workspace admin</span></span><MoreHorizontal size={17} className="text-[#89928b]" aria-hidden="true" /></button>
    </aside>
  );
}

export function DashboardHeader({ search, onSearchChange }: { search: string; onSearchChange: (value: string) => void }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="sticky top-0 z-20 flex h-[68px] items-center justify-between border-b border-[#e8eae3] bg-[#fbfcf9]/95 px-5 backdrop-blur-xl md:px-8">
      <div className="flex items-center gap-3"><button className="grid size-9 place-items-center rounded-lg border border-[#e5e8e1] text-[#66736c] lg:hidden" type="button" aria-label={showMobileMenu ? "Close workspace menu" : "Open workspace menu"} aria-expanded={showMobileMenu} onClick={() => setShowMobileMenu((open) => !open)}>{showMobileMenu ? <X size={18} /> : <Menu size={18} />}</button><div className="hidden text-[.76rem] text-[#89928b] sm:block">Workspace <span className="px-1.5 text-[#bdc2bb]">/</span> <span className="font-semibold text-[#394940]">Overview</span></div><div className="flex items-center gap-2 sm:hidden"><span className="grid size-8 place-items-center rounded-[10px] bg-[#1d665a] text-xs font-black text-[#f3d47d]">TL</span><span className="text-sm font-extrabold">TaskLinkers</span></div></div>
      <div className="flex items-center gap-2.5 md:gap-4"><label className="relative hidden sm:block"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa39b]" size={15} aria-hidden="true" /><input className="h-9 w-[190px] rounded-lg border border-[#e8eae3] bg-white pl-9 pr-3 text-[.72rem] outline-none placeholder:text-[#a4aaa4] focus:border-[#83a99c] md:w-[230px]" aria-label="Search tasks and projects" placeholder="Search anything..." value={search} onChange={(event) => onSearchChange(event.target.value)} /></label><button className="relative grid size-9 place-items-center rounded-lg text-[#7a867f] hover:bg-[#eff2ed]" type="button" aria-label="Notifications"><Bell size={18} aria-hidden="true" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#d8886d]" /></button><button className="grid size-9 place-items-center rounded-lg text-[#7a867f] hover:bg-[#eff2ed]" type="button" aria-label="Settings"><Settings2 size={18} /></button><span className="grid size-8 place-items-center rounded-full bg-[#e9c9aa] text-[.62rem] font-black text-[#64452e] sm:hidden">AJ</span></div>
      {showMobileMenu && <nav className="absolute inset-x-0 top-full border-b border-[#e8eae3] bg-[#fbfcf9] p-3 shadow-lg lg:hidden" aria-label="Workspace navigation"><div className="grid gap-1">{navItems.map(({ label, href, icon }) => { const Icon = icons[icon as keyof typeof icons]; return <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[.78rem] font-semibold text-[#66736c] hover:bg-[#eaf2ee] hover:text-[#1d665a]" href={href} key={label} onClick={() => setShowMobileMenu(false)}><Icon size={17} aria-hidden="true" />{label}</a>; })}</div></nav>}
    </header>
  );
}