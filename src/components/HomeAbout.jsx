import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function HomeAbout() {
  return (
    <div className="flex justify-center items-center">
      <section className="py-10 ">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <h2 className="text-3xl font-bold">About Ravongla Star</h2>
            <div className="mx-auto w-1/2 text-center">
              <p className="mt-6 text-gray-600 leading-relaxed">
                Ravongla Star Vacations and Hospitality offers thoughtfully
                curated stays and experiences that celebrate the culture,
                nature, and warmth of Sikkim.
              </p>
            </div>

            <Link
              to="/about"
              className="
              mt-6 inline-flex items-center gap-2 text-green-700 font-semibold
              transition-all hover:gap-3
            "
            >
              Learn more about us
              <FaArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomeAbout;
