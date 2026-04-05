import { motion } from "framer-motion";
import ButtonLink from "../components/common/ButtonLink";
import SectionHeader from "../components/common/SectionHeader";
import SmartImage from "../components/common/SmartImage";

function GallerySection({ content }) {
  return (
    <section className="relative" id={content.id}>
      <div className="section-shell">
        <SectionHeader tag={content.tag} title={content.title} description={content.intro} />

        <div className="mt-12 columns-1 gap-6 sm:columns-2 xl:columns-3">
          {content.items.map((item, index) => (
            <motion.article
              className="group relative mb-6 break-inside-avoid overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-soft"
              initial={{ opacity: 0, y: 24 }}
              key={item.title}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="overflow-hidden">
                <SmartImage
                  alt={item.title}
                  className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  fallbackSrc="/images/gallery/gallery-01.svg"
                  src={item.image}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">{item.caption}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {content.cta ? (
          <div className="mt-10 flex justify-center">
            <ButtonLink href={content.cta.href} variant="secondary">
              {content.cta.label}
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default GallerySection;
