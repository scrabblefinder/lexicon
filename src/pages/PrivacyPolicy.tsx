import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-montserrat font-bold mb-8">Privacy Policy</h1>
        <div className="prose lg:prose-xl mx-auto">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us when using Word-List.com. This may include:</p>
          <ul>
            <li>Usage Data</li>
            <li>Browser Information</li>
            <li>Device Information</li>
          </ul>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our Service</li>
            <li>Improve our Service</li>
            <li>Analyze how you use our Service</li>
          </ul>
          
          <h2>3. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information.</p>
          
          <h2>4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;