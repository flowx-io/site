import { cn } from "@/lib/utils";
import Image from "next/image";

export const Badge = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  return (
    <p
      className={cn(
        "flex items-center gap-1 rounded-full border-2 border-[#EDEDF1] bg-[linear-gradient(99deg,rgba(255,255,255,0.80)_27.83%,rgba(255,255,255,0.80)_100%)] px-2 py-2 text-[10px] font-bold shadow-[0_2px_4px_0_rgba(0,0,0,0.04)] sm:px-4 md:gap-2 md:px-5 md:text-xs",
        className,
      )}
    >
      <span className="block text-[#1E3768]">{text}</span>

      <Image
        src="/icons/award.svg"
        alt="logo"
        width={24}
        height={24}
        className="hidden md:block"
      />

      <Image
        src="/icons/award.svg"
        alt="logo"
        width={16}
        height={16}
        className="block md:hidden"
      />
    </p>
  );
};
