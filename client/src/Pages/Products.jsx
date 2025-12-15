import { useContext, useState } from "react";
import FilterSidebar from "../components/feature/catalogo/FilterSidebar";
import ProductGrid from "../components/feature/catalogo/ProductGrid";
import Pagination from "../components/UI/Pagination";
import SectionHeader from "../components/UI/SectionHeader";
import { CartContext } from "../Providers/CartProvider";

const products = [
  {
    id: 1,
    title: "Botella PET 1L",
    description:
      "Botella transparente de PET ideal para bebidas, jugos y aguas. Resistente y ligera.",
    img: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxq68dRVOHp2G_ev5hBttma-QyA3uFkgLl34JL8CYsiP0WxhLCAU_ERW3OnHbPzfqUxKFpySxeNavF5FIBRbW6LxFxZMa29Hgy515s7Tm8Tf2LoRimc6_fT2iY4f0UkEU55ivWr77XmqfQfPN40jTDG0gy-HYQWQRmLGaoNKTLMcVSDs5ikQt-UQS9tO1TpMUsi1ZLzuHFmRxe9W_CRmpwaj6FzaTJMrNbYZ6oXA5Jr5H1rETS8v-cyg_EQRJ7hXvAU2UQG3YfhfI",
      alt: "Botella de plástico PET ",
    },
  },
  {
    id: 2,
    title: "Frasco de Vidrio 500ml",
    description:
      "Perfecto para conservas, mermeladas y alimentos. Tapa de rosca metálica para un cierre hermético.",
    img: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrxdlNAv9QgDgsxKlZdTS6FHy-1ethseCOeo0uIKJpkZo8vZK6C63e2vxTkJI7vpLajLZep-NE9N7VFPMM8sep7CpAnd4FqKVd7il3vpSkKmcP9530tSwLHvKsnO5r3aHj28tCP3ZWVMB_9LdHbR3EYdHsZaekfotSJlVcQ4TtCJnHmBxz_tD24NcWsLnApk41l6-jzqNyI87I9ztsPFALNpvWwXbbiTodaFZ3z4fF0LbADEyIDuXmha3aUshbimWsuOpTsCUNByE",
      alt: "Frasco de vidrio de 500ml",
    },
  },
  {
    id: 3,
    title: "Lata de Aluminio 355ml",
    description:
      "Lata estándar para refrescos y bebidas carbonatadas. Ligera, resistente y 100% reciclable.",
    img: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEyH9ex88rVgoQXzu68FsW2FYf9NAvl6Wl_zs8HHaN45BAD-MBN2d3kdFd-AAvhordqfHWirVf5lklOtFQ8K5eFX1S1F-UArsh3-gLKbQGchmY5dRQ_U1mhliY20Bu_Fz658nyIfpuVp6bXGOBjdcJyAkLLjBGMRcbAR5q_O3JpG-szOvu5URZ4aVzwcjE4gHPfshK026qEVIE441ubbMrnEwOz7DlWPzRgP5y8JkrGiM3bIpKrJnQB7pauGNeveE1WKKO21mbqgQ",
      alt: "Lata de aluminio de 355ml",
    },
  },
  {
    id: 4,
    title: "Envase HDPE 5L",
    description:
      "Galón de polietileno de alta densidad, ideal para productos químicos, de limpieza y automotrices.",
    img: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_J1J9ExsEOMhCRuG6TPKtsi_Y7ZtlnzyZ0ioHZiUF-YOORdlYtEDWD9QDSyLwcqIHUWZzM0ItyYn9Ll-P1q5dKc0IEK2JdvhGCPqexyihE-z_8sTs3lSN59MYeTSOIqtTEEaa3-NYGImoIjhAmYJYXsefzuLjaNdTY4vL8hnhvyIxPwKxUKjUeWoU6KTB5S9dDANmOguhJn4PgXkbJMD3fAyzXB2S1_EnDq6TJabOewrNDyt1rnOpnBQw8x09URH8HktKHQaoDLI",
      alt: "Envase de HDPE de 5 litros",
    },
  },
  {
    id: 5,
    title: "Botella Vidrio Ámbar 330ml",
    description:
      "Protección UV para productos sensibles a la luz como cerveza artesanal o productos farmacéuticos.",
    img: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTcUrJ2eXvAiLkUwAXIpYaia66Svp08_iMNNTmFOko51ZTs2BPDvjJlIfBiFoPeOaN9cc5OE9D4jmLJ2HqPsaGwmybp-E2vdGK1PEPhWRkSzt2eJvESKBXhbJ8i3ZOXhwzMNc6VPeYTOhSA23SfNG78clL92WHA5aagzZQ9ZftnIWHMDVzWPMLB8s6510NG4d1UmSUYKqnDeFFtC3LsxfDgi4rTnxxPbc-Reip-fwLRPqx1yAMiDp1vHvQTyLsKDZJekMSoQ--G1I",
      alt: "Botella de vidrio ámbar ",
    },
  },
  {
    id: 6,
    title: "Tarro Cosmético 50ml",
    description:
      "Envase de plástico de doble pared para cremas y geles. Diseño elegante y premium.",
    img: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiIXp1E0kcgTFopvPrrVWvNpBspGOukprxAJKf1b2FKkc0Da1e1KCgXACccX0gWX3pKiAid1tfjOZ2IJ97LXp7hl4hVZjUaWAbVONOSunO8mvffeSVbxL8KqvOLop-UEup6IMZuxC6w50jLJggj1EOXw19JwrfsC-7C1f2xIAItN5f29Sz6Okp0_bILu_1w0s9QzHIG_Wb0DV-S6Tf55f7YoKvbxWctLM5PqJecIQPXqrTKuqdppl-O1wTPfFk4LY_pd2M46Aafew",
      alt: "Tarro cosmético de 50ml",
    },
  },
];

export default function Products() {
  const { addToCart } = useContext(CartContext);
  {
    /* todo: paginación y filtro no funcionan solo esta el boiler corregir*/
  }

  const [filters, setFilters] = useState({
    categories: ["Envases de Plástico"],
    materials: ["PET"],
    volume: 1000,
    industry: "all",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handleQuote = (product) => {
    addToCart(product);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (filterType === "categories" || filterType === "materials") {
        const current = prev[filterType];
        return {
          ...prev,
          [filterType]: current.includes(value)
            ? current.filter((item) => item !== value)
            : [...current, value],
        };
      }
      return { ...prev, [filterType]: value };
    });
  };

  const handleClearAll = () => {
    setFilters({
      categories: [],
      materials: [],
      volume: 1000,
      industry: "all",
    });
  };

  return (
    <>
      <section className="bg-bgligth-tertiary dark:bg-bgdark-tertiary py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nuestro Catálogo de Productos"
            description="Encuentre el envase perfecto para sus necesidades. Explore nuestra amplia gama de soluciones de envasado."
          />
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAll}
            />

            <div className="w-full lg:w-3/4">
              <ProductGrid products={products} onQuote={handleQuote} />
              <Pagination
                currentPage={currentPage}
                totalPages={3}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
