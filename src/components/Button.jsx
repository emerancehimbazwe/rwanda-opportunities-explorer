
function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-[#174a38] text-white hover:bg-[#123d2e] focus:ring-[#237a57]",
    secondary:
      "bg-[#ede5d5] text-[#263b32] hover:bg-[#e2d8c5] focus:ring-[#237a57]",
    outline:
      "border border-[#237a57] text-[#174a38] hover:bg-[#e6f0e8] focus:ring-[#237a57]",
    danger:
      "bg-red-700 text-white hover:bg-red-800 focus:ring-red-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
