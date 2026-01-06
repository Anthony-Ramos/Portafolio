function Header() {
  const menuLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Acerca de", href: "#acerca" },
    { name: "Contáctame", href: "#contacto" },
  ];

  return (
    <header>
      <nav className="menu">
        {menuLinks.map(link => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
