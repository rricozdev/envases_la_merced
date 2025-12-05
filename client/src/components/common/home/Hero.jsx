import Button from "../Button/Button";
export default function Hero() {
  return (
    <section className="relative">
      <div
        className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4 min-h-[calc(100vh-5rem)]"
        style={{
          backgroundImage: `linear-gradient(
      rgba(30, 58, 95, 0.5) 0%,
      rgba(30, 58, 95, 0.7) 100%
    )`,
        }}
      >
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Fabricamos y distribuimos envases de alta calidad para tu negocio
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 sm:text-xl">
            Soluciones de envasado confiables y a la medida para potenciar su
            producto en el mercado.
          </p>
          <Button type="primary">Solicitar Cotización</Button>
        </div>
      </div>
    </section>
  );
}
