import { motion } from "framer-motion";
import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";
import SmartImage from "../components/common/SmartImage";

function GalleryPage({ content }) {
  return (
    <section className="relative pb-8 pt-6">
      <div className="section-shell">
        <SectionHeader align="center" tag={content.eyebrow} title={content.title} description={content.subtitle} />

        <Reveal className="mt-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Past moments from Project iAppreciate
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 xl:columns-3">
          {content.images.map((item, index) => (
            <motion.figure
              className="group mb-6 break-inside-avoid overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-soft"
              initial={{ opacity: 0, y: 24 }}
              key={item.image}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="overflow-hidden">
                <SmartImage
                  alt={item.title}
                  className="w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  fallbackSrc="/images/gallery/gallery-01.svg"
                  src={item.image}
                />
              </div>
              <figcaption className="p-5">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">{item.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
