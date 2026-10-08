import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Samuel Schramm Meurer",
  description: "Privacy Policy for Samuel Schramm Meurer's personal portfolio and applications.",
};

const LAST_UPDATED = "October 8, 2026";
const CONTACT_EMAIL = "s.schramm@eldorado.io";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <div className="max-w-3xl mx-auto px-8 py-24">
        <div className="mb-16">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">
            Legal
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="font-mono text-sm text-neutral-500">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="space-y-12 font-mono">
          <section>
            <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-neutral-800">
              1. Overview
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              This Privacy Policy describes how Samuel Schramm Meurer (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;)
              handles information in connection with this website and any associated applications
              (&quot;Services&quot;). I am committed to protecting your privacy and being transparent
              about data practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-neutral-800">
              2. Information I Do Not Collect
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              This website is a personal portfolio. I do not:
            </p>
            <ul className="space-y-2 text-neutral-400 text-sm">
              {[
                "Collect, store, or process any personal information",
                "Use cookies or tracking technologies",
                "Require account registration or login",
                "Collect form submissions or contact data through this site",
                "Share data with third parties for advertising",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-neutral-600 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-neutral-800">
              3. Third-Party Services
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              This site is hosted on Railway. Railway may collect standard server logs including
              IP addresses, browser type, and pages visited for operational purposes. These logs
              are governed by{" "}
              <a
                href="https://railway.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors"
              >
                Railway&apos;s Privacy Policy
              </a>
              .
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              External links on this site (LinkedIn, GitHub, etc.) are governed by those
              platforms&apos; own privacy policies. I am not responsible for their data practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-neutral-800">
              4. Meta Platform Integration
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Any application registered with Meta (Facebook, Instagram, WhatsApp) that references
              this privacy policy operates under the following principles:
            </p>
            <ul className="space-y-2 text-neutral-400 text-sm mb-4">
              {[
                "Only the minimum data required for the app's stated purpose is accessed",
                "Data obtained through Meta APIs is not sold or shared with third parties",
                "Data is used solely for the functionality described at the time of authorization",
                "Users may revoke app permissions at any time through their Meta account settings",
                "Data is retained only for as long as necessary to provide the service",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-neutral-600 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-neutral-400 text-sm leading-relaxed">
              All Meta Platform integrations comply with the{" "}
              <a
                href="https://developers.facebook.com/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors"
              >
                Meta Platform Terms
              </a>{" "}
              and{" "}
              <a
                href="https://developers.facebook.com/devpolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors"
              >
                Meta Developer Policies
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-neutral-800">
              5. Your Rights
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Since this site does not collect personal data, there is no stored information
              to access, correct, or delete. If you have used a Meta-integrated application
              and want to request deletion of any data associated with your account, contact
              me directly and I will process your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-neutral-800">
              6. Children&apos;s Privacy
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              These Services are not directed at individuals under the age of 13. I do not
              knowingly collect personal information from children. If you believe a child
              has provided personal information, contact me immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-neutral-800">
              7. Changes to This Policy
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              I may update this policy from time to time. Changes will be reflected by
              updating the &quot;Last updated&quot; date at the top of this page. Continued use of
              the Services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-neutral-800">
              8. Contact
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              For any questions or requests regarding this Privacy Policy:
            </p>
            <div className="border border-neutral-800 p-6">
              <p className="text-white text-sm font-bold mb-1">Samuel Schramm Meurer</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-neutral-400 text-sm hover:text-white transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800">
          <a
            href="/"
            className="font-mono text-sm text-neutral-500 hover:text-white transition-colors"
          >
            ← Back to portfolio
          </a>
        </div>
      </div>
    </main>
  );
}
