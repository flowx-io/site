import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import Image from "next/image";
import { useT } from "@/hooks/useNextIntl";

export const WhyFlowx = () => {
  const t = useT("why-flowx");

  return (
    <section className="px-4 md:px-20 ">
      <div className="flex justify-between items-center flex-col md:flex-row gap-8 pb-14">
        <p className="text-2xl md:text-[40px] font-bold max-w-sm md:max-w-2xl text-center md:text-right md:rtl:!text-right md:ltr:!text-left">
          {t("title")}{" "}
          <span className="text:[#204688] md:text-[#43C4A2]">
            {t("title-highlight")}
          </span>
          {" "}
          {t("title-suffix")}
        </p>

        <Button className="md:flex hidden rounded-full bg-[#138870] hover:bg-[#138870]/90 h-14 md:w-2xs w-full border-white text-white gap-2 items-center">
          <span className="[text-shadow:0_2px_4px_rgba(0,0,0,0.50)]">
            {t("free-trial")}
          </span>

          <GoArrowUpRight className="size-5" />
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 pb-8 md:pb-0">
        <Card
          icon="/icons/user-love.png"
          title={t("cards.stronger-relationships.title")}
          description={t("cards.stronger-relationships.description")}
        />
        <Card
          icon="/icons/target.png"
          title={t("cards.precise-targeting.title")}
          description={t("cards.precise-targeting.description")}
        />
        <Card
          icon="/icons/chart-up.png"
          title={t("cards.increased-donations.title")}
          description={t("cards.increased-donations.description")}
        />
      </div>

      <Button className="md:hidden flex rounded-full bg-[#138870] hover:bg-[#138870]/90 h-14 md:w-2xs w-full border-white text-white gap-2 items-center">
        <span className="[text-shadow:0_2px_4px_rgba(0,0,0,0.50)]">
          {t("free-trial")}
        </span>

        <GoArrowUpRight className="size-5" />
      </Button>
    </section>
  );
};

const Card = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <div className="border border-[#F2F2F2] p-6 md:p-14 flex-1 rounded-[12px] flex flex-col justify-center items-center [box-shadow:0_4px_6px_-5.286px_rgba(0,0,0,0.02)]">
      <Image
        src={icon}
        alt={title}
        width={120}
        height={120}
        className="pb-4 hidden md:block"
      />

      <Image
        src={icon}
        alt={title}
        width={80}
        height={80}
        className="pb-4 block md:hidden"
      />
      <h3 className="text-xl md:text-2xl font-bold pb-2 text-[#000000] text-center">{title}</h3>
      <p className="text-lg text-center max-w-2xs">{description}</p>
    </div>
  );
};