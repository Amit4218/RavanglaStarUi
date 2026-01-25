import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import HomeServices from "../components/HomeService";
import HomeAbout from "../components/HomeAbout";

const images = [
  "https://as2.ftcdn.net/v2/jpg/06/18/71/63/1000_F_618716344_aSmSjADcbsh8GcGKP1FM2jDtRUHGGpiM.jpg",
  "https://as1.ftcdn.net/v2/jpg/04/64/08/62/1000_F_464086266_JkXQZb3mMlrmEUGuArHALuX5iRN2wMmJ.jpg",
  "https://as2.ftcdn.net/v2/jpg/06/07/35/73/1000_F_607357382_0TbpZgZ8oBL1YkzXTxlgBtxlCZmxbNas.jpg",
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500); // change every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0" />

        <div className="relative z-10 flex h-full items-center top-50 txt">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl font-bold leading-tight md:text-5xl"
            >
              Explore The Mountains Like Never Before
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-2xl mx-auto text-lg txt font-semibold text-shadow-2xs"
            >
              Discover breathtaking landscapes, curated tours, and unforgettable
              experiences in the heart of Sikkim.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="#"
                  className="rounded-md bg-green-600 px-11 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-green-700"
                >
                  Explore
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="https://wa.link/b8rqac"
                  target="_blank"
                  className="inline-flex items-center gap-1 rounded-md border border-white bg-white px-4 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gray-100"
                >
                  Contact Us
                  <FaWhatsapp size={18} className="text-green-600" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <HomeServices />
      <HomeAbout />
    </>
  );
}

export default Home;
