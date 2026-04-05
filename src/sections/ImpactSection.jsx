import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";
import SmartImage from "../components/common/SmartImage";
import StatCard from "../components/ui/StatCard";

function ImpactSection({ content }) {
  return (
    <section className="relative" id={content.id}>
      <div className="section-shell">
        <SectionHeader tag={content.tag} title={content.title} description={content.note} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="glass-panel overflow-hidden rounded-[36px] p-3">
              <SmartImage
                alt="Project highlights placeholder"
                className="h-[24rem] w-full rounded-[28px] object-cover sm:h-[30rem]"
                fallbackSrc="/images/highlights/highlight-02.svg"
                src={content.image}
              />
            </div>

            <div className="mt-6 rounded-[28px] border border-crimson-100 bg-crimson-50/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-crimson-800">
                Snapshot
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-700">
                {content.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-crimson-700" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className={`grid gap-5 ${content.stats.length >= 4 ? "sm:grid-cols-2" : ""}`}>
            {content.stats.map((stat, index) => (
              <StatCard index={index} key={stat.value} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
