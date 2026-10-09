import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="[display:grid] [min-height:100vh] [place-items:center] [padding:32px_16px]">
      <section className="[width:min(760px,_100%)] [text-align:center]">
        <p className="[margin:0] [color:#126c63] [font-size:0.85rem] [font-weight:850] [letter-spacing:0.12em] [text-transform:uppercase]">
          TaskLinkers / 404
        </p>
        <p className="[margin:12px_0_0] [color:#172033] [font-size:clamp(6rem,_24vw,_12rem)] [font-weight:900] [line-height:0.85]">
          404
        </p>
        <h1 className="[margin:28px_0_10px] [color:#172033] [font-size:clamp(1.8rem,_5vw,_2.5rem)] [line-height:1.1]">
          This page isn&apos;t on the board.
        </h1>
        <p className="[max-width:480px] [margin:0_auto] [color:#455064] [font-size:1.05rem] [line-height:1.7]">
          The link may be outdated, or this page hasn&apos;t been built yet.
        </p>
        <nav className="[display:flex] [flex-wrap:wrap] [justify-content:center] [gap:12px] [margin-top:28px]" aria-label="Recovery options">
          <Link className="[display:inline-flex] [min-height:46px] [align-items:center] [justify-content:center] [gap:8px] [border-radius:8px] [padding:0_18px] [background:#126c63] [color:white] [font-weight:800] [box-shadow:0_12px_24px_rgba(18,_108,_99,_0.18)]" href="/">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to home
          </Link>
          <Link className="[display:inline-flex] [min-height:46px] [align-items:center] [justify-content:center] [gap:8px] [border:1px_solid_rgba(23,_32,_51,_0.16)] [border-radius:8px] [padding:0_18px] [background:rgba(255,_255,_255,_0.72)] [color:#172033] [font-weight:800]" href="/dashboard">
            Go to dashboard
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </nav>
      </section>
    </main>
  );
}