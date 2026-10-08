"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Bell,
  CalendarDays,
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock3,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

type TaskStatus = "todo" | "in-progress" | "done";
type TaskPriority = "High" | "Medium" | "Low";
type Task = {
  id: number;
  title: string;
  project: string;
  due: string;
  priority: TaskPriority;
  status: TaskStatus;
  initials: string;
  color: string;
};

const initialTasks: Task[] = [
  { id: 1, title: "Review landing page wireframes", project: "Website refresh", due: "Today", priority: "High", status: "in-progress", initials: "AJ", color: "bg-[#dcebe4] text-[#24634f]" },
  { id: 2, title: "Prepare launch checklist", project: "Product launch", due: "Today", priority: "High", status: "todo", initials: "MK", color: "bg-[#f4e4d7] text-[#8b5737]" },
  { id: 3, title: "Send first draft to the team", project: "Client onboarding", due: "Tomorrow", priority: "Medium", status: "in-progress", initials: "JR", color: "bg-[#e4e8f5] text-[#4e5f99]" },
  { id: 4, title: "Update project timeline", project: "Website refresh", due: "Oct 12", priority: "Medium", status: "todo", initials: "AL", color: "bg-[#f2e7bf] text-[#826b20]" },
  { id: 5, title: "Collect feedback from stakeholders", project: "Product launch", due: "Oct 14", priority: "Low", status: "done", initials: "DV", color: "bg-[#e8deef] text-[#75568d]" },
];

const projects = [
  { name: "Website refresh", detail: "12 tasks · 4 members", progress: 72, color: "bg-[#277365]", icon: "🌿" },
  { name: "Product launch", detail: "8 tasks · 3 members", progress: 48, color: "bg-[#d5a63c]", icon: "✦" },
  { name: "Client onboarding", detail: "6 tasks · 2 members", progress: 86, color: "bg-[#7586b8]", icon: "◈" },
];

const filters: { label: string; value: TaskStatus | "all" }[] = [
  { label: "All tasks", value: "all" },
  { label: "In progress", value: "in-progress" },
  { label: "To do", value: "todo" },
  { label: "Completed", value: "done" },
];

const navItems = [
  { label: "Overview", href: "#overview", icon: LayoutDashboard },
  { label: "My tasks", href: "#tasks", icon: ListTodo },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Team", href: "#team", icon: UsersRound },
];

function statusLabel(status: TaskStatus) {
  if (status === "in-progress") return "In progress";
  if (status === "done") return "Complete";
  return "To do";
}

function statusClass(status: TaskStatus) {
  if (status === "in-progress") return "bg-[#e3f1ed] text-[#277365]";
  if (status === "done") return "bg-[#edf0f5] text-[#65738b]";
  return "bg-[#f5efd9] text-[#8b7025]";
}

