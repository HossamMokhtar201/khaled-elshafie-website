"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { consultationAvailability, consultationServices } from "@/lib/content";

const customerSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(8, "رقم الموبايل غير صحيح"),
  email: z.string().email("بريد إلكتروني غير صحيح"),
  note: z.string().optional(),
});

type CustomerValues = z.infer<typeof customerSchema>;

export default function BookingFlow({
  availability,
  steps,
  successMessage,
}: {
  availability: typeof consultationAvailability;
  steps: (typeof consultationServices)["bookingSteps"];
  successMessage: string;
}) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [customer, setCustomer] = useState<CustomerValues | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const availableDays = useMemo(() => availability.filter((d) => d.available), [availability]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerValues>({ resolver: zodResolver(customerSchema) });

  if (submitted) {
    return (
      <p role="status" className="rounded-md border border-success bg-surface p-6 text-success">
        {successMessage}
      </p>
    );
  }

  return (
    <div>
      <ol className="mb-8 flex flex-wrap gap-4 text-sm">
        {steps.map((label, index) => (
          <li
            key={label}
            aria-current={step === index + 1 ? "step" : undefined}
            className={`rounded-full px-3 py-1 ${
              step === index + 1
                ? "bg-primary-900 text-text-inverse"
                : "bg-bg-alt text-text-secondary"
            }`}
          >
            {index + 1}. {label}
          </li>
        ))}
      </ol>

      {step === 1 && (
        <section aria-labelledby="step1-heading">
          <h2 id="step1-heading" className="mb-4 font-heading text-xl font-bold">
            {steps[0]}
          </h2>
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {availableDays.map((day) => (
              <li key={day.date}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDate(day.date);
                    setStep(2);
                  }}
                  className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2 text-sm hover:border-accent-500"
                >
                  {day.date}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {step === 2 && selectedDate && (
        <section aria-labelledby="step2-heading">
          <h2 id="step2-heading" className="mb-4 font-heading text-xl font-bold">
            {steps[1]} — {selectedDate}
          </h2>
          <ul className="flex flex-wrap gap-3">
            {availableDays
              .find((d) => d.date === selectedDate)
              ?.slots.map((slot) => (
                <li key={slot}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSlot(slot);
                      setStep(3);
                    }}
                    className="rounded-sm border border-border-strong bg-surface px-4 py-2 hover:border-accent-500"
                  >
                    {slot}
                  </button>
                </li>
              ))}
          </ul>
          <button type="button" onClick={() => setStep(1)} className="mt-6 text-sm text-accent-600 hover:underline">
            ← رجوع لاختيار يوم آخر
          </button>
        </section>
      )}

      {step === 3 && (
        <section aria-labelledby="step3-heading">
          <h2 id="step3-heading" className="mb-4 font-heading text-xl font-bold">
            {steps[2]}
          </h2>
          <form
            noValidate
            className="grid max-w-md gap-4"
            onSubmit={handleSubmit((values) => {
              setCustomer(values);
              setStep(4);
            })}
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold">
                الاسم
              </label>
              <input
                id="name"
                className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
                {...register("name")}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1 text-sm text-danger">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-semibold">
                رقم الموبايل
              </label>
              <input
                id="phone"
                className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
                {...register("phone")}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p className="mt-1 text-sm text-danger">{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="mt-1 text-sm text-danger">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="note" className="mb-1 block text-sm font-semibold">
                ملاحظة مختصرة عن المشكلة
              </label>
              <textarea
                id="note"
                rows={3}
                className="w-full rounded-sm border border-border-strong bg-surface px-3 py-2"
                {...register("note")}
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-fit rounded-sm bg-accent-500 px-6 py-3 font-semibold text-primary-900 hover:bg-accent-400"
            >
              التالي — ملخص الحجز
            </button>
          </form>
        </section>
      )}

      {step === 4 && customer && (
        <section aria-labelledby="step4-heading">
          <h2 id="step4-heading" className="mb-4 font-heading text-xl font-bold">
            {steps[3]}
          </h2>
          <dl className="grid max-w-md gap-2 rounded-md border border-border bg-surface p-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-text-secondary">اليوم</dt>
              <dd>{selectedDate}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-text-secondary">الموعد</dt>
              <dd>{selectedSlot}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-text-secondary">الاسم</dt>
              <dd>{customer.name}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-text-secondary">الموبايل</dt>
              <dd>{customer.phone}</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => router.push("/consultations/book/payment-placeholder")}
              className="rounded-sm bg-accent-500 px-6 py-3 font-semibold text-primary-900 hover:bg-accent-400"
            >
              الدفع
            </button>
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="rounded-sm border border-border-strong px-6 py-3 font-semibold hover:bg-bg-alt"
            >
              تأكيد الحجز بدون دفع الآن
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
