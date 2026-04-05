import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";
import SmartImage from "../components/common/SmartImage";

function AboutSection({ content }) {
  return (
    <section className="relative" id={content.id}>
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <SectionHeader tag={content.tag} title={content.title} />

          <div className="mt-8 space-y-6">
            {content.body.map((paragraph, index) => (
              <Reveal delay={index * 0.08} key={paragraph}>
                <p className="text-base leading-8 text-stone-600 sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          {content.callout ? (
            <Reveal className="mt-8">
              <div className="glass-panel rounded-[28px] p-5">
                <p className="text-sm leading-7 text-stone-600">{content.callout}</p>
              </div>
            </Reveal>
          ) : null}
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="glass-panel overflow-hidden rounded-[36px] p-3">
            <SmartImage
              alt="Project iAppreciate about placeholder"
              className="h-[25rem] w-full rounded-[28px] object-cover sm:h-[32rem]"
              fallbackSrc="/images/highlights/highlight-01.svg"
              src={content.image}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutSection;
