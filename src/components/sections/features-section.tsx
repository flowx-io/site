import Image from "next/image";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export const FeaturesSection = () => {
  const t = useTranslations('features');
  
  return (
    <section
      id="features"
      className="px-4 md:px-8 lg:px-20"
    >
      <div className="flex flex-col items-center justify-center gap-14">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
          <div className="flex-1">
            <Image
              src="/assets/system.png"
              alt="Features"
              width={624}
              height={624}
              className="w-full h-full object-cover mx-auto hidden md:block"
            />

            <Image
              src="/assets/system.png"
              alt="Features"
              width={340}
              height={340}
              className="w-full h-full object-cover mx-auto block md:hidden"
            />
          </div>

          <div className="flex-1 flex flex-col md:gap-8 gap-6">
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-[40px] font-bold text-[#000000]">
                {t('sections.crm-system.title')}
                {" "}
                <span className="bg-gradient-to-br from-[#43C4A2] to-[#2B7FFF] bg-clip-text text-transparent">
                  {t('sections.crm-system.title-highlight')}
                </span>
                {" "}
                {t('sections.crm-system.title-suffix')}
              </p>
              <p className="text-lg font-medium">
                {t('sections.crm-system.description')}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <FeatureRow
                icon="/icons/database-grad.svg"
                title={t('sections.crm-system.features.comprehensive-database.title')}
                description={t('sections.crm-system.features.comprehensive-database.description')}
              />

              <FeatureRow
                icon="/icons/user-add-grad.svg"
                title={t('sections.crm-system.features.relationship-management.title')}
                description={t('sections.crm-system.features.relationship-management.description')}
              />

              <FeatureRow
                icon="/icons/notification-grad.svg"
                title={t('sections.crm-system.features.smart-notifications.title')}
                description={t('sections.crm-system.features.smart-notifications.description')}
              />

              <FeatureRow
                icon="/icons/wave-triangle-grad.svg"
                title={t('sections.crm-system.features.activity-tracking.title')}
                description={t('sections.crm-system.features.activity-tracking.description')}
              />
            </div>

            <Button className="flex rounded-full bg-[#138870] hover:bg-[#138870]/90 h-14 md:w-2xs w-full border-white text-white gap-2 items-center mt-4">
              <span className="[text-shadow:0_2px_4px_rgba(0,0,0,0.50)]">
                {t('free-trial')}
              </span>

              <Image src="/icons/rocket.svg" alt="arrow" width={24} height={24} />
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
          <div className="flex-1 flex flex-col md:gap-8 gap-6">
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-[40px] font-bold text-[#000000]">
                {t('sections.dashboard.title')}
                {" "}
                <span className="bg-gradient-to-br from-[#43C4A2] to-[#2B7FFF] bg-clip-text text-transparent">
                  {t('sections.dashboard.title-highlight')}
                </span>
                {" "}
                {t('sections.dashboard.title-suffix')}
              </p>
              <p className="text-lg font-medium max-w-lg">
                {t('sections.dashboard.description')}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <FeatureRow
                icon="/icons/chart-up-grad.svg"
                title={t('sections.dashboard.features.subscription-management.title')}
                description={t('sections.dashboard.features.subscription-management.description')}
              />

              <FeatureRow
                icon="/icons/target-grad.svg"
                title={t('sections.dashboard.features.impact-tracking.title')}
                description={t('sections.dashboard.features.impact-tracking.description')}
              />

              <FeatureRow
                icon="/icons/view-grad.svg"
                title={t('sections.dashboard.features.receipt-download.title')}
                description={t('sections.dashboard.features.receipt-download.description')}
              />

              <FeatureRow
                icon="/icons/filter-grad.svg"
                title={t('sections.dashboard.features.donation-history.title')}
                description={t('sections.dashboard.features.donation-history.description')}
              />
            </div>

            <Button className="flex rounded-full bg-[#138870] hover:bg-[#138870]/90 h-14 md:w-2xs w-full border-white text-white gap-2 items-center mt-4">
              <span className="[text-shadow:0_2px_4px_rgba(0,0,0,0.50)]">
                {t('free-trial')}
              </span>

              <Image src="/icons/rocket.svg" alt="arrow" width={24} height={24} />
            </Button>
          </div>

          <div className="flex-1">
            <Image
              src="/assets/targeting.png"
              alt="Features"
              width={624}
              height={624}
              className="w-full h-full object-cover mx-auto hidden md:block"
            />

            <Image
              src="/assets/targeting.png"
              alt="Features"
              width={340}
              height={340}
              className="w-full h-full object-cover mx-auto block md:hidden"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
          <div className="flex-1">
            <Image
              src="/assets/subscription.png"
              alt="Features"
              width={624}
              height={624}
              className="w-full h-full object-cover mx-auto hidden md:block"
            />

            <Image
              src="/assets/subscription.png"
              alt="Features"
              width={340}
              height={340}
              className="w-full h-full object-cover mx-auto block md:hidden"
            />
          </div>

          <div className="flex-1 flex flex-col md:gap-8 gap-6">
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-[40px] font-bold text-[#000000]">
                {t('sections.analytics.title')}
                {" "}
                <span className="bg-gradient-to-br from-[#43C4A2] to-[#2B7FFF] bg-clip-text text-transparent">
                  {t('sections.analytics.title-highlight')}
                </span>
              </p>
              <p className="text-lg font-medium max-w-lg">
                {t('sections.analytics.description')}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <FeatureRow
                icon="/icons/arrow-reload-horizontal-grad.svg"
                title={t('sections.analytics.features.advanced-statistics.title')}
                description={t('sections.analytics.features.advanced-statistics.description')}
              />

              <FeatureRow
                icon="/icons/save-money-dollar-grad.svg"
                title={t('sections.analytics.features.smart-retargeting.title')}
                description={t('sections.analytics.features.smart-retargeting.description')}
              />

              <FeatureRow
                icon="/icons/file-download-grad.svg"
                title={t('sections.analytics.features.behavior-prediction.title')}
                description={t('sections.analytics.features.behavior-prediction.description')}
              />

              <FeatureRow
                icon="/icons/date-time-grad.svg"
                title={t('sections.analytics.features.custom-reports.title')}
                description={t('sections.analytics.features.custom-reports.description')}
              />
            </div>

            <Button className="flex rounded-full bg-[#138870] hover:bg-[#138870]/90 h-14 md:w-2xs w-full border-white text-white gap-2 items-center mt-4">
              <span className="[text-shadow:0_2px_4px_rgba(0,0,0,0.50)]">
                {t('free-trial')}
              </span>

              <Image src="/icons/rocket.svg" alt="arrow" width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeatureRow = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <div className="flex flex-row md:gap-6 gap-4">
      <div className="flex size-12 justify-center items-center rounded-full p-2 border border-[rgba(32,169,138,0.20)] [background:linear-gradient(180deg,#FFF_0%,var(--Bermuda-100,#D5F6E8)_153.57%)] shadow-[0_4px_4px_0_rgba(0,0,0,0.04)]">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-lg font-bold text-[#363944]">{title}</p>
        <p className="text-base font-medium text-[#363944]">{description}</p>
      </div>
    </div>
  )
}