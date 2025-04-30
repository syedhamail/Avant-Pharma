import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-blue-900 p-6">
      <div className="text-center max-w-xl w-full">
        
        <h1 className="text-6xl md:text-8xl font-bold text-blue-800">404</h1>
        <h2 className="text-xl md:text-2xl mt-4 font-semibold">
          Page Not Found
        </h2>
        <p className="mt-3 text-gray-700 px-2 md:px-0">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center px-6 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-full transition duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Homepage
        </Link>

        <footer className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Avant Pharmaceutical. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
