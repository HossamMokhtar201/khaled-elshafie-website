"use client";

import { useState } from "react";

export default function DateTimePicker({
  days,
}: {
  days: { date: string; available: boolean; slots: string[] }[];
}) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const activeDay = days.find((d) => d.date === selectedDate);

  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-text-primary">اختر اليوم</p>
      <ul className="mb-4 flex flex-wrap gap-2">
        {days.map((day) => (
          <li key={day.date}>
            <button
              type="button"
              disabled={!day.available}
              aria-pressed={selectedDate === day.date}
              onClick={() => {
                setSelectedDate(day.date);
                setSelectedSlot(null);
              }}
              className={`rounded-sm border px-3 py-2 text-sm transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] disabled:cursor-not-allowed disabled:opacity-40 ${
                selectedDate === day.date
                  ? "border-accent-500 bg-accent-500 text-primary-900"
                  : "border-border-strong bg-surface hover:border-accent-500"
              }`}
            >
              {day.date}
            </button>
          </li>
        ))}
      </ul>

      {activeDay && (
        <>
          <p className="mb-2 text-sm font-semibold text-text-primary">اختر الموعد</p>
          <ul className="flex flex-wrap gap-2">
            {activeDay.slots.map((slot) => (
              <li key={slot}>
                <button
                  type="button"
                  aria-pressed={selectedSlot === slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-sm border px-4 py-2 text-sm transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] ${
                    selectedSlot === slot
                      ? "border-accent-500 bg-accent-500 text-primary-900"
                      : "border-border-strong bg-surface hover:border-accent-500"
                  }`}
                >
                  {slot}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
