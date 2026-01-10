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
                                Bone Up on Osteoporosis!
                            </h1>
                        </div>

                        <div className="border-2">
                            <h1 className="font-bold text-3xl text-[#009B7A] mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4] ">
                                Bone Up on Osteoporosis!
                            </h1>
                            <h1 className="font-medium text-lg text-gray-600 mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4]">
                                A Simple Guide to Stronger, Healthier Bones
                            </h1>
                        </div>

                        <div className="border-b-2 border-l-2 border-r-2 text-gray-600 pt-4 pb-5 pl-3.5 pr-3.5 ">
                            {/* Introduction */}
                            <span>
                                <p>
                                    Osteoporosis is more common than you think. It’s often called the “silent disease” because it quietly weakens your bones without causing pain—until a fracture happens.
                                </p>
                                <p className="mt-5">
                                    The good news is that osteoporosis can be <span className="font-medium text-black">prevented and managed</span> with the right awareness, nutrition, and care.
                                </p>
                                <p className="mt-5">
                                    Let’s break it down step by step, so you understand everything easily.
                                </p>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* What is Osteoporosis */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    What is Osteoporosis?
                                </p>
                                <p className="mt-5">
                                    Osteoporosis is a condition where <span className="font-medium text-black">bones lose density and become fragile</span>. The term means <span className="font-medium text-black">“porous bones.”</span>
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Decreased bone density</li>
                                    <li>Weakened bones</li>
                                    <li>Higher risk of fractures</li>
                                </ul>
                                <p className="mt-5">
                                    Even minor falls, sudden movements, or a cough can cause fractures—especially in the <span className="font-medium text-black">hip, spine, or wrist.</span>
                                </p>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Causes */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Causes of Osteoporosis
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Age-related bone loss</li>
                                    <li>Hormonal changes (low estrogen/testosterone)</li>
                                    <li>Poor nutrition (lack of calcium and vitamin D)</li>
                                    <li>Smoking, alcohol, and sedentary lifestyle</li>
                                    <li>Certain medications or medical conditions</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Prevention */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    How to Prevent Osteoporosis
                                </p>
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li>Eat calcium-rich foods and get enough Vitamin D</li>
                                    <li>Exercise regularly, including weight-bearing activities</li>
                                    <li>Quit smoking and limit alcohol intake</li>
                                    <li>Get regular bone check-ups</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Supplements */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Role of Supplements
                                </p>
                                <p className="mt-5">
                                    When diet and sunlight aren’t enough, high-quality supplements help maintain bone health. Avant Pharmaceuticals offers reliable options:
                                </p>

                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">Calcium & Vitamin D3</p>

                                {/* Product 1 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    1. <Link href={"/product/18"} className="border-b-2 border-[#009B7A]">Calavant-D Tablet</Link>
                                </p>
                                <img
                                    src="/Blog-images/BUOO/BUOO-img1.png"
                                    alt="Calavant-D Tablet"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Calcium + Vitamin D3</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 30{"'"}s</li>
                                </ul>

                                {/* Product 2 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    2. <Link href={"/product/19"} className="border-b-2 border-[#009B7A]">Calavant-D Syrup</Link>
                                </p>
                                <img
                                    src="/Blog-images/BUOO/BUOO-img2.png"
                                    alt="Calavant-D Syrup"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Calcium + Vitamin D3</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 120ml</li>
                                </ul>

                                {/* Product 3 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    3. <Link href={"/product/17"} className="border-b-2 border-[#009B7A]">Calavant-D Drops</Link>
                                </p>
                                <img
                                    src="/Blog-images/BUOO/BUOO-img3.png"
                                    alt="Calavant-D Drops"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Calcium + Vitamin D3</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 10ml</li>
                                </ul>

                                {/* Product 4 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    4. <Link href={"/product/25"} className="border-b-2 border-[#009B7A]">D-Vant Oral Solution</Link>
                                </p>
                                <img
                                    src="/Blog-images/BUOO/BUOO-img4.png"
                                    alt="D-Vant Oral Solution"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Vit D3 200,000 IU / Vit A 5000 IU</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 1{"'"}s</li>
                                </ul>

                                {/* Product 5 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    5. <Link href={"/product/28"} className="border-b-2 border-[#009B7A]">D-Vant Tablet 200,000 IU</Link>
                                </p>
                                <img
                                    src="/Blog-images/BUOO/BUOO-img5.png"
                                    alt="D-Vant Tablet 200,000 IU"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Vitamin D3 200,000 IU</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 4{"'"}s</li>
                                </ul>

                                {/* Product 6 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    6. <Link href={"/product/61"} className="border-b-2 border-[#009B7A]">Pure-D Tablet</Link>
                                </p>
                                <img
                                    src="/Blog-images/BUOO/BUOO-img6.png"
                                    alt="Pure-D Tablet"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Cholecalciferol Vit. D3 200,000 IU</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 4{"'"}s</li>
                                </ul>

                                {/* Product 7 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    7. <Link href={"/product/35"} className="border-b-2 border-[#009B7A]">Glowin Tablet</Link>
                                </p>
                                <img
                                    src="/Blog-images/BUOO/BUOO-img7.png"
                                    alt="Pure-D Tablet"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> CARTILAGE BIO-SYNTHESIZER</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 30{"'"}s</li>
                                </ul>

                                {/* Product 8 */}
                                <p className="mt-5 font-semibold text-lg text-[#009B7A]">
                                    8. <Link href={"/product/37"} className="border-b-2 border-[#009B7A]">Glucotin Tablet</Link>
                                </p>
                                <img
                                    src="/Blog-images/BUOO/BUOO-img8.png"
                                    alt="Pure-D Tablet"
                                    className="mt-5 w-auto h-auto"
                                />
                                <ul className="list-disc ml-6 mt-3 space-y-2">
                                    <li><span className="font-medium text-black">Generic Name:</span> Glucosamine + Chondriotin With Vitamin C&D</li>
                                    <li><span className="font-medium text-black">Pack Size:</span> 30{"'"}s</li>
                                </ul>
                            </span>

                            <p className="mt-5 border-gray-300 border-b"></p>

                            {/* Final thoughts */}
                            <span>
                                <p className="mt-5 font-semibold text-xl text-[#009B7A]">
                                    Final Thoughts
                                </p>
                                <p className="mt-5">
                                    Osteoporosis is common but <span className="font-medium text-black">not unavoidable.</span> With the right knowledge, healthy habits, and proper nutritional support, bones can stay strong for years.
                                </p>
                                <p className="mt-5">
                                    <span className="font-medium text-black">Bone up today—because strong bones support a strong life.</span>
                                </p>
                                <p className="mt-5">
                                    <span className="font-medium text-black">Trusted bone care by Avant Pharmaceuticals Pvt Ltd</span>
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

            {/*Footer*/}
            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}