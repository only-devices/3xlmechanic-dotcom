// File: app/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3XL Mechanic - Home',
  description: 'Amusing and practical household repair tutorials.',
};

export default function HomePage() {
  return (
    <div>      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-secondary">We&apos;re here to help!</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover-lift">
              <div className="bg-primary/10 text-primary p-3 inline-flex rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Niche Instructions</h3>
              <p className="text-dark/80">Step-by-step tutorials for practical household repairs, from kid&apos;s toys to automotive.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover-lift">
              <div className="bg-primary/10 text-primary p-3 inline-flex rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Entertaining Content</h3>
              <p className="text-dark/80">Learn from an experienced and sarcastic amateur professional.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover-lift">
              <div className="bg-primary/10 text-primary p-3 inline-flex rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Save Cash</h3>
              <p className="text-dark/80">Save all the dollars by performing repairs yourself.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Recent Tutorials</h2>
            <p className="text-dark/70 max-w-3xl mx-auto">
              Check out our latest tutorials to help you with your automotive repairs and maintenance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                <div className="aspect-video relative h-48 bg-light flex items-center justify-center">
                  <div className="text-dark/30 flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p>Tutorial {item} Thumbnail</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">How to Fix Common Issue {item}</h3>
                  <p className="text-dark/70 mb-4">Learn how to diagnose and repair this common problem with our detailed guide.</p>
                  <Link 
                    href="https://www.youtube.com/@3XLMechanic" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:text-accent transition-colors flex items-center"
                  >
                    Watch on YouTube
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section> */ }
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 text-secondary">Ready to Learn?</h2>
          <Link 
            href="https://www.youtube.com/@3XLMechanic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent text-white hover:bg-light transition-colors duration-300 px-8 py-3 rounded-full font-medium inline-flex items-center"
          >
            Let&apos;s do this
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}