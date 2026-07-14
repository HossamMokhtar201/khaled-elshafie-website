import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, id, className = "", ...rest },
  ref
) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-text-primary">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className={`w-full rounded-sm border bg-surface px-3 py-2 text-text-primary transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] focus:outline-none focus:ring-2 focus:ring-accent-500 disabled:cursor-not-allowed disabled:bg-bg-alt disabled:text-text-muted ${
          error ? "border-danger" : "border-border-strong"
        } ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;
