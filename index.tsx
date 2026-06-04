import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactElement } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  DollarSign,
  Rocket,
  MapPin,
  Search,
  Paintbrush,
  LineChart,
  Lock,
  Key,
  MessageCircle,
  Target,
  Users,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Calendar,
  Menu,
  X,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import heroResort from "@/assets/hero-resort.jpg";
import founderJavier from "@/assets/founder-javier.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Beat Studios — Stop Bleeding Money to OTA Commissions" },
      {
        name: "description",
        content:
          "Boutique resorts in Trinidad losing $2,000–5,000 USD/month to OTA commissions? We build direct-booking websites that capture 30% of bookings directly.",
      },
      { property: "og:title", content: "Prime Beat Studios — Stop Bleeding Money to OTA Commissions" },
      {
        property: "og:description",
        content:
          "Premium direct-booking websites for boutique resorts in Trinidad & Tobago. Own your customer data. Cut Booking.com fees. Increase revenue.",
      },
      { property: "og:image", content: heroResort },
    ],
  }),
  component: HomePage,
});

const WHATSAPP = "18683385785";
const WA_DEFAULT_MSG =
  "Hi Javier, I'm interested in learning more about Prime Beat Studios for my resort. Can we schedule a call?";
const waLink = (msg: string = WA_DEFAULT_MSG) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

/* -------------------------- Navigation -------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rotate-45 bg-[var(--color-gold)]" />
          <span className="font-serif text-base tracking-tight md:text-lg">
            Prime Beat <span className="gold-text">Studios</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="link-underline text-[12px] uppercase tracking-[0.22em] text-foreground/75 hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#calculator" className="btn-gold hidden md:inline-flex">
            Calculate Savings Now
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center border border-white/15 text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0A0A0A]/95 backdrop-blur-md lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col py-4">
            {items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.22em] text-foreground/80"
              >
                {i.label}
              </a>
            ))}
            <a href="#calculator" onClick={() => setOpen(false)} className="btn-gold mt-3 justify-center">
              Calculate Savings Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------------- Hero -------------------------- */

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden">
      <img
        src={heroResort}
        alt="Luxury Caribbean resort at sunset with infinity pool"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/72 via-[#0A0A0A]/60 to-[#0A0A0A]" />
      <div className="absolute inset-0 hero-aurora opacity-40 mix-blend-overlay" />

      <div className="container-px relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24 md:pt-28">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)]">
            <Zap className="h-3 w-3" /> Limited Spots: Only 3 Resorts Accepted This Quarter
          </div>

          <h1 className="reveal reveal-delay-1 display-xl mt-6 font-serif text-bone text-balance">
            Stop Bleeding Money to{" "}
            <span className="gold-grad-text italic">OTA Commissions</span>
          </h1>

          <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            I help boutique resorts in Trinidad capture{" "}
            <span className="text-bone">30% of bookings directly.</span>
          </p>

          <p className="reveal reveal-delay-3 mt-4 max-w-2xl text-base font-medium text-[var(--color-gold)] md:text-lg">
            Save $2,000–5,000 USD/month in commissions. Own your customer data.
          </p>

          <div className="reveal reveal-delay-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#calculator" className="btn-gold justify-center sm:justify-start">
              Calculate Your Savings Now
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href="#process" className="btn-ghost justify-center sm:justify-start">
              See How It Works
            </a>
          </div>

          <div className="reveal reveal-delay-4 mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              { k: "30%", v: "Avg shift to direct" },
              { k: "2–3", v: "Weeks to launch" },
              { k: "$74K USD", v: "Avg annual savings" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-serif text-2xl text-bone md:text-4xl">{s.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-foreground/55 md:text-[11px]">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-4 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-foreground/60">
            <span className="flex items-center gap-1.5"><Check className="h-3 w-3 text-[var(--color-gold)]" /> 100% Website Ownership</span>
            <span className="flex items-center gap-1.5"><Check className="h-3 w-3 text-[var(--color-gold)]" /> 30-Day Money-Back Guarantee</span>
            <span className="flex items-center gap-1.5"><Check className="h-3 w-3 text-[var(--color-gold)]" /> Local Support · Trinidad</span>
          </div>
        </div>
      </div>

      <a
        href="#pillars"
        aria-label="Scroll"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-foreground/60 md:block"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

/* -------------------------- Problem section -------------------------- */

function Problem() {
  const rows: [string, string, boolean?][] = [
    ["Monthly revenue", "$52,740 USD"],
    ["From OTAs", "70% (205 nights)"],
    ["Commission rate", "15%"],
    ["Monthly loss", "$6,200 USD", true],
  ];
  return (
    <section className="section-y border-t border-white/5">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">The problem</span>
            <h2 className="display-lg mt-3 font-serif text-bone text-balance">
              The Hidden Cost of <span className="gold-grad-text italic">OTA Dependency</span>
            </h2>
            <p className="mt-6 max-w-md text-foreground/70">
              That's money walking out the door every single day. And it gets worse when Booking.com raises commission rates.
            </p>
            <a href="#calculator" className="btn-gold mt-8 inline-flex">
              What's Your Number?
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="gold-border-glow relative bg-[#0E0E0E] p-7 md:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="eyebrow">Scenario</div>
                  <div className="mt-1 font-serif text-xl text-bone">15-room boutique resort</div>
                </div>
                <TrendingUp className="h-5 w-5 text-[var(--color-gold)]" />
              </div>
              <dl className="mt-6 divide-y divide-white/10">
                {rows.map(([k, v, danger]) => (
                  <div key={k} className="flex items-center justify-between py-3.5">
                    <dt className="text-sm text-foreground/65">{k}</dt>
                    <dd className={`font-serif text-base md:text-lg ${danger ? "text-[#ef4444]" : "text-bone"}`}>
                      {v}
                      {danger && (
                        <span className="ml-2 align-middle text-[10px] uppercase tracking-[0.22em] text-[#ef4444]/80">
                          Gone
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex items-end justify-between border-t border-[var(--color-gold)]/30 pt-6">
                <div>
                  <div className="eyebrow text-[var(--color-gold)]">Annual loss</div>
                  <div className="mt-2 font-serif text-4xl text-bone md:text-5xl">$74,400 USD</div>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.2em] text-foreground/55">
                  Money you could keep<br />by capturing direct
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-3">
          {[
            { k: "+51", t: "Extra direct bookings/month", b: "Moving just 25% of OTA bookings to your site." },
            { k: "$1,837 USD", t: "Monthly savings in commissions", b: "Money that stays in YOUR pocket." },
            { k: "18 days", t: "ROI on $1,200 USD investment", b: "Website pays for itself in under 3 weeks." },
          ].map((o) => (
            <div key={o.k} className="bg-[#0B0B0B] p-7 md:p-8">
              <div className="font-serif text-3xl text-bone md:text-4xl">{o.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">{o.t}</div>
              <p className="mt-3 text-sm text-foreground/65">{o.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- ROI Calculator -------------------------- */

function Calculator() {
  const [rooms, setRooms] = useState(15);
  const [rate, setRate] = useState(184);
  const [occupancy, setOccupancy] = useState(60);
  const [otaShare, setOtaShare] = useState(70);
  const [commission] = useState(15);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const result = useMemo(() => {
    const nights = rooms * 30 * (occupancy / 100);
    const revenue = nights * rate;
    const otaRevenue = revenue * (otaShare / 100);
    const monthlyLoss = otaRevenue * (commission / 100);
    const monthlySaving = monthlyLoss * 0.25;
    const annualSaving = monthlySaving * 12;
    const daysRoi = monthlySaving > 0 ? Math.max(1, Math.ceil((1200 / monthlySaving) * 30)) : 0;
    return {
      monthlyLoss: Math.round(monthlyLoss),
      monthlySaving: Math.round(monthlySaving),
      annualSaving: Math.round(annualSaving),
      daysRoi,
    };
  }, [rooms, rate, occupancy, otaShare, commission]);

  const fmt = (n: number) => `$${n.toLocaleString()} USD`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSent(true);
  };

  return (
    <section id="calculator" className="section-y border-t border-white/5">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">ROI Calculator</span>
          <h2 className="display-lg mt-3 font-serif text-bone text-balance">
            Calculate <span className="gold-grad-text italic">YOUR</span> Potential Savings
          </h2>
          <p className="mt-5 text-foreground/70">
            Drag the sliders. See your exact savings opportunity.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-white/10 lg:grid-cols-5">
          <div className="space-y-6 bg-[#0E0E0E] p-7 md:p-10 lg:col-span-3">
            {[
              { label: "Number of rooms", value: rooms, set: setRooms, min: 5, max: 100, suffix: "rooms" },
              { label: "Avg nightly rate", value: rate, set: setRate, min: 50, max: 500, suffix: "USD" },
              { label: "Current occupancy", value: occupancy, set: setOccupancy, min: 20, max: 100, suffix: "%" },
              { label: "Bookings from OTAs", value: otaShare, set: setOtaShare, min: 20, max: 100, suffix: "%" },
            ].map((f) => (
              <div key={f.label}>
                <div className="flex items-baseline justify-between">
                  <label className="text-sm uppercase tracking-[0.18em] text-foreground/60">{f.label}</label>
                  <div className="font-serif text-xl text-bone">
                    {f.value} <span className="text-xs text-foreground/55">{f.suffix}</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={f.min}
                  max={f.max}
                  value={f.value}
                  onChange={(e) => f.set(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--color-gold)]"
                />
              </div>
            ))}
            <p className="text-xs text-foreground/45">Assumes 15% OTA commission. Direct shift estimated at 25%.</p>
          </div>

          <div className="gold-border-glow flex flex-col justify-between bg-[#0B0B0B] p-7 md:p-10 lg:col-span-2">
            <div>
              <div className="eyebrow text-[var(--color-gold)]">Your Result</div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                You're losing approximately
              </p>
              <div className="mt-2 font-serif text-4xl text-bone md:text-5xl">
                {fmt(result.monthlyLoss)}
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/55">per month to OTA commissions</p>

              <div className="mt-7 space-y-4 border-t border-white/10 pt-6 text-sm">
                <div>
                  <div className="text-foreground/65">Moving 25% to direct saves you</div>
                  <div className="mt-1 font-serif text-2xl gold-grad-text">{fmt(result.monthlySaving)} / month</div>
                </div>
                <div>
                  <div className="text-foreground/65">Annually that's</div>
                  <div className="mt-1 font-serif text-2xl text-bone">{fmt(result.annualSaving)} / year</div>
                </div>
                <div>
                  <div className="text-foreground/65">Website ROI</div>
                  <div className="mt-1 font-serif text-xl text-bone">
                    ~{result.daysRoi} days <span className="text-xs text-foreground/55">to recover $1,200 USD investment</span>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={submit} className="mt-7 border-t border-white/10 pt-6">
              {sent ? (
                <p className="text-sm text-[var(--color-gold)]">✓ Full report coming to your email</p>
              ) : (
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email..."
                    className="flex-1 border border-white/15 bg-transparent px-3 py-2.5 text-sm text-bone placeholder:text-foreground/40 focus:border-[var(--color-gold)]/60 focus:outline-none"
                  />
                  <button type="submit" className="btn-gold justify-center">
                    Send Report
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Pillars -------------------------- */

function Pillars() {
  const pillars = [
    {
      icon: "📈",
      title: "Direct Bookings = More Profit",
      body:
        "We don't build pretty websites. We build revenue engines. Every design decision is optimized for converting visitors into direct bookings.",
      meta: ["25–35% of OTA bookings shift to direct", "$2,000–5,000 USD/mo saved in commissions"],
    },
    {
      icon: "⚡",
      title: "Launched in Weeks, Not Months",
      body:
        "You don't need to wait. We work fast without cutting corners. Most resorts see their new website live in 2–3 weeks.",
      meta: ["Discovery — 3 days", "Design — 7 days · Launch — 3 days"],
    },
    {
      icon: "🗺️",
      title: "Built For Trinidad's Market",
      body:
        "We understand the local hospitality market. Your website is designed for how Trinidad travelers actually book.",
      meta: ["Mobile-first · Local payment methods", "Fast & secure · Local support"],
    },
  ];

  return (
    <section id="pillars" className="section-y border-t border-white/5 bg-[#0B0B0B]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="eyebrow">Why us</span>
          <h2 className="display-lg mt-3 font-serif text-bone text-balance">
            Why Resort Owners Choose <span className="gold-grad-text italic">Prime Beat Studios</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative flex flex-col gap-5 bg-[#0B0B0B] p-7 transition-colors hover:bg-[#101010] md:p-9"
            >
              <div className="text-3xl">{p.icon}</div>
              <h3 className="font-serif text-2xl text-bone md:text-[26px]">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-foreground/70">{p.body}</p>
              <ul className="mt-auto space-y-1.5 border-t border-white/10 pt-4">
                {p.meta.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-xs uppercase tracking-[0.16em] text-foreground/60">
                    <Check className="mt-0.5 h-3 w-3 text-[var(--color-gold)]" /> {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center font-serif text-xl italic text-foreground/80 md:text-2xl">
          “Your website should make you money, not look pretty. We build both — but the profit comes first.”
        </p>
        <p className="mt-3 text-center text-xs uppercase tracking-[0.22em] text-[var(--color-gold)]">
          — Javier Ortega, Founder
        </p>
      </div>
    </section>
  );
}

/* -------------------------- Process / How it works -------------------------- */

function Process() {
  const steps = [
    {
      icon: <Search className="h-4 w-4" />,
      title: "Audit & Analysis",
      days: "Days 1–3",
      doing: [
        "Analyze your current website performance",
        "Calculate exactly how much you're losing to OTA commissions",
        "Identify friction points in your booking flow",
        "Map out high-impact improvements",
      ],
      get: ["Detailed audit report", "Specific recommendations", "Revenue opportunity analysis", "Implementation roadmap"],
    },
    {
      icon: <Paintbrush className="h-4 w-4" />,
      title: "Design & Build",
      days: "Days 4–10",
      doing: [
        "Design conversion-focused homepage",
        "Build integrated booking system",
        "Optimize mobile experience (80%+ of bookers use phones)",
        "Integrate payment processors (Stripe + local gateways)",
      ],
      get: ["Custom design (not template)", "Real booking engine", "Mobile-perfect checkout", "Full analytics setup"],
    },
    {
      icon: <Rocket className="h-4 w-4" />,
      title: "Launch & Optimize",
      days: "Days 11–15",
      doing: [
        "Deploy on your domain with full SSL security",
        "Migrate your content from old site",
        "Test all booking flows end-to-end",
        "Train your team & hand over docs",
      ],
      get: ["Live website", "Working booking system", "Team training", "Handover documentation"],
    },
    {
      icon: <LineChart className="h-4 w-4" />,
      title: "Measure & Improve",
      days: "Ongoing",
      doing: [
        "Monthly performance reports",
        "A/B testing on key pages",
        "Seasonal optimization",
        "Continuous improvement & scaling advice",
      ],
      get: ["Monthly bookings reports", "Data-driven improvements", "Technical support", "Scaling advice"],
    },
  ];

  return (
    <section id="process" className="section-y border-t border-white/5">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="display-lg mt-3 font-serif text-bone text-balance">
              How We Increase Your <span className="gold-grad-text italic">Direct Bookings</span>
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="draw-line relative border border-white/10 bg-[#0E0E0E] p-6 md:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center border border-[var(--color-gold)]/40 text-[var(--color-gold)]">
                    {s.icon}
                  </span>
                  <span className="font-serif text-sm text-foreground/55">0{idx + 1}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-gold)]">{s.days}</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-bone">{s.title}</h3>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="eyebrow mb-3">What we do</div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {s.doing.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="mt-2 h-px w-3 shrink-0 bg-[var(--color-gold)]" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="eyebrow mb-3">What you get</div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {s.get.map((g) => (
                      <li key={g} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 text-[var(--color-gold)]" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
          <div className="bg-[#0E0E0E] p-6 text-center">
            <div className="eyebrow text-[var(--color-gold)]">First direct booking</div>
            <div className="mt-2 font-serif text-2xl text-bone">7–10 days after launch</div>
          </div>
          <div className="bg-[#0E0E0E] p-6 text-center">
            <div className="eyebrow text-[var(--color-gold)]">Average ROI</div>
            <div className="mt-2 font-serif text-2xl text-bone">Investment recovered in 4–6 weeks</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Pricing -------------------------- */

type Tier = {
  name: string;
  tagline: string;
  usd: string;
  best: string;
  features: string[];
  roi: string;
  revenue: string;
  highlight?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Starter Site",
    tagline: "For very small guesthouses (5–10 rooms)",
    usd: "$500 USD",
    best: "Best for: Guesthouses",
    features: [
      "High-end 1-page design",
      "Mobile responsive",
      "Contact form",
      "Google Analytics setup",
      "Basic local SEO",
      "Social media links",
      "7-day post-launch support",
    ],
    roi: "8–12 weeks",
    revenue: "$500–1,000 USD/mo",
  },
  {
    name: "VIP Business",
    tagline: "Boutique resorts (10–20 rooms)",
    usd: "$1,200 USD",
    best: "Most Chosen",
    highlight: true,
    features: [
      "Full custom website (5–8 pages)",
      "Integrated direct-booking engine",
      "Mobile-first optimization",
      "Payment processors (Stripe + local gateways)",
      "Advanced analytics & reporting",
      "Email notification system",
      "Photo optimization & placement",
      "Basic SEO optimization",
      "Up to 5 content changes (first 30 days)",
      "7-day post-launch support",
    ],
    roi: "4–6 weeks",
    revenue: "$2,000–5,000 USD/mo",
  },
  {
    name: "Premium Plus",
    tagline: "Larger resorts (25+ rooms, high volume)",
    usd: "$2,500 USD",
    best: "For high-volume properties",
    features: [
      "Everything in VIP Business, plus:",
      "Advanced custom booking system",
      "Integrated CRM for guest data",
      "Email marketing automation",
      "Multi-language support",
      "Advanced conversion optimization",
      "90 days dedicated support (up to 10 edits + monthly strategy calls)",
      "A/B testing framework",
      "Custom integrations with existing systems",
      "Dedicated secure hosting configuration",
    ],
    roi: "3–4 weeks",
    revenue: "$5,000–10,000 USD/mo",
  },
];

function Pricing() {
  return (
    <section id="pricing" className="section-y border-t border-white/5 bg-[#0B0B0B]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">Pricing</span>
          <h2 className="display-lg mt-3 font-serif text-bone text-balance">
            Transparent Pricing. <span className="gold-grad-text italic">Real ROI.</span>
          </h2>
          <p className="mt-5 text-foreground/70">
            Choose the package that fits your resort. All packages include custom design & build, initial setup & launch, and <span className="text-bone">7 days of post-launch support</span> (technical fixes). Extended support available at $50 USD/month.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col bg-[#0E0E0E] p-7 md:p-8 ${
                t.highlight ? "gold-border-glow" : "border border-white/10"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-7 bg-[var(--color-gold)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#0A0A0A]">
                  Most Chosen
                </span>
              )}
              <div className="eyebrow">{t.best}</div>
              <h3 className="mt-2 font-serif text-3xl text-bone">{t.name}</h3>
              <p className="mt-2 text-sm text-foreground/60">{t.tagline}</p>

              <div className="mt-6 flex items-end gap-3 border-y border-white/10 py-6">
                <div className="font-serif text-4xl text-bone md:text-5xl">{t.usd}</div>
                <div className="pb-2 text-xs uppercase tracking-[0.2em] text-foreground/55">one-time</div>
              </div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-gold)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-xs">
                <div>
                  <div className="text-foreground/50 uppercase tracking-[0.18em]">ROI</div>
                  <div className="mt-1 font-serif text-base text-bone">{t.roi}</div>
                </div>
                <div>
                  <div className="text-foreground/50 uppercase tracking-[0.18em]">Extra Revenue</div>
                  <div className="mt-1 font-serif text-base text-bone">{t.revenue}</div>
                </div>
              </div>

              <a
                href={waLink(`Hi Javier, I'd like to get started with the ${t.name} package.`)}
                target="_blank"
                rel="noreferrer"
                className={`mt-7 justify-center ${t.highlight ? "btn-gold" : "btn-ghost"}`}
              >
                Get Started
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="border border-white/10 bg-[#0E0E0E] p-7">
            <div className="eyebrow">Optional ongoing support</div>
            <div className="mt-3 flex items-end gap-3">
              <span className="font-serif text-3xl text-bone">$50 USD</span>
              <span className="pb-1 text-xs uppercase tracking-[0.2em] text-foreground/55">/ month</span>
            </div>
            <ul className="mt-5 grid gap-2 text-sm text-foreground/75 sm:grid-cols-2">
              {[
                "Premium lightning-fast hosting",
                "Security updates + SSL maintenance",
                "Up to 2 content updates / month",
                "Email + phone support",
                "Monthly performance reports",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 text-[var(--color-gold)]" />{f}</li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 bg-[#0E0E0E] p-7">
            <div className="eyebrow">What "100% Ownership" means</div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/75">
              Your website is 100% yours. You own all content, design and code. We provide hosting through Lovable (included in ongoing support). If you choose to move your site or manage it yourself, you can — anytime, no lock-in.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/75">
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" />Secure online payments via Stripe & local gateways. We never store card credentials.</li>
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" />30-day money-back guarantee: no improvement? We redesign for free.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Portfolio placeholder -------------------------- */

function Portfolio() {
  return (
    <section id="portfolio" className="section-y border-t border-white/5">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">Case studies</span>
          <h2 className="display-lg mt-3 font-serif text-bone text-balance">
            Resorts That Will <span className="gold-grad-text italic">Trust Us</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="relative flex aspect-[4/5] flex-col justify-between border border-dashed border-white/15 bg-[#0E0E0E] p-7"
            >
              <div className="eyebrow">Case Study {n.toString().padStart(2, "0")}</div>
              <div>
                <div className="font-serif text-2xl text-bone">Coming soon</div>
                <p className="mt-3 text-sm text-foreground/55">
                  Currently working with boutique resorts to prove results.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-gold)]">Q1 2026</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="max-w-xl text-foreground/70">
            Our first case study lands in 60 days. <span className="text-bone">Want to be next? Let's talk.</span>
          </p>
          <a href={waLink("Hi Javier, I'd like to schedule an audit call.")} target="_blank" rel="noreferrer" className="btn-gold">
            Schedule Your Audit Call <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Commitments -------------------------- */

function Commitments() {
  const items = [
    { icon: "🔒", title: "Security First", body: "All client data encrypted with 256-bit SSL. Secure hosting. We take cybersecurity as seriously as you do. No shortcuts. Ever." },
    { icon: "🔑", title: "Full Ownership", body: "Your website belongs to you. 100%. Not rented. Not locked in. You own the domain, the content, the design — everything." },
    { icon: "💬", title: "Transparent Communication", body: "No surprises. We communicate clearly and often. Monthly reports. Direct contact. You'll always know what's happening." },
    { icon: "📈", title: "Results-Focused", body: "We're not paid to build. We're paid to increase your revenue. If the site doesn't convert, we fix it for free. Your success is my success." },
    { icon: "🌍", title: "Local Support", body: "I'm based in Trinidad. I understand your market. Direct access. No outsourced support. You get me." },
  ];
  return (
    <section className="section-y border-t border-white/5 bg-[#0B0B0B]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">Our promise</span>
          <h2 className="display-lg mt-3 font-serif text-bone text-balance">
            Our Commitment <span className="gold-grad-text italic">To You</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div key={c.title} className="bg-[#0B0B0B] p-7 md:p-8">
              <div className="text-2xl">{c.icon}</div>
              <h3 className="mt-5 font-serif text-xl text-bone">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- About -------------------------- */

function About() {
  return (
    <section id="about" className="section-y border-t border-white/5">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={founderJavier}
              alt="Javier Ortega, Founder of Prime Beat Studios"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--color-gold)]/20" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow">About</span>
          <h2 className="display-lg mt-3 font-serif text-bone text-balance">
            Who's Behind <span className="gold-grad-text italic">Prime Beat Studios?</span>
          </h2>

          <div className="mt-7 space-y-5 text-foreground/75">
            <p>
              Hi, I'm <span className="text-bone">Javier Ortega</span>, Founder of Prime Beat Studios.
            </p>
            <p>
              I started this because I noticed a problem: resort owners in Trinidad were losing thousands of dollars
              every month to OTA commissions. Their websites looked nice but didn't convert. They were told to “do more
              marketing” when they really needed a better sales funnel.
            </p>
            <p className="text-bone">I'm fixing that.</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              ["I don't just build websites", "I build revenue systems."],
              ["Conversion-tested", "Every design choice is measured."],
              ["3–4 resorts at a time", "You get my full attention."],
              ["Local to Trinidad", "I understand this market deeply."],
            ].map(([t, b]) => (
              <div key={t} className="border-l border-[var(--color-gold)]/40 pl-4">
                <div className="font-serif text-base text-bone">{t}</div>
                <div className="mt-1 text-sm text-foreground/65">{b}</div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6 text-sm text-foreground/70">
            <a href="mailto:javier@primebeatstudios.com" className="link-underline flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-[var(--color-gold)]" /> javier@primebeatstudios.com
            </a>
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-[var(--color-gold)]" /> +1 (868) 338-5785
            </span>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold !py-2 !px-4 !text-[11px]">
              <MessageCircle className="h-3.5 w-3.5" /> Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- FAQ -------------------------- */

const FAQS = [
  ["How long until I see results?", "You'll see your new website in 2–3 weeks. First direct bookings typically arrive 7–10 days after launch. Noticeable revenue increase within 4–6 weeks as optimization continues."],
  ["What if I'm not happy with the design?", "We include 2 rounds of revisions during the build process. Plus 7 days of post-launch support for technical issues. The focus is on conversion — you'll see the difference immediately."],
  ["Do I have to pay monthly?", "The website is a one-time payment ($500–$2,500 USD). Optional: $50 USD/month for ongoing hosting, updates and support. You're never locked in — you own 100% of your website."],
  ["What if my website doesn't increase bookings?", "I'm confident enough to offer this: if you don't see improvement in 30 days, I'll redesign specific sections for free until it converts. Your success is my success."],
  ["How much will I actually save?", "Use the calculator above to see YOUR specific number. For a 15-room resort losing $6,200/month to commissions, moving 25% direct saves $1,837 USD/month — $22,050 USD/year."],
  ["What about security? Can I trust you with my domain?", "All work is done on encrypted staging servers. Your domain security is paramount. Weekly progress updates and full transparency. 256-bit SSL on all sites, always."],
  ["Do you offer hosting?", "Yes — hosting is included in the optional $50 USD/month support package. Alternatively, you can host anywhere you prefer. You own your website completely."],
  ["How long does the process take?", "Start to finish: 2–3 weeks. Discovery (3 days) → Design (7 days) → Launch & testing (3–4 days) → Live."],
  ["Can you integrate with my existing booking system?", "Depends on your system. I work with most major platforms (Airbnb XML feeds, Booking.com integration, etc.). We'll discuss your specific setup during the audit."],
  ["What happens after launch?", "You own the website completely. Optional $50 USD/month support includes hosting, security updates and up to 2 content edits per month. But you never need me again if you don't want to."],
] as const;

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-y border-t border-white/5 bg-[#0B0B0B]">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="display-lg mt-3 font-serif text-bone text-balance">Common Questions</h2>
          <p className="mt-5 text-foreground/65">
            Still on the fence? Reach out directly.
          </p>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-ghost mt-7 inline-flex">
            Ask On WhatsApp
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10 lg:col-span-8">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-bone md:text-xl">{q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-[var(--color-gold)] transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <div className="min-h-0 max-w-2xl text-sm leading-relaxed text-foreground/70">{a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Contact / Final CTA -------------------------- */

function Contact() {
  return (
    <section id="contact" className="section-y relative overflow-hidden border-t border-white/5">
      <div className="hero-aurora absolute inset-0 opacity-60" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h2 className="display-lg mt-3 font-serif text-bone text-balance">
            Ready to Stop Losing Money to <span className="gold-grad-text italic">Commissions?</span>
          </h2>
          <p className="mt-5 max-w-2xl text-foreground/70">
            Pick one and let's get started. No commitment. No pressure. Just a conversation about your potential.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <a href="#calculator" className="gold-border-glow flex flex-col justify-between bg-[#0E0E0E] p-7 transition-transform hover:-translate-y-1">
            <div>
              <div className="eyebrow text-[var(--color-gold)]">Option 01</div>
              <h3 className="mt-3 font-serif text-2xl text-bone">Calculate Your Savings Now</h3>
              <p className="mt-3 text-sm text-foreground/65">Free ROI calculation, instantly.</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-[var(--color-gold)]">
              Open calculator <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>

          <a
            href={waLink("Hi Javier, I'd like to schedule a 15-min audit call.")}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-between border border-white/10 bg-[#0E0E0E] p-7 transition-colors hover:border-[var(--color-gold)]/50"
          >
            <div>
              <div className="eyebrow">Option 02</div>
              <h3 className="mt-3 font-serif text-2xl text-bone">Schedule a 15-Min Audit Call</h3>
              <p className="mt-3 text-sm text-foreground/65">Free analysis of your current website.</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-foreground/80">
              <Calendar className="h-4 w-4" /> Book via WhatsApp
            </span>
          </a>

          <a href="#pricing" className="flex flex-col justify-between border border-white/10 bg-[#0E0E0E] p-7 transition-colors hover:border-[var(--color-gold)]/50">
            <div>
              <div className="eyebrow">Option 03</div>
              <h3 className="mt-3 font-serif text-2xl text-bone">View Pricing & Packages</h3>
              <p className="mt-3 text-sm text-foreground/65">Transparent tiers and what's included.</p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-foreground/80">
              See pricing <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>

        <p className="mt-10 text-sm text-foreground/65">
          Or reach out directly:{" "}
          <a href="mailto:javier@primebeatstudios.com" className="link-underline text-bone">javier@primebeatstudios.com</a>
          {" · "}
          <a href={waLink()} target="_blank" rel="noreferrer" className="link-underline text-[var(--color-gold)]">
            Message on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}

/* -------------------------- Footer -------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rotate-45 bg-[var(--color-gold)]" />
            <span className="font-serif text-base">Prime Beat <span className="gold-text">Studios</span></span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-foreground/60">
            Premium websites built for local resorts. Direct bookings, owned data, real ROI.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div>
          <div className="eyebrow">Quick Links</div>
          <ul className="mt-5 space-y-2.5 text-sm text-foreground/70">
            {[
              ["Home", "#top"],
              ["Services", "#process"],
              ["Pricing", "#pricing"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="link-underline">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-5 space-y-2.5 text-sm text-foreground/70">
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[var(--color-gold)]" /> javier@primebeatstudios.com</li>
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[var(--color-gold)]" /> +1 (868) 338-5785</li>
            <li>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[var(--color-gold)] hover:underline">
                <MessageCircle className="h-3.5 w-3.5" /> Message on WhatsApp
              </a>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            {[
              { i: <Linkedin className="h-3.5 w-3.5" />, h: "#" },
              { i: <Instagram className="h-3.5 w-3.5" />, h: "#" },
            ].map((s, i) => (
              <a key={i} href={s.h} className="grid h-9 w-9 place-items-center border border-white/15 text-foreground/70 hover:border-[var(--color-gold)]/60 hover:text-[var(--color-gold)]">
                {s.i}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow">Location</div>
          <p className="mt-5 font-serif text-lg text-bone">Trinidad & Tobago</p>
          <p className="mt-2 text-sm text-foreground/60">
            Local support, local understanding, local results.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-5 text-[11px] uppercase tracking-[0.22em] text-foreground/45 md:flex-row">
          <span>© 2026 Prime Beat Studios · Trinidad & Tobago</span>
          <div className="flex gap-5">
            <a href="#" className="link-underline">Privacy Policy</a>
            <a href="#" className="link-underline">Terms of Service</a>
            <a href="#" className="link-underline">Refund Policy</a>
          </div>
          <span>Built with integrity. Designed for results.</span>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------- Floating WhatsApp -------------------------- */

function FloatingWhatsApp(): ReactElement {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--color-gold)] text-[#0A0A0A] shadow-[0_18px_50px_-12px_rgba(184,156,92,0.6)] transition-transform hover:scale-110 md:bottom-7 md:right-7"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

/* -------------------------- Page -------------------------- */

function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Calculator />
      <Pillars />
      <Process />
      <Pricing />
      <Portfolio />
      <Commitments />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
