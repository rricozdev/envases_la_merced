import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../feature/contact/contact.schema";
import { sendContactEmail } from "../feature/contact/contact.service";
import { BRANCH_PHONES } from "../utils/constants/branchPhones";
import { toast } from "react-toastify";

export default function useContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    // Sucursal seleccionada o default
    const branchKey = data.sucursal?.toUpperCase() || "CDMX";

    const to_email =
      BRANCH_PHONES[branchKey]?.sendEmail?.[0] ||
      BRANCH_PHONES[branchKey]?.email?.[0];

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      message: data.message,
      branch: branchKey,
      to_email,
    };

    try {
      await sendContactEmail(payload);

      toast.success("Mensaje enviado correctamente ✅");
      reset();
    } catch (error) {
      console.error("Error enviando contacto:", error);
      toast.error("Error al enviar el mensaje ❌");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}
