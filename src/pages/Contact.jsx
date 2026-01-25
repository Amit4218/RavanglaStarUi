import { motion } from "framer-motion";
import { FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <main className="bg-[txt-2] text-gray-800 overflow-x-hidden txt">
      <section
        className="relative bg-gray-900 txt font-bold"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/p/AF1QipNcIS67gPx4hn6VgZdWa4s3LSArdsJrAw_z1XiZ=s451-k-no')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold md:text-6xl"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 max-w-3xl text-lg txt"
          >
            We're here to help you plan meaningful journeys and memorable stays
            in the heart of Sikkim.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid justify-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-md space-y-8"
            >
              <div className="text-center lg:text-left ">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="mt-4 text-gray-600 hover:text-[#024d27]">
                  Whether you're planning a stay, a tour, or an event, feel free
                  to reach out. Our team will be happy to assist you.
                </p>
              </div>

              <div className="space-y-6 text-sm text-gray-700">
                <div className="flex items-start gap-4">
                  <FaLocationDot className="mt-1 text-green-600" size={18} />
                  <span>
                    Road, opposite Power Colony, Kewzing,
                    <br />
                    Ravangla, Sikkim 737139, India
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhone className="mt-1 text-green-600" size={18} />
                  <span>
                    +91-9339268296
                    <br />
                    +91-7365050630
                    <br />
                    +91-9239038881
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <AiOutlineMail className="mt-1 text-green-600" size={18} />
                  <span>hotel@ravongla.com</span>
                </div>

                <motion.a
                  href="https://wa.link/b8rqac"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    inline-flex items-center gap-3 rounded-full
                    bg-green-600 px-6 py-3 text-sm font-semibold text-white
                    shadow-md transition hover:bg-green-700
                  "
                >
                  <FaWhatsapp size={18} />
                  Message us on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
