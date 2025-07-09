"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fff2dd]">
      {/* Header */}
      <div className="border-b border-gray-200 bg-[#fff2dd] px-5 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center text-2xl font-bold text-[#585858] md:text-3xl">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-5 py-8 md:px-8 md:py-12">
        <div className="space-y-6">
          {/* Title and Effective Date */}
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold text-[#f8a96e] md:text-3xl">
              Privacy Policy for Zoopixie
            </h1>
            <p className="text-lg font-semibold text-[#69c4e5] md:text-xl">
              Effective Date: 6/1/2025
            </p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              Zoopixie ("we", "us", or "our") is committed to protecting the privacy
              of children and parents who use our mobile app. This Privacy Policy
              describes how we collect, use, and protect personal information
              through our app, which allows children to take pictures of their
              drawings and bring them to life using AI technology.
            </p>

            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              This policy complies with the Children's Online Privacy Protection Act
              (COPPA), the General Data Protection Regulation (GDPR, where
              applicable), Apple App Store Guidelines, and Google Play Families
              policies.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#f8a96e] md:text-2xl">
              1. Who We Are
            </h2>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              Zoopixie is developed by UGC Sensei LLC, a company that creates
              digital experiences designed for children. Our app encourages
              creativity by allowing children to take photos of their hand-drawn art
              and see it animated through AI.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#f8a96e] md:text-2xl">
              2. What Information We Collect
            </h2>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              We do not require children to provide personal information to use core
              features of the app. However, we may collect limited information as
              outlined below to personalize the experience and comply with
              applicable regulations.
            </p>

            <h3 className="text-lg font-semibold text-[#585858] md:text-xl">
              a. Information You or Your Child May Provide:
            </h3>
            <div className="ml-4 space-y-2">
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • <span className="font-semibold">Child's first name:</span> We may ask for
                your child's first name to personalize the in-app experience. This
                name is used only locally within the app and is not shared or stored
                on our servers.
              </p>
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • <span className="font-semibold">Photos of drawings:</span> Children can
                use the device's camera to take photos of their artwork. These images
                are used only to generate the AI animation.
              </p>
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • <span className="font-semibold">Parental consent information:</span> If we
                collect personally identifiable information (PII) or if your
                jurisdiction requires it, we will obtain verifiable parental consent
                in accordance with COPPA.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-[#585858] md:text-xl">
              b. Automatically Collected Information (non-personal):
            </h3>
            <div className="ml-4 space-y-2">
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • App usage data (e.g., how often the app is used, what features are
                accessed)
              </p>
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • Device type, OS version, and crash reports
              </p>
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • Anonymous identifiers (e.g., IDFA or Android Advertising ID),
                strictly for internal analytics or bug fixing, and never for
                advertising purposes
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#f8a96e] md:text-2xl">
              3. Use of Collected Information
            </h2>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              We use the collected data to:
            </p>
            <div className="ml-4 space-y-2">
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • Personalize the app experience (e.g., greeting your child by name)
              </p>
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • Process and animate your child's drawing
              </p>
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • Improve app performance and stability
              </p>
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • Maintain security and prevent abuse
              </p>
            </div>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              We do not use children's data for marketing, remarketing, or targeted
              ads.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#f8a96e] md:text-2xl">
              4. Third-Party Services
            </h2>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              We may use third-party services that assist with:
            </p>
            <div className="ml-4 space-y-2">
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • AI rendering (e.g., image-to-animation processing)
              </p>
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • Analytics (e.g., Firebase Analytics, for anonymous usage patterns)
              </p>
            </div>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              All third-party service providers used by Zoopixie are COPPA-compliant
              and contractually obligated to protect children's data.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#f8a96e] md:text-2xl">
              5. Parental Rights
            </h2>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              Parents or guardians have the right to:
            </p>
            <div className="ml-4 space-y-2">
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • Review any personal information collected from their child (if any)
              </p>
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • Request deletion of their child's information
              </p>
              <p className="text-base leading-relaxed text-[#585858] md:text-lg">
                • Refuse further collection or use of their child's information
              </p>
            </div>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              To exercise any of these rights, please contact us at
              info@ugcsensei.com
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#f8a96e] md:text-2xl">
              6. Data Storage and Security
            </h2>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              All data, including image files, is stored securely and encrypted
              during transit. If stored, images are kept only for the duration
              necessary to process and display the animation and are deleted after
              rendering, unless explicitly saved by the user on their device.
            </p>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              Your child's name, if entered, is stored locally on the device only
              and is not transmitted to or stored on our servers.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#f8a96e] md:text-2xl">
              7. Children's Privacy
            </h2>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              Our app is designed for children under the age of 13. We do not
              knowingly collect or store personal data from children without
              parental consent. If you believe we have collected such data in error,
              please contact us and we will delete it promptly.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#f8a96e] md:text-2xl">
              8. Changes to This Policy
            </h2>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              We may update this policy from time to time. We will notify parents or
              users of any material changes through in-app notifications or by
              updating the "Effective Date" above.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#f8a96e] md:text-2xl">
              9. Contact Us
            </h2>
            <p className="text-base leading-relaxed text-[#585858] md:text-lg">
              If you have any questions about this Privacy Policy or our data
              practices, please contact:
            </p>
            <div className="mt-4 text-center">
              <p className="text-base font-semibold leading-relaxed text-[#69c4e5] md:text-lg">
                UGC Sensei LLC<br />
                Email: info@ugcsensei.com<br />
                Mailing Address: 1401 21st St., Suite R. Sacramento, CA 95811-5226
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}