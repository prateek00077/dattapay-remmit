"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  errors: Record<string, string>;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string) ?? "";
  const email = (formData.get("email") as string) ?? "";
  const whatsapp = (formData.get("whatsapp") as string) ?? "";
  const message = (formData.get("message") as string) ?? "";

  const errors: Record<string, string> = {};
  if (name.trim().length < 2) errors.name = "Name must be at least 2 characters";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email";
  if (whatsapp.trim().length < 7) errors.whatsapp = "Please enter a valid WhatsApp number";
  if (message.trim().length < 10) errors.message = "Message must be at least 10 characters";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  // TODO: replace with actual email/API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { status: "success", errors: {} };
}
