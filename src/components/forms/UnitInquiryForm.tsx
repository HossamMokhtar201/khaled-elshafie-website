"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(8, "رقم الموبايل غير صحيح"),
  unit: z.string().min(1, "برجاء اختيار نوع الوحدة"),
});

type FormValues = z.infer<typeof schema>;

export default function UnitInquiryForm({ units }: { units: { id: string; name: string }[] }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  if (submitted) {
    return (
      <p role="status" className="rounded-md border border-success bg-surface p-4 text-success">
        تم استلام طلبك، هيتم التواصل معك لمناقشة تفاصيل الوحدة.
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
        <label htmlFor="unit-name" className="mb-1 block text-sm font-semibold">
          الاسم
        </label>
        <input
          id="unit-name"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-sm text-danger">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="unit-phone" className="mb-1 block text-sm font-semibold">
          رقم الموبايل
        </label>
        <input
          id="unit-phone"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="mt-1 text-sm text-danger">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="unit-select" className="mb-1 block text-sm font-semibold">
          نوع الوحدة
        </label>
        <select
          id="unit-select"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("unit")}
          aria-invalid={!!errors.unit}
          defaultValue=""
        >
          <option value="" disabled>
            اختر الوحدة
          </option>
          {units.map((unit) => (
            <option key={unit.id} value={unit.id}>
              {unit.name}
            </option>
          ))}
        </select>
        {errors.unit && <p className="mt-1 text-sm text-danger">{errors.unit.message}</p>}
      </div>
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
