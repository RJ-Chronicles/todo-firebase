import React from "react";

interface TextFieldProps {
  type: string;
  placeholder: string;
  required?: string;
  width?: string;
  padding?: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setText: (val: string) => void;
  value: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  type,
  placeholder,
  width,
  padding,
  value,
  setText,
}) => {
  return (
    <div className={width}>
      <input
        className={
          " rounded-sm w-full  px-4 bg-white text-sm text-slate-500 h-12 border-2  border-slate-100 placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none focus:shadow-xl focus:border-blue-300"
        }
        type={type}
        placeholder={placeholder}
        required
        onChange={(e) => setText(e.target.value)}
        value={value}
      />
    </div>
  );
};
