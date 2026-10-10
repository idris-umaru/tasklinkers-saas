export type TaskStatus = "todo" | "in-progress" | "done";
export type TaskPriority = "High" | "Medium" | "Low";

export type Task = {
  id: number;
  title: string;
  project: string;
  due: string;
  priority: TaskPriority;
  status: TaskStatus;
  initials: string;
  color: string;
};

export const initialTasks: Task[] = [
  { id: 1, title: "Review landing page wireframes", project: "Website refresh", due: "Today", priority: "High", status: "in-progress", initials: "AJ", color: "bg-[#dcebe4] text-[#24634f]" },
  { id: 2, title: "Prepare launch checklist", project: "Product launch", due: "Today", priority: "High", status: "todo", initials: "MK", color: "bg-[#f4e4d7] text-[#8b5737]" },
  { id: 3, title: "Send first draft to the team", project: "Client onboarding", due: "Tomorrow", priority: "Medium", status: "in-progress", initials: "JR", color: "bg-[#e4e8f5] text-[#4e5f99]" },
  { id: 4, title: "Update project timeline", project: "Website refresh", due: "Oct 12", priority: "Medium", status: "todo", initials: "AL", color: "bg-[#f2e7bf] text-[#826b20]" },
  { id: 5, title: "Collect feedback from stakeholders", project: "Product launch", due: "Oct 14", priority: "Low", status: "done", initials: "DV", color: "bg-[#e8deef] text-[#75568d]" },
];

export const projects = [
  { name: "Website refresh", detail: "12 tasks · 4 members", progress: 72, color: "bg-[#277365]", icon: "🌿" },
  { name: "Product launch", detail: "8 tasks · 3 members", progress: 48, color: "bg-[#d5a63c]", icon: "✦" },
  { name: "Client onboarding", detail: "6 tasks · 2 members", progress: 86, color: "bg-[#7586b8]", icon: "◈" },
];

export const filters: { label: string; value: TaskStatus | "all" }[] = [
  { label: "All tasks", value: "all" },
  { label: "In progress", value: "in-progress" },
  { label: "To do", value: "todo" },
  { label: "Completed", value: "done" },
];

export const navItems = [
  { label: "Overview", href: "#overview", icon: "overview" },
  { label: "My tasks", href: "#tasks", icon: "tasks" },
  { label: "Projects", href: "#projects", icon: "projects" },
  { label: "Team", href: "#team", icon: "team" },
  { label: "Billing", href: "/dashboard/billing", icon: "billing" },
];

export function statusLabel(status: TaskStatus) {
  if (status === "in-progress") return "In progress";
  if (status === "done") return "Complete";
  return "To do";
}

export function statusClass(status: TaskStatus) {
  if (status === "in-progress") return "bg-[#e3f1ed] text-[#277365]";
  if (status === "done") return "bg-[#edf0f5] text-[#65738b]";
  return "bg-[#f5efd9] text-[#8b7025]";
}

export function priorityClass(priority: TaskPriority) {
  if (priority === "High") return "text-[#b85b49]";
  if (priority === "Medium") return "text-[#9a792a]";
  return "text-[#6e7b75]";
}