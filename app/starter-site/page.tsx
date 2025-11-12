'use client';

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import pageMockup from "../../assets/page.jpeg";

const starterMockup = "/starter-mockup.svg";
const announcementMessages = [
  "Special Release • Limited Time",
  "50% Off Starter Site • Same Full Service",
  "Launch-Ready In 7 Days • Guided Experience",
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
        <div className="bg-[#2B2B2B] text-white text-sm md:text-base">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-3 text-center md:flex-row md:text-left">
            <span className="font-semibold uppercase tracking-[0.25em] text-white/70">
              Starter Site Alert
            </span>
            <div className="relative flex-1 overflow-hidden">
              <div className="marquee flex items-center gap-6 whitespace-nowrap text-white/80">
                {announcementMessages.concat(announcementMessages).map(
                  (message, index) => (
                    <span
                      key={`${message}-${index}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] md:text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                      {message}
              </span>
                  )
                )}
              </div>
            </div>
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
                { href: "#book", label: "Book Now" },
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
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[1.1fr,0.9fr] items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#E8A9B8]/60 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm">
                <span className="rounded-full bg-[#E8A9B8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  50% Off
                </span>
                <span>Starter Site Special • Now Just $150</span>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E8A9B8]/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A9B8] shadow-sm">
                  Why Wait? Launch Week Starts Now
                </div>
                <h1 className="text-4xl font-bold leading-tight text-[#2B2B2B] md:text-5xl lg:text-6xl">
                  Launch Your Starter Website Today
                </h1>
                <div className="inline-flex items-center gap-3 rounded-2xl border border-[#E8A9B8] bg-[#E8A9B8]/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#E8A9B8] shadow-sm shadow-[#E8A9B8]/20 md:text-base">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8A9B8] text-white shadow-inner">
                    !
                  </span>
                  <span className="text-[#2B2B2B]">
                    Full Professional Build — Now Only $150
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-[#2B2B2B]/75 md:text-xl">
                  A polished one-page site tailored to your brand—connected, mobile-ready, and launched fast so you can show up with confidence.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#2B2B2B]/70">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#E8A9B8]" />
                    No DIY. I write, build, and launch for you.
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#D8B878]" />
                    Bring your ideas—leave the tech to me.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
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

              <p className="text-sm font-medium text-[#2B2B2B]/60">
                New to websites? I guide you from blank page to live launch—no experience required.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#2B2B2B]/70">
                <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#D8B878]" />
                  Only{" "}
                  <strong className="font-semibold text-[#E8A9B8]">7</strong>{" "}
                  discounted Starter Sites left
                </div>
                <div className="rounded-full bg-white/80 px-4 py-2 shadow-sm">
                  Offer ends when slots are gone
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/60 shadow-inner">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#E8A9B8] via-[#F4C2C2] to-[#D8B878] transition-all" />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/60">
                  <span>75% Of Sale Slots Claimed</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D8B878]" />
                    Book now to guarantee pricing
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-[#2B2B2B]/70 md:text-base">
                <div className="flex items-center gap-2 rounded-xl bg-white/80 px-4 py-3 shadow-sm">
                  <span className="text-lg text-[#E8A9B8]">★</span>
                  Now booking done-for-you Starter Sites
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/80 px-4 py-3 shadow-sm">
                  <span className="text-lg text-[#D8B878]">✓</span>
                  Values-led, integrity-first partnership
                </div>
              </div>
            </div>

            <div className="relative">
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
                      {
                        label: "Quick-start written guide with step-by-step tweaks",
                        dot: "#E8A9B8",
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
                      Book My $150 Starter Site
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
                stat: "Fresh Start",
                label: "Welcoming first founders into the Starter Site experience",
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
                I&apos;m offering an introductory 50% off Starter Sites as I grow
                the BuiltByAshley.com portfolio and partner with more small
                business owners, creatives, and new founders.
              </p>
              <p className="text-lg text-[#2B2B2B]/75">
                This limited-time offer lets you launch with confidence while I
                refine my process, expand the portfolio, and craft more clean,
                professional websites that convert.
              </p>
              <p className="text-lg text-[#2B2B2B]/75">
                Once these discounted portfolio spots are filled, the investment
                returns to the regular rate.
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
                <span>Book My Site</span>
              </Link>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "When does the sale end?",
                  answer:
                    "The discount disappears the moment the reserved Starter Site slots are booked. I’ll update you right away when we’re down to the last slot.",
                },
                {
                  question: "Can I reserve my spot now and start later?",
                  answer:
                    "Absolutely. Secure your 50% off today and we’ll schedule your build within the next 60 days — plenty of time to gather content.",
                },
                {
                  question: "Is this the same Starter Site package?",
                  answer:
                    "Yes. You’re receiving the complete Starter Site experience, the same attention to detail, and the same launch support — only the price is lower for a short window.",
                },
                {
                  question: "Can I upgrade or add pages later?",
                  answer:
                    "Of course. We can grow your site into a multi-page experience whenever you’re ready. Your Starter Site becomes the perfect foundation.",
                },
              ].map(({ question, answer }) => (
                <div
                  key={question}
                  className="rounded-2xl border border-[#F4C2C2]/50 bg-[#FFF9F6]/80 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#2B2B2B]">
                    {question}
                  </h3>
                  <p className="mt-3 text-base text-[#2B2B2B]/75">{answer}</p>
                </div>
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
          className="px-6 py-20 md:py-24 bg-gradient-to-br from-[#E8A9B8] via-[#F4C2C2] to-[#D8B878] text-white"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-10 text-center md:text-left">
            <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl">
                Secure Your $150 Starter Site Before It&apos;s Gone
            </h2>
              <p className="text-lg text-white/90 md:text-xl">
                Only a handful of discounted Starter Sites are open right now.
                Claim yours and we&apos;ll launch a conversion-ready home that
                attracts your first clients.
            </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
              <Link
                href="https://form.jotform.com/253147754374059"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#E8A9B8] shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-[#FFF9F6]"
              >
                Secure My $150 Site
              </Link>
              <Link
                href="mailto:hello@builtbyashley.com"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Ask A Question
              </Link>
            </div>
            <div className="space-y-3 rounded-2xl bg-white/10 px-6 py-5 text-left text-sm text-white/85 md:flex md:items-start md:justify-between md:gap-6 md:text-base">
              <div className="flex items-center gap-3 font-semibold uppercase tracking-[0.3em]">
                <span className="inline-flex h-3 w-3 rounded-full bg-[#D8B878]" />
                What You Get With Your Starter Site
              </div>
              <ul className="space-y-2 text-sm leading-relaxed md:text-base">
                <li>
                  Secure payment and intake handled in one form—no invoice
                  juggling.
                </li>
                <li>
                  30-day post-launch support, training, and a satisfaction
                  check-in are included.
                </li>
                <li>
                  We launch within 7 days of receiving your assets, guaranteed.
                  If we ever exceed 10 business days, you earn a credit toward
                  future updates.
                </li>
              </ul>
              <p className="text-xs text-white/70 md:text-sm">
                The 7-day launch promise keeps us moving quickly; the 10-business-day
                guarantee simply adds a safety net in case your review or edits
                need an extra day.
              </p>
            </div>
            <p className="text-sm text-white/80 md:text-base">
              Prefer a personal touch? Email{" "}
              <Link
                href="mailto:hello@builtbyashley.com"
                className="font-semibold underline decoration-white/60 underline-offset-4 hover:decoration-white"
              >
                hello@builtbyashley.com
              </Link>{" "}
              and I&apos;ll reply within one business day.
            </p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .marquee {
          display: inline-flex;
          min-width: 200%;
          animation: marquee 16s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
