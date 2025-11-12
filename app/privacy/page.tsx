import Link from "next/link";

const jotformPrivacyUrl = "/jotform-privacy";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-20 text-[#2B2B2B] dark:text-[#FFF9F6]">
      <header className="space-y-3 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Privacy &amp; Data Use</h1>
        <p className="text-base text-[#2B2B2B]/75 dark:text-[#FFF9F6]/70">
          I respect your time, trust, and inbox. This page outlines what happens
          when you share information through the Starter Site intake form.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-[#F4C2C2]/40 bg-white/95 p-6 shadow-sm shadow-[#E8A9B8]/15 dark:border-white/10 dark:bg-[#2B2B2B]/80 dark:shadow-[#E8A9B8]/10">
        <h2 className="text-xl font-semibold">What I Collect</h2>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Contact details (name, email, phone, preferred contact method)</li>
          <li>Business and brand information relevant to your Starter Site</li>
          <li>Project goals, page copy notes, and optional uploads (logos, photos)</li>
          <li>Hosting preference and add-on selections</li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-[#F4C2C2]/40 bg-white/95 p-6 shadow-sm shadow-[#E8A9B8]/15 dark:border-white/10 dark:bg-[#2B2B2B]/80 dark:shadow-[#E8A9B8]/10">
        <h2 className="text-xl font-semibold">How It&apos;s Used</h2>
        <ul className="space-y-2 text-sm md:text-base">
          <li>To scope, schedule, and deliver your Starter Site project</li>
          <li>To follow up about intake details, launch dates, and support</li>
          <li>
            To fulfil required paperwork (proposals, invoices, and post-launch
            documentation)
          </li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-[#F4C2C2]/40 bg-white/95 p-6 shadow-sm shadow-[#E8A9B8]/15 dark:border-white/10 dark:bg-[#2B2B2B]/80 dark:shadow-[#E8A9B8]/10">
        <h2 className="text-xl font-semibold">Storage &amp; Access</h2>
        <p className="text-sm md:text-base">
          Intake submissions are handled through Jotform with SSL encryption.
          Files and form responses live securely within Jotform and are accessed
          only by Ashley Maria and, if needed, any vetted contractors supporting
          your Starter Site. Submissions are retained for up to 18 months for
          project reference.
        </p>
        <p className="text-sm md:text-base">
          Payment is processed securely inside the intake form via Stripe
          Checkout. Card details never touch my servers.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-[#F4C2C2]/40 bg-white/95 p-6 shadow-sm shadow-[#E8A9B8]/15 dark:border-white/10 dark:bg-[#2B2B2B]/80 dark:shadow-[#E8A9B8]/10">
        <h2 className="text-xl font-semibold">Your Choices</h2>
        <ul className="space-y-2 text-sm md:text-base">
          <li>
            Request an update or deletion any time by emailing{" "}
            <Link
              href="mailto:hello@builtbyashley.com"
              className="font-semibold text-[#E8A9B8] transition hover:text-[#D8B878]"
            >
              hello@builtbyashley.com
            </Link>
            .
          </li>
          <li>
            Opt out of future email follow-ups at any time—just reply to any
            message and let me know.
          </li>
          <li>
            Need a copy of your intake or deliverables? I&apos;m happy to resend.
          </li>
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-[#F4C2C2]/40 bg-white/95 p-6 text-sm text-[#2B2B2B]/70 shadow-sm shadow-[#E8A9B8]/15 dark:border-white/10 dark:bg-[#2B2B2B]/80 dark:text-[#FFF9F6]/70 dark:shadow-[#E8A9B8]/10 md:text-base">
        <h2 className="text-xl font-semibold text-[#2B2B2B] dark:text-[#FFF9F6]">
          Additional Resources
        </h2>
        <p>
          For more detail on Jotform&apos;s infrastructure and policies, see{" "}
          <a
            href="https://www.jotform.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#E8A9B8] transition hover:text-[#D8B878]"
          >
            Jotform&apos;s Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://www.jotform.com/security/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#E8A9B8] transition hover:text-[#D8B878]"
          >
            Security Statement
          </a>
          . You can also review a summary of this policy in{" "}
          <Link
            href={jotformPrivacyUrl}
            className="font-semibold text-[#E8A9B8] transition hover:text-[#D8B878]"
          >
            plain-text form
          </Link>
          .
        </p>
      </section>

      <footer className="rounded-3xl border border-[#F4C2C2]/30 bg-white/95 p-6 text-center text-sm text-[#2B2B2B]/60 shadow-sm shadow-[#E8A9B8]/10 dark:border-white/10 dark:bg-[#2B2B2B]/80 dark:text-[#FFF9F6]/60">
        Have a question about data or privacy? Email{" "}
        <Link
          href="mailto:hello@builtbyashley.com"
          className="font-semibold text-[#E8A9B8] transition hover:text-[#D8B878]"
        >
          hello@builtbyashley.com
        </Link>{" "}
        and I&apos;ll respond within one business day.
      </footer>
    </main>
  );
}

