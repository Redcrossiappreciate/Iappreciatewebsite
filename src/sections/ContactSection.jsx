import ButtonLink from "../components/common/ButtonLink";
import Reveal from "../components/common/Reveal";
import SectionHeader from "../components/common/SectionHeader";

function ContactSection({ content }) {
  return (
    <section className="relative pb-8" id={content.id}>
      <div className="section-shell">
        <div className="glass-panel overflow-hidden rounded-[40px] px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeader tag={content.tag} title={content.title} description={content.description} />

              <Reveal className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={`mailto:${content.sponsorshipEmail}`}>Email Sponsorship Team</ButtonLink>
                <ButtonLink href="./gallery.html" variant="secondary">
                  Review Event Gallery
                </ButtonLink>
              </Reveal>
            </div>

            <div className="grid gap-4">
              {content.contactCards.map((card) => (
                <Reveal key={card.label}>
                  <a
                    className="block rounded-[28px] border border-white/80 bg-white/85 p-5 transition hover:-translate-y-1 hover:shadow-soft"
                    href={card.href}
                  >
                    <p className="text-sm uppercase tracking-[0.16em] text-stone-500">{card.label}</p>
                    <p className="mt-3 text-lg font-semibold text-crimson-800">{card.value}</p>
                  </a>
                </Reveal>
              ))}

              <Reveal>
                <div className="rounded-[28px] border border-white/80 bg-white/85 p-5">
                  <p className="text-sm uppercase tracking-[0.16em] text-stone-500">Socials</p>
                  <div className="mt-4 space-y-3">
                    {content.socialLinks.map((link) => (
                      <a
                        className="flex items-center justify-between text-sm text-stone-700 transition hover:text-crimson-800"
                        href={link.href}
                        key={link.label}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span>{link.label}</span>
                        <span className="font-semibold">{link.value}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
