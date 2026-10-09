"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, Plus, X } from "lucide-react";
import { DashboardHeader, DashboardSidebar } from "./components/DashboardNavigation";
import { DashboardSummary } from "./components/DashboardSummary";
import { DashboardTasks } from "./components/DashboardTasks";
import { DashboardInsights } from "./components/DashboardInsights";
import { initialTasks, projects, type Task, type TaskStatus } from "./dashboard-data";

export default function DashboardPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeFilter, setActiveFilter] = useState<TaskStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [showTaskForm, setShowTaskForm] = useState(false);
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

    const task: Task = {
      id: Date.now(),
      title,
      project: newTaskProject,
      due: "No due date",
      priority: "Medium",
      status: "todo",
      initials: "AJ",
      color: "bg-[#dcebe4] text-[#24634f]",
    };
    setTasks((current) => [task, ...current]);
    setNewTaskTitle("");
    setShowTaskForm(false);
    setActiveFilter("all");
  }

  return (
    <div className="min-h-screen bg-[#f6f7f3] text-[#25332d]">
      <DashboardSidebar openTasks={tasks.length - completedCount} />
      <div className="lg:pl-[248px]">
        <DashboardHeader search={search} onSearchChange={setSearch} />
        <main className="mx-auto max-w-[1440px] px-5 pb-12 pt-8 md:px-8 md:pt-10" id="overview">
          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[.68rem] font-extrabold tracking-[.16em] text-[#87948b]">THURSDAY, OCTOBER 8, 2026</p>
              <h1 className="font-[Georgia,'Times_New_Roman',serif] text-[2.15rem] font-medium leading-tight tracking-[-.045em] text-[#26352e] md:text-[2.6rem]">Good morning, idris <span aria-hidden="true">sun</span></h1>
              <p className="mt-2 text-[.84rem] text-[#818c84]">Here’s what’s moving across your workspace today.</p>
            </div>
            <button className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-[9px] bg-[#1d665a] px-4 text-[.76rem] font-bold text-white shadow-[0_8px_18px_rgba(29,102,90,.15)] transition hover:bg-[#17564c] sm:self-auto" type="button" onClick={() => setShowTaskForm((open) => !open)}>
              {showTaskForm ? <X size={16} /> : <Plus size={16} />}
              {showTaskForm ? "Close form" : "Add a task"}
            </button>
          </section>
          <DashboardSummary openTasks={tasks.length - completedCount} inProgressCount={inProgressCount} completedCount={completedCount + 11} />
          <section className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,.85fr)]">
            <DashboardTasks
              tasks={tasks}
              filteredTasks={filteredTasks}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              onToggleTask={toggleTask}
              onResetFilters={() => { setActiveFilter("all"); setSearch(""); }}
              showTaskForm={showTaskForm}
              newTaskTitle={newTaskTitle}
              onTitleChange={setNewTaskTitle}
              newTaskProject={newTaskProject}
              onProjectChange={setNewTaskProject}
              onAddTask={addTask}
            />
            <DashboardInsights completedThisWeek={completedCount + 11} />
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
