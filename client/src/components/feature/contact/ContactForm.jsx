import { useState } from "react";
import useContactForm from "../../../hooks/useContactForm";
import Button from "../../UI/Button";
import Input from "../../UI/form/Input";
import Textarea from "../../UI/form/Textarea";
import { BRANCH_PHONES } from "../../../utils/constants/branchPhones";

export default function ContactForm() {
  // Hook de formulario
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useContactForm();

  // Estado UI
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("CDMX");

  return (
    <section className="lg:col-span-3 bg-white dark:bg-[#1a2a38] p-6 sm:p-8 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-secondary dark:text-dark-text pb-4">
        Envíenos su consulta
      </h2>

      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit((data) =>
          onSubmit({
            ...data,
            branch: selectedBranch, // 🔴 CLAVE
          })
        )}
        noValidate
      >
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

        <Textarea
          label="Mensaje"
          placeholder="Escriba aquí su consulta..."
          {...register("message")}
          error={errors.message?.message}
        />

        {/* Selector de sucursal */}
        <div>
          <Button
            type="primary"
            variant="solid"
            HtmlType="button"
            onClick={() => setModalOpen(true)}
          >
            Sucursal: {selectedBranch}
          </Button>

          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-white dark:bg-[#1a2a38] p-6 rounded-lg shadow-lg flex flex-col gap-4">
                <h3 className="text-lg font-bold">Seleccione la sucursal</h3>

                {Object.keys(BRANCH_PHONES).map((branch) => (
                  <Button
                    key={branch}
                    HtmlType="button"
                    variant={branch === selectedBranch ? "solid" : "outline"}
                    onClick={() => {
                      setSelectedBranch(branch);
                      setModalOpen(false);
                    }}
                  >
                    {branch}
                  </Button>
                ))}

                <Button
                  HtmlType="button"
                  variant="ghost"
                  onClick={() => setModalOpen(false)}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          )}
        </div>

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
