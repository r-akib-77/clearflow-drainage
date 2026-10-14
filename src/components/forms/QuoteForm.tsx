"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ImagePlus, Loader2, RotateCcw, X } from "lucide-react";
import {
  contactMethodOptions,
  quoteSchema,
  serviceOptions,
  type QuoteFormValues,
} from "@/lib/validation/quote-schema";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-[13.5px] font-medium text-red-700">
      {message}
    </p>
  );
}

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      serviceType: undefined as unknown as QuoteFormValues["serviceType"],
      description: "",
      contactMethod: undefined as unknown as QuoteFormValues["contactMethod"],
      contactTime: "",
    },
  });

  const [submitted, setSubmitted] = useState<QuoteFormValues | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function onPhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setPhotoName(null);
      setPhotoPreview(null);
      return;
    }
    // Local preview only — never uploaded. Revoked on remove / new selection.
    setPhotoName(file.name);
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    if (file.type.startsWith("image/")) {
      setPhotoPreview(URL.createObjectURL(file));
    } else {
      setPhotoPreview(null);
    }
  }

  function clearPhoto() {
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhotoName(null);
    setPhotoPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  async function onSubmit(values: QuoteFormValues) {
    // DEMO ONLY: simulate latency locally, transmit nothing.
    await new Promise((r) => setTimeout(r, 1100));
    setSubmitted(values);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startNew() {
    setSubmitted(null);
    clearPhoto();
    reset();
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal/40 bg-teal/10 p-6 sm:p-8" role="status">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-7 w-7 shrink-0 text-teal-dark" aria-hidden />
          <div>
            <h2 className="text-xl font-extrabold text-navy">Demo submission successful!</h2>
            <p className="mt-2 text-[15px] leading-7 text-ink">
              In the live website, your enquiry would be sent to the drainage company&apos;s team.
              No enquiry has been transmitted or stored.
            </p>
          </div>
        </div>
        <dl className="mt-5 grid gap-3 rounded-xl bg-white p-5 text-[14px] sm:grid-cols-2">
          <div>
            <dt className="font-bold uppercase tracking-wider text-muted text-[12px]">Name</dt>
            <dd className="font-semibold text-navy">{submitted.fullName}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-wider text-muted text-[12px]">Service</dt>
            <dd className="font-semibold text-navy">{submitted.serviceType}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-wider text-muted text-[12px]">Location</dt>
            <dd className="font-semibold text-navy">{submitted.location}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-wider text-muted text-[12px]">Contact via</dt>
            <dd className="font-semibold text-navy">
              {submitted.contactMethod}
              {submitted.contactTime ? ` — ${submitted.contactTime}` : ""}
            </dd>
          </div>
        </dl>
        <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-[13.5px] leading-6 text-amber-900">
          Demonstration notice: this form performs browser-side validation only. Data never leaves
          your device — no email, API call, database record or file upload occurs.
          {photoName ? ` The selected file (“${photoName}”) was previewed locally and not uploaded.` : ""}
        </p>
        <button
          type="button"
          onClick={startNew}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-[15px] font-bold text-white hover:bg-brand"
        >
          <RotateCcw className="h-4 w-4" aria-hidden /> Start a new demo enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-2xl border border-line bg-white p-6 card-shadow sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-[14px] font-bold text-navy">
            Full name *
          </label>
          <input id="fullName" autoComplete="name" placeholder="e.g. Aoife Murphy" className={cn(inputCls, errors.fullName && "border-red-500")} {...register("fullName")} />
          <FieldError message={errors.fullName?.message} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[14px] font-bold text-navy">
            Email address *
          </label>
          <input id="email" type="email" autoComplete="email" placeholder="you@example.ie" className={cn(inputCls, errors.email && "border-red-500")} {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[14px] font-bold text-navy">
            Phone number *
          </label>
          <input id="phone" type="tel" autoComplete="tel" placeholder="e.g. 087 000 0000" className={cn(inputCls, errors.phone && "border-red-500")} {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <label htmlFor="location" className="mb-1.5 block text-[14px] font-bold text-navy">
            Service location or Eircode *
          </label>
          <input id="location" placeholder="e.g. Douglas, Cork / T12 …" className={cn(inputCls, errors.location && "border-red-500")} {...register("location")} />
          <FieldError message={errors.location?.message} />
        </div>
        <div>
          <label htmlFor="serviceType" className="mb-1.5 block text-[14px] font-bold text-navy">
            Service type *
          </label>
          <select id="serviceType" defaultValue="" className={cn(inputCls, errors.serviceType && "border-red-500")} {...register("serviceType")}>
            <option value="" disabled>
              Choose a service…
            </option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <FieldError message={errors.serviceType?.message} />
        </div>
        <div>
          <label htmlFor="contactMethod" className="mb-1.5 block text-[14px] font-bold text-navy">
            Preferred contact method *
          </label>
          <select id="contactMethod" defaultValue="" className={cn(inputCls, errors.contactMethod && "border-red-500")} {...register("contactMethod")}>
            <option value="" disabled>
              Choose…
            </option>
            {contactMethodOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <FieldError message={errors.contactMethod?.message} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-1.5 block text-[14px] font-bold text-navy">
            Describe the drainage problem *
          </label>
          <textarea
            id="description"
            rows={5}
            placeholder="What are you seeing? Which drains are affected? When did it start? (min. 20 characters)"
            className={cn(inputCls, "resize-y", errors.description && "border-red-500")}
            {...register("description")}
          />
          <FieldError message={errors.description?.message} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contactTime" className="mb-1.5 block text-[14px] font-bold text-navy">
            Preferred contact time <span className="font-medium text-muted">(optional)</span>
          </label>
          <input id="contactTime" placeholder="e.g. Weekday mornings" className={inputCls} {...register("contactTime")} />
          <FieldError message={errors.contactTime?.message} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="photo" className="mb-1.5 block text-[14px] font-bold text-navy">
            Photo <span className="font-medium text-muted">(optional — previewed locally only, never uploaded)</span>
          </label>
          <div className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-mist p-4 sm:flex-row sm:items-center">
            <label
              htmlFor="photo"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-[14px] font-bold text-white hover:bg-brand"
            >
              <ImagePlus className="h-4 w-4" aria-hidden /> Choose photo
            </label>
            <input ref={fileRef} id="photo" type="file" accept="image/*" className="sr-only" onChange={onPhotoChange} />
            {photoName ? (
              <span className="flex items-center gap-2 text-[14px] text-ink">
                <span className="max-w-[220px] truncate font-semibold">{photoName}</span>
                <button type="button" onClick={clearPhoto} aria-label="Remove photo" className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-muted hover:text-red-700">
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </span>
            ) : (
              <span className="text-[13.5px] text-muted">No file chosen. Helpful but optional.</span>
            )}
          </div>
          {photoPreview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photoPreview} alt="Local preview of your selected photo (not uploaded)" className="mt-3 h-40 w-auto rounded-xl border border-line object-cover" />
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-[16px] font-bold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Sending demo enquiry…
          </>
        ) : (
          "Submit Demo Enquiry"
        )}
      </button>
      <p className="mt-3 text-center text-[13px] leading-5 text-muted">
        Demo only — validation happens in your browser. Nothing is sent, stored or shared.
      </p>
    </form>
  );
}
