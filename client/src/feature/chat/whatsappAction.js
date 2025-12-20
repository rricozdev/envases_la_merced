// Responsabilidad única: abrir WhatsApp desde donde se llama
// No contiene lógica de UI ni de conversación

export function openWhatsApp({ phone, message }) {
  if (!phone) return;

  const normalizedPhone = phone.replace(/[^0-9]/g, "");
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";

  const url = `https://wa.me/${normalizedPhone}${encodedMessage}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
