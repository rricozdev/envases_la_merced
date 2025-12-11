import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import Opinion from "./Opinion";

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
    <section className="py-20 sm:py-28 ">
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
          {opions.map(({ opinion, author }, index) => (
            <SwiperSlide key={index}>
              <Opinion
                opinion={opinion}
                avatar={author.avatar}
                name={author.name}
                position={author.position}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
