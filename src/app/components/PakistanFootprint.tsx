"use client";

export default function PakistanFootprint() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <div className="bg-gradient-to-r from-[#00B894] to-[#00D2C6] text-white rounded-2xl p-10 inline-block">
                        <h2 className="text-6xl font-bold">Pakistan</h2>
                        <p className="tracking-widest mt-2 text-lg">WIDE COVERAGE</p>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold text-gray-800">
                        Our Presence Across Pakistan 🇵🇰
                    </h3>

                    <p className="mt-3 text-gray-600 max-w-md">
                        Our medicines are distributed across major cities and provinces of
                        Pakistan, ensuring safe and reliable healthcare nationwide.
                    </p>

                    <div className="flex gap-8 mt-6">
                        <div>
                            <p className="text-3xl font-bold text-[#00B894]">4</p>
                            <p className="text-sm text-gray-500">Provinces</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-[#00B894]">100+</p>
                            <p className="text-sm text-gray-500">Cities Covered</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT MAP */}
                <div className="relative">
                    <img
                        src="/pakistan-map-purple.svg"
                        alt="Pakistan Coverage Map"
                        className="w-full max-w-lg mx-auto opacity-90"
                    />
                </div>
            </div>
        </section>
    );
}
