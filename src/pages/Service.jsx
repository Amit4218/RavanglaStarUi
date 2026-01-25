import { motion } from "framer-motion";

const services = [
  {
    serviceImage:
      "https://i.pinimg.com/736x/fe/cb/96/fecb96e3f3c84ba9c02c01a701fd5786.jpg",
    serviceName: "Customized Tour Packages",
    serviceDescription:
      "Personalized travel experiences designed around your interests, pace, and comfort while exploring Sikkim.",
  },
  {
    serviceImage:
      "https://b.zmtcdn.com/data/pictures/5/18744755/e73a404093a8e8b694bdf254a71b1a9f.jpg",
    serviceName: "Roots and Shoots Restobar",
    serviceDescription:
      "A welcoming restobar serving Himalayan-inspired dishes along with popular multi-cuisine favorites.",
  },
  {
    serviceImage:
      "https://www.cateringcorner.in/wp-content/uploads/2019/11/Alafroz-Caterers.jpeg",
    serviceName: "Outdoor Catering Services",
    serviceDescription:
      "Reliable outdoor catering for events, gatherings, and celebrations with quality food and service.",
  },
  {
    serviceImage:
      "https://theroyalreception.com/assets/img/gallery/events/26.jpg",
    serviceName: "Event Management",
    serviceDescription:
      "Thoughtfully planned events, from small private functions to large celebrations, handled end to end.",
  },
  {
    serviceImage:
      "https://i.pinimg.com/1200x/67/80/11/678011e64d4adb5cabdb91dd69bd2ccd.jpg",
    serviceName: "Sustainable Travel Solutions",
    serviceDescription:
      "Eco-conscious travel practices that support local communities and preserve Sikkim’s natural beauty.",
  },
  {
    serviceImage:
      "https://i.pinimg.com/1200x/03/75/8f/03758f9a674bdc18cdf2caed07f59c72.jpg",
    serviceName: "Transportation and Logistics",
    serviceDescription:
      "Comfortable and dependable transport services to ensure smooth travel across destinations.",
  },
  {
    serviceImage:
      "https://i.pinimg.com/736x/16/bd/f9/16bdf9eddfddfcadfdc79df16fbf3e30.jpg",
    serviceName: "Adventure Activities",
    serviceDescription:
      "Guided outdoor experiences including trekking, nature walks, and local exploration activities.",
  },
];
//

function Services() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
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
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 max-w-3xl text-lg txt"
          >
            Carefully crafted services that bring comfort, culture, and
            meaningful experiences together.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group overflow-hidden rounded-xl bg-gray-50 shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.serviceImage}
                    alt={service.serviceName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold txt">
                    {service.serviceName}
                  </h3>
                  <p className="mt-2 text-sm  leading-relaxed hover:text-[#024d27]">
                    {service.serviceDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
