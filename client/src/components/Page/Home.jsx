import Info from "../common/home/Info";
import Opinions from "../common/home/Opinions";
import Hero from "../common/UI/Hero";

const heroData = {
  title: "Fabricamos y distribuimos envases de alta calidad para tu negocio",
  description:
    "Soluciones de envasado confiables y a la medida para potenciar su producto en el mercado.",
  srcImg: "/path/to/your/image.jpg",
};

export default function Home() {
  return (
    <>
      <Hero
        type="primary"
        title={heroData.title}
        description={heroData.description}
        srcImg={heroData.srcImg}
      />
      <Info />
      <Opinions />
    </>
  );
}
