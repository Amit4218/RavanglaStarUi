import { motion } from "framer-motion";
import {
  FaLeaf,
  FaMountain,
  FaUtensils,
  FaUsers,
  FaSpa,
  FaWifi,
  FaParking,
  FaCoffee,
  FaShuttleVan,
  FaConciergeBell,
} from "react-icons/fa";

function About() {
  return (
    <main className="bg-white txt overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative bg-gray-900 txt font-bold"
        style={{
          backgroundImage:
            "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/74/da/03/sunset.jpg?w=1000&h=-1&s=1')",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "100%",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold md:text-6xl"
          >
            About Ravongla Star
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 max-w-3xl text-lg txt font-semibold"
          >
            Crafting meaningful journeys through Himalayan hospitality, culture,
            and connection.
          </motion.p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold">
              Ravongla Star Vacations and Hospitality
            </span>
            , where we bring the heart of Sikkim to life through exceptional
            stays, curated experiences, and unmatched Himalayan hospitality.
            <br />
            <br />
            With three unique properties across prime locations in Sikkim, we
            blend comfort, culture, and natural beauty—whether you seek serene
            escapes, adventure-filled journeys, or immersive cultural
            experiences.
          </p>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold mb-14">
            Why Choose Us
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaMountain />,
                title: "Distinctive Properties",
                text: "Three serene locations offering luxurious yet authentic Himalayan stays.",
              },
              {
                icon: <FaUsers />,
                title: "Tailor-Made Tours",
                text: "Personalized travel experiences showcasing Sikkim's culture and landscapes.",
              },
              {
                icon: <FaUtensils />,
                title: "Roots & Shoots Restobar",
                text: "Multi-cuisine dining with Himalayan-inspired, locally sourced flavors.",
              },
              {
                icon: <FaConciergeBell />,
                title: "Events & Catering",
                text: "Expertly managed events—from intimate gatherings to grand celebrations.",
              },
              {
                icon: <FaLeaf />,
                title: "Sustainability & Community",
                text: "Eco-friendly practices that empower and employ local communities.",
              },
              {
                icon: <FaSpa />,
                title: "Adventure & Wellness",
                text: "Trekking, birdwatching, yoga, spa, and Himalayan wellness programs.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4 text-3xl text-green-600">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTTO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold">Our Motto</h2>

          <div className="mt-10 space-y-6 text-gray-600">
            <p>
              <strong>People Over Places:</strong> Building meaningful
              connections.
            </p>
            <p>
              <strong>Experiences Over Products:</strong> Creating cherished
              memories.
            </p>
            <p>
              <strong>Himalayan Hospitality:</strong> Warmth, care, and
              authenticity.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PROPERTY HIGHLIGHT */}
      <section className="bg-gray-900 text-gray-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-white mb-10">
            Our Property
          </h2>

          <p className="mx-auto max-w-4xl text-center leading-relaxed">
            Offering views of Mount Khangchendzonga, our hotel is located just 3
            km from Buddha Park of Ravangla. Rustic bamboo interiors, cozy
            rooms, modern amenities, an in-house restaurant and bakery, free
            parking, and a doctor-on-call ensure comfort and peace of mind.
          </p>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold mb-14">
            Comforts You'll Love
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {[
              {
                icon: <FaWifi />,
                title: "Seamless Connectivity",
                text: "Stay connected with complimentary high-speed Wi-Fi across the property.",
              },
              {
                icon: <FaCoffee />,
                title: "Fresh Morning Starts",
                text: "Enjoy wholesome complimentary breakfast made with local ingredients.",
              },
              {
                icon: <FaShuttleVan />,
                title: "Hassle-Free Transfers",
                text: "Convenient airport shuttle services for stress-free travel.",
              },
              {
                icon: <FaSpa />,
                title: "Wellness & Comfort",
                text: "Relax with laundry service, room service, and peaceful surroundings.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="text-3xl text-green-600">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-lg text-gray-700">
            At Ravongla Star, we don't just provide stays—we craft journeys
            filled with joy, discovery, and deep connection to the enchanting
            land of Sikkim.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
