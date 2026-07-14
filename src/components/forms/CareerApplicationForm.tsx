"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import type { careers as CareersType } from "@/lib/content";

const schema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(8, "رقم الموبايل غير صحيح"),
  jobId: z.string().min(1, "برجاء اختيار الوظيفة"),
});

type FormValues = z.infer<typeof schema>;

export default function CareerApplicationForm({
  jobs,
}: {
  jobs: typeof CareersType;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  if (submitted) {
    return (
      <p
        role="status"
        className="rounded-md border border-success bg-surface p-4 text-success"
      >
        تم استلام طلب التقديم، هيتم مراجعة سيرتك الذاتية والتواصل معك قريبًا.
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
        <label
          htmlFor="career-name"
          className="mb-1 block text-sm font-semibold"
        >
          الاسم
        </label>
        <input
          id="career-name"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-danger">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="career-phone"
          className="mb-1 block text-sm font-semibold"
        >
          رقم الموبايل
        </label>
        <input
          id="career-phone"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-danger">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="career-job"
          className="mb-1 block text-sm font-semibold"
        >
          الوظيفة المتقدم لها
        </label>
        <select
          id="career-job"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
          {...register("jobId")}
          aria-invalid={!!errors.jobId}
          defaultValue=""
        >
          <option value="" disabled>
            اختر الوظيفة
          </option>
          {jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title}
            </option>
          ))}
        </select>
        {errors.jobId && (
          <p className="mt-1 text-sm text-danger">{errors.jobId.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="career-cv" className="mb-1 block text-sm font-semibold">
          رفع السيرة الذاتية
        </label>
        <input
          id="career-cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
        />
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
