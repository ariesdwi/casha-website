import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
     

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Title Section */}
          <div className="text-center pb-8 border-b-2 border-green-600 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
              Terms of Service
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
              Welcome to Casha. These Terms of Service govern your use of our AI-powered financial assistant application. By downloading, accessing, or using Casha, you agree to be bound by these terms.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6 mt-8">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By accessing or using Casha, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our application.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              2. Description of Service
            </h2>
            <p className="text-gray-700 mb-4">
              Casha is an AI-powered financial assistant that helps users:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>Track and categorize financial transactions</li>
              <li>Scan and process receipt images using AI technology</li>
              <li>Generate spending insights and budget recommendations</li>
              <li>Create and manage personal budgets</li>
              <li>View financial reports and analytics</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              3. User Accounts
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              3.1 Account Creation
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>You may use Casha without creating an account for basic features</li>
              <li>Premium features may require account creation</li>
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              3.2 Account Security
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              4. Subscription and Payments
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              4.1 Free Trial
            </h3>
            <p className="text-gray-700 mb-4">
              Casha offers a 3-day free trial for premium features. The trial period begins immediately after activation and automatically converts to a paid subscription unless cancelled at least 24 hours before the trial ends.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              4.2 Subscription Plans
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4 mb-4">
              <li><strong>Monthly Subscription:</strong> Auto-renewable monthly subscription</li>
              <li><strong>Lifetime Access:</strong> One-time payment for permanent premium access</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              4.3 Payment Processing
            </h3>
            <p className="text-gray-700 mb-4">
              All payments are processed through Apple&apos;s App Store. You agree to Apple&apos;s payment terms and conditions. We do not store or process your payment information directly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              4.4 Auto-Renewal and Cancellation
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>Monthly subscriptions automatically renew unless cancelled</li>
              <li>You can cancel subscriptions through your Apple ID settings</li>
              <li>Cancellation must be made at least 24 hours before the renewal date</li>
              <li>No refunds are provided for partial subscription periods</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              5. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>You must use Casha in compliance with all applicable laws and regulations</li>
              <li>You are responsible for the accuracy of financial data you input</li>
              <li>You must not use the app for any illegal or unauthorized purpose</li>
              <li>You agree not to reverse engineer, decompile, or attempt to extract source code</li>
              <li>You must not interfere with or disrupt the app&apos;s functionality</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              Casha, including its original content, features, functionality, AI algorithms, and design elements are owned by PT Casha and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700">
              You are granted a limited, non-exclusive, non-transferable license to use the app for personal, non-commercial purposes. This license does not include any rights to reproduce, distribute, or create derivative works.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              7. Data and Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Your use of Casha is subject to our Privacy Policy, which explains how we collect, use, and protect your information. By using Casha, you consent to our data practices as described in the Privacy Policy.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Important:</p>
              <p className="text-gray-700">
                Casha provides financial insights based on the data you input. We are not a financial institution and do not provide financial advice. You should consult with qualified financial professionals for important financial decisions.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              8. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 mb-4">
              Casha is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>The app will be uninterrupted or error-free</li>
              <li>The AI insights and recommendations will be accurate or suitable for your specific situation</li>
              <li>The app will meet your particular requirements</li>
              <li>All features will be available at all times</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, PT Casha shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>Loss of profits, data, or use</li>
              <li>Financial losses resulting from app usage</li>
              <li>Business interruption</li>
              <li>Device damage or malfunction</li>
              <li>Any other commercial damages or losses</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              10. Termination
            </h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to Casha immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p className="text-gray-700">
              Upon termination, your right to use the app will cease immediately. If you wish to terminate your account, you may simply discontinue using the app or delete it from your device.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              11. Changes to Terms
            </h2>
            <p className="text-gray-700">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. Continued use of the app after changes constitutes acceptance of the new terms.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              12. Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms shall be governed and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of Casha shall be resolved in the courts of Indonesia.
            </p>
          </section>

          {/* Section 13 */}
          {/* <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              13. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> <a href="mailto:legal@casha.com" className="text-green-600 hover:underline">legal@casha.com</a></p>
              <p><strong>Support:</strong> <a href="mailto:support@casha.com" className="text-green-600 hover:underline">support@casha.com</a></p>
              <p><strong>Address:</strong> Indonesia</p>
            </div>
          </section> */}

          {/* Contact Section */}
          {/* <div className="bg-gray-50 rounded-xl p-8 mt-12">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Legal:</strong> <a href="mailto:legal@casha.com" className="text-green-600 hover:underline">legal@casha.com</a></p>
              <p><strong>Support:</strong> <a href="mailto:support@casha.com" className="text-green-600 hover:underline">support@casha.com</a></p>
              <p><strong>Location:</strong> Indonesia</p>
            </div>
          </div> */}

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-3">&copy; 2025 Casha - PT Casha . All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <Link href="/terms" className="text-green-600 hover:underline font-medium">
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