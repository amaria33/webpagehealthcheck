'use client';

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import pageMockup from "../../assets/page.jpeg";
import heroLaptopMock from "../../assets/laptop1.png";

const starterMockup = "/starter-mockup.svg";
const faqItems = [
  {
    question: "When does the sale end?",
    answer:
      "The discount disappears the moment the reserved Starter Site slots are booked. I'll update you right away when we're down to the last slot.",
  },
  {
    question: "Can I reserve my spot now and start later?",
    answer:
      "Absolutely. Secure your 50% off today and we'll schedule your build within the next 60 days — plenty of time to gather content.",
  },
  {
    question: "Is this the same Starter Site package?",
    answer:
      "Yes. You're receiving the complete Starter Site experience, the same attention to detail, and the same launch support — only the price is lower for a short window.",
  },
  {
    question: "Can I upgrade or add pages later?",
    answer:
      "Of course. We can grow your site into a multi-page experience whenever you're ready. Your Starter Site becomes the perfect foundation.",
  },
];

const addOnGroups = [
  {
    title: "Launch Prep Essentials",
    blurb: "Perfect pairing for your first launch so nothing stalls your momentum.",
    items: [
      {
        name: "Custom Domain Setup",
        description: "Connect or purchase your .com and configure DNS & SSL.",
        price: "$25",
      },
      {
        name: "Email Setup",
        description: "Create name@yourdomain.com via Google Workspace.",
        price: "$10/month",
      },
      {
        name: "Copywriting",
        description: "An extra page (or sales section) written for voice & conversions.",
        price: "$75",
      },
      {
        name: "Booking Calendar Setup",
        description: "Calendly or TidyCal integration with confirmation emails.",
        price: "$50",
      },
    ],
  },
  {
    title: "Growth Boosters",
    blurb: "Add-ons that help you capture leads and nurture your first clients.",
    items: [
      {
        name: "Blog/News Setup",
        description: "Design + format your first two posts with SEO-ready structure.",
        price: "$75",
      },
      {
        name: "SEO Optimization",
        description: "Keyword research, on-page meta tags, and analytics tracking.",
        price: "$125",
      },
      {
        name: "Brand Kit Design",
        description: "Canva logo, color palette, and typography quick-reference.",
        price: "$100",
      },
      {
        name: "Social Media Integration",
        description: "Link buttons, share images, and OpenGraph previews.",
        price: "$50",
      },
    ],
  },
];

