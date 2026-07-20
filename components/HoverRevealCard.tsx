import { useState, type FC, type ElementType } from "react";
import { Sparkles, Zap, ShieldCheck, Rocket, type LucideIcon } from "lucide-react";

type Accent = "monochrome";

interface HoverRevealCardProps {
  icon: LucideIcon | ElementType;
  title: string;
  description: string;
  accent?: Accent;
}

const accentMap: Record<Accent, { gradient: string; border: string; iconColor: string }> = {
  monochrome: { 
    gradient: "from-neutral-900 to-black dark:from-white dark:to-neutral-200", 
    border: "border-neutral-200 dark:border-neutral-800",
    iconColor: "text-white dark:text-black"
  },
};

/**
 * HoverRevealCard
 * A card that shows only an icon + title by default.
 * On hover (or focus, for keyboard users), it expands smoothly
 * to reveal a description underneath.
 */
const HoverRevealCard: FC<HoverRevealCardProps> = ({
  icon: Icon,
  title,
  description,
  accent = "monochrome",
}) => {
  const { gradient, border, iconColor } = accentMap[accent];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      tabIndex={0}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
      className={`group relative flex flex-col items-center text-center w-full max-w-sm md:w-96 rounded-2xl border ${border} bg-white dark:bg-[#0a0a0a] p-8 shadow-sm outline-none cursor-pointer
                  transition-all duration-300 ease-out
                  hover:shadow-lg hover:-translate-y-1
                  focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400`}
    >
      {/* Icon */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient}
                    transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110 ${isOpen ? 'scale-110' : ''}`}
      >
        <Icon className={`h-8 w-8 ${iconColor}`} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-xl font-bold text-neutral-900 dark:text-white">{title}</h3>

      {/* Description — collapsed by default, expands on hover/focus */}
      <div
        className={`grid transition-all duration-300 ease-out
                   group-hover:grid-rows-[1fr] group-hover:opacity-100
                   group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100
                   ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <p className="overflow-hidden text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
          <span className="block pt-3">{description}</span>
        </p>
      </div>
    </div>
  );
};

export default HoverRevealCard;

// ---- Example usage ----

interface CardData {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: Accent;
}

export function HoverRevealCardDemo() {}
