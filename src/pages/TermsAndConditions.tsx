import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 px-4">
      <div className="max-w-5xl mx-auto py-10 md:py-16">
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Terms and Conditions
          </h1>
          <p className="text-slate-300 mt-2">Effective Date: 09 Aug 2025</p>
          <p className="text-slate-400 mt-1">Website: prepCampus</p>
        </header>

        <div className="space-y-8 text-slate-200">
          <section>
            <h2 className="text-xl font-semibold text-amber-400">1. Acceptance of Terms</h2>
            <p className="mt-2 text-slate-300">
              By accessing or using prepCampus ("we", "our", "us"), you agree to be bound by these
              Terms and Conditions. If you do not agree with any part of the terms, you must not use
              this website or any of its services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-400">2. Use of the Website</h2>
            <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
              <li>You agree to use prepCampus only for lawful purposes and in accordance with these terms.</li>
              <li>You will not attempt to compromise the security or integrity of the website or related systems.</li>
              <li>You will not copy, redistribute, or resell content unless expressly permitted.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-400">3. Accounts and Security</h2>
            <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must promptly notify us of any unauthorized use of your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-400">4. Intellectual Property</h2>
            <p className="mt-2 text-slate-300">
              All content on prepCampus, including text, graphics, logos, and software, is owned by or
              licensed to prepCampus and is protected by applicable intellectual property laws. You may
              not use our trademarks or branding without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-400">5. User Content</h2>
            <p className="mt-2 text-slate-300">
              If you submit content (e.g., comments, feedback), you grant prepCampus a non-exclusive,
              worldwide, royalty-free license to use, reproduce, and display such content for the
              purposes of operating and improving the services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-400">6. Third-Party Links</h2>
            <p className="mt-2 text-slate-300">
              prepCampus may contain links to third-party websites. We do not control and are not
              responsible for the content or practices of such sites. Accessing third-party resources
              is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-400">7. Disclaimer of Warranties</h2>
            <p className="mt-2 text-slate-300">
              The services and content on prepCampus are provided on an "as is" and "as available"
              basis. We make no warranties, express or implied, regarding accuracy, reliability,
              availability, or fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-400">8. Limitation of Liability</h2>
            <p className="mt-2 text-slate-300">
              To the maximum extent permitted by law, prepCampus shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or data
              arising from your use of, or inability to use, the services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-400">9. Changes to These Terms</h2>
            <p className="mt-2 text-slate-300">
              We may update these Terms and Conditions from time to time. Changes will be effective
              upon posting on this page. Your continued use of prepCampus after changes constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-400">10. Contact Us</h2>
            <p className="mt-2 text-slate-300">
              For questions regarding these Terms and Conditions, please contact us via the Contact
              page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;