function priorityClass(priority: TaskPriority) {
  if (priority === "High") return "text-[#b85b49]";
  if (priority === "Medium") return "text-[#9a792a]";
  return "text-[#6e7b75]";
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeFilter, setActiveFilter] = useState<TaskStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskProject, setNewTaskProject] = useState(projects[0].name);

  const completedCount = tasks.filter((task) => task.status === "done").length;
  const inProgressCount = tasks.filter((task) => task.status === "in-progress").length;
  const filteredTasks = useMemo(() => {
    const query = search.trim().toLowerCase();
    return tasks.filter((task) => {
      const matchesStatus = activeFilter === "all" || task.status === activeFilter;
      const matchesSearch = !query || `${task.title} ${task.project}`.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [activeFilter, search, tasks]);

  function toggleTask(taskId: number) {
    setTasks((current) => current.map((task) => task.id === taskId
      ? { ...task, status: task.status === "done" ? "todo" : "done" }
      : task));
  }

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = newTaskTitle.trim();
    if (!title) return;

    setTasks((current) => [{
      id: Date.now(),
      title,
      project: newTaskProject,
      due: "No due date",
      priority: "Medium",
      status: "todo",
      initials: "AJ",
      color: "bg-[#dcebe4] text-[#24634f]",
    }, ...current]);
    setNewTaskTitle("");
    setShowTaskForm(false);
    setActiveFilter("all");
  }

  return (
    <div className="min-h-screen bg-[#f6f7f3] text-[#25332d]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[248px] flex-col border-r border-[#e8eae3] bg-[#fbfcf9] px-5 py-6 lg:flex">
        <Link className="mb-9 flex items-center gap-3 px-2" href="/" aria-label="TaskLinkers home">
          <span className="grid size-10 place-items-center rounded-[13px] bg-[#1d665a] text-sm font-black tracking-tight text-[#f3d47d]">TL</span>
          <span className="text-[1.05rem] font-extrabold tracking-[-.04em]">TaskLinkers</span>
        </Link>

        <div className="mb-3 px-3 text-[.62rem] font-extrabold tracking-[.15em] text-[#a0a69e]">WORKSPACE</div>
        <button className="mb-6 flex w-full items-center gap-3 rounded-xl border border-[#e8eae3] bg-white px-3 py-3 text-left shadow-sm" type="button">
          <span className="grid size-9 place-items-center rounded-[10px] bg-[#e9f2ed] text-sm font-black text-[#277365]">S</span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[.78rem] font-bold">Studio North</span>
            <span className="mt-0.5 block text-[.65rem] text-[#89928b]">Free workspace</span>
          </span>
          <ChevronDown size={15} className="text-[#87918a]" aria-hidden="true" />
        </button>

        <nav className="grid gap-1.5" aria-label="Workspace navigation">
          {navItems.map(({ label, href, icon: Icon }, index) => (
            <a className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[.8rem] font-semibold transition ${index === 0 ? "bg-[#eaf2ee] text-[#1d665a]" : "text-[#748079] hover:bg-[#f0f3ee] hover:text-[#25332d]"}`} href={href} key={label}>
              <Icon size={17} aria-hidden="true" />
              {label}
              {label === "My tasks" && <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-[.62rem] text-[#76827b]">{tasks.length - completedCount}</span>}
            </a>
          ))}
        </nav>

        <div className="mb-3 mt-9 flex items-center justify-between px-3 text-[.62rem] font-extrabold tracking-[.15em] text-[#a0a69e]">
          <span>YOUR PROJECTS</span>
          <button className="grid size-6 place-items-center rounded-md text-[#909991] hover:bg-[#eef1ec]" type="button" aria-label="Add project">
            <Plus size={14} aria-hidden="true" />
          </button>
        </div>
        <div className="grid gap-1">
          {projects.map((project) => (
            <a className="flex items-center gap-3 rounded-xl px-3 py-2 text-[.77rem] text-[#758079] hover:bg-[#f0f3ee]" href="#projects" key={project.name}>
              <span className={`size-2 rounded-full ${project.color}`} />
              <span className="truncate">{project.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-auto rounded-2xl bg-[#183f38] p-4 text-white">
          <div className="flex items-center gap-2 text-[.75rem] font-bold"><Sparkles size={15} className="text-[#e8cb7e]" /> Make work flow</div>
          <p className="mb-3 mt-2 text-[.68rem] leading-5 text-white/65">Invite your team to keep every project moving.</p>
          <a className="inline-flex items-center gap-1.5 text-[.7rem] font-bold text-[#e8cb7e]" href="#team">Invite teammates <ArrowRight size={13} /></a>
        </div>
        <button className="mt-5 flex items-center gap-3 rounded-xl p-2 text-left hover:bg-[#f0f3ee]" type="button">
          <span className="grid size-9 place-items-center rounded-full bg-[#e9c9aa] text-[.67rem] font-black text-[#64452e]">AJ</span>
          <span className="min-w-0 flex-1"><span className="block text-[.76rem] font-bold">Alex Johnson</span><span className="text-[.64rem] text-[#89928b]">Workspace admin</span></span>
          <MoreHorizontal size={17} className="text-[#89928b]" aria-hidden="true" />
        </button>
      </aside>

      <div className="lg:pl-[248px]">
        <header className="sticky top-0 z-20 flex h-[68px] items-center justify-between border-b border-[#e8eae3] bg-[#fbfcf9]/95 px-5 backdrop-blur-xl md:px-8">
          <div className="flex items-center gap-3">
            <button className="grid size-9 place-items-center rounded-lg border border-[#e5e8e1] text-[#66736c] lg:hidden" type="button" aria-label={showMobileMenu ? "Close workspace menu" : "Open workspace menu"} aria-expanded={showMobileMenu} onClick={() => setShowMobileMenu((open) => !open)}>
              <Menu size={18} />
            </button>
            <div className="hidden text-[.76rem] text-[#89928b] sm:block">Workspace <span className="px-1.5 text-[#bdc2bb]">/</span> <span className="font-semibold text-[#394940]">Overview</span></div>
            <div className="flex items-center gap-2 sm:hidden">
              <span className="grid size-8 place-items-center rounded-[10px] bg-[#1d665a] text-xs font-black text-[#f3d47d]">TL</span>
              <span className="text-sm font-extrabold">TaskLinkers</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 md:gap-4">
            <label className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa39b]" size={15} aria-hidden="true" />
              <input className="h-9 w-[190px] rounded-lg border border-[#e8eae3] bg-white pl-9 pr-3 text-[.72rem] outline-none placeholder:text-[#a4aaa4] focus:border-[#83a99c] md:w-[230px]" aria-label="Search tasks and projects" placeholder="Search anything..." value={search} onChange={(event) => setSearch(event.target.value)} />
            </label>
            <button className="relative grid size-9 place-items-center rounded-lg text-[#7a867f] hover:bg-[#eff2ed]" type="button" aria-label="Notifications">
              <Bell size={18} aria-hidden="true" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#d8886d]" />
            </button>
            <button className="grid size-9 place-items-center rounded-lg text-[#7a867f] hover:bg-[#eff2ed]" type="button" aria-label="Settings"><Settings2 size={18} /></button>
            <span className="grid size-8 place-items-center rounded-full bg-[#e9c9aa] text-[.62rem] font-black text-[#64452e] sm:hidden">AJ</span>
          </div>
          {showMobileMenu && (
            <nav className="absolute inset-x-0 top-full border-b border-[#e8eae3] bg-[#fbfcf9] p-3 shadow-lg lg:hidden" aria-label="Workspace navigation">
              <div className="grid gap-1">
                {navItems.map(({ label, href, icon: Icon }) => (
                  <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[.78rem] font-semibold text-[#66736c] hover:bg-[#eaf2ee] hover:text-[#1d665a]" href={href} key={label} onClick={() => setShowMobileMenu(false)}>
                    <Icon size={17} aria-hidden="true" /> {label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </header>

        <main className="mx-auto max-w-[1440px] px-5 pb-12 pt-8 md:px-8 md:pt-10" id="overview">
          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[.68rem] font-extrabold tracking-[.16em] text-[#87948b]">THURSDAY, OCTOBER 8, 2026</p>
              <h1 className="font-[Georgia,'Times_New_Roman',serif] text-[2.15rem] font-medium leading-tight tracking-[-.045em] text-[#26352e] md:text-[2.6rem]">Good morning, Alex <span aria-hidden="true">☀️</span></h1>
              <p className="mt-2 text-[.84rem] text-[#818c84]">Here’s what’s moving across your workspace today.</p>
            </div>
            <button className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-[9px] bg-[#1d665a] px-4 text-[.76rem] font-bold text-white shadow-[0_8px_18px_rgba(29,102,90,.15)] transition hover:bg-[#17564c] sm:self-auto" type="button" onClick={() => setShowTaskForm((open) => !open)}>
              {showTaskForm ? <X size={16} /> : <Plus size={16} />}
              {showTaskForm ? "Close form" : "Add a task"}
            </button>
          </section>

          <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Workspace summary">
            <article className="rounded-2xl border border-[#e9ebe5] bg-white p-5">
              <div className="flex items-start justify-between"><span className="text-[.72rem] font-semibold text-[#829087]">Open tasks</span><span className="grid size-9 place-items-center rounded-xl bg-[#e9f2ed] text-[#277365]"><ListTodo size={17} /></span></div>
              <div className="mt-4 flex items-end justify-between"><span className="text-[1.8rem] font-semibold tracking-tight">{tasks.length - completedCount}</span><span className="inline-flex items-center gap-1 text-[.67rem] font-semibold text-[#39826d]"><ArrowDown size={13} /> 8% this week</span></div>
            </article>
            <article className="rounded-2xl border border-[#e9ebe5] bg-white p-5">
              <div className="flex items-start justify-between"><span className="text-[.72rem] font-semibold text-[#829087]">In progress</span><span className="grid size-9 place-items-center rounded-xl bg-[#f8f0dc] text-[#ac872b]"><Activity size={17} /></span></div>
              <div className="mt-4 flex items-end justify-between"><span className="text-[1.8rem] font-semibold tracking-tight">{inProgressCount}</span><span className="text-[.67rem] text-[#89948d]">Across 3 projects</span></div>
            </article>
            <article className="rounded-2xl border border-[#e9ebe5] bg-white p-5">
              <div className="flex items-start justify-between"><span className="text-[.72rem] font-semibold text-[#829087]">Completed this week</span><span className="grid size-9 place-items-center rounded-xl bg-[#edf0f5] text-[#687994]"><CheckCheck size={17} /></span></div>
              <div className="mt-4 flex items-end justify-between"><span className="text-[1.8rem] font-semibold tracking-tight">{completedCount + 11}</span><span className="inline-flex items-center gap-1 text-[.67rem] font-semibold text-[#39826d]"><ArrowUp size={13} /> 12% this week</span></div>
            </article>
            <article className="rounded-2xl border border-[#e9ebe5] bg-white p-5">
              <div className="flex items-start justify-between"><span className="text-[.72rem] font-semibold text-[#829087]">Team members</span><span className="grid size-9 place-items-center rounded-xl bg-[#f4e9e2] text-[#a36b4c]"><UsersRound size={17} /></span></div>
              <div className="mt-4 flex items-end justify-between"><span className="text-[1.8rem] font-semibold tracking-tight">4</span><a className="text-[.67rem] font-semibold text-[#277365] hover:underline" href="#team">View team</a></div>
            </article>
          </section>

          <section className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,.85fr)]">
            <div className="rounded-2xl border border-[#e9ebe5] bg-white" id="tasks">
              <div className="flex flex-col justify-between gap-4 border-b border-[#eef0eb] px-5 py-5 sm:flex-row sm:items-center md:px-6">
                <div><h2 className="text-[.98rem] font-bold tracking-[-.02em]">My tasks</h2><p className="mt-1 text-[.7rem] text-[#89948d]">Stay on top of your next steps.</p></div>
                <button className="inline-flex items-center gap-1.5 self-start text-[.7rem] font-semibold text-[#6f7e75] hover:text-[#277365] sm:self-auto" type="button">This week <ChevronDown size={14} /></button>
              </div>

              {showTaskForm && (
                <form className="grid gap-3 border-b border-[#eef0eb] bg-[#fbfcf9] p-4 sm:grid-cols-[1fr_190px_auto]" onSubmit={addTask}>
                  <input className="h-10 rounded-lg border border-[#e2e6df] bg-white px-3 text-[.76rem] outline-none placeholder:text-[#a4aaa4] focus:border-[#83a99c]" autoFocus aria-label="New task name" placeholder="What needs to get done?" value={newTaskTitle} onChange={(event) => setNewTaskTitle(event.target.value)} required />
                  <select className="h-10 rounded-lg border border-[#e2e6df] bg-white px-3 text-[.74rem] text-[#66736c] outline-none focus:border-[#83a99c]" aria-label="Project" value={newTaskProject} onChange={(event) => setNewTaskProject(event.target.value)}>
                    {projects.map((project) => <option key={project.name}>{project.name}</option>)}
                  </select>
                  <button className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[#1d665a] px-4 text-[.73rem] font-bold text-white hover:bg-[#17564c]" type="submit"><Plus size={15} /> Add</button>
                </form>
              )}

              <div className="flex gap-1 overflow-x-auto border-b border-[#eef0eb] px-4 py-3 md:px-5">
                {filters.map((filter) => (
                  <button className={`shrink-0 rounded-lg px-3 py-2 text-[.68rem] font-semibold transition ${activeFilter === filter.value ? "bg-[#eaf2ee] text-[#1d665a]" : "text-[#849087] hover:bg-[#f5f6f3]"}`} key={filter.value} onClick={() => setActiveFilter(filter.value)} type="button">
                    {filter.label}{filter.value === "all" && <span className="ml-1.5 text-[.62rem] opacity-65">{tasks.length}</span>}
                  </button>
                ))}
              </div>

              <div className="divide-y divide-[#f0f1ed]">
                {filteredTasks.length ? filteredTasks.map((task) => (
                  <article className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 transition hover:bg-[#fcfdfb] md:grid-cols-[auto_minmax(0,1fr)_minmax(110px,.55fr)_85px_78px_auto] md:gap-4 md:px-5" key={task.id}>
                    <button className={`grid size-[19px] place-items-center rounded-full border transition ${task.status === "done" ? "border-[#277365] bg-[#277365] text-white" : "border-[#cbd2cb] text-transparent hover:border-[#277365]"}`} type="button" onClick={() => toggleTask(task.id)} aria-label={`${task.status === "done" ? "Mark incomplete" : "Complete"}: ${task.title}`}>
                      {task.status === "done" ? <Check size={12} strokeWidth={3} /> : <Circle size={9} />}
                    </button>
                    <div className="min-w-0">
                      <p className={`truncate text-[.76rem] font-semibold ${task.status === "done" ? "text-[#a0a8a1] line-through" : "text-[#38473f]"}`}>{task.title}</p>
                      <p className="mt-1 truncate text-[.65rem] text-[#97a097] md:hidden">{task.project} · {task.due}</p>
                    </div>
                    <span className="hidden truncate text-[.68rem] text-[#77847c] md:block">{task.project}</span>
                    <span className={`hidden text-[.67rem] font-semibold md:inline ${priorityClass(task.priority)}`}><span className="mr-1.5">●</span>{task.priority}</span>
                    <span className={`hidden w-fit rounded-md px-2 py-1 text-[.61rem] font-semibold md:inline ${statusClass(task.status)}`}>{statusLabel(task.status)}</span>
                    <span className="hidden text-right text-[.66rem] text-[#849087] lg:block">{task.due}</span>
                    <span className={`grid size-7 place-items-center rounded-full text-[.55rem] font-extrabold ${task.color}`} aria-label={`Assigned to ${task.initials}`}>{task.initials}</span>
                  </article>
                )) : (
                  <div className="px-6 py-12 text-center">
                    <Search className="mx-auto text-[#a8b0a9]" size={20} />
                    <p className="mt-3 text-[.78rem] font-semibold text-[#526158]">No tasks match this view</p>
                    <p className="mt-1 text-[.68rem] text-[#929b94]">Try another filter or search term.</p>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between border-t border-[#eef0eb] px-5 py-3.5 text-[.67rem] text-[#909a92]">
                <span>Showing {filteredTasks.length} of {tasks.length} tasks</span>
                <button className="inline-flex items-center gap-1 font-semibold text-[#277365] hover:underline" type="button" onClick={() => { setActiveFilter("all"); setSearch(""); }}>View all <ArrowRight size={13} /></button>
              </div>
            </div>

            <div className="grid gap-6">
              <section className="rounded-2xl border border-[#e9ebe5] bg-white p-5 md:p-6" id="projects">
                <div className="flex items-start justify-between">
                  <div><h2 className="text-[.95rem] font-bold tracking-[-.02em]">Your projects</h2><p className="mt-1 text-[.68rem] text-[#89948d]">A quick look at team progress.</p></div>
                  <button className="grid size-8 place-items-center rounded-lg text-[#88938b] hover:bg-[#f1f3ef]" type="button" aria-label="Project options"><MoreHorizontal size={18} /></button>
                </div>
                <div className="mt-5 grid gap-5">
                  {projects.map((project) => (
                    <article key={project.name}>
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-[11px] bg-[#f2f4ef] text-[1rem]">{project.icon}</span>
                        <div className="min-w-0 flex-1"><h3 className="truncate text-[.74rem] font-bold">{project.name}</h3><p className="mt-0.5 text-[.63rem] text-[#929b94]">{project.detail}</p></div>
                        <span className="text-[.72rem] font-bold text-[#526158]">{project.progress}%</span>
                      </div>
                      <div className="ml-12 mt-3 h-1.5 overflow-hidden rounded-full bg-[#eef0eb]"><div className={`h-full rounded-full ${project.color}`} style={{ width: `${project.progress}%` }} /></div>
                    </article>
                  ))}
                </div>
                <a className="mt-5 inline-flex items-center gap-1.5 text-[.69rem] font-semibold text-[#277365] hover:underline" href="#projects">All projects <ArrowRight size={13} /></a>
              </section>

              <section className="rounded-2xl border border-[#e9ebe5] bg-white p-5 md:p-6" id="team">
                <div className="flex items-start justify-between"><div><h2 className="text-[.95rem] font-bold tracking-[-.02em]">Team activity</h2><p className="mt-1 text-[.68rem] text-[#89948d]">Recent updates from your people.</p></div><button className="grid size-8 place-items-center rounded-lg text-[#88938b] hover:bg-[#f1f3ef]" type="button" aria-label="Activity options"><MoreHorizontal size={18} /></button></div>
                <div className="mt-5 grid gap-4">
                  <ActivityItem initials="MK" color="bg-[#f4e4d7] text-[#8b5737]" name="Maya Kim" action="completed a task in" subject="Product launch" time="12 min ago" />
                  <ActivityItem initials="JR" color="bg-[#e4e8f5] text-[#4e5f99]" name="Jordan Reed" action="shared an update in" subject="Client onboarding" time="48 min ago" />
                  <ActivityItem initials="AL" color="bg-[#f2e7bf] text-[#826b20]" name="Avery Lane" action="added a task to" subject="Website refresh" time="2 hrs ago" />
                </div>
                <button className="mt-5 inline-flex items-center gap-1.5 text-[.69rem] font-semibold text-[#277365] hover:underline" type="button">See all activity <ArrowRight size={13} /></button>
              </section>

              <section className="flex items-center gap-4 rounded-2xl border border-[#e9ebe5] bg-[#eff5f0] p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-[#277365]"><CalendarDays size={18} /></span>
                <div className="min-w-0 flex-1"><p className="text-[.73rem] font-bold">Your week is looking good</p><p className="mt-1 text-[.66rem] leading-5 text-[#7c8980]">You’ve wrapped up {completedCount + 11} tasks so far.</p></div>
                <Clock3 size={16} className="text-[#82948a]" />
              </section>
            </div>
          </section>
          <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 px-1 text-[.63rem] text-[#a0a79f]">
            <span>TaskLinkers · Thoughtful tools for focused teams</span>
            <Link className="inline-flex items-center gap-1 hover:text-[#526158]" href="/">Back to website <ArrowRight size={12} /></Link>
          </footer>
        </main>
      </div>
    </div>
  );
}

function ActivityItem({
  initials,
  color,
  name,
  action,
  subject,
  time,
}: {
  initials: string;
  color: string;
  name: string;
  action: string;
  subject: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className={`grid size-8 shrink-0 place-items-center rounded-full text-[.53rem] font-extrabold ${color}`}>{initials}</span>
      <div className="min-w-0 flex-1">
        <p className="text-[.68rem] leading-5 text-[#7f8a82]"><span className="font-bold text-[#45544b]">{name}</span> {action} <span className="font-semibold text-[#596b60]">{subject}</span></p>
        <p className="mt-1 text-[.61rem] text-[#a0a79f]">{time}</p>
      </div>
      <CheckCircle2 className="mt-1 shrink-0 text-[#94b7a6]" size={15} aria-hidden="true" />
    </div>
  );
}
