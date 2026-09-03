import * as Lucide from "lucide-react";

const FALLBACK = Lucide.Circle;

export default function Icon({ name, size = 24, strokeWidth = 1.75, className, ...rest }) {
  const Cmp = Lucide[name] || FALLBACK;
  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      {...rest}
    />
  );
}
