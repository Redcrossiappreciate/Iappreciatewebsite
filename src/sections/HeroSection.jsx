import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ButtonLink from "../components/common/ButtonLink";
import Reveal from "../components/common/Reveal";
import SmartImage from "../components/common/SmartImage";

function HeroSection({ content }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const bubbleY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section className="relative" id="top" ref={sectionRef}>
      <div className="section-shell grid min-h-[44rem] items-start gap-14 pt-10 sm:pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-14">
        <Reveal>
          <span className="section-tag">{content.eyebrow}</span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[5.3rem]">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
            {content.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={content.primaryAction.href}>{content.primaryAction.label}</ButtonLink>
            <ButtonLink href={content.secondaryAction.href} variant="secondary">
              {content.secondaryAction.label}
            </ButtonLink>
          </div>
        </Reveal>

        <motion.div className="relative mx-auto w-full max-w-[34rem] lg:mr-0" style={{ y: imageY }}>
          <motion.div
            className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-crimson-100/80 blur-2xl"
            style={{ y: bubbleY }}
          />
          <motion.div
            className="absolute -right-6 bottom-12 h-28 w-28 rounded-full bg-[#f1d8d1] blur-2xl"
            style={{ y: bubbleY }}
          />

          <div className="glass-panel relative overflow-hidden rounded-[36px] p-3 shadow-soft">
            <div className="rounded-[30px] bg-gradient-to-b from-white via-[#fff7f6] to-[#f8ece9] p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/80 pb-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson-700">
                    Event Showcase
                  </p>
                  <p className="mt-2 font-display text-[1.65rem] leading-tight text-ink sm:text-[1.85rem]">
                    Project iAppreciate 2026
                  </p>
                </div>

                <div className="rounded-full border border-white/80 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-600 shadow-glass">
                  RCY NTU
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-[26px] bg-white/70">
                <SmartImage
                  alt="Project iAppreciate 2026 hero"
                  className="h-[23rem] w-full object-cover object-center sm:h-[30rem]"
                  fallbackSrc="/images/hero/hero-placeholder.svg"
                  src={content.image}
                />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-4 -bottom-8 grid gap-3 sm:inset-x-auto sm:-left-10 sm:top-24 sm:bottom-auto sm:w-56">
            {content.floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
                className="glass-panel rounded-[22px] p-4"
                transition={{ duration: 5 + index, ease: "easeInOut", repeat: Infinity }}
              >
                <p className="text-sm font-semibold text-ink">{card.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
