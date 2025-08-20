import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface InputFieldProps {
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
  togglePassword?: boolean;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500",
  outlined:
    "border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
  ghost:
    "bg-transparent border-b border-gray-400 focus:border-blue-500 focus:ring-0",
};

export const InputField: React.FC<InputFieldProps> = ({
  id = "input-" + Math.random().toString(36).substring(2, 9),
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
  togglePassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" && togglePassword
      ? showPassword
        ? "text"
        : "password"
      : type;

  const describedBy =
    invalid && errorMessage
      ? `${id}-error`
      : helperText
      ? `${id}-helper`
      : undefined;

  return (
    <div className="flex flex-col gap-1 w-full max-w-sm">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={label || placeholder}
          aria-invalid={invalid ? "true" : "false"}
          aria-disabled={disabled ? "true" : "false"}
          aria-describedby={describedBy}
          className={`w-full rounded-md shadow-sm transition pr-10
            ${sizeClasses[size]} 
            ${variantClasses[variant]} 
            ${invalid ? "border-red-500 focus:ring-red-500" : ""} 
            ${disabled ? "bg-gray-200 text-gray-500 cursor-not-allowed" : ""}`}
        />

        {/* Clear Button */}
        {clearable && value && (
          <button
            type="button"
            aria-label="Clear input"
            onClick={(e) => {
              e.preventDefault();
              onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}

        {/* Password Toggle */}
        {type === "password" && togglePassword && (
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {helperText && !invalid && (
        <span id={`${id}-helper`} className="text-xs text-gray-500">
          {helperText}
        </span>
      )}
      {invalid && errorMessage && (
        <span id={`${id}-error`} className="text-xs text-red-600">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
