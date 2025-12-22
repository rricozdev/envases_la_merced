import Info from "../components/feature/home/Info";
import Opinions from "../components/feature/home/Opinions";
import Hero from "../components/UI/Hero";
import { openWhatsApp } from "../feature/chat/whatsappAction";
import { BRANCH_PHONES } from "../utils/constants/branchPhones";

const heroData = {
  title: "Fabricamos y distribuimos envases de alta calidad para tu negocio",
  description:
    "Soluciones de envasado confiables y a la medida para potenciar su producto en el mercado.",
  srcImg: "/bg2.png",
};

export default function Home() {
  return (
    <>
      <Hero
        onButtonClick={() =>
          openWhatsApp({
            phone: BRANCH_PHONES.CDMX.whatsapp,
            message: "Estoy interesado en sus productos.",
          })
        }
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