export default function StarterSitePromoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F6] via-[#FFFFFF] to-[#F4C2C2]/20 text-[#2B2B2B]">
      <main className="overflow-hidden">
        {/* Announcement Bar */}
        <div className="bg-[#3A2F32] text-white/95">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 py-3 text-sm font-semibold text-white/80 md:text-base">
            <span className="text-lg">🕒</span>
            <span className="uppercase tracking-[0.2em]">
              Special Release: Starter Sites 50% Off — Guided Build Included
            </span>
          </div>
        </div>

        {/* Quick Nav */}
        <nav className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow-sm">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6 py-3 text-sm font-semibold text-[#2B2B2B]/70 md:justify-between">
            <span className="uppercase tracking-[0.3em] text-[#E8A9B8]">
              Explore
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {[
                { href: "#overview", label: "Offer Overview" },
                { href: "#process", label: "How It Works" },
                { href: "#proof", label: "Client Wins" },
                { href: "#faq", label: "FAQs" },
                { href: "#book", label: "Start My Site" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-[#E8A9B8]/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2B2B2B]/70 transition-colors hover:border-[#E8A9B8] hover:text-[#E8A9B8]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="overview" className="relative px-6 py-20 md:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(232,169,184,0.25),rgba(244,194,194,0)_55%)]" />
          <div className="hero relative mx-auto grid min-h-[520px] max-w-6xl gap-12 items-center px-4 md:grid-cols-[1.1fr,0.9fr] md:px-6">
            <div className="space-y-8 md:space-y-10">
              <div className="hero-flex flex flex-col gap-8 md:items-start md:justify-between">
                <div className="space-y-5 md:space-y-6 md:max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E47DA0]">
                    Starter Site, Done-For-You in 7 Days — Now 50% Off
                  </p>
                <h1 className="text-4xl font-bold leading-tight text-[#2B2B2B] md:text-5xl lg:text-6xl">
                    No DIY, no guesswork. I write, build, and launch the site you're proud to share.
                </h1>
                  <p className="price-line pt-2 text-base text-[#555555] md:text-lg">
                    Full professional build, now just $150.
                  </p>
                  <p className="text-base text-[#2B2B2B]/70 md:text-lg">
                    For solopreneurs, creatives, and startup nonprofits ready to launch a professional one-page site — fast.
                  </p>
                  <p className="text-base font-semibold text-[#2B2B2B]/75">
                    ⭐ Trusted by new founders and startup nonprofits — launch-ready in just 7 days.
                  </p>
                </div>
                <div className="hero-art pointer-events-none md:self-start">
                  <Image
                    src={heroLaptopMock}
                    alt=""
                    width={520}
                    height={360}
                    className="hero-art-image drop-shadow-2xl"
                    priority
                    aria-hidden="true"
                    loading="eager"
                    fetchPriority="high"
                  />
              </div>
                </div>
              <div className="hero-cta flex flex-wrap items-center gap-4 md:-mt-8 md:flex-nowrap">
                <Link
                  href="https://form.jotform.com/253147754374059"
                  className="inline-flex items-center justify-center rounded-lg bg-[#E8A9B8] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#E8A9B8]/40 transition-all hover:-translate-y-0.5 hover:bg-[#E8A9B8]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B878]"
                >
                  Start My Site
                </Link>
                <Link
                  href="mailto:hello@builtbyashley.com"
                  className="inline-flex items-center justify-center rounded-lg border border-[#E8A9B8] bg-white px-8 py-4 text-base font-semibold text-[#E8A9B8] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D8B878] hover:text-[#D8B878] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9B8]"
                >
                  Talk With Ashley
                </Link>
              </div>
              <p className="text-sm font-semibold text-[#2B2B2B]/70">
                Trusted by new founders and startup nonprofits launching their first online presence.
              </p>
              <div className="urgency-bar inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm">
                <span className="icon text-base">⚡</span>
                <span>75% of discounted Starter Sites have been claimed — secure yours before pricing returns to $300.</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#E8A9B8]/50 bg-white/85 px-4 py-2 text-sm font-medium text-[#2B2B2B]/70 shadow-sm" id="slots-hero">
                  <span className="h-2 w-2 rounded-full bg-[#D8B878]" />
                  Only 7 discounted Starter Sites left this month.
                </p>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/60 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E8A9B8]" />
                  Reserve now & launch within a week
                </p>
                </div>
              <div className="space-y-3 rounded-2xl border border-[#E8A9B8]/40 bg-white/85 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E8A9B8]">
                  Not ready to launch yet?
                </p>
                <p className="text-base text-[#2B2B2B]/75">
                  Get my free "Next Five Steps" guide - a quick checklist to prep your site launch like a pro.
                </p>
                <Link
                  href="https://form.jotform.com/253148490064053"
                  className="inline-flex items-center justify-center rounded-lg border border-[#E8A9B8] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#E8A9B8] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D8B878] hover:text-[#D8B878] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9B8]"
                >
                  Join My Email List
                </Link>
                <p className="text-xs text-[#2B2B2B]/60">
                  No spam. Just short, practical website launch tips once or twice a month.
                </p>
              </div>
              <p className="text-sm font-medium text-[#2B2B2B]/60">
                Warm, guided partnership from blank page to live launch—no experience required.
              </p>
            </div>

            <div className="relative">
              <Image
                src={heroLaptopMock}
                alt="Starter Site sample homepage on laptop"
                width={520}
                height={320}
                className="absolute -top-16 right-[-6rem] hidden w-[420px] max-w-none md:block drop-shadow-2xl"
                priority
              />
              <div className="absolute -right-4 top-6 hidden h-72 w-72 rounded-full bg-[#E8A9B8]/20 blur-3xl md:block" />
              <div className="relative rounded-3xl border border-white/60 bg-white/95 p-6 shadow-2xl shadow-[#E8A9B8]/20 backdrop-blur">
                <div className="space-y-6">
                  <div className="space-y-4 text-center md:text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E8A9B8]">
                    Starter Site Snapshot
                  </p>
                  <h2 className="text-3xl font-bold text-[#2B2B2B]">
                    Done-for-you website, ready in a week
                  </h2>
                    <ul className="space-y-3 text-left text-base text-[#2B2B2B]/80">
                      {[
                        {
                          label: "1 custom page (Home, About, or Contact)",
                          dot: "#D8B878",
                        },
                        {
                          label: "Domain connection assistance",
                          dot: "#E8A9B8",
                        },
                        {
                          label: "Responsive mobile design",
                          dot: "#B8A9A5",
                        },
                        {
                          label: "1 round of edits included",
                          dot: "#F4C2C2",
                      },
                      ].map(({ label, dot }) => (
                        <li
                          key={label}
                          className="flex items-start gap-3 rounded-2xl border border-[#F4C2C2]/50 bg-[#FFF9F6]/70 px-4 py-3 shadow-sm"
                        >
                          <span
                            className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                            style={{ backgroundColor: dot }}
                          >
                            ✓
                          </span>
                          {label}
                    </li>
                      ))}
                  </ul>
                  </div>

                  <div className="space-y-5 rounded-2xl border border-[#F4C2C2]/70 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F4C2C2]/40 px-6 py-7 shadow-sm">
                    <div className="flex flex-col gap-3 text-center md:flex-row md:items-end md:justify-between">
                      <div className="md:text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/50 line-through">
                          Was $300
                          </p>
                          <p className="text-4xl font-bold text-[#2B2B2B]">
                          Now $150
                          </p>
                        </div>
                      <span className="inline-flex items-center justify-center rounded-full bg-[#D8B878]/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B878]">
                            For a limited time
                          </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#E8A9B8]/40 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8A9B8]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#E8A9B8]" />
                            Launch guarantee included
                          </span>
                        </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/60 text-center">
                      Same full experience, now half off
                    </p>
                    </div>

                    <Link
                      href="https://form.jotform.com/253147754374059"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#E8A9B8] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#E8A9B8]/40 transition-transform hover:-translate-y-0.5 hover:bg-[#E8A9B8]/90"
                    >
                    Start My Site
                    </Link>
                  <p className="text-sm font-medium text-[#2B2B2B]/60 text-center md:text-left">
                      Prefer to chat first?{" "}
                      <Link
                        href="mailto:hello@builtbyashley.com"
                        className="font-semibold text-[#E8A9B8] underline decoration-[#E8A9B8]/40 underline-offset-4 hover:decoration-[#E8A9B8]"
                      >
                        Email Ashley to schedule a consult call.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* Trust Strip */}
        <section className="px-6 py-10 bg-white">
          <div className="mx-auto grid max-w-5xl gap-4 rounded-3xl border border-[#F4C2C2]/50 bg-white/95 px-6 py-6 shadow-md shadow-[#E8A9B8]/20 text-sm font-semibold text-[#2B2B2B]/70 md:grid-cols-3 md:text-base">
            {[
              {
                stat: "Early Partners",
                label: "Welcoming first founders into the Starter Site experience with 1:1 support",
              },
              {
                stat: "7 days",
                label: "Average time from kickoff call to live homepage",
              },
              {
                stat: "0 DIY",
                label: "Copy, design, tech, and launch handled for you",
              },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="flex flex-col items-center gap-1 rounded-2xl bg-[#FFF9F6]/70 p-4 text-center shadow-sm md:items-start md:text-left"
              >
                <span className="text-2xl font-bold text-[#E8A9B8]">{stat}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="px-6 py-16 md:py-20 bg-white/90">
          <div className="mx-auto max-w-6xl space-y-12 rounded-3xl border border-[#F4C2C2]/50 bg-white/95 p-8 shadow-xl shadow-[#E8A9B8]/15 md:p-14">
            <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                    What's Included in Your Starter Site
                  </h2>
                  <p className="text-lg text-[#2B2B2B]/75">
                    The essentials that make your 1-page website polished,
                    connected, and ready to make a great first impression.
                  </p>
                </div>
                <ul className="grid gap-4 text-base text-[#2B2B2B]/80 md:grid-cols-2">
                  {[
                    "1 custom page (Home, About, or Contact)",
                    "Domain connection assistance",
                    "Responsive mobile design",
                    "1 round of edits",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-[#F4C2C2]/60 bg-[#FFF9F6]/80 px-4 py-4 shadow-sm"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3 rounded-2xl border border-[#E8A9B8]/40 bg-[#E8A9B8]/10 px-6 py-5 text-[#2B2B2B]/80">
                  <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-[#E8A9B8]">
                    Need More Support?
                  </h3>
                  <p>
                    Explore the hosting and add-on services below whenever
                    you&apos;re ready to expand your Starter Site.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#E8A9B8]/30 via-[#F4C2C2]/20 to-[#D8B878]/25 blur-3xl"></div>
                <div className="relative overflow-hidden rounded-3xl border border-[#F4C2C2]/60 bg-white shadow-2xl shadow-[#E8A9B8]/20">
                  <Image
                    src={starterMockup}
                    alt="Simple 1-page Starter Site layout mockup with hero, content blocks, and CTA"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <p className="border-t border-[#F4C2C2]/60 bg-white px-6 py-4 text-center text-sm font-semibold text-[#2B2B2B]/70">
                    Visual mockup: simple 1-page layout with hero, content blocks,
                    and CTA.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base font-medium text-[#2B2B2B]/75">
              Perfect for personal brands, consultants, non profits, and
              creatives who want a clean, credible online presence without the
              tech overwhelm.
            </p>
          </div>
        </section>

        {/* First Clients Focus */}
        <section className="px-6 py-12 md:py-16 bg-white">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-[#E8A9B8]/40 bg-[#FFF9F6]/80 p-8 shadow-lg shadow-[#E8A9B8]/20 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 md:max-w-xl">
              <h3 className="text-2xl font-bold text-[#2B2B2B]">
                Your First Clients, Simplified
              </h3>
              <p className="text-base text-[#2B2B2B]/75">
                I build the core pieces you need to start booking conversations,
                even if you&apos;re juggling a full-time job.
              </p>
              <ul className="space-y-3 text-sm text-[#2B2B2B]/75 md:text-base">
                {[
                  "Hero, service highlight, and trust-strip copy written for you.",
                  "Inquiry or booking form connected directly to your inbox or calendar.",
                  "30-day post-launch support so you can request tweaks as you get feedback.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D8B878]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-[#F4C2C2]/50 bg-white p-6 text-sm text-[#2B2B2B]/75 shadow-sm md:max-w-xs">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A9B8]">
                Launch Notes
              </span>
              <p>
                You&apos;ll also receive a simple “Next Five Steps” guide covering
                what to post, who to notify, and how to announce your site without
                a marketing team.
              </p>
            </div>
          </div>
        </section>

        {/* Hosting & Support */}
        <section className="px-6 py-16 md:py-20 bg-[#FFF9F6]">
          <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-[#F4C2C2]/50 bg-white/95 p-10 shadow-lg shadow-[#E8A9B8]/20">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                Simple Monthly Hosting & Support
              </h2>
              <p className="text-lg text-[#2B2B2B]/75">
                Your website stays online and secure with ongoing support and
                updates from BuiltByAshley. No hidden fees — just reliable care
                for your site.
              </p>
            </div>
            <div className="space-y-5 rounded-2xl border border-[#E8A9B8]/40 bg-[#FFF9F6]/80 p-6 text-center md:text-left">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E8A9B8]">
                    Hosting & Support
                  </p>
                  <p className="mt-2 text-3xl font-bold text-[#2B2B2B]">
                    $25/month
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D8B878]/50 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B878]">
                  Includes monitoring, updates, and priority fixes
                </span>
              </div>
              <div className="rounded-2xl border border-dashed border-[#E8A9B8]/50 bg-white/60 px-5 py-4 text-sm text-[#2B2B2B]/75">
                <p>
                  Need full maintenance, backups, and quarterly SEO refresh? Add
                  the Care Plan at{" "}
                  <span className="font-semibold text-[#2B2B2B]">$90/month</span>{" "}
                  whenever you&apos;re ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Optional Add-Ons */}
        <section id="add-ons" className="px-6 py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl space-y-8 rounded-3xl border border-[#F4C2C2]/50 bg-white/95 p-10 shadow-xl shadow-[#E8A9B8]/20">
            <div className="space-y-3 text-center md:text-left">
              <span className="inline-flex items-center justify-center rounded-full bg-[#E8A9B8]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A9B8]">
                Section 4 — Optional Add-Ons
              </span>
              <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                Add More Power to Your Starter Site
              </h2>
              <p className="text-lg text-[#2B2B2B]/75">
                Choose additional services anytime to deepen your site&apos;s
                impact and keep momentum strong. We&apos;ll confirm what fits
                during your vision call.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {addOnGroups.map(({ title, blurb, items }) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-[#F4C2C2]/60 bg-white/95 p-6 shadow-sm shadow-[#E8A9B8]/15"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#2B2B2B]">
                      {title}
                    </h3>
                    <p className="text-sm text-[#2B2B2B]/70">{blurb}</p>
                  </div>
                  <ul className="space-y-4">
                    {items.map(({ name, description, price }) => (
                      <li
                        key={name}
                        className="rounded-xl border border-[#F4C2C2]/40 bg-[#FFF9F6]/75 p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-base font-semibold text-[#2B2B2B]">
                            {name}
                          </span>
                          <span className="text-sm font-semibold text-[#E8A9B8]">
                            {price}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-[#2B2B2B]/70">
                          {description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-center text-[#2B2B2B]/60">
              Add-ons are optional. Start simple, then layer in growth pieces as
              your offers evolve.
            </p>
          </div>
        </section>

        {/* Why this sale exists */}
        <section id="why" className="px-6 py-20 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                Why I&apos;m Offering 50% Off Right Now
              </h2>
              <p className="text-lg text-[#2B2B2B]/75">
                I&apos;m offering this 50% off Starter Site promotion as I expand the BuiltByAshley portfolio and partner with more small business owners, creatives, and startup nonprofits. This lets you launch confidently while I continue refining and showcasing beautiful, conversion-ready websites. Once these limited spots are filled, pricing returns to the standard rate.
              </p>
            </div>

            <div className="grid gap-6 rounded-3xl bg-gradient-to-br from-[#F4C2C2]/30 via-[#FFF9F6] to-[#E8A9B8]/30 p-8 shadow-lg md:grid-cols-2 md:p-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#2B2B2B]">
                  You&apos;ll receive
                </h3>
                <ul className="space-y-3 text-[#2B2B2B]/75">
                  <li>Brand-aligned copy and layout crafted for conversions</li>
                  <li>Launch checklist so you feel supported every step</li>
                  <li>
                    Friendly, values-centered partnership focused on service
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#2B2B2B]">
                  What I ask in return
                </h3>
                <ul className="space-y-3 text-[#2B2B2B]/75">
                  <li>Reserve quickly — these discounted seats are limited</li>
                  <li>Be ready with your photos, logo, and favorite colors</li>
                  <li>Bring your vision — I&apos;ll bring the polish</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Launch Plan */}
        <section id="process" className="px-6 py-20 md:py-24 bg-[#FFFFFF]/90">
          <div className="mx-auto max-w-6xl space-y-14">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                What Happens After You Book
              </h2>
              <p className="text-lg text-[#2B2B2B]/75">
                A clear, three-step path that takes you from idea to live site
                in one week—no web experience needed.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Step 1 · Intake & Project Brief",
                  description:
                    "Complete the secure intake form and payment to reserve your spot. Share your goals, audience, visuals, and inspiration—I review everything and confirm your launch timeline within 24 hours.",
                },
                {
                  title: "Step 2 · Copy, Design & Build",
                  description:
                    "I write your site copy, design the layout, and build everything inside my workspace. You review a preview link and request one thoughtful round of edits.",
                },
                {
                  title: "Step 3 · Launch & Hand-Off",
                  description:
                    "We connect your domain, launch together, and walk through your personalized launch checklist. You receive simple instructions for future tweaks.",
                },
              ].map(({ title, description }, index) => (
                <div
                  key={title}
                  className="flex h-full flex-col rounded-3xl border border-[#F4C2C2]/40 bg-white p-8 shadow-lg shadow-[#E8A9B8]/20"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F4C2C2]/60 bg-[#FFF9F6]/80 text-lg font-bold text-[#F4C2C2] md:h-12 md:w-12 md:text-xl">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-[#2B2B2B] md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-base text-[#2B2B2B]/75">
                    {description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#2B2B2B]/60">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#E8A9B8]" />
                    <span>
                      {index === 0
                        ? "Receive a personalized content checklist and upload links right after intake."
                        : index === 1
                        ? "You get a private preview link and clear edit form."
                        : "You’re backed by 30 days of support plus hosting stewardship."}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-gradient-to-r from-[#E8A9B8]/20 via-[#F4C2C2]/25 to-[#D8B878]/20 p-8 shadow-inner">
                <div className="flex flex-col items-center gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/70 sm:flex-row sm:items-center sm:gap-8">
                  {[
                    { day: "Day 1", label: "Intake Form & Kickoff" },
                    { day: "Day 4", label: "Preview & Edits" },
                    { day: "Day 7", label: "Launch & Support" },
                  ].map(({ day, label }, idx) => (
                    <Fragment key={day}>
                      <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                        <span className="inline-flex h-9 min-w-[8rem] items-center justify-center rounded-full border border-white/40 bg-white/80 px-6 text-base font-bold text-[#E8A9B8] shadow-sm">
                          {day}
                        </span>
                        <span className="text-xs text-[#2B2B2B]/60 sm:text-sm">
                          {label}
                        </span>
                      </div>
                      {idx < 2 && (
                        <div className="hidden flex-1 items-center sm:flex">
                          <div className="flex w-full items-center gap-2">
                            <div className="h-0.5 flex-1 bg-gradient-to-r from-white/50 via-white/30 to-white/10" />
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/70 text-lg font-bold text-[#D8B878] shadow-sm">
                              →
                            </span>
                            <div className="h-0.5 flex-1 bg-gradient-to-r from-white/10 via-white/30 to-white/50" />
            </div>
          </div>
                      )}
                    </Fragment>
                  ))}
            </div>
            </div>
              <p className="text-center text-base font-medium text-[#2B2B2B]/75">
                Need to move faster? Ask about the four-day accelerated build—
                perfect when you already have your copy and visuals ready to go.
              </p>
            </div>
          </div>
        </section>

        {/* Urgency & FAQs */}
        <section id="faq" className="px-6 py-20 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="flex flex-col gap-6 rounded-3xl bg-gradient-to-r from-[#E8A9B8]/20 via-[#FFF9F6] to-[#D8B878]/20 p-8 text-center shadow-lg md:flex-row md:items-center md:justify-between md:text-left">
              <div>
                <h2 className="text-3xl font-bold text-[#2B2B2B]">
                  Book before the discounted spots are gone
                </h2>
                <p className="mt-3 text-lg text-[#2B2B2B]/75">
                  Once these limited Starter Site slots are spoken for, pricing
                  returns to $300. Reserve now, begin when you&apos;re ready.
                </p>
              </div>
              <div className="flex justify-center">
              <Link
                href="https://form.jotform.com/253147754374059"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D8B878] px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#2B2B2B] shadow-lg shadow-[#D8B878]/30 transition-all hover:-translate-y-0.5 hover:bg-[#D8B878]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9B8]"
              >
                <span className="text-base md:text-lg">→</span>
                <span>Start My Site</span>
              </Link>
              </div>
            </div>

            <div className="space-y-4">
              {faqItems.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group rounded-2xl border border-[#F4C2C2]/60 bg-[#FFF9F6]/80 px-5 py-4 shadow-sm transition"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-[#2B2B2B] marker:content-['']">
                    {question}
                    <span className="text-xl text-[#E8A9B8] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-base text-[#2B2B2B]/75">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee & Support */}
        <section className="px-6 py-20 md:py-24 bg-[#FFF9F6]">
          <div className="mx-auto max-w-5xl space-y-10 rounded-3xl border border-[#E8A9B8]/40 bg-white/90 p-10 shadow-xl shadow-[#E8A9B8]/20">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                My Promise: Integrity, Excellence, and Ongoing Support
              </h2>
              <p className="text-lg text-[#2B2B2B]/75">
                You&apos;re not just buying a page — you&apos;re gaining a
                partner who cares about your mission and your momentum.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Launch Guarantee",
                  description:
                    "We stay in motion together. If your site isn’t ready within 10 business days of content delivery, I refund 25% of your fee.",
                },
                {
                  title: "Hosting Stewardship",
                  description:
                    "We handle the full technical setup — from hosting to domain connection — so your site launches smoothly. You’ll receive simple written instructions to manage small updates anytime.",
                },
                {
                  title: "Post-Launch Care",
                  description:
                    "Enjoy 30 days of email support plus discounted add-on updates so your site keeps serving you well.",
                },
              ].map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#F4C2C2]/50 bg-[#FFF9F6]/80 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#2B2B2B]">
                    {title}
                  </h3>
                  <p className="mt-3 text-base text-[#2B2B2B]/75">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#E8A9B8]/15 px-6 py-5 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#E8A9B8]">
              Steward-led design rooted in integrity, honesty, and joyful
              service
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section
          id="book"
          className="px-6 py-20 md:py-24 bg-gradient-to-br from-[#E8A9B8] via-[#E79CB2] to-[#D39A72] text-white"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-10 text-center md:text-left">
            <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl">
                Secure Your $150 Starter Site Before It&apos;s Gone
            </h2>
              <p className="text-lg font-semibold text-white/95 md:text-xl">
                Only <span className="font-bold">7 discounted Starter Sites</span> left this month. Claim yours and
                we&apos;ll launch a conversion-ready home that attracts your first
                clients.
            </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
              <Link
                href="https://form.jotform.com/253147754374059"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#E8A9B8] shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-[#FFF9F6]"
              >
                Start My Site
              </Link>
              <Link
                href="mailto:hello@builtbyashley.com"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Ask A Question
              </Link>
            </div>
            <div className="space-y-3 rounded-2xl bg-white/15 px-6 py-6 text-left text-sm text-white/85 md:text-base">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90 md:text-base">
                ⭐ What You Get With Your Starter Site
              </p>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <span>One simple payment — no invoices to juggle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">💬</span>
                  <span>30-day post-launch support + check-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">⚡</span>
                  <span>7-day guaranteed launch (or you earn a credit)</span>
                </li>
              </ul>
            </div>
            <p className="flex items-center gap-2 text-sm text-white/80 md:text-base">
              Prefer a personal touch? <span>📧</span>
              <Link
                href="mailto:hello@builtbyashley.com"
                className="font-semibold underline decoration-white/60 underline-offset-4 hover:decoration-white"
              >
                hello@builtbyashley.com
              </Link>
            </p>
          </div>
        </section>
      </main>
      <style jsx>{`
        .hero {
          position: relative;
          padding-bottom: 4rem;
        }

        .hero-art {
          position: absolute;
          top: clamp(3.5rem, 9vh, 5.25rem);
          right: 0;
          width: min(44vw, 540px);
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          pointer-events: none;
        }

        .hero-art::before {
          content: "";
          position: absolute;
          inset: auto -8% -8% -8%;
          background: radial-gradient(
            circle at 50% 60%,
            rgba(239, 192, 206, 0.35),
            transparent 70%
          );
          filter: blur(18px);
          z-index: -1;
        }

        .hero-art-image {
          width: 100%;
          max-width: 540px;
          height: auto;
          object-fit: contain;
        }

        .hero-flex {
          flex-direction: column;
        }

        @media (min-width: 901px) {
          .hero-flex {
            flex-direction: row;
          }
        }

        @media (max-width: 900px) {
          .hero {
            min-height: auto;
          }

          .hero-art {
            position: static;
            width: 100%;
            margin-top: 1.25rem;
            text-align: center;
            justify-content: center;
          }

          .hero-art::before {
            display: none;
          }

          .hero-art-image {
            max-width: 520px;
            margin: 0 auto;
            display: block;
          }

          .hero-cta {
            flex-direction: column;
            gap: 0.75rem;
          }
        }

        .hero-art img {
          animation: floatIn 0.7s ease-out 0.2s both;
        }

        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.985);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-art img {
            animation: none;
          }
        }

        .price-line {
          margin-bottom: 1.1rem;
        }

        .urgency-bar {
          background: #fdecef;
          border: 1px solid #f6cfe0;
          color: #5a4d52;
        }

        .urgency-bar .icon {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
