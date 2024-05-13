import React from "react";

interface Props {
  children: React.ReactNode;
  type: string;
  required?: boolean;
  hig?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  children,
  type,
  required,
  hig,
  onChange,
}: Props) {
  return (
    <label
      className={`${
        hig && "text-green-600"
      } block text-sm font-medium text-gray-400`}
    >
      {children}
      <input
        type={type}
        required={required}
        onChange={onChange}
        className="mt-1 p-2 h-12 w-full rounded-xl border-2 border-gray-200"
      />
    </label>
  );
}
