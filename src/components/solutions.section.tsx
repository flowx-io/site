import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useT } from "@/hooks/useNextIntl";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

export const SolutionsSection = () => {
  const t = useT("solutions");

  const getFeatures = (cardKey: string) => {
    const features: string[] = [];
    const featureCounts: Record<string, number> = {
      "comprehensive-staff-management": 5,
      "professional-donation-management": 5,
      "donor-experience": 5,
      "email-marketing": 4,
      "flexible-identity-settings": 5
    };

    const count = featureCounts[cardKey] || 0;
    for (let index = 0; index < count; index++) {
      const feature = t(`cards.${cardKey}.features.${index}`);
      features.push(feature);
    }
    return features;
  };

  return (
    <section id="solutions" className="px-4 md:px-8">
      <div className="flex flex-col items-center justify-center">
        <p className="flex w-fit items-center justify-center text-[10px] md:text-xs md:gap-2 gap-1 px-5 py-2 border-2 font-bold border-[#EDEDF1] rounded-full bg-[linear-gradient(99deg,rgba(255,255,255,0.80)_27.83%,rgba(255,255,255,0.80)_100%)] shadow-[0_2px_4px_0_rgba(0,0,0,0.04)] mb-4">
          <span className="text-[#1E3768] block">
            {t("badge")}
          </span>

          <Image
            src="/icons/award.svg"
            alt="logo"
            width={24}
            height={24}
            className="hidden md:block w-fit h-fit"
          />

          <Image
            src="/icons/award.svg"
            alt="logo"
            width={20}
            height={20}
            className="block md:hidden w-fit h-fit"
          />
        </p>

        <p className="font-bold text-center text-2xl md:text-[40px] pb-12">
          {t("title").split(t("title-highlight")).map((part, index) =>
            index === 0 ? (
              <span key={index}>
                {part}
                <span className="text-[#43C4A2]">
                  {t("title-highlight")}
                </span>
              </span>
            ) : (
              <span key={index}>{part}</span>
            )
          )}
        </p>

        <div className="flex gap-8 flex-col w-full" >
          <div className="flex gap-8 flex-col md:flex-row">
            <SolutionCard
              title={t("cards.comprehensive-staff-management.title")}
              list={getFeatures("comprehensive-staff-management")}
            />
            <SolutionCard
              title={t("cards.professional-donation-management.title")}
              list={getFeatures("professional-donation-management")}
            />
          </div>

          <div className="flex gap-8 flex-col md:flex-row">
            <SolutionCard
              title={t("cards.donor-experience.title")}
              list={getFeatures("donor-experience")}
            />

            <SolutionCard
              title={t("cards.email-marketing.title")}
              list={getFeatures("email-marketing")}
            />

            <SolutionCard
              title={t("cards.flexible-identity-settings.title")}
              list={getFeatures("flexible-identity-settings")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionCard = ({ title, list }: { title: string, list: string[] }) => {
  const lang = useLocale()

  return (
    <div
      className="flex-1 flex flex-col border border-[#F2F2F2] rounded-[12px] shadow-[0_4px_24px_0_rgba(67,196,162,0.10)]"
    >
      <div className="flex flex-row justify-between items-center bg-[rgba(67,196,162,0.06)] px-8 py-5 w-full">
        <p className="text-lg font-bold text-[#0A0A0A]">{title}</p>
        <div className="size-8 bg-[#191615] rounded-full flex items-center justify-center">
          <GoArrowUpRight className="size-5 text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-2 px-8 py-5 justify-start items-start">
        <ul className="flex flex-col gap-2">
          {list.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <div className={cn("size-4", lang === "ar" ? "rotate-180" : "rotate-0")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="6.43%" stopColor="#0F6D5C" />
                      <stop offset="99.9%" stopColor="#20A98A" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M2 21l21-9L2 3v7l15 2-15 2v7z"
                    fill="url(#iconGradient)"
                  />
                </svg>
              </div>
              <span className="font-medium text-[#0A0A0A]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};