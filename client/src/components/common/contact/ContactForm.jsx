import useContactForm from "../../../hooks/useContactForm";
import Button from "../UI/Button";
import Input from "../UI/form/Input";
import Textarea from "../UI/form/TextArea";

export default function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useContactForm();

  return (
    <section
      className="lg:col-span-3 bg-white dark:bg-[#1a2a38] p-6 sm:p-8 rounded-xl shadow-sm"
      aria-labelledby="contact-form-title"
    >
      <h2
        id="contact-form-title"
        className="text-2xl font-bold text-secondary dark:text-dark-text pb-4"
      >
        Envíenos su consulta
      </h2>

      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <legend className="sr-only">Información de contacto</legend>

          <Input
            label="Nombre"
            placeholder="Su nombre completo"
            {...register("name")}
            error={errors.name?.message}
          />

          <Input
            label="Empresa"
            placeholder="Nombre de su empresa"
            {...register("company")}
            error={errors.company?.message}
          />

          <Input
            label="Teléfono"
            placeholder="Su número de teléfono"
            {...register("phone")}
            error={errors.phone?.message}
          />

          <Input
            label="Correo Electrónico"
            type="email"
            placeholder="ejemplo@correo.com"
            {...register("email")}
            error={errors.email?.message}
          />
        </fieldset>

        <Textarea
          label="Mensaje"
          placeholder="Escriba aquí su consulta..."
          {...register("message")}
          error={errors.message?.message}
        />

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-2">
          <p className="text-x  text-[#617589] dark:text-[#a0b1c2] max-w-md">
            Sus datos serán tratados con confidencialidad. Nunca compartiremos
            su información.
          </p>

          <Button
            HtmlType="submit"
            className="h-12 px-6 rounded-lg bg-primary text-white font-bold disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>
    </section>
  );
}
