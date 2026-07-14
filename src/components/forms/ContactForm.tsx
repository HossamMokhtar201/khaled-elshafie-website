"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(8, "رقم الموبايل غير صحيح"),
  message: z.string().min(5, "الرسالة قصيرة جدًا"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  if (submitted) {
    return (
      <p role="status" className="rounded-md border border-success bg-surface p-4 text-success">
        تم إرسال رسالتك بنجاح، هيتم الرد عليك في أقرب وقت.
      </p>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async () => {
        await new Promise((resolve) => setTimeout(resolve, 400));
        setSubmitted(true);
      })}
      className="grid max-w-md gap-4"
    >
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-semibold">
          الاسم
        </label>
        <input
          id="contact-name"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-sm text-danger">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-1 block text-sm font-semibold">
          رقم الموبايل
        </label>
        <input
          id="contact-phone"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="mt-1 text-sm text-danger">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-semibold">
          رسالتك
        </label>
        <textarea
          id="contact-message"
          rows={4}
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-sm text-danger">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-fit rounded-sm bg-accent-500 px-6 py-3 font-semibold text-primary-900 hover:bg-accent-400 disabled:opacity-60"
      >
        إرسال
      </button>
    </form>
  );
}
