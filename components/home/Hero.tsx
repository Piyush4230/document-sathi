"use client";

import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            🇮🇳 Your Digital Guide to Every Important Document
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Documents Made Easy,
          </h1>

          <h1 className="mt-2 text-5xl font-extrabold leading-tight text-blue-600 lg:text-6xl">
            Steps Made Simple.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Get step-by-step guidance for Aadhaar, PAN, Passport,
            Driving Licence, Voter ID and many more government
            documents in India.
          </p>

          <div className="mt-8">
            <SearchBar />
          </div>
        </motion.div>

        {/* Right Side (Temporary) */}
        <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="flex items-center justify-center"
>
  <div className="flex h-[430px] w-[430px] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 text-8xl shadow-2xl">
    📄
  </div>
</motion.div>

      </div>
    </section>
  );
}