
function Badge({ children, color = "green" }) {
  const colors = {
    green: "bg-[#dcebdc] text-[#174a38]",
    cream: "bg-[#ede5d5] text-[#46594e]",
    dark: "bg-[#174a38] text-white",
    yellow: "bg-[#f2e8c9] text-[#725b22]",
    red: "bg-[#f8e1dc] text-[#a33e32]",
    purple: "bg-[#e6f0e8] text-[#237a57]",
    gray: "bg-[#ede5d5] text-[#46594e]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        colors[color] || colors.green
      }`}
    >
      {children}
    </span>
  );
}

export default Badge;
