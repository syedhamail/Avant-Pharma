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

export default function BUOO() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/*Blog Section*/}
            <section className="flex justify-center ml-5 flex-col lg:flex-row mt-20">

                {/*Left Section*/}
                <div className="sm:ml-0 lg:ml-10 mr-5 max-w-full overflow-x-hidden">
                    <div className="w-full">
                        <div className="flex items-top border-t-2 border-l-2 border-r-2 pt-2 bg-gray-50 text-gray-400 pb-2 pl-3.5">
                            <h1 className="flex item-center font-sans text-sm">
                                <Link href={"/"} className="hover:text-blue-500">
                                    Home
                                </Link>
                                <IoIosArrowForward className="w-3 h-3 mt-1 ml-1" />
                            </h1>
                            <h1 className="font-sans text-sm ml-1">
                                The Anaemia Around You
                            </h1>
                        </div>

                        <div className="border-2">
                            <h1 className="font-bold text-3xl text-[#009B7A] mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4] ">
                                The Anaemia Around You
                            </h1>
                            <h1 className="font-medium text-lg text-gray-600 mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4]">
                                A Simple Guide to Understanding Anaemia
                            </h1>
                        </div>

                        <div className="border-b-2 border-l-2 border-r-2 text-gray-600 pt-4 pb-5 pl-3.5 pr-3.5 ">
                            {/* Introduction */}
                            <span>
                                <p>
                                    Anaemia affects millions worldwide and often develops quietly. It can make you feel tired, weak, or dizzy. But with the right awareness and care, anaemia is manageable and sometimes preventable.
                                </p>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* What is Anaemia */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    What is Anaemia?
                                </p>
                                <p className="mt-5">
                                    Anaemia occurs when your body lacks enough healthy red blood cells to carry oxygen to tissues. Low hemoglobin means less oxygen, which can affect your energy levels.
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Frequent tiredness or weakness</li>
                                    <li>Shortness of breath or dizziness</li>
                                    <li>Pale or yellowish skin</li>
                                    <li>Cold hands and feet</li>
                                    <li>Headaches or irregular heartbeat</li>
                                </ul>
                                <img
                                    src="/Blog-images/TAAY/TAAY-img4.png"
                                    alt="Illustration showing low red blood cells vs normal"
                                    className="mt-5 w-auto h-auto"
                                />
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Causes */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Causes of Anaemia
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Iron deficiency (most common)</li>
                                    <li>Vitamin deficiency (folate, B12)</li>
                                    <li>Chronic diseases like kidney issues or cancer</li>
                                    <li>Blood loss from injury or menstruation</li>
                                    <li>Genetic conditions such as sickle cell anaemia or thalassemia</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Types of Anaemia */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Types of Anaemia
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Iron-Deficiency Anaemia</li>
                                    <li>Vitamin-Deficiency Anaemia</li>
                                    <li>Chronic Disease Anaemia</li>
                                    <li>Inherited Anaemias</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Prevention */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    How to Prevent Anaemia
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Eat iron-rich foods like red meat, spinach, beans, and lentils</li>
                                    <li>Vitamin C-rich foods to absorb iron better (oranges, tomatoes, peppers)</li>
                                    <li>Include folate and B12 in your diet (leafy greens, eggs, dairy)</li>
                                    <li>Get regular health check-ups for early detection</li>
                                </ul>
                                <img
                                    src="/Blog-images/TAAY/TAAY-img5.png"
                                    alt="Irovant Tablet"
                                    className="mt-5 w-auto h-auto"
                                />
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Supplements */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Role of Supplements
                                </p>
                                <p className="mt-5">
                                    When diet alone isn’t enough, Avant Pharmaceuticals provides high-quality iron supplements to support red blood cell health:
                                </p>

                                {/* Product 1 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    1. <Link href={"/product/39"} className="border-b-2 border-[#009B7A]">Irovant Tablet</Link>
                                </p>
                                <img
                                    src="/Blog-images/TAAY/TAAY-img1.png"
                                    alt="Irovant Tablet"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Iron + L-methylfolate</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 20{"'"}s</li>
                                </ul>

                                {/* Product 2 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    2. <Link href={"/product/40"} className="border-b-2 border-[#009B7A]">Irovant Drops</Link>
                                </p>
                                <img
                                    src="/Blog-images/TAAY/TAAY-img2.png"
                                    alt="Irovant Drops"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Iron Bisglycinate with Zinc</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 20ml</li>
                                </ul>

                                {/* Product 3 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    3. <Link href={"/product/79"} className="border-b-2 border-[#009B7A]">Umarose Injection 100mg / 5ml</Link>
                                </p>
                                <img
                                    src="/Blog-images/TAAY/TAAY-img3.png"
                                    alt="Umarose Injection"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Iron Sucrose</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 5{"'"}s</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Treatment & Care */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Treatment & Care
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Iron and vitamin supplements</li>
                                    <li>Diet adjustments for better iron absorption</li>
                                    <li>Addressing underlying causes like blood loss or chronic disease</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Key Takeaways */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Key Takeaways
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Anaemia is common but manageable</li>
                                    <li>Iron, folate, and Vitamin B12 are essential for healthy blood</li>
                                    <li>Diet, lifestyle, and supplements make a big difference</li>
                                    <li>Avant Pharmaceuticals’ supplements provide reliable support</li>
                                </ul>
                                <img
                                    src="/Blog-images/TAAY/TAAY-img6.png"
                                    alt="Umarose Injection"
                                    className="mt-5 w-auto h-auto"
                                />
                            </span>

                            {/* Final */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Final Thoughts
                                </p>
                                <p className="mt-5">
                                    Anaemia may be common, but it should never be ignored. Early care, proper nutrition,
                                    and reliable supplementation can help restore strength and improve quality of life.
                                </p>
                                <p className="mt-5 font-medium text-black">
                                    Trusted anaemia care by Avant Pharmaceuticals Pvt Ltd
                                </p>
                            </span>

                        </div>

                        <div className="flex justify-center bg-gray-50 pt-6 pb-6 space-x-12 border-l-2 border-b-2 border-r-2"></div>

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
