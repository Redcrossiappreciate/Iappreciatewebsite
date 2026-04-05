import SectionHeader from "../components/common/SectionHeader";
import FeatureCard from "../components/ui/FeatureCard";

function WhyItMattersSection({ content }) {
  return (
    <section className="relative" id={content.id}>
      <div className="section-shell">
        <SectionHeader tag={content.tag} title={content.title} description={content.intro} />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {content.items.map((item, index) => (
            <FeatureCard description={item.description} index={index} key={item.title} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyItMattersSection;
