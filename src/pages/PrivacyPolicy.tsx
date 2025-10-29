import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-forest mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: October 16, 2025</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Introduction</h2>
              <p>
                Evergrove Global ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and company details when you contact us</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send you relevant business communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Cookies</h2>
              <p>
                We use cookies to enhance your experience on our website. You can choose to accept or decline cookies 
                through our cookie banner. Declining cookies may affect some functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Your Rights</h2>
              <p>Under GDPR and other applicable laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Third-Party Services</h2>
              <p>
                We may use third-party services (such as analytics tools) that collect information about your use of our website. 
                These services have their own privacy policies governing their use of information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:info@evergroveglobal.com" className="text-forest hover:text-forest/80">info@evergroveglobal.com</a><br />
                <strong>Address:</strong> Brussels, Belgium
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
