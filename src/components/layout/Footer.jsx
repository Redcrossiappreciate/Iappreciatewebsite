function Footer({ content, navigation }) {
  return (
    <footer className="border-t border-stone-200/80 bg-white">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-6 px-6 py-8 text-sm text-stone-600 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <a key={item.href} className="transition hover:text-crimson-800" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
