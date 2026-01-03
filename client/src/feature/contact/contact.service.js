// TODO: Configurar una vez se tenga el correo al que enviar la información
// TODO: Instalar dependnecias como EmailJS

// *** se debe tener un templae email y demas
import emailjs from "@emailjs/browser";

/**
 * Envía un correo con la información del formulario de contacto
 * @param {Object} params
 * @param {string} params.name - Nombre del remitente
 * @param {string} params.email - Email del remitente
 * @param {string} params.message - Mensaje
 * @param {string} params.to_email - Email de la sucursal o destinatario
 */
export const sendContactEmail = async ({
  name,
  email,
  phone,
  company,
  message,
  branch,
  to_email,
}) => {
  const templateParams = {
    from_name: name,
    from_email: email,
    phone: phone,
    company: company,
    message: message,
    branch: branch || "CDMX",
    to_email: to_email,
  };

  try {
    return await emailjs.send(
      "service_qbqsolr", // Service ID
      "template_fnjow19", // Template ID
      templateParams,
      "hED2TuRfdGVwaZgb0" // Public key
    );
  } catch (error) {
    console.error("Error enviando el email:", error);
    throw error;
  }
};
