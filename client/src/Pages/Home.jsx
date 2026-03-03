import { useNavigate } from "react-router-dom";
import Info from "../components/feature/home/Info";
import Opinions from "../components/feature/home/Opinions";
import Hero from "../components/UI/Hero";
import { openWhatsApp } from "../feature/chat/whatsappAction";
import { BRANCH_PHONES } from "../utils/constants/branchPhones";
import CTASection from "../components/UI/CTASection";
import ImageTextSection from "../components/UI/ImageTextSection";

const heroData = {
  title:
    "El envase PET que tu producto necesita, fabricados y entregados en todo México",
  description:
    "Con 5 sucursales estratégicas y una amplia variedad de presentaciones, llevamos el envase exacto que necesitas, rápido y sin intermediarios",
  srcImg: {
    desktop: "/assets/bg_img/bg2.webp",
    mobile: "/assets/bg_img/bg-mobile.webp",
  },
  alt: "Imagen de envases de alta calidad para negocios",
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Hero
        onButtonClick={() =>
          openWhatsApp({
            phone: BRANCH_PHONES.CDMX.whatsapp,
            message: "Estoy interesado en sus productos.",
          })
        }
        onButtonClickSecond={() => {
          navigate("/catalogo");
        }}
        type="primary"
        title={heroData.title}
        description={heroData.description}
        srcImg={heroData.srcImg}
        buttonTextSecond="Ver Catalogo"
      />
      <ImageTextSection
        title={
          "Sabemos lo frustrante que es quedarte sin envases PET justo cuando más los necesitas"
        }
        description={
          "Desabasto, precios variables y cero orientación técnica. Tres problemas que frenan tu operación y que, en la industria del envase PET en México, se repiten más de lo que deberían. Cada pedido perdido es tiempo, dinero y clientes que no regresan."
        }
        imageAlt={"Problematica desabasto envases PET"}
        imageSrc={"/assets/section_img/imagen_problema.webp"}
      />
      <ImageTextSection
        title={
          "Somos un proveedor de envases PET con stock real, precio justo y respaldo técnico"
        }
        imagePosition="right"
        description={
          "Con fabricación propia y 5 puntos de distribución en todo México, garantizamos disponibilidad inmediata y precios competitivos sin letra chica. Nuestro equipo técnico te ayuda a elegir el envase ideal para tu producto, ya seas PYME o empresa consolidada."
        }
        imageAlt={"Solución envases la merced"}
        imageSrc={"/assets/section_img/imagen_solution.webp"}
      />
      <Info />
      <Opinions />
      <CTASection
        title={"Encuentra el envase ideal para tu producto"}
        description={
          "Cotiza fácilmente con nuestro equipo y recibe soluciones en envases PET con calidad garantizada, entrega rápida y atención personalizada en todo México."
        }
        onButtonClick={() => {
          openWhatsApp({
            phone: BRANCH_PHONES.CDMX.whatsapp,
            message: "Estoy interesado en sus productos.",
          });
        }}
      />
    </>
  );
}
