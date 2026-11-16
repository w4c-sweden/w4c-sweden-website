// Base button supporting standard design variants
export default function Button({
  children,
  variant = "red",
  href,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-body rounded-full transition-colors border-2 px-6 py-3 text-base";

  const variants = {
    red: "bg-red border-transparent text-white hover:opacity-90",
    ghost: "bg-transparent border-white text-white hover:bg-white/10",
    line: "bg-transparent border-blue text-blue hover:bg-blue/5",
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.red} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
