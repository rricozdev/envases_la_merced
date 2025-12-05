import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const opions = [
  {
    author: {
      name: "María López",
      position: "Gerente de Producto en EcoPack",
      avatar: "",
    },
    opinion:
      '"La calidad de los envases es excepcional y el servicio al cliente es de primera. Siempre entregan a tiempo y nos ayudan a encontrar la solución perfecta para nuestros productos."',
  },
  {
    author: {
      name: "María López",
      position: "Gerente de Producto en EcoPack",
      avatar: "",
    },
    opinion:
      '"La calidad de los envases es excepcional y el servicio al cliente es de primera. Siempre entregan a tiempo y nos ayudan a encontrar la solución perfecta para nuestros productos."',
  },
  {
    author: {
      name: "María López",
      position: "Gerente de Producto en EcoPack",
      avatar: "",
    },
    opinion:
      '"La calidad de los envases es excepcional y el servicio al cliente es de primera. Siempre entregan a tiempo y nos ayudan a encontrar la solución perfecta para nuestros productos."',
  },
  {
    author: {
      name: "María López",
      position: "Gerente de Producto en EcoPack",
      avatar: "",
    },
    opinion:
      '"La calidad de los envases es excepcional y el servicio al cliente es de primera. Siempre entregan a tiempo y nos ayudan a encontrar la solución perfecta para nuestros productos."',
  },
  {
    author: {
      name: "María López",
      position: "Gerente de Producto en EcoPack",
      avatar: "",
    },
    opinion:
      '"La calidad de los envases es excepcional y el servicio al cliente es de primera. Siempre entregan a tiempo y nos ayudan a encontrar la solución perfecta para nuestros productos."',
  },
  {
    author: {
      name: "María López",
      position: "Gerente de Producto en EcoPack",
      avatar: "",
    },
    opinion:
      '"La calidad de los envases es excepcional y el servicio al cliente es de primera. Siempre entregan a tiempo y nos ayudan a encontrar la solución perfecta para nuestros productos."',
  },
];

export default function Opinions() {
  return (
    <section className="py-20 sm:py-28 bg-bgligth-main dark:bg-bgdark-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl font-bold text-txtligth-primary dark:text-txtdark-primary sm:text-4xl">
            Opiniones de nuestros clientes
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-txtligth-secondary dark:text-txtdark-secondary">
            La satisfacción de nuestros clientes es nuestra mayor prioridad y el
            motor que nos impulsa a mejorar cada día.
          </p>
        </header>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Swiper
          spaceBetween={20}
          loop={true}
          modules={[Autoplay]}
          speed={5000}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          {opions.map((opinion, index) => (
            <SwiperSlide key={index}>
              <article className="bg-bgligth-tertiary dark:bg-bgdark-tertiary p-8 rounded-xl shadow-md flex flex-col h-full justify-between">
                {/* Opinion */}
                <p className="text-txtligth-secondary dark:text-txtdark-secondary text-lg italic mb-6">
                  {opinion.opinion}
                </p>

                {/* Datos del autor */}
                <div className="flex items-center mt-auto">
                  <div className=" w-12 h-12 rounded-full overflow-hidden mr-4">
                    {opinion.author.avatar ? (
                      <img
                        src={opinion.author.avatar}
                        alt={opinion.author.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <AccountCircleRoundedIcon
                        className="text-txtligth-secondary dark:text-txtdark-secondary"
                        sx={{ width: "100%", height: "100%" }}
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-txtligth-primary dark:text-txtdark-primary">
                      {opinion.author.name}
                    </p>
                    <p className="text-txtligth-secondary dark:text-txtdark-secondary letter-spacing-sm">
                      {opinion.author.position}
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
