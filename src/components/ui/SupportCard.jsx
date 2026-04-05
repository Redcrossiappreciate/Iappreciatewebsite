import { motion } from "framer-motion";

function SupportCard({ item, index }) {
  return (
    <motion.article
      className="rounded-[28px] border border-black/5 bg-white p-6 shadow-soft"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="mb-5 h-11 w-11 rounded-2xl bg-crimson-50 shadow-glass" />
      <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-600">{item.description}</p>
    </motion.article>
  );
}

export default SupportCard;
