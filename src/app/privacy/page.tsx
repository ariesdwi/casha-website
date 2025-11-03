import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Title Section */}
          <div className="text-center pb-8 border-b-2 border-green-600 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Casha - AI Financial Assistant
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Last Updated: November 3, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Casha. We are committed to protecting your privacy and ensuring the security of your personal and financial information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6 mt-8">
              1. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              1.1 Information You Provide
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li><strong>Financial Data:</strong> Transaction records, receipts, budget information, and spending categories you create</li>
              <li><strong>Account Information:</strong> Name, email address (if you create an account)</li>
              <li><strong>Photos & Images:</strong> Receipt photos you upload for AI scanning</li>
              <li><strong>Device Information:</strong> Device type, operating system version, app version</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              1.2 Automatically Collected Information
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li><strong>Usage Data:</strong> App features used, frequency of use, session duration</li>
              <li><strong>Device Identifiers:</strong> Unique device ID for app functionality</li>
              <li><strong>Crash Reports:</strong> Technical data when the app encounters errors</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>Provide AI-powered financial insights and analytics</li>
              <li>Process receipt images using AI for automatic categorization</li>
              <li>Generate spending reports and budget recommendations</li>
              <li>Improve app functionality and user experience</li>
              <li>Process subscription purchases and manage your premium access</li>
              <li>Provide customer support</li>
              <li>Send important updates about the app (with your consent)</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              3. Data Storage and Security
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
              <p className="font-semibold text-gray-900 mb-2">Your Financial Data is Secure:</p>
              <p className="text-gray-700">
                All financial data is encrypted and stored securely. We use industry-standard encryption protocols to protect your sensitive information.
              </p>
            </div>

            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li><strong>Local Storage:</strong> Most of your data is stored locally on your device</li>
              <li><strong>Cloud Backup:</strong> If enabled, encrypted backups are stored in iCloud (controlled by Apple)</li>
              <li><strong>AI Processing:</strong> Receipt images are processed securely and are not permanently stored on our servers</li>
              <li><strong>No Data Selling:</strong> We never sell your personal or financial data to third parties</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              4. In-App Purchases & Subscriptions
            </h2>
            <p className="text-gray-700 mb-4">Casha offers premium features through:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4 mb-6">
              <li><strong>Monthly Subscription:</strong> Auto-renewable subscription with 3-day free trial</li>
              <li><strong>Lifetime Purchase:</strong> One-time payment for permanent access</li>
            </ul>
            
            <p className="text-gray-700 mb-4">
              All purchases are processed through Apple&apos;s App Store. We do not store your payment information. Subscription management and cancellation are handled through your Apple ID settings.
            </p>
            
            <p className="text-gray-700">
              <strong>Auto-Renewal:</strong> Monthly subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. You can cancel anytime through your App Store account settings.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              5. Third-Party Services
            </h2>
            <p className="text-gray-700 mb-4">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4 mb-4">
              <li><strong>Apple StoreKit:</strong> For processing in-app purchases</li>
              <li><strong>AI Processing Services:</strong> For receipt scanning and financial insights (data is encrypted and not retained)</li>
              <li><strong>Analytics:</strong> Anonymized usage data to improve app performance</li>
            </ul>
            <p className="text-gray-700">
              These services have their own privacy policies and handle data according to their terms.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              6. Your Rights and Choices
            </h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li><strong>Access Your Data:</strong> View all data stored in the app</li>
              <li><strong>Delete Your Data:</strong> Remove all financial records from the app</li>
              <li><strong>Export Your Data:</strong> Download your financial data</li>
              <li><strong>Opt-Out:</strong> Disable analytics and data collection (in Settings)</li>
              <li><strong>Cancel Subscription:</strong> Manage through App Store settings</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700">
              Casha is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              8. Data Retention
            </h2>
            <p className="text-gray-700">
              We retain your data as long as your account is active or as needed to provide services. You can delete your data at any time through the app settings. Backup data stored in iCloud follows Apple&apos;s retention policies.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              9. Changes to Privacy Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes through the app or via email. Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              10. International Users
            </h2>
            <p className="text-gray-700">
              If you are accessing Casha from outside Indonesia, please note that your information may be transferred to and processed in Indonesia or other countries where we operate. By using the app, you consent to such transfers.
            </p>
          </section>

          {/* Contact Section */}
          {/* <div className="bg-gray-50 rounded-xl p-8 mt-12">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> <a href="mailto:privacy@casha.com" className="text-green-600 hover:underline">privacy@casha.com</a></p>
              <p><strong>Support:</strong> <a href="mailto:support@casha.com" className="text-green-600 hover:underline">support@casha.com</a></p>
             
              <p><strong>Location:</strong> Indonesia</p>
            </div>
          </div> */}

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-3">&copy; 2025 Casha - PT Casha . All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <Link href="/terms" className="text-green-600 hover:underline">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-green-600 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}