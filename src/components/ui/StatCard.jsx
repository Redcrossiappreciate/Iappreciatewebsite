import { motion } from "framer-motion";

function StatCard({ stat, index }) {
  return (
    <motion.article
      className="flex min-h-[16rem] flex-col rounded-[28px] border border-crimson-100 bg-gradient-to-b from-white to-crimson-50/60 p-6 shadow-glass"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -4 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <p className="font-display text-[2.85rem] leading-none text-crimson-800 sm:text-[3.4rem]">
        {stat.value}
      </p>
      {stat.meta ? (
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
          {stat.meta}
        </p>
      ) : null}
      {stat.label ? (
        <p className="mt-5 max-w-[16rem] text-lg leading-8 text-stone-700">{stat.label}</p>
      ) : null}
      {stat.detail ? <p className="mt-3 text-sm font-medium text-stone-500">{stat.detail}</p> : null}
    </motion.article>
  );
}

export default StatCard;
