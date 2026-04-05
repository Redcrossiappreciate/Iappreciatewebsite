import { motion } from "framer-motion";

function FeatureCard({ index, title, description }) {
  return (
    <motion.article
      className="soft-card relative overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-crimson-300 to-transparent" />
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-crimson-50 text-sm font-semibold text-crimson-800 shadow-glass">
        0{index + 1}
      </div>
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
    </motion.article>
  );
}

export default FeatureCard;
