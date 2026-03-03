import { useState } from "react";
import useContactForm from "../../../hooks/useContactForm";
import Button from "../../UI/Button";
import Input from "../../UI/form/Input";
import Textarea from "../../UI/form/Textarea";
import { BRANCH_PHONES } from "../../../utils/constants/branchPhones";

export default function ContactForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useContactForm();
  const [selectedBranch, setSelectedBranch] = useState("CDMX");

  return (
    <section className="lg:col-span-3 bg-white dark:bg-[#1a2a38] p-6 sm:p-8 rounded-xl shadow-sm">
      {/* Título */}
      <h2 className="text-2xl font-bold text-secondary dark:text-dark-text pb-4">
        Envíenos su consulta
      </h2>

      {/* Formulario */}
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit((data) =>
          onSubmit({
            ...data,
            branch: selectedBranch,
          }),
        )}
        noValidate
      >
        {/* Datos principales */}
        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Selector de sucursal */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="branch"
            className="font-semibold text-sm text-secondary dark:text-dark-text"
          >
            Sucursal
          </label>

          <select
            id="branch"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="
              h-12
              rounded-lg
              border border-gray-300 dark:border-gray-600
              bg-white dark:bg-[#0f1c28]
              px-4
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-brand-accent
              transition
            "
          >
            {Object.keys(BRANCH_PHONES).map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        {/* Mensaje */}
        <Textarea
          label="Mensaje"
          placeholder="Escriba aquí su consulta..."
          {...register("message")}
          error={errors.message?.message}
        />

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-2">
          <p className="text-xs text-[#617589] dark:text-[#a0b1c2] max-w-md">
            Sus datos serán tratados con confidencialidad. Nunca compartiremos
            su información.
          </p>

          <Button
            HtmlType="submit"
            type="primary"
            variant="solid"
            className="h-12 px-6 rounded-lg font-bold disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>
    </section>
  );
}
