import { forwardRef, type InputHTMLAttributes } from "react";

interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(function FileUpload(
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
        type="file"
        className={`w-full cursor-pointer rounded-sm border border-dashed border-border-strong bg-surface px-3 py-3 text-sm text-text-secondary transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] file:me-3 file:rounded-sm file:border-0 file:bg-accent-500 file:px-3 file:py-1.5 file:font-semibold file:text-primary-900 hover:border-accent-500 ${className}`}
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

export default FileUpload;
