import SmartImage from "../common/SmartImage";

function SponsorLogoCard({ logo }) {
  return (
    <div className="glass-panel flex min-h-28 items-center justify-center rounded-[24px] px-6 py-5">
      <SmartImage
        alt={logo.name}
        className="max-h-12 w-auto object-contain opacity-90"
        fallbackSrc="/images/sponsors/sponsor-01.svg"
        src={logo.image}
      />
    </div>
  );
}

export default SponsorLogoCard;
