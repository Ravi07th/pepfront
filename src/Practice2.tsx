import React from "react";

type VariantType =

  | "default" 
  | "rounded"
  | "disable"
  | "primary"
  | "secondary"
  | "outline"
  | "danger"
  | "ghost"
  // gradient
  | "gradient" | "gradient2" | "gradient3" | "gradient4" | "gradient5"
  | "gradient6" | "gradient7" | "gradient8" | "gradient9" | "gradient10"
  | "gradient11" | "gradient12" | "gradient13" 
  
  | "glass"
  | "underline"
  | "pill"
  | "shadow"
  | "iconOnly"
  | "borderAnimated"
  | "neon"
  | "flip"
  | "scale"
  | "pulse"
  | "loading"
  | "textOnly"
  | "warning"
  | "success";

type SizeType = "default" | "sm" | "lg" | "xl" | "icon";

type UIButtonProps = {
  variant?: VariantType;
  size?: SizeType;
  color?: string; // 👈 New color prop
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const variantClasses: Record<VariantType, string> = {
  //Basic Button
  // one more button need to add default video hover effect
  default: "bg-gray-200 text-black  border-1 border-black rounded hover:cursor-default",
  rounded: "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
  disable: "text-white bg-blue-500 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-4  py-2 text-center",
  primary: "bg-blue-600 text-white ",
  secondary: "bg-gray-600 text-white",
  danger: "bg-red-600 text-white",

  // Gradient Button
  gradient: "bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient2: "bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient3: "bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient4: "bg-gradient-to-r from-emerald-400 to-lime-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient5: "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient6: "bg-gradient-to-r from-gray-600 to-black text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient7: "bg-gradient-to-r from-sky-400 to-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient8: "bg-gradient-to-r from-amber-400 to-red-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient9: "bg-gradient-to-r from-yellow-300 to-lime-400 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient10: "bg-gradient-to-r from-yellow-300 to-lime-400 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient11: "bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient12: "bg-gradient-to-r from-slate-500 to-gray-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  gradient13: "bg-gradient-to-r from-violet-400 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition",
  
  

  // Rounded Button
  pill: "bg-emerald-500 text-white rounded-md hover:bg-emerald-600 px-6",
  
  // Outlined Button
  outline: "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500",
  ghost: "border border-gray-300 hover:border-blue-500 hover:text-blue-500 text-gray-700 bg-transparent",
  
  

  glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
  underline: "text-blue-600 hover:underline underline-offset-4 bg-transparent",
  
  shadow: "bg-indigo-500 text-white shadow-md hover:shadow-lg",
  iconOnly: "w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600",
  borderAnimated: `relative group overflow-hidden text-blue-600 font-medium px-6 py-2
    before:absolute before:inset-0 before:border-2 before:rounded-md before:border-blue-600 
    before:scale-95 group-hover:before:scale-100 before:transition-transform before:duration-300`,
  neon: "text-white bg-black border border-white shadow-[0_0_10px_white] hover:shadow-[0_0_20px_cyan]",
  flip: "bg-blue-500 text-white hover:rotate-6 hover:scale-105 transition-transform",
  scale: "bg-green-500 text-white hover:scale-110 transition-transform",
  pulse: "bg-indigo-600 text-white animate-pulse",
  loading: "bg-gray-300 text-gray-600 relative",
  textOnly: "text-blue-600 hover:text-blue-800 bg-transparent shadow-none",
  warning: "bg-yellow-500 text-black hover:bg-yellow-600",
  success: "bg-green-600 text-white hover:bg-green-700",
};

const sizeClasses: Record<SizeType, string> = {
  default: "h-10 px-4 py-2 ",
  sm: "h-9  px-3 text-sm",
  lg: "h-11  px-8 text-base",
  xl: "h-12  px-10 text-lg",
  icon: "h-10 w-10 p-0",
};

const UIButton: React.FC<UIButtonProps> = ({
  variant = "primary",
  size = "default",
  color,
  className = "",
  children,
  type = "button",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-semibold ";
    // const base =
    // "inline-flex items-center justify-center font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all";

  const finalClass = `${base} ${
    color ? `bg-${color}-500 text-white hover:bg-${color}-600` : variantClasses[variant]
  } ${sizeClasses[size]} ${className}`;

  return (
    <button type={type} className={finalClass} {...props}>
      {children}
    </button>
  );
};

export default UIButton;
