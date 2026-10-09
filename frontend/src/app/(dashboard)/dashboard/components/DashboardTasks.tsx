import type { FormEvent } from "react";
import { ArrowRight, Check, Circle, ChevronDown, Plus, Search } from "lucide-react";
import { filters, priorityClass, projects, statusClass, statusLabel, type Task, type TaskStatus } from "./dashboard-data";

type Props = {
  tasks: Task[];
  filteredTasks: Task[];
  activeFilter: TaskStatus | "all";
  onFilterChange: (filter: TaskStatus | "all") => void;
  onToggleTask: (taskId: number) => void;
  onResetFilters: () => void;
  showTaskForm: boolean;
  newTaskTitle: string;
  onTitleChange: (title: string) => void;
  newTaskProject: string;
  onProjectChange: (project: string) => void;
  onAddTask: (event: FormEvent<HTMLFormElement>) => void;
};

export function DashboardTasks({ tasks, filteredTasks, activeFilter, onFilterChange, onToggleTask, onResetFilters, showTaskForm, newTaskTitle, onTitleChange, newTaskProject, onProjectChange, onAddTask }: Props) {
  return (
    <div className="rounded-2xl border border-[#e9ebe5] bg-white" id="tasks">
      <div className="flex flex-col justify-between gap-4 border-b border-[#eef0eb] px-5 py-5 sm:flex-row sm:items-center md:px-6"><div><h2 className="text-[.98rem] font-bold tracking-[-.02em]">My tasks</h2><p className="mt-1 text-[.7rem] text-[#89948d]">Stay on top of your next steps.</p></div><button className="inline-flex items-center gap-1.5 self-start text-[.7rem] font-semibold text-[#6f7e75] hover:text-[#277365] sm:self-auto" type="button">This week <ChevronDown size={14} /></button></div>
      {showTaskForm && <form className="grid gap-3 border-b border-[#eef0eb] bg-[#fbfcf9] p-4 sm:grid-cols-[1fr_190px_auto]" onSubmit={onAddTask}><input className="h-10 rounded-lg border border-[#e2e6df] bg-white px-3 text-[.76rem] outline-none placeholder:text-[#a4aaa4] focus:border-[#83a99c]" autoFocus aria-label="New task name" placeholder="What needs to get done?" value={newTaskTitle} onChange={(event) => onTitleChange(event.target.value)} required /><select className="h-10 rounded-lg border border-[#e2e6df] bg-white px-3 text-[.74rem] text-[#66736c] outline-none focus:border-[#83a99c]" aria-label="Project" value={newTaskProject} onChange={(event) => onProjectChange(event.target.value)}>{projects.map((project) => <option key={project.name}>{project.name}</option>)}</select><button className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[#1d665a] px-4 text-[.73rem] font-bold text-white hover:bg-[#17564c]" type="submit"><Plus size={15} /> Add</button></form>}
      <div className="flex gap-1 overflow-x-auto border-b border-[#eef0eb] px-4 py-3 md:px-5">{filters.map((filter) => <button className={`shrink-0 rounded-lg px-3 py-2 text-[.68rem] font-semibold transition ${activeFilter === filter.value ? "bg-[#eaf2ee] text-[#1d665a]" : "text-[#849087] hover:bg-[#f5f6f3]"}`} key={filter.value} onClick={() => onFilterChange(filter.value)} type="button">{filter.label}{filter.value === "all" && <span className="ml-1.5 text-[.62rem] opacity-65">{tasks.length}</span>}</button>)}</div>
      <div className="divide-y divide-[#f0f1ed]">{filteredTasks.length ? filteredTasks.map((task) => <article className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 transition hover:bg-[#fcfdfb] md:grid-cols-[auto_minmax(0,1fr)_minmax(110px,.55fr)_85px_78px_auto] md:gap-4 md:px-5" key={task.id}><button className={`grid size-[19px] place-items-center rounded-full border transition ${task.status === "done" ? "border-[#277365] bg-[#277365] text-white" : "border-[#cbd2cb] text-transparent hover:border-[#277365]"}`} type="button" onClick={() => onToggleTask(task.id)} aria-label={`${task.status === "done" ? "Mark incomplete" : "Complete"}: ${task.title}`}>{task.status === "done" ? <Check size={12} strokeWidth={3} /> : <Circle size={9} />}</button><div className="min-w-0"><p className={`truncate text-[.76rem] font-semibold ${task.status === "done" ? "text-[#a0a8a1] line-through" : "text-[#38473f]"}`}>{task.title}</p><p className="mt-1 truncate text-[.65rem] text-[#97a097] md:hidden">{task.project} · {task.due}</p></div><span className="hidden truncate text-[.68rem] text-[#77847c] md:block">{task.project}</span><span className={`hidden text-[.67rem] font-semibold md:inline ${priorityClass(task.priority)}`}><span className="mr-1.5">●</span>{task.priority}</span><span className={`hidden w-fit rounded-md px-2 py-1 text-[.61rem] font-semibold md:inline ${statusClass(task.status)}`}>{statusLabel(task.status)}</span><span className="hidden text-right text-[.66rem] text-[#849087] lg:block">{task.due}</span><span className={`grid size-7 place-items-center rounded-full text-[.55rem] font-extrabold ${task.color}`} aria-label={`Assigned to ${task.initials}`}>{task.initials}</span></article>) : <div className="px-6 py-12 text-center"><Search className="mx-auto text-[#a8b0a9]" size={20} /><p className="mt-3 text-[.78rem] font-semibold text-[#526158]">No tasks match this view</p><p className="mt-1 text-[.68rem] text-[#929b94]">Try another filter or search term.</p></div>}</div>
      <div className="flex items-center justify-between border-t border-[#eef0eb] px-5 py-3.5 text-[.67rem] text-[#909a92]"><span>Showing {filteredTasks.length} of {tasks.length} tasks</span><button className="inline-flex items-center gap-1 font-semibold text-[#277365] hover:underline" type="button" onClick={onResetFilters}>View all <ArrowRight size={13} /></button></div>
    </div>
  );
}