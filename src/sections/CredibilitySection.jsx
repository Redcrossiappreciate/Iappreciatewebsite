import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";
import SmartImage from "../components/common/SmartImage";

function CredibilitySection({ content }) {
  return (
    <section className="relative" id={content.id}>
      <div className="section-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <SectionHeader tag={content.tag} title={content.title} />

          <div className="mt-8 space-y-6">
            {content.paragraphs.map((paragraph, index) => (
              <Reveal delay={index * 0.08} key={paragraph}>
                <p className="text-base leading-8 text-stone-600 sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="rounded-[28px] border border-crimson-100 bg-gradient-to-b from-white to-crimson-50/70 p-6">
              <ul className="space-y-4 text-sm leading-7 text-stone-700">
                {content.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-crimson-700" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="glass-panel overflow-hidden rounded-[36px] p-3">
            <SmartImage
              alt="RCY NTU credibility placeholder"
              className="h-[25rem] w-full rounded-[28px] object-cover sm:h-[31rem]"
              fallbackSrc="/images/highlights/highlight-03.svg"
              src={content.image}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CredibilitySection;
