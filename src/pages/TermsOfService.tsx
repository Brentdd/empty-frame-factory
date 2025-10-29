import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-forest mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: October 16, 2025</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using the Evergrove Global website, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Description of Services</h2>
              <p>
                Evergrove Global provides market entry services for brands seeking to expand into Western European markets. 
                Our services include, but are not limited to, compliance management, logistics coordination, and retail relationship development.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Partnership Criteria</h2>
              <p>
                Evergrove Global is selective about the brands we partner with. We focus on exceptional products with 
                compelling stories in specific categories including fashion accessories, leather goods, jewelry, textiles, 
                home goods, and personal care. Acceptance into our partnership program is at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Intellectual Property</h2>
              <p>
                The content, design, logos, and other materials on this website are owned by or licensed to Evergrove Global 
                and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, 
                or distribute any content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Use of Website</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Collect or harvest any information from the website without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Evergrove Global shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising out of or relating to your use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of Belgium, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
                upon posting to the website. Your continued use of the website after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:info@evergroveglobal.com" className="text-forest hover:text-forest/80">info@evergroveglobal.com</a><br />
                <strong>WhatsApp:</strong> <a href="https://wa.me/32471234567" className="text-forest hover:text-forest/80">+32 471 234 567</a><br />
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

export default TermsOfService;
