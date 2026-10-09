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

export default function MigraineBlog() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/* Blog Section */}
            <section className="flex justify-center ml-5 flex-col lg:flex-row mt-20">

                {/* Left Section */}
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
                                Migraine A Serious Headache Problem
                            </h1>
                        </div>

                        {/* Title */}
                        <div className="border-2">
                            <h1 className="font-bold text-3xl text-[#009B7A] mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4]">
                                Migraine – A Serious Headache Problem
                            </h1>
                            <h2 className="font-medium text-lg text-gray-600 mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4]">
                                Understanding, Managing, and Preventing Migraine Attacks
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="border-b-2 border-l-2 border-r-2 text-gray-600 pt-4 pb-5 pl-3.5 pr-3.5">

                            {/* Intro */}
                            <span>
                                <p>
                                    Migraine is not an ordinary headache. It is a serious neurological condition that can affect
                                    daily activities, work performance, and overall quality of life.
                                </p>
                                <p className="mt-5">
                                    Many people ignore migraine symptoms, but without proper care, the condition can become
                                    more frequent and severe.
                                </p>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* What is Migraine */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    What Is Migraine?
                                </p>
                                <p className="mt-5">
                                    Migraine is a medical condition that causes <span className="font-medium text-black">repeated attacks
                                        of moderate to severe headache</span>, often on one side of the head.
                                </p>
                                <p className="mt-5">
                                    The pain is usually throbbing and can last from a few hours to several days.
                                </p>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Symptoms */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Common Symptoms of Migraine
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Throbbing or severe headache</li>
                                    <li>Sensitivity to light and sound</li>
                                    <li>Nausea or vomiting</li>
                                    <li>Blurred or disturbed vision</li>
                                    <li>Dizziness or weakness</li>
                                    <li>Difficulty concentrating</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Why Serious */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Why Migraine Should Not Be Ignored
                                </p>
                                <p className="mt-5">
                                    Migraine is serious because it can disrupt personal life, reduce work productivity,
                                    and increase mental stress.
                                </p>
                                <p className="mt-5">
                                    Without proper treatment, migraine attacks may become more frequent and difficult to control.
                                </p>

                                {/* Image */}
                                <img
                                    src="/Blog-images/MASHP/MASHP-img2.png"
                                    alt="Flarizen Tablet 5mg"
                                    className="mt-5 w-auto h-auto"
                                />
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Triggers */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Common Migraine Triggers
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Lack of sleep</li>
                                    <li>Stress and anxiety</li>
                                    <li>Skipping meals</li>
                                    <li>Bright lights or loud noises</li>
                                    <li>Hormonal changes</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Company */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Trusted Care by Avant Pharmaceuticals Pvt Ltd
                                </p>
                                <p className="mt-5">
                                    <span className="font-medium text-black">Avant Pharmaceuticals Pvt Ltd</span> is committed to
                                    providing high-quality and reliable healthcare solutions for better patient outcomes.
                                </p>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Product */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Recommended Migraine Treatment
                                </p>

                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    <Link href={"/product/31"} className="border-b-2 border-[#009B7A]">
                                        Flarizen Tablet 5mg
                                    </Link>
                                </p>

                                <img
                                    src="/Blog-images/MASHP/MASHP-img1.png"
                                    alt="Flarizen Tablet 5mg"
                                    className="mt-5 w-auto h-auto"
                                />

                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Flunarizine</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 12’s</li>
                                </ul>

                                <p className="mt-5">
                                    Flarizen Tablet is commonly used for migraine prevention and helps reduce the
                                    frequency and severity of migraine attacks.
                                </p>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Final */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Final Thoughts
                                </p>
                                <p className="mt-5">
                                    Migraine is more than just a headache. With proper awareness, lifestyle care,
                                    and trusted medication, it can be effectively managed.
                                </p>
                                <p className="mt-5 font-medium text-black">
                                    Choose reliable healthcare solutions from Avant Pharmaceuticals Pvt Ltd.
                                </p>
                            </span>

                        </div>

                        <div className="flex justify-center bg-gray-50 pt-6 pb-6 space-x-12 border-l-2 border-b-2 border-r-2"></div>

                        {/* Comments */}
                        <div className="border-2 mt-10 hidden lg:block">
                            <CommentSection />
                        </div>

                    </div>
                </div>


                {/* Right Section*/}

                <div className="mt-5 lg:mt-0 sm:mr-0 lg:mr-10">
                    {/* Social Plugin, Subscribe, and Most Popular sections */}
                    <div className="mt-0.5">
                        <h1 className="font-bold font-sans text-sm border-t-2 border-l-2 border-r-2 pl-3.5 pt-1.5 pb-1.5 w-80">
                            SOCIAL PLUGIN
                        </h1>
                        <span className="flex justify-center items-center border-2 w-80 pt-7 pb-7 space-x-8">
                            <span>
                                <a href="https://www.facebook.com/profile.php?id=61594224072327" className="text-blue-800 ">
                                    <FaFacebook />
                                </a>
                            </span>
                            <span>
                                <a href="https://wa.me/+923218288378" className="text-green-500">
                                    <FaWhatsapp />
                                </a>
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/in/avant-pharma-47b443441/" className="text-blue-700">
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
                                <Link href={"/blog-details/BYWOOUTI"}>
                                    <p className="font-medium text-sm hover:text-[#009B7A] pt-7">
                                        Berry Your Way Out of Urinary Tract Infections
                                    </p>
                                </Link>
                                <p className="flex items-center text-xs text-gray-500 text-blue-900 mt-2">
                                    <MdAccessTimeFilled className="mr-1 w-3.5 h-3.5 text-gray-700" />{" "}
                                    JAN 01, 2026{" "}
                                </p>
                            </div>

                            {/*Product 3*/}
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
