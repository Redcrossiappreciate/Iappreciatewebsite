import SectionHeader from "../components/common/SectionHeader";
import SupportCard from "../components/ui/SupportCard";

function SupportSection({ content }) {
  return (
    <section className="relative" id={content.id}>
      <div className="section-shell">
        <SectionHeader align="center" tag={content.tag} title={content.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item, index) => (
            <SupportCard index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
