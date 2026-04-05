function ButtonLink({ href, children, variant = "primary" }) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300";

  const variantClass =
    variant === "secondary"
      ? "border border-crimson-200 bg-white/80 text-crimson-800 shadow-glass backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white"
      : "bg-crimson-800 text-white shadow-soft hover:-translate-y-0.5 hover:bg-crimson-700";

  return (
    <a className={`${baseClass} ${variantClass}`} href={href}>
      {children}
    </a>
  );
}

export default ButtonLink;
