import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function NotFound() {
  return (

    <main className="bg-white">

      <Header />
    <div className="min-h-screen flex items-center justify-center bg-white text-[#009B7A] p-6">
      <div className="text-center max-w-xl w-full">
        
        <h1 className="text-6xl md:text-8xl font-bold text-[#009B7A]">404</h1>
        <h2 className="text-xl md:text-2xl mt-4 font-semibold">
          Page Not Found
        </h2>
        <p className="mt-3 text-gray-700 px-2 md:px-0">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center px-6 py-2 bg-[#009B7A] hover:bg-[#07b38e] text-white rounded-full transition duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Homepage
        </Link>

        <footer className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Avant Pharmaceutical. All rights reserved.
        </footer>
      </div>
    </div>

    <Footer />
    </main>
  );
}
