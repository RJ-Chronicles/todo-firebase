import React from "react";

interface LargeButtonProps {
  onClick: () => void;
  text: string;
}

interface SmallButtonProps {
  onClick: () => void;
  text: string;
  active: string;
}

export const LargeButton: React.FC<LargeButtonProps> = ({ onClick, text }) => {
  return (
    <div className="  text-slate-100">
      <button
        className="px-10 bg-slate-600 py-2 font-sans text-lg font-semibold rounded-sm"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export const SmallButton: React.FC<SmallButtonProps> = ({
  onClick,
  text,
  active,
}) => {
  return (
    <div className="  text-slate-300">
      <button
        className={
          "font-sans text-sm font-semibold rounded-sm py-3 px-5 " +
          (active === text && "shadow-md rounded-sm  text-slate-100")
        }
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
