import Image from "next/image";

import { Button } from "./ui/button";
import { useT } from "@/hooks/useNextIntl";
import { Badge } from "./badge";

export const Hero = () => {
  const t = useT("hero");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-2 pt-20 pb-5 md:px-0">
      <Badge text={t("badge")} />

      <p className="max-w-5xl pb-4 text-center text-[32px] leading-tight font-bold md:text-5xl">
        <span className="bg-linear-202 from-emerald-400 to-blue-600 bg-clip-text text-transparent">
          {t("title-highlight")}
        </span>
        <span> {t("title-text")} </span>
      </p>

      <p className="text-center text-base font-medium md:max-w-2xl">
        {t("description")}
      </p>

      <div className="flex w-full flex-col-reverse items-center justify-center gap-4 pb-4 md:flex-row">
        <Button className="h-auto w-full gap-2 rounded-full bg-[#138870] px-8 py-4 hover:bg-[#138870]/90 md:w-fit">
          <Image src="/icons/rocket.svg" alt="arrow" width={24} height={24} />
          <span className="font-bold text-white">{t("free-trial")} </span>
        </Button>

        <Button className="h-auto w-full gap-2 rounded-full border border-[#DEE4E7] bg-transparent px-8 py-4 shadow-[0_2px_4px_0_rgba(0,0,0,0.04)] hover:bg-[#DEE4E7]/50 md:w-fit">
          <Image
            src="/icons/computer-video.svg"
            alt="arrow"
            width={24}
            height={24}
          />
          <span className="font-bold text-[#24252D]">{t("watch-how")}</span>
        </Button>
      </div>

      <div className="flex items-center gap-4 md:pb-20">
        <div className="flex flex-col items-center gap-2 p-1 sm:p-3">
          <Image
            src="/icons/internet.svg"
            className="block md:hidden"
            alt="logo"
            width={24}
            height={24}
          />
          <Image
            src="/icons/internet.svg"
            className="hidden md:block"
            alt="logo"
            width={32}
            height={32}
          />
          <span className="text-center text-[10px] font-bold text-[#0A0A0A] md:text-xs">
            {t("features.comprehensive-coverage")}
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 p-1 sm:p-3">
          <Image
            src="/icons/user-add.svg"
            className="block md:hidden"
            alt="logo"
            width={24}
            height={24}
          />
          <Image
            src="/icons/user-add.svg"
            className="hidden md:block"
            alt="logo"
            width={32}
            height={32}
          />
          <span className="text-center text-[10px] font-bold text-[#0A0A0A] md:text-xs">
            {t("features.advanced-management")}
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 p-1 sm:p-3">
          <Image
            src="/icons/security-check.svg"
            className="block md:hidden"
            alt="logo"
            width={24}
            height={24}
          />
          <Image
            src="/icons/security-check.svg"
            className="hidden md:block"
            alt="logo"
            width={32}
            height={32}
          />
          <span className="text-center text-[10px] font-bold text-[#0A0A0A] md:text-xs">
            {t("features.absolute-security")}
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 p-1 sm:p-3">
          <Image
            src="/icons/chart-up.svg"
            className="block md:hidden"
            alt="logo"
            width={24}
            height={24}
          />
          <Image
            src="/icons/chart-up.svg"
            className="hidden md:block"
            alt="logo"
            width={32}
            height={32}
          />
          <span className="text-center text-[10px] font-bold text-[#0A0A0A] md:text-xs">
            {t("features.exceptional-growth")}
          </span>
        </div>
      </div>

      <Image
        src="/stats-cards.png"
        alt="stats-cards"
        width={1000}
        height={1000}
        className="hidden h-full w-full max-w-5xl object-cover md:block"
      />
    </div>
  );
};
