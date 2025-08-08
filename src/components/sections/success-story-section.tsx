import Image from "next/image";
import { useT } from "@/hooks/useNextIntl";

export const SuccessStorySection = () => {
  const t = useT("success-story");

  return (
    <section className="px-4 md:px-20">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[40px] font-bold text-[#000000] pb-3">
          {t("title")}
          {" "}
          <span className="bg-gradient-to-br from-[#43C4A2] to-[#2B7FFF] bg-clip-text text-transparent">
            {t("title-highlight")}
          </span>
          {" "}
          {t("title-suffix")}
        </p>

        <p className="text-lg text-center font-medium max-w-lg pb-8">
          {t("description")}
        </p>

        <div
          className="px-4 md:px-14 py-8 flex flex-col gap-8 border border-[#0F6D5C] rounded-[12px] [background:linear-gradient(159deg,_var(--Bermuda-50,_#EEFBF6)_17.47%,_#FFF_73.27%)] [box-shadow:0_2.108px_4.216px_0_rgba(0,0,0,0.02)] max-w-4xl w-full"
        >
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/assets/profile-image.png"
              alt="logo"
              width={56}
              height={56}
              className="object-cover"
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold">
                {t("organization-name")}
              </p>
              <p className="text-sm">
                {t("ceo-name")}
              </p>
            </div>
          </div>

          <p className="text-lg text-center max-w-3xl">
            "{t("testimonial")}"
          </p>

          <div className="px-0 md:px-8 py-6 md:py-8 grid gap-x-14 md:gap-0 gap-y-9 grid-cols-2 md:flex justify-between w-full">
            <div className="flex justify-center flex-col items-center text-center gap-2">
              <p className="text-3xl font-bold text-[#062823]">{t("stats.donors.value")}</p>
              <span className="text-lg text-[#062823]">{t("stats.donors.label")}</span>
            </div>

            <div className="border-r border-[#DCDCDC] mx-6 hidden md:block" />

            <div className="flex justify-center flex-col items-center text-center gap-2 ">
              <p className="text-3xl font-bold text-[#062823]">{t("stats.total-donations.value")}</p>
              <span className="text-lg text-[#062823]">{t("stats.total-donations.label")}</span>
            </div>

            <div className="border-r border-[#DCDCDC] mx-6 hidden md:block" />

            <div className="flex justify-center flex-col items-center text-center gap-2">
              <p className="text-3xl font-bold text-[#062823]">{t("stats.customer-satisfaction.value")}</p>
              <span className="text-lg text-[#062823]">{t("stats.customer-satisfaction.label")}</span>
            </div>

            <div className="border-r border-[#DCDCDC] mx-6 hidden md:block" />

            <div className="flex justify-center flex-col items-center text-center gap-2">
              <p className="text-3xl font-bold text-[#062823]">{t("stats.beneficiaries.value")}</p>
              <span className="text-lg text-[#062823]">{t("stats.beneficiaries.label")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};