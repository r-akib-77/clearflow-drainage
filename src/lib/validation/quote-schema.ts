import { z } from "zod";

export const serviceOptions = [
  "Blocked drains",
  "CCTV drain survey",
  "Drain repairs",
  "High-pressure jetting",
  "Septic tank enquiry (example — to confirm)",
  "Something else / not sure",
] as const;

export const contactMethodOptions = ["Phone", "Email", "Either"] as const;

export const quoteSchema = z.object({
  fullName: z
    .string()
    .min(1, "Please enter your full name.")
    .min(2, "Please enter your full name.")
    .max(80, "Please keep your name under 80 characters."),
  email: z
    .string()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .min(1, "Please enter your phone number.")
    .min(6, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
  location: z
    .string()
    .min(1, "Please enter the service location or Eircode.")
    .min(2, "Please enter the service location or Eircode.")
    .max(120, "Please keep the location under 120 characters."),
  serviceType: z.enum(serviceOptions as unknown as [string, ...string[]], {
    error: "Please choose a service type.",
  }),
  description: z
    .string()
    .min(1, "Please describe the drainage problem.")
    .min(20, "Please give a little more detail (at least 20 characters).")
    .max(2000, "Please keep the description under 2000 characters."),
  contactMethod: z.enum(contactMethodOptions as unknown as [string, ...string[]], {
    error: "Please choose a preferred contact method.",
  }),
  contactTime: z.string().max(80, "Please keep this under 80 characters.").optional().or(z.literal("")),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
