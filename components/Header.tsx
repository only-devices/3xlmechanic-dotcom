// File: components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white text-2xl font-bold font-heading tracking-tight">3XL Mechanic</span>
          </Link>          
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:text-gray-300 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300 transition">About</Link>
              </li>
              <li>
                <Link 
                  href="https://www.youtube.com/@3XLMechanic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition"
                >
                  YouTube Channel
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}