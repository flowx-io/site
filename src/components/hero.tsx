import Image from "next/image";

import { Button } from "./ui/button";
import { useT } from "@/hooks/useNextIntl";

export const Hero = () => {
  const t = useT("hero");

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full pt-20 px-2 md:px-0 pb-5">
      <p className="flex items-center text-[10px] md:text-xs md:gap-2 gap-1 px-5 py-2 border-2 font-bold border-[#EDEDF1] rounded-full bg-[linear-gradient(99deg,rgba(255,255,255,0.80)_27.83%,rgba(255,255,255,0.80)_100%)] shadow-[0_2px_4px_0_rgba(0,0,0,0.04)]">
        <span className="text-[#1E3768] block">
          {t("badge")}
        </span>

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
          width={20}
          height={20}
          className="block md:hidden"
        />
      </p>

      <p className="text-center md:text-5xl text-[32px] font-bold max-w-5xl leading-tight pb-4">
        <span className="bg-linear-202 from-emerald-400 to-blue-600 text-transparent bg-clip-text">
          {t("title-highlight")}
        </span>
        <span> {t("title-text")} </span>
      </p>

      <p className="text-center font-medium text-base md:max-w-2xl">
        {t("description")}
      </p>

      <div className="flex items-center flex-col-reverse md:flex-row gap-4 pb-4 w-full justify-center">
        <Button className="px-8 py-4 w-full md:w-fit rounded-full h-auto bg-transparent gap-2 border-[#DEE4E7] hover:bg-[#DEE4E7]/50">
          <Image src="/icons/computer-video.svg" alt="arrow" width={24} height={24} />
          <span className="text-[#24252D] font-bold">{t("watch-how")}</span>
        </Button>

        <Button className="px-8 w-full md:w-fit py-4 bg-[#138870] rounded-full h-auto gap-2 hover:bg-[#138870]/90">
          <Image src="/icons/rocket.svg" alt="arrow" width={24} height={24} />
          <span className="text-white font-bold">{t("free-trial")} </span>
        </Button>
      </div>

      <div className="flex items-center gap-4 pb-20">
        <div className="flex items-center flex-col gap-2 p-3">
          <Image src="/icons/internet.svg" className="block md:hidden" alt="logo" width={24} height={24} />
          <Image src="/icons/internet.svg" className="hidden md:block" alt="logo" width={32} height={32} />
          <span className="text-[10px] md:text-xs font-bold text-[#0A0A0A]">
            {t("features.comprehensive-coverage")}
          </span>
        </div>

        <div className="flex items-center flex-col gap-2 p-3">
          <Image src="/icons/user-add.svg" className="block md:hidden" alt="logo" width={24} height={24} />
          <Image src="/icons/user-add.svg" className="hidden md:block" alt="logo" width={32} height={32} />
          <span className="text-[10px] md:text-xs font-bold text-[#0A0A0A]">
            {t("features.advanced-management")}
          </span>
        </div>

        <div className="flex items-center flex-col gap-2 p-3">
          <Image src="/icons/security-check.svg" className="block md:hidden" alt="logo" width={24} height={24} />
          <Image src="/icons/security-check.svg" className="hidden md:block" alt="logo" width={32} height={32} />
          <span className="text-[10px] md:text-xs font-bold text-[#0A0A0A]">
            {t("features.absolute-security")}
          </span>
        </div>

        <div className="flex items-center flex-col gap-2 p-3">
          <Image src="/icons/chart-up.svg" className="block md:hidden" alt="logo" width={24} height={24} />
          <Image src="/icons/chart-up.svg" className="hidden md:block" alt="logo" width={32} height={32} />
          <span className="text-[10px] md:text-xs font-bold text-[#0A0A0A]">
            {t("features.exceptional-growth")}
          </span>
        </div>
      </div>

      <Image
        src="/stats-cards.png"
        alt="stats-cards"
        width={1000}
        height={1000}
        className="w-full h-full object-cover max-w-5xl hidden md:block"
      />
    </div>
  )
}