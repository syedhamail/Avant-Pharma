"use client";

import Header from "../../components/header";
import Footer from "../../components/footer";
import CommentSection from "../../components/CommentSection";
import Link from "next/link";
import {
    FaFacebook,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";

export default function BYWOOUTI() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/*Blog Section*/}
            <section className="flex justify-center ml-5 flex-col lg:flex-row mt-20">

                {/*Left Section*/}
                <div className="sm:ml-0 lg:ml-10 mr-5 max-w-full overflow-x-hidden">
                    <div className="w-full">

                        {/* Breadcrumb */}
                        <div className="flex items-top border-t-2 border-l-2 border-r-2 pt-2 bg-gray-50 text-gray-400 pb-2 pl-3.5">
                            <h1 className="flex item-center font-sans text-sm">
                                <Link href={"/"} className="hover:text-blue-500">
                                    Home
                                </Link>
                                <IoIosArrowForward className="w-3 h-3 mt-1 ml-1" />
                            </h1>
                            <h1 className="font-sans text-sm ml-1">
                                Berry Your Way Out of Urinary Tract Infections
                            </h1>
                        </div>

                        {/* Title */}
                        <div className="border-2">
                            <h1 className="font-bold text-3xl text-[#009B7A] mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4]">
                                Berry Your Way Out of Urinary Tract Infections
                            </h1>
                            <h1 className="font-medium text-lg text-gray-600 mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4]">
                                A Simple & Natural Guide to Urinary Health
                            </h1>
                        </div>

                        {/* Content */}
                        <div className="border-b-2 border-l-2 border-r-2 text-gray-600 pt-4 pb-5 pl-3.5 pr-3.5">

                            <span>
                                <p>
                                    Urinary Tract Infections (UTIs) are uncomfortable, irritating, and very common—especially among women.
                                    Burning sensation, frequent urination, and lower abdominal discomfort can disturb daily life and reduce confidence.
                                </p>

                                <p className="mt-5">
                                    The good news is that <span className="font-medium text-black">nature offers powerful support.</span> Cranberry is widely
                                    known for helping maintain urinary tract health and reducing the risk of recurrent UTIs.
                                </p>

                                <p className="mt-5">
                                    Let’s understand UTIs and how cranberry helps—in a simple and clear way.
                                </p>
                            </span>

                            <p className="mt-5 border-b border-gray-300"></p>

                            {/* What is UTI */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    What Is a Urinary Tract Infection (UTI)?
                                </p>

                                <p className="mt-5">
                                    A UTI is an infection that affects any part of the urinary system, including the bladder, kidneys,
                                    ureters, or urethra. Most UTIs occur when harmful bacteria enter the urinary tract and multiply.
                                </p>

                                <p className="mt-5">
                                    Common symptoms include:
                                </p>

                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Burning or pain during urination</li>
                                    <li>Frequent urge to urinate</li>
                                    <li>Cloudy or strong-smelling urine</li>
                                    <li>Lower abdominal discomfort</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-b border-gray-300"></p>

                            {/* Why UTIs are common */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Why UTIs Are So Common
                                </p>

                                <p className="mt-5">
                                    UTIs can affect anyone, but the risk increases if you:
                                </p>

                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Do not drink enough water</li>
                                    <li>Hold urine for long periods</li>
                                    <li>Have poor urinary hygiene</li>
                                    <li>Have a weakened immune system</li>
                                    <li>Experience recurrent infections</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-b border-gray-300"></p>

                            {/* Cranberry */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    How Cranberry Supports Urinary Health
                                </p>

                                <p className="mt-5">
                                    Cranberry helps prevent harmful bacteria from sticking to the walls of the urinary tract.
                                    This supports natural flushing and helps maintain a healthy urinary environment.
                                </p>

                                <p className="mt-5">
                                    Regular cranberry intake may help <span className="font-medium text-black">reduce recurring UTIs</span> and improve overall urinary comfort.
                                </p>
                            </span>

                            <p className="mt-5 border-b border-gray-300"></p>

                            {/* Product Section */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Avecran Syrup – Natural Support for Urinary Health
                                </p>

                                <img
                                    src="/Blog-images/BYWOOUTI/BYWOOUTI-img1.png"
                                    alt="Avecran Syrup"
                                    className="mt-5 w-auto h-auto"
                                />

                                <p className="mt-5">
                                    At <span className="font-medium text-black">Avant Pharmaceuticals Pvt Ltd,</span> patient comfort and quality care come first.
                                    <span className="font-medium text-black"> Avecran Syrup</span> is a sugar-free cranberry formulation
                                    designed to support urinary health naturally and gently.
                                </p>
                            </span>

                            <p className="mt-5 border-b border-gray-300"></p>

                            {/* Product Details */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Product Details
                                </p>

                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Name:</span> <Link href={"/product/13"} className="border-b-2 border-black">Avecran Syrup</Link></li>
                                    <li><span className="font-medium text-black">Generic Name:</span> Cranberry Syrup (Sugar Free)</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 120ml</li>
                                </ul>

                                <p className="mt-5">
                                    Suitable for individuals looking for long-term urinary wellness,
                                    including those who prefer <span className="font-medium text-black">sugar-free formulations.</span>
                                </p>
                            </span>

                            <p className="mt-5 border-b border-gray-300"></p>

                            {/* Final */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Final Thoughts
                                </p>

                                <p className="mt-5">
                                    UTIs may be common, but they don’t have to control your life.
                                    With the right care, healthy habits, and natural cranberry support,
                                    urinary health can be maintained comfortably.
                                </p>

                                <p className="mt-5 font-medium text-black">
                                    Berry your way out of urinary discomfort—naturally.
                                </p>

                                <p className="mt-5 font-medium text-black">
                                    Trusted urinary care by Avant Pharmaceuticals Pvt Ltd
                                </p>
                            </span>

                        </div>

                        <div className="flex justify-center bg-gray-50 pt-6 pb-6 space-x-12 border-l-2 border-b-2 border-r-2"></div>

                        {/* Comment Desktop */}
                        <div className="border-2 mt-10 hidden lg:block">
                            <CommentSection />
                        </div>

                    </div>
                </div>

                {/*Right Section*/}

                <div className="mt-5 lg:mt-0 sm:mr-0 lg:mr-10">
                    {/* Social Plugin, Subscribe, and Most Popular sections */}
                    <div className="mt-0.5">
                        <h1 className="font-bold font-sans text-sm border-t-2 border-l-2 border-r-2 pl-3.5 pt-1.5 pb-1.5 w-80">
                            SOCIAL PLUGIN
                        </h1>
                        <span className="flex justify-center items-center border-2 w-80 pt-7 pb-7 space-x-8">
                            <span>
                                <a href="https://www.facebook.com/avantpharma" className="text-blue-800 ">
                                    <FaFacebook />
                                </a>
                            </span>
                            <span>
                                <a href="https://wa.me/+923218288378" className="text-green-500">
                                    <FaWhatsapp />
                                </a>
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/company/avant-pharmapakistan/" className="text-blue-700">
                                    <FaLinkedinIn />
                                </a>
                            </span>
                        </span>
                    </div>

                    {/*Most Popular Section*/}
                    <div className="mt-8">
                        <h1 className="font-bold font-sans text-sm border-t-2 border-l-2 border-r-2 pl-3.5 pt-1.5 pb-1.5 w-80">
                            YOU MAY ALSO LIKE
                        </h1>

                        <div className="border-2 w-80 pb-5">
                            {/*Product 1*/}
                            <div className="-mt-3 ml-4">
                                <Link href={"/blog-details/BUOO"}>
                                    <p className="font-medium text-sm hover:text-[#009B7A] pt-7">
                                        Bone Up on Osteoporosis!
                                    </p>
                                </Link>
                                <p className="flex items-center text-xs text-gray-500 text-blue-900 mt-2">
                                    <MdAccessTimeFilled className="mr-1 w-3.5 h-3.5 text-gray-700" />{" "}
                                    JAN 01, 2026{" "}
                                </p>
                            </div>

                            {/*Product 2*/}
                            <div className="-mt-3 ml-4">
                                <Link href={"/blog-details/TAAY"}>
                                    <p className="font-medium text-sm hover:text-[#009B7A] pt-7">
                                        The Anaemia Around You
                                    </p>
                                </Link>
                                <p className="flex items-center text-xs text-gray-500 text-blue-900 mt-2">
                                    <MdAccessTimeFilled className="mr-1 w-3.5 h-3.5 text-gray-700" />{" "}
                                    JAN 01, 2026{" "}
                                </p>
                            </div>

                            {/*Product 3*/}
                            <div className="-mt-3 ml-4">
                                <Link href={"/blog-details/MASHP"}>
                                    <p className="font-medium text-sm hover:text-[#009B7A] pt-7">
                                        Migraine: A Serious Headache Problem
                                    </p>
                                </Link>
                                <p className="flex items-center text-xs text-gray-500 text-blue-900 mt-2">
                                    <MdAccessTimeFilled className="mr-1 w-3.5 h-3.5 text-gray-700" />{" "}
                                    JAN 01, 2026{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Comment Section (Mobile & Tablet only) */}
                    <div className="border-2 mt-8 block lg:hidden w-80">
                        <CommentSection />
                    </div>

                </div>
            </section>

            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}
