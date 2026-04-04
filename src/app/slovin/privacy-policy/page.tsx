import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <Image src={'/logo-slovin.png'} width={150} height={150} alt="slovin" className="mx-auto"/>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy – Slovin</h1>
      <p className="mb-8 text-sm text-gray-500">Last updated: April 2026</p>

      <p className="mb-6">
        Sloving (“we”, “our”, or “us”) respects your privacy. This Privacy Policy
        explains how we handle your information when you use our mobile application.
      </p>

      <Section title="1. Information We Collect">
        <p>
          Sloving is designed as a <strong>safe and private space</strong>. We do
          not require account registration and do not collect personal identity
          information such as name, email address, phone number, or passwords.
        </p>
        <p className="mt-2">
          However, we store certain data <strong>locally on your device</strong>:
        </p>
        <ul className="list-disc pl-6 mt-2">
          {/* <li>Journal entries (your reflections)</li> */}
          <li>Mood check-ins</li>
          <li>Emotional tracking data</li>
          {/* <li>App preferences (reminders, reading goals, etc.)</li> */}
        </ul>
        <p className="mt-2">
          All of this data remains on your device and is not transmitted to our servers.
        </p>
      </Section>

      <Section title="2. How We Use Your Information">
        <ul className="list-disc pl-6">
          {/* <li>Display your journal history</li> */}
          <li>Track emotional patterns</li>
          <li>Provide insights and reflections</li>
          <li>Improve your in-app experience</li>
        </ul>
        <p className="mt-2">
          We do not access or analyze your personal journal content externally.
        </p>
      </Section>

      <Section title="3. Data Storage & Security">
        <ul className="list-disc pl-6">
          <li>All data is stored locally on your device</li>
          <li>No external servers are used</li>
          <li>No data is shared with third parties</li>
        </ul>
        <p className="mt-2">
          If you uninstall the app, your data may be permanently deleted.
        </p>
      </Section>
{/* 
      <Section title="4. Community-Based Features (Anonymous)">
        <p>
          Some features may display aggregated or anonymous insights such as
          number of responses or emotional trends.
        </p>
        <p className="mt-2">
          These insights do not contain any personal or identifiable information.
        </p>
      </Section>

      <Section title="5. Notifications">
        <p>
          If enabled, the app may send gentle reminders (reflection prompts,
          mood check-ins).
        </p>
        <p className="mt-2">
          You can disable notifications anytime via your device settings.
        </p>
      </Section> */}

      <Section title="6. Third-Party Services">
        <p>
          Sloving does not use third-party services that collect personal data,
          unless stated in future updates.
        </p>
      </Section>

      <Section title="7. Children’s Privacy">
        <p>
          Sloving is not directed toward children under 13. We do not knowingly
          collect personal data from children.
        </p>
      </Section>

      {/* <Section title="8. Your Control">
        <ul className="list-disc pl-6">
          <li>Delete entries anytime app</li>
          <li>Clear app data via device settings</li>
          <li>Uninstall app to remove all data</li>
        </ul>
      </Section> */}

      <Section title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          reflected on this page.
        </p>
      </Section>

      <Section title="10. Contact Us">
        <p>Developer Name: Gil Studio</p>
        <p>Email: gilangrpratama@gmail.com</p>
      </Section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="space-y-2 text-sm leading-relaxed">{children}</div>
    </section>
  );
}