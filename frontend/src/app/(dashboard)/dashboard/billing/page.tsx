"use client";

import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  CalendarDays,
  CreditCard,
  FileText,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";
import { DashboardHeader, DashboardSidebar } from "../components/DashboardNavigation";
import { initialTasks } from "../dashboard-data";

const invoices = [
  { number: "TL-2026-009", date: "September 12, 2026", amount: "$192.00", status: "Paid" },
  { number: "TL-2026-008", date: "August 12, 2026", amount: "$192.00", status: "Paid" },
  { number: "TL-2026-007", date: "July 12, 2026", amount: "$192.00", status: "Paid" },
];

export default function BillingPage() {
  const [notice, setNotice] = useState("");
  const openDemoNotice = () => setNotice("Billing actions are disabled in this demo. No payment or plan changes were made.");

  return (
    <div className="min-h-screen bg-[#f6f7f3] text-[#25332d]">
      <DashboardSidebar openTasks={initialTasks.filter((task) => task.status !== "done").length} />
      <div className="lg:pl-[248px]">
        <DashboardHeader currentPage="Billing" />
        <main className="mx-auto max-w-[1440px] px-5 pb-12 pt-8 md:px-8 md:pt-10">
          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[.68rem] font-extrabold tracking-[.16em] text-[#87948b]">WORKSPACE SETTINGS</p>
              <h1 className="font-[Georgia,'Times_New_Roman',serif] text-[2.15rem] font-medium leading-tight text-[#26352e] md:text-[2.6rem]">Billing</h1>
              <p className="mt-2 text-[.84rem] text-[#818c84]">Manage your plan, payment method, and invoices.</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e8d9a8] bg-[#fbf5df] px-3 py-1.5 text-[.66rem] font-bold text-[#806a2e]">
              <Sparkles size={14} aria-hidden="true" /> DEMO BILLING
            </span>
          </section>

          <p className="mt-6 flex items-start gap-2 rounded-lg border border-[#e8e3d1] bg-[#fbf8ed] px-4 py-3 text-[.75rem] leading-5 text-[#736849]" role="note">
            <LockKeyhole className="mt-0.5 shrink-0" size={15} aria-hidden="true" />
            Sample account details only. Billing is not connected to a payment provider; no charges will be made.
          </p>

          {notice && <p className="mt-4 rounded-lg border border-[#d8e6de] bg-[#edf5ef] px-4 py-3 text-[.75rem] text-[#315d4b]" role="status" aria-live="polite">{notice}</p>}

          <section className="mt-6 grid items-start gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,.8fr)]" aria-label="Subscription details">
            <article className="rounded-xl border border-[#e7e9e2] bg-white p-5 md:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[.65rem] font-extrabold tracking-[.14em] text-[#929b93]">CURRENT PLAN</p>
                  <h2 className="mt-2 text-[1.2rem] font-bold text-[#26352e]">Team</h2>
                  <p className="mt-1 text-[.76rem] text-[#818c84]">For teams coordinating work across projects.</p>
                </div>
                <span className="rounded-full bg-[#eaf2ee] px-2.5 py-1 text-[.64rem] font-bold text-[#277365]">Active · demo</span>
              </div>
              <div className="mt-7 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b border-[#edf0eb] pb-6">
                <span className="text-[2rem] font-semibold tracking-tight text-[#26352e]">$192</span>
                <span className="text-[.78rem] text-[#818c84]">/ month</span>
                <span className="ml-1 text-[.72rem] text-[#818c84]">8 seats · $24 per seat</span>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[.75rem] text-[#6f7c73]">
                  <CalendarDays size={16} className="text-[#839188]" aria-hidden="true" />
                  Next renewal <strong className="font-semibold text-[#35453c]">November 12, 2026</strong>
                </div>
                <button className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#1d665a] px-4 text-[.74rem] font-bold text-white transition hover:bg-[#17564c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d665a]" type="button" onClick={openDemoNotice}>
                  Change plan <ArrowRight size={15} aria-hidden="true" />
                </button>
              </div>
            </article>

            <article className="rounded-xl border border-[#e7e9e2] bg-white p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-[.9rem] font-bold text-[#2c3b33]">Payment method</h2>
                <CreditCard size={18} className="text-[#87948b]" aria-hidden="true" />
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-lg border border-[#edf0eb] p-3">
                <span className="grid size-10 place-items-center rounded-lg bg-[#f2f4ef] text-[#617168]"><CreditCard size={19} aria-hidden="true" /></span>
                <div>
                  <p className="text-[.76rem] font-semibold text-[#35453c]">Visa ending in 4242</p>
                  <p className="mt-1 text-[.66rem] text-[#929b93]">Expires 08/28 · sample card</p>
                </div>
              </div>
              <button className="mt-4 min-h-9 rounded-lg border border-[#e2e6df] px-3 text-[.7rem] font-semibold text-[#536259] transition hover:bg-[#f6f7f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d665a]" type="button" onClick={openDemoNotice}>
                Update payment method
              </button>
            </article>
          </section>

          <section className="mt-5 grid items-start gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,.8fr)]">
            <article className="overflow-hidden rounded-xl border border-[#e7e9e2] bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-5 md:px-6">
                <div>
                  <h2 className="text-[.9rem] font-bold text-[#2c3b33]">Invoice history</h2>
                  <p className="mt-1 text-[.7rem] text-[#929b93]">Recent sample invoices</p>
                </div>
                <FileText size={18} className="text-[#87948b]" aria-hidden="true" />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead className="border-y border-[#edf0eb] bg-[#fafbf8] text-[.62rem] font-bold uppercase tracking-[.08em] text-[#929b93]">
                    <tr><th className="px-5 py-3 font-bold md:px-6">Invoice</th><th className="px-4 py-3 font-bold">Date</th><th className="px-4 py-3 font-bold">Amount</th><th className="px-4 py-3 font-bold">Status</th><th className="px-5 py-3 text-right font-bold md:px-6">File</th></tr>
                  </thead>
                  <tbody className="divide-y divide-[#edf0eb]">
                    {invoices.map((invoice) => (
                      <tr key={invoice.number}>
                        <td className="px-5 py-4 text-[.72rem] font-semibold text-[#3d4c43] md:px-6">{invoice.number}</td>
                        <td className="px-4 py-4 text-[.7rem] text-[#758178]">{invoice.date}</td>
                        <td className="px-4 py-4 text-[.7rem] font-semibold text-[#3d4c43]">{invoice.amount}</td>
                        <td className="px-4 py-4"><span className="rounded-full bg-[#eaf2ee] px-2 py-1 text-[.62rem] font-semibold text-[#277365]">{invoice.status}</span></td>
                        <td className="px-5 py-3 text-right md:px-6"><button className="inline-grid size-8 place-items-center rounded-md text-[#718077] transition hover:bg-[#f1f4ef] hover:text-[#1d665a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d665a]" type="button" aria-label={`Download ${invoice.number}`} onClick={openDemoNotice}><ArrowDownToLine size={16} aria-hidden="true" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="rounded-xl border border-[#e7e9e2] bg-white p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-[.9rem] font-bold text-[#2c3b33]">Billing details</h2>
                <Mail size={18} className="text-[#87948b]" aria-hidden="true" />
              </div>
              <dl className="mt-5 grid gap-4">
                <div><dt className="text-[.63rem] font-bold uppercase tracking-[.08em] text-[#929b93]">Workspace</dt><dd className="mt-1 text-[.74rem] font-medium text-[#3d4c43]">Studio North</dd></div>
                <div><dt className="text-[.63rem] font-bold uppercase tracking-[.08em] text-[#929b93]">Billing email</dt><dd className="mt-1 break-all text-[.74rem] font-medium text-[#3d4c43]">billing@studionorth.example</dd></div>
                <div><dt className="text-[.63rem] font-bold uppercase tracking-[.08em] text-[#929b93]">Billing cycle</dt><dd className="mt-1 text-[.74rem] font-medium text-[#3d4c43]">Monthly · sample data</dd></div>
              </dl>
              <button className="mt-5 min-h-9 rounded-lg border border-[#e2e6df] px-3 text-[.7rem] font-semibold text-[#536259] transition hover:bg-[#f6f7f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d665a]" type="button" onClick={openDemoNotice}>
                Edit billing details
              </button>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}