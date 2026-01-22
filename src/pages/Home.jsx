import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        {/* Background Images */}
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center top-50 txt">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Explore The Mountains Like Never Before
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg txt font-semibold text-shadow-2xs">
              Discover breathtaking landscapes, curated tours, and unforgettable
              experiences in the heart of Sikkim.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row text-white">
              <Link to="/Explore" className="rounded-md bg-green-600 px-10 py-3 font-semibold hover:bg-green-700 transition hover:text-xl">
                Explore
              </Link>

              <Link
                to={"https://wa.link/b8rqac"}
                className="rounded-md text-black border border-white px-6 py-3 font-semibold bg-white transition hover:text-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-green-500 section-B"></section>
    </>
  );
}

export default Home;
