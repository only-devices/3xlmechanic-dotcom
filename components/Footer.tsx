// File: components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-18">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">3XL Mechanic</p>
            <p className="text-gray-400">Breaking less stuff, one lesson at a time.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <Link 
                href="https://www.youtube.com/@3XLMechanic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
              {/* Add more social icons as needed */}
            </div>
            
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} 3XL Mechanic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}