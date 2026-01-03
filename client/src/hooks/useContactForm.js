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
    // Determinar la sucursal seleccionada o default a CDMX
    const branchKey = data.sucursal?.toUpperCase() || "CDMX";
    const to_email =
      BRANCH_PHONES[branchKey]?.sendEmail[0] ||
      BRANCH_PHONES[branchKey]?.email[0];

    try {
      await sendContactEmail({
        name: data.name,
        email: data.email,
        message: data.message,
        to_email,
      });

      toast.success("Mensaje enviado correctamente ✅");
      reset();
    } catch (error) {
      console.error(error);
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
