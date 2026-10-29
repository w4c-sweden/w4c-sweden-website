export function Eyebrow({ children, light = false, className = "" }) {
  return (
    <span
      className={`block font-heading font-semibold text-xs tracking-widest uppercase mb-3 ${
        light ? "text-red-light" : "text-red"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function Heading({ level = 2, children, className = "" }) {
  const styles = {
    1: "font-heading font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight mb-4",
    2: "font-heading font-bold text-2xl sm:text-4xl leading-snug mb-4",
    3: "font-heading font-bold text-xl leading-snug mb-2",
  };

  const Component = `h${level}`;
  return (
    <Component className={`${styles[level]} ${className}`}>
      {children}
    </Component>
  );
}

export function Text({ children, variant = "body", className = "" }) {
  const variants = {
    lead: "text-lg sm:text-xl text-slate-300 leading-relaxed",
    body: "text-base text-text-main leading-relaxed",
    muted: "text-base text-muted leading-relaxed",
  };

  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
}
