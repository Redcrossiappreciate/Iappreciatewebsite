import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";
import SponsorLogoCard from "../components/ui/SponsorLogoCard";

function SponsorsSection({ content }) {
  return (
    <section className="relative" id={content.id}>
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeader tag={content.tag} title={content.title} description={content.intro} />

            <Reveal className="mt-8">
              <ul className="space-y-4 text-sm leading-7 text-stone-600">
                {content.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-crimson-700" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.logos.map((logo) => (
                <SponsorLogoCard key={logo.name} logo={logo} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;
