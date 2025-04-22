"use client";
import React from "react";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import Image from 'next/image';
import Link from "next/link";
import WCU from "./components/wcu";
import ContactUs from "./components/contactus";
import Footer from "./components/footer";
export default function Home() {
  const products = [
    {
      image: "/Avant-Products/1.png",
    },
    {
      image: "/Avant-Products/2.png",
    },
    {
      image: "/Avant-Products/3.png",
    },
    {
      image: "/Avant-Products/4.png",
    },
    {
      image: "/Avant-Products/5.png",
    },
    {
      image: "/Avant-Products/6.png",
    },
    {
      image: "/Avant-Products/7.png",
    },
    {
      image: "/Avant-Products/8.png",
    },
  ];
  return (
    <main className="bg-white">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <section className="py-16 bg-white mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">

            {/* Image Section */}
            <div className="w-full md:w-1/2 max-w-md h-64 sm:h-80 md:h-96 relative rounded-lg overflow-hidden">
              <Image
                src="/Avant-Website-Photos/avant-company.png"
                alt="About Us"
                fill
                className="rounded-lg border-2 border-gray-300 shadow-lg object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#009B7A] mb-6 text-center md:text-left">
                About Us
              </h2>
              <div className="text-gray-600 space-y-4 mb-6 text-justify">
                <p>
                  Avant Pharma has been operating in Pakistan for more than 11 years. Over this period, the company has
                  successfully developed and strengthened its pharmaceutical marketing and manufacturing base, which
                  enabled us to achieve the distinction of being the fastest growing national pharmaceutical company.
                  We, by the grace of God Almighty, are now amongst the leading pharmaceutical companies operating in Pakistan.
                </p>
              </div>
              <div className="text-center md:text-left">
                <Link
                  href="/aboutus"
                  className="inline-flex items-center text-[#009B7A] hover:text-gray-800 font-medium transition-colors"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WCU />

      {/* Vision */}
      <section className="text-gray-600 body-font mt-10">
        <div className="container mx-auto flex px-5 py-12 md:py-24 flex-col md:flex-row items-center">
          {/* Image Section - Full width on mobile, 40% on medium screens and up */}
          <div className="lg:w-[40%] md:w-1/2 w-full mb-10 md:mb-0 px-4">
            <img
              className="object-contain object-center rounded-lg border-2 border-gray-300 shadow-lg w-full"
              alt="hero"
              src="/Avant-Website-Photos/avant_vision.png" />
          </div>

          {/* Content Section - Full width on mobile, adjusted on larger screens */}
          <div className="lg:pl-24 md:pl-16 md:w-1/2 w-full px-4 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#009B7A]">
              VISION
            </h1>
            <p className="mb-8 leading-relaxed">
              We want to be a vision driven company focusing on capitalizing
              our human resources, implementing advance technologies and
              finding innovative solutions which are pivotal in achieving par
              excellence in quality, productivity and...
            </p>

            <button
              onClick={() => window.location.href = '/v-m#vision'}
              style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
              className="inline-flex items-center border-0 py-2 px-5 focus:outline-none rounded-lg text-white font-bold mt-4 md:mt-0 hover:ease-in-out hover:scale-105 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="text-gray-600 body-font mt-10 md:-mt-20">
        <div className="container mx-auto flex px-5 py-12 md:py-24 flex-col md:flex-row items-center">
          {/* Image Section - Full width on mobile, 40% on medium screens and up */}
          <div className="lg:w-[40%] md:w-1/2 w-full mb-10 md:mb-0 px-4">
            <img
              className="object-contain object-center rounded-lg border-2 border-gray-300 shadow-lg w-full"
              alt="hero"
              src="/Avant-Website-Photos/avant_mission.png" />
          </div>

          {/* Content Section - Full width on mobile, adjusted on larger screens */}
          <div className="lg:pl-24 md:pl-16 md:w-1/2 w-full px-4 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#009B7A]">
              MISSION
            </h1>
            <p className="mb-8 leading-relaxed">
              To produce premium quality medicines in the areas of proprietary
              prescription products, branded generics and niche therapeutic
              segments.
            </p>

            <button
              onClick={() => window.location.href = '/v-m#mission'}
              style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
              className="inline-flex items-center border-0 py-2 px-5 focus:outline-none rounded-lg text-white font-bold mt-4 md:mt-0 hover:ease-in-out hover:scale-105 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* History, Philosophy, Strengths */}
      <section className="-mt-5">
        <div className="container px-5 py-24 mx-auto">

          <div className="flex flex-wrap -m-4">
            {/* History */}
            <div className="p-4 md:w-1/3">
              <div
                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex justify-center mb-3">
                  <h2 className="text-black text-xl title-font font-bold">HISTORY</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    Today, Avant Pharma is one of the fastest growing national Pharmaceutical Company proud of the
                    current market share of its products..
                  </p>
                  <Link href="/h-p-s#history" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                    Read More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* Philosophy */}
            <div className="p-4 md:w-1/3">
              <div
                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex justify-center mb-3">
                  <h2 className="text-black text-xl title-font font-bold">PHILOSOPHY</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    We at AVANT PHARMA pharma group are united in a common mission with shared values that
                    drive us to achieve an ambitious vision..
                  </p>
                  <Link href="/h-p-s#philosophy" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                    Read More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* Strengths */}
            <div className="p-4 md:w-1/3">
              <div
                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex justify-center mb-3">
                  <h2 className="text-black text-xl title-font font-bold">STRENGTHS</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    Avant Pharma group believes that skills, commitment, modern concepts, new ways of working
                    supportive organizational structure..
                  </p>
                  <Link href="/h-p-s#strengths" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                    Read More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section
        style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
        className="w-full py-16 px-4 mt-10">
        <h1 className="text-white text-4xl font-bold text-center mb-10">Our Values</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Quality Card */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 mr-3" style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-[#009B7A] text-xl font-bold">Quality</h2>
            </div>
            <p className="text-gray-800">
              We are relentless in our pursuit of the highest standards in pharmaceutical production and distribution.
            </p>
          </div>

          {/* Integrity Card */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 mr-3" style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-[#009B7A] text-xl font-bold">Integrity</h2>
            </div>
            <p className="text-gray-800">
              Transparency and honesty guide every decision we make, from sourcing to delivering medicines to our clients.
            </p>
          </div>

          {/* Innovation Card */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 mr-3" style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <h2 className="text-[#009B7A] text-xl font-bold">Innovation</h2>
            </div>
            <p className="text-gray-800">
              We continually evolve to meet the changing needs of the healthcare industry, staying ahead with cutting-edge solutions.
            </p>
          </div>

          {/* Customer-Centricity Card */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 mr-3" style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 14.094A5.973 5.973 0 004 17v1H1v-1a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h2 className="text-[#009B7A] text-xl font-bold">Customer-Centricity</h2>
            </div>
            <p className="text-gray-800">
              Our clients and their patients are at the heart of everything we do, driving us to deliver exceptional service and reliable products.
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <div className="container px-5 py-24 mx-auto mt-10">
          <div className="flex flex-wrap -m-4">

            {/* Product Development */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                className="p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_product-development.png" alt="content" />
                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                  PRODUCT DEVELOPMENT
                </h2>
                <p className="leading-relaxed text-base text-sm text-white">
                  Avant Pharma has a modern Development facility, equipped with the state
                  of the art instruments and laboratory scale machines..
                </p>
                <Link href="/avant/productDevelopment" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                  Read More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quality */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                className="p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_quality.png" alt="content" />
                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                  QUALITY
                </h2>
                <p className="leading-relaxed text-base text-sm text-white">
                  Avant Pharma strives for continuous improvement through establishing and
                  reviewing the quality policy..
                </p>
                <Link href="/avant/quality" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                  Read More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Manufacturing Plant */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                className="p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_manufacturing-plant.png" alt="content" />
                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                  MANUFACTURING PLANT
                </h2>
                <p className="leading-relaxed text-base text-sm text-white">
                  We have a modern manufacturing plant situated in Karachi, Pakistan which is
                  cGMP / Cglp compliant and well equipped..
                </p>
                <Link href="/avant/manufacturingPlant" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                  Read More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Research & Development */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                className="p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_research-&-development.png" alt="content" />
                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                  RESEARCH & DEVELOPMENT
                </h2>
                <p className="leading-relaxed text-base text-sm text-white">
                  Research & Development (R&D) generally stands as backbone
                  of pharmaceuticals industry. In AVANT PHARMA we are..
                </p>
                <Link href="/avant/research&Development" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                  Read More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sales & Marketing */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                className="p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_sales-&-marketing.png" alt="content" />
                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                  SALES & MARKETING
                </h2>
                <p className="leading-relaxed text-base text-sm text-white">
                  AVANT PHARMA believes in transparent modes of marketing; transmiting a reliable brand image to
                  its customers.
                </p>
                <Link href="/avant/sales&marketing" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                  Read More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Export Operations */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                className="p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_export-operations.png" alt="content" />
                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                  EXPORTS OPERATIONS
                </h2>
                <p className="leading-relaxed text-base text-sm text-white">
                  To serve ailing humanity by offering quality pharmaceuticals
                  products globally, yet keeping the coast as controlled as possible..
                </p>
                <Link href="/avant/exportOperations" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                  Read More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Supply Chain */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
                className="p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/Avant-Website-Photos/avant_supply-chain.png" alt="content" />
                <h2 className="text-md text-black text-center font-bold title-font mb-4">
                  SUPPLY CHAIN
                </h2>
                <p className="leading-relaxed text-base text-sm text-white">
                  Supply Chain management is the planning & arrangement
                  of materials, information and finances in a well
                  coordinated..
                </p>
                <Link href="/avant/supplyChain" className="mt-3 text-black inline-flex items-center hover:text-gray-700 font-medium transition-colors">
                  Read More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product's-Packs */}
      <section className="text-gray-600 body-font">
        <div className="container px-4 sm:px-5 py-10 mx-auto">
          <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#009B7A] mb-8 sm:mb-12">PRODUCTs PACKs</h1>
          <div className="flex flex-wrap -mx-2">
            {products.map((product, index) => (
              <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 p-2">
                <div className="block relative h-40 sm:h-48 rounded overflow-hidden">
                  <img
                    alt={"products"}
                    className="object-contain object-center w-full h-full block rounded-lg border-2 border-gray-300 shadow-lg"
                    src={product.image}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              onClick={() => window.location.href = '/products-packs'}
              style={{ background: 'linear-gradient(to right, #00B894, #00D2C6)' }}
              className="inline-flex items-center border-0 py-2 px-5 focus:outline-none rounded-lg text-white font-bold hover:ease-in-out hover:scale-105 transition duration-300">
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Contact us */}
      <ContactUs />

      {/* Footer */}
      <Footer />

    </main>
  );
}
