const sucursales = [
  { name: "CDMX", path: "cdmx" },
  { name: "Puebla", path: "puebla" },
  { name: "Veracruz", path: "veracruz" },
  { name: "Neza", path: "neza" },
  { name: "Querétaro", path: "queretaro" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Productos", href: "/catalogo" },
  { name: "Sucursales", submenu: sucursales },
  { name: "Nosotros", href: "/sobre-nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export { navLinks, sucursales };
