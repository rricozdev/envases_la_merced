import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const cardsInfo = [
  {
    id: 1,
    size: "sm",
    color: "primary",
    title: "Venta",
    description:
      "Ofrecemos una amplia gama de envases y complementos, diseñados para satisfacer tus necesidades.",
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    size: "sm",
    color: "primary",
    title: "Producción",
    description: "Fabricamos envases con los más altos estándares de calidad.",
    icon: PrecisionManufacturingIcon,
  },
  {
    id: 5,
    size: "sm",
    color: "accent",
    title: "Precio",
    description: "El mejor precio garantizado, compruebalo por ti mismo.",
    icon: AutoGraphIcon,
  },
  {
    id: 3,
    size: "sm",
    color: "primary",
    title: "Distribución",
    description:
      "Contamos con varias ubicaciones y una red logística eficiente para entregar nuestros productos para tu mayor comodidad.",
    icon: LocalShippingIcon,
  },
  {
    id: 4,
    size: "sm",
    color: "primary",
    title: "Linea de productos.",
    description:
      "Agua, limpieza, cosmeticos, farmaceuticos, Alimentos, amenidades hoteleras, Vitroleros, Promocionales",
    icon: ChecklistRoundedIcon,
  },
];

export default cardsInfo;
