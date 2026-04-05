import Reveal from "./Reveal";

function SectionHeader({ tag, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <Reveal className={alignment}>
      {tag ? <span className="section-tag">{tag}</span> : null}
      <h2 className="mt-5 font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeader;
