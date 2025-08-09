import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import Image from "next/image";
import { useT } from "@/hooks/useNextIntl";

export const WhyFlowx = () => {
  const t = useT("why-flowx");

  return (
    <section className="px-4 md:px-20">
      <div className="flex flex-col items-center justify-between gap-8 pb-14 md:flex-row">
        <p className="max-w-sm text-center text-2xl font-bold md:max-w-2xl md:text-right md:text-[40px] md:ltr:!text-left md:rtl:!text-right">
          {t("title")}{" "}
          <span className="text:[#204688] md:text-[#43C4A2]">
            {t("title-highlight")}
          </span>{" "}
          {t("title-suffix")}
        </p>

        <Button className="hidden h-14 w-full items-center gap-2 rounded-full border-white bg-[#138870] text-white hover:bg-[#138870]/90 md:flex md:w-2xs">
          <span className="[text-shadow:0_2px_4px_rgba(0,0,0,0.50)]">
            {t("free-trial")}
          </span>

          <GoArrowUpRight className="size-5" />
        </Button>
      </div>

      <div className="flex flex-col gap-8 pb-8 md:flex-row md:pb-0">
        <Card
          icon="/icons/user-love-bg-grad.svg"
          title={t("cards.stronger-relationships.title")}
          description={t("cards.stronger-relationships.description")}
        />
        <Card
          icon="/icons/target-bg-grad.svg"
          title={t("cards.precise-targeting.title")}
          description={t("cards.precise-targeting.description")}
        />
        <Card
          icon="/icons/chart-up-bg-grad.svg"
          title={t("cards.increased-donations.title")}
          description={t("cards.increased-donations.description")}
        />
      </div>

      <Button className="flex h-14 w-full items-center gap-2 rounded-full border-white bg-[#138870] text-white hover:bg-[#138870]/90 md:hidden md:w-2xs">
        <span className="[text-shadow:0_2px_4px_rgba(0,0,0,0.50)]">
          {t("free-trial")}
        </span>

        <GoArrowUpRight className="size-5" />
      </Button>
    </section>
  );
};

const Card = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-[12px] border border-[#F2F2F2] p-6 [box-shadow:0_4px_6px_-5.286px_rgba(0,0,0,0.02)] md:p-14">
      <Image
        src={icon}
        alt={title}
        width={120}
        height={120}
        className="hidden pb-4 md:block"
      />

      <Image
        src={icon}
        alt={title}
        width={80}
        height={80}
        className="block pb-4 md:hidden"
      />
      <h3 className="pb-2 text-center text-xl font-bold text-[#000000] md:text-2xl">
        {title}
      </h3>
      <p className="max-w-2xs text-center text-lg">{description}</p>
    </div>
  );
};
