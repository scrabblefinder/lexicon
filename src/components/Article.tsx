import { BookOpen, Search, Globe, Shield } from "lucide-react";

export const Article = () => {
  return (
    <article className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-montserrat font-bold mb-12 text-center">
        Your Ultimate Resource for Word Lists
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-montserrat font-bold mb-2 text-center">Comprehensive Lists</h3>
          <p className="text-gray-600 text-center">
            Access thousands of words organized by letters, patterns, and length
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Search className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-montserrat font-bold mb-2 text-center">Easy Search</h3>
          <p className="text-gray-600 text-center">
            Find exactly what you need with our intuitive search features
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Globe className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-montserrat font-bold mb-2 text-center">Educational Tool</h3>
          <p className="text-gray-600 text-center">
            Perfect for students, writers, and word enthusiasts
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-montserrat font-bold mb-2 text-center">Reliable Resource</h3>
          <p className="text-gray-600 text-center">
            Regularly updated and verified word collections
          </p>
        </div>
      </div>
    </article>
  );
};