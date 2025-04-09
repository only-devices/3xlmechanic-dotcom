// File: app/about/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3XL Mechanic - About',
  description: 'Learn about 3XL Mechanic, our mission, and the story behind our automotive repair tutorials.',
};

export default function AboutPage() {
  return (
    <div>
      
      {/* About Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
          {/* Placeholder for about hero image
            <div className="mb-12 aspect-video relative h-60 bg-light rounded-lg flex items-center justify-center">
              <div className="text-dark/50 flex flex-col items-center">
              </div>
            </div> */}
            
            <div className="prose max-w-none">
              <h2 className="text-3xl font-heading font-bold mb-6 text-secondary">Our Story</h2>
              <p className="text-lg mb-6 text-dark">
                3XL Mechanic was founded with a simple mission: to make otherwise complicated repairs of everyday items more accessible to everyone. I started this journey as a DIY enthusiast, frustrated by the lack of clear, resources for common repairs.
              </p>
              <p className="text-lg mb-10 text-dark">
                After years of working in professional auto shops, I noticed that many people were spending hundreds or even thousands of dollars on repairs that they could easily do themselves with the right guidance. That&apos;s when I decided to start creating tutorial videos to share my knowledge with the world.
              </p>
            </div>
            
            {/* Call to Action */}
            <div className="bg-primary text-white p-8 rounded-lg text-center mb-10">
              <h3 className="text-2xl font-heading font-bold mb-4">Join In!</h3>
              <p className="mb-6">
                Subscribe to our YouTube channel to become part of our growing community of DIY mechanics and handypeople. Learn new skills, share your experiences, and connect with others on the same journey.
              </p>
              <Link 
                href="https://www.youtube.com/@3XLMechanic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent"
              >
                Subscribe on YouTube
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
            
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold mb-6 text-secondary">Have Questions?</h3>
              <p className="text-lg mb-6 text-dark">
                Feel free to reach out with any questions or suggestions. I&apos;m always looking to improve my tutorials and cover the topics you&apos;re most interested in.
              </p>
              <div className="flex justify-center space-x-4">
                <Link 
                  href="https://www.youtube.com/@3XLMechanic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}