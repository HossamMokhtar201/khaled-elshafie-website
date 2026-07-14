"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(8, "رقم الموبايل غير صحيح"),
  region: z.string().min(2, "المنطقة المتاحة مطلوبة"),
  experience: z.string().min(1, "برجاء وصف خبرتك السابقة"),
  availability: z.enum(["full-time", "part-time"], {
    message: "برجاء تحديد نوع التفرغ",
  }),
});

type FormValues = z.infer<typeof schema>;

export default function BranchOpportunityForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p
        role="status"
        className="rounded-md border border-success bg-surface p-4 text-success"
      >
        تم استلام طلبك بنجاح، هيتم التواصل معك قريبًا لمراجعة التقديم.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold">
          الاسم
        </label>
        <input
          id="name"
          type="text"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-danger">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-semibold">
          رقم الموبايل
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("phone")}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-danger">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="region" className="mb-1 block text-sm font-semibold">
          المنطقة المتاحة
        </label>
        <input
          id="region"
          type="text"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("region")}
          aria-invalid={!!errors.region}
          aria-describedby={errors.region ? "region-error" : undefined}
        />
        {errors.region && (
          <p id="region-error" className="mt-1 text-sm text-danger">
            {errors.region.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="experience"
          className="mb-1 block text-sm font-semibold"
        >
          الخبرة السابقة
        </label>
        <textarea
          id="experience"
          rows={4}
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("experience")}
          aria-invalid={!!errors.experience}
          aria-describedby={errors.experience ? "experience-error" : undefined}
        />
        {errors.experience && (
          <p id="experience-error" className="mt-1 text-sm text-danger">
            {errors.experience.message}
          </p>
        )}
      </div>

      <fieldset>
        <legend className="mb-1 text-sm font-semibold">التفرغ</legend>
        <label className="me-4 inline-flex items-center gap-2">
          <input type="radio" value="full-time" {...register("availability")} />{" "}
          تفرغ كامل
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="radio" value="part-time" {...register("availability")} />{" "}
          غير متفرغ
        </label>
        {errors.availability && (
          <p className="mt-1 text-sm text-danger">
            {errors.availability.message}
          </p>
        )}
      </fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-fit rounded-sm bg-accent-500 px-6 py-3 font-semibold text-primary-900 hover:bg-accent-400 disabled:opacity-60"
      >
        إرسال الطلب
      </button>
    </form>
  );
}
