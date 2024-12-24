import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-montserrat font-bold mb-8">Terms of Service</h1>
        <div className="prose lg:prose-xl mx-auto">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Terms</h2>
          <p>By accessing Word-List.com, you agree to be bound by these Terms of Service and comply with all applicable laws and regulations.</p>
          
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily access the materials on Word-List.com for personal, non-commercial use only.</p>
          
          <h2>3. Disclaimer</h2>
          <p>The materials on Word-List.com are provided on an 'as is' basis. Word-List.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2>4. Limitations</h2>
          <p>In no event shall Word-List.com or its suppliers be liable for any damages arising out of the use or inability to use the materials on Word-List.com.</p>
          
          <h2>5. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;