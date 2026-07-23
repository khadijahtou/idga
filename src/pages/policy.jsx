import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="bg-[#f4faf7] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-green-600 mb-3">IDGA VLE</p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
                A
              </div>

              <div>
                <p className="font-medium text-gray-700">admin</p>
                <p>January 24, 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-14">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="prose prose-lg max-w-none"
        >
          {/* Effective Date */}
          <div className="mb-10 p-5 rounded-xl bg-green-50 border border-green-100">
            <p className="m-0 text-gray-700">
              <strong>Effective Date:</strong> 24th January, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="text-[18px]">
            <p>
              Welcome to{" "}
              <strong>
                IDGA VLE (Ideas & Data Global Academy Virtual Learning
                Environment)
              </strong>
              . We value your privacy and are committed to protecting your
              personal data. This Privacy Policy outlines how we collect, use,
              and protect your information when you use our app.
            </p>

            {/* Section 1 */}
            <section className="mt-12 flex flex-col gap-3">
              <h2 className="font-bold text-2xl">1. Information We Collect</h2>
              <div className="pl-4 flex flex-col gap-2 ">
                <p>We collect the following types of information:</p>

                <h3>1.1 Personal Information</h3>

                <ul className="p-5 list-disc list-inside">
                  <li>
                    Name, email address, and profile details during account
                    registration.
                  </li>
                  <li>
                    Payment information when subscribing to premium courses.
                  </li>
                </ul>

                <h3>1.2 Usage Data</h3>

                <ul className="p-5 list-disc list-inside">
                  <li>
                    Interaction with the app, such as courses accessed and
                    completed.
                  </li>
                  <li>
                    Device information, including device type, operating system,
                    and app version.
                  </li>
                </ul>

                <h3>1.3 Location Information</h3>

                <ul className="p-3 list-disc list-inside">
                  <li>
                    Approximate location data to enhance app performance and
                    ensure compliance with regional regulations.
                  </li>
                </ul>

                <h3>1.4 Cookies and Tracking</h3>

                <ul className="p-3 list-disc list-inside">
                  <li>
                    We use cookies to improve user experience and collect
                    analytics data.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mt-12">
              <h2 className="font-bold">2. How We Use Your Information</h2>
              <div className="flex flex-col gap-2 p-2">
                <p>Your information is used for:</p>

                <ul className="list-disc list-inside p-3">
                  <li>Personalizing your learning experience.</li>
                  <li>Processing subscriptions and course enrollments.</li>
                  <li>
                    Sending notifications about updates, new courses, and
                    promotions.
                  </li>
                  <li>
                    Enhancing app functionality and resolving technical issues.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mt-12">
              <h2 className="font-bold">3. Sharing Your Information</h2>
              <div className="flex flex-col gap-2 p-2">
                <p>
                  We do not sell or rent your information to third parties. Your
                  data may be shared with:
                </p>

                <ul className="list-disc list-inside p-2">
                  <li>
                    <strong>Service Providers:</strong> For payment processing,
                    analytics, and app support.
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> If required by law or to
                    protect our rights.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mt-12 flex flex-col gap-2">
              <h2 className="font-bold">4. Data Protection</h2>

              <p className="p-2">
                We implement strong security measures, including encryption and
                secure storage, to protect your data. However, no system is 100%
                secure, and we encourage you to safeguard your account
                credentials.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mt-12">
              <h2 className="font-bold">5. Your Rights</h2>

              <ul className="list-disc list-inside p-2">
                <li>
                  <strong>Access and Update:</strong> You can view and update
                  your profile information.
                </li>
                <li>
                  <strong>Delete Account:</strong> You can request to delete
                  your account and associated data.
                </li>
                <li>
                  <strong>Opt-Out:</strong> You can opt-out of non-essential
                  communications.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mt-12 flex flex-col gap-2">
              <h2 className="font-bold">6. Third-Party Services</h2>

              <p className="p-2">
                Our app may link to third-party services (e.g., payment
                gateways). Please review their privacy policies for additional
                information.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mt-12 flex flex-col gap-2">
              <h2 className="font-bold"> 7. Children&apos;s Privacy</h2>

              <p className="p-2">
                IDGA VLE is not intended for children under 13. We do not
                knowingly collect data from minors without parental consent.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mt-12 flex flex-col gap-2">
              <h2 className="font-bold">8. Updates to This Policy</h2>

              <p className="p-2">
                We may update this Privacy Policy periodically. Changes will be
                notified via the app or email.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mt-12 flex flex-col gap-2">
              <h2 className="font-bold">9. Contact Us</h2>

              <p className="p-2">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>

              <div className="mt-5 p-6 rounded-xl bg-gray-50 border border-gray-100">
                <p className="m-0">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:admin@idga.com.ng"
                    className="text-blue-500 hover:text-green-700 font-medium"
                  >
                    admin@idga.com.ng
                  </a>
                </p>
              </div>
            </section>

            {/* Agreement */}
            <div className="mt-14 pt-8 border-t border-gray-200">
              <p className="text-gray-700">
                By using <strong>IDGA VLE</strong>, you agree to the terms
                outlined in this Privacy Policy.
              </p>
            </div>
          </div>
        </motion.article>
      </main>
    </div>
  );
}
