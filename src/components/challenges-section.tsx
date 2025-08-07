import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

export const ChallengesSection = () => {

  return (
    <section id="solutions" className="px-4 md:px-8">
      <div className="flex flex-col items-center justify-center">
        <p className="flex w-fit items-center justify-center text-[10px] md:text-xs md:gap-2 gap-1 px-5 py-2 border-2 font-bold border-[#EDEDF1] rounded-full bg-[linear-gradient(99deg,rgba(255,255,255,0.80)_27.83%,rgba(255,255,255,0.80)_100%)] shadow-[0_2px_4px_0_rgba(0,0,0,0.04)] mb-4">
          <span className="text-[#1E3768] block">
            النظام الأول من نوعه لإدارة المؤسسات الخيرية في العالم العربي
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

        <p className="font-bold text-center text-2xl md:text-[40px] pb-4 max-w-2xl">
          نفهم
          {" "}
          <span className="text-[#43C4A2]">
            التحديات
          </span>
          {" "}
          التي تواجهها المؤسسات الخيرية
        </p>

        <p className="text-center font-medium text-base md:max-w-lg pb-12">
          بعد دراسة مئات المؤسسات الخيرية في العالم العربي، حددنا أهم المشاكل التي تعيق كفاءة العمل الخيري ووضعنا الحلول المناسبة
        </p>

        <div className="max-w-4xl flex gap-8 w-full flex-col md:flex-row">
          <ChallengeCard
            className="border-[#EDEDF1] [background:linear-gradient(175deg,var(--tags-eror-bg,#FEF2F2)_0.84%,#FFF_18.4%)] border-[1.5px] [box-shadow:0_4px_8px_8px_rgba(0,0,0,0.02)]"
            icon={<ChallengeIcon />}
            title="المشاكل الشائعة"
            description="التحديات التي تواجهها معظم المؤسسات"
            features={[
              {
                title: " إدارة معقدة ومتناثرة",
                icon: "/icons/alert-circle.svg",
                description: "استخدام أنظمة متعددة منفصلة لإدارة الموظفين والتبرعات والمالية مما يخلق تعقيداً وأخطاء"
              },
              {
                title: " اعتماد على الأوراق والإكسل",
                icon: "/icons/files.svg",
                description: "تبع البيانات يدوياً يؤدي إلى أخطاء وصعوبة في إنتاج التقارير والمتابعة"
              },
              {
                title: " نقص في الشفافية",
                icon: "/icons/view-off-slash.svg",
                description: "صعوبة في تتبع التبرعات ومراقبة الإنفاق مما يؤثر على ثقة المتبرعين"
              },
              {
                title: " بطء في العمليات",
                icon: "/icons/loading.svg",
                description: "إجراءات طويلة ومعقدة تستنزف وقت الفريق وتؤخر تنفيذ المشاريع الخيرية"
              },
            ]}
          />

          <ChallengeCard
            className="border-[1.5px] border-[#0F6D5C]  [background:linear-gradient(159deg,var(--Bermuda-50,#EEFBF6)_17.47%,#FFF_73.27%)] [box-shadow:0_2.108px_4.216px_0_rgba(0,0,0,0.02)]"
            icon={<SolutionIcon />}
            title="حلولنا المتقدمة"
            description="التحديات التي تواجهها معظم المؤسسات"
            features={[
              {
                title: " نظام موحد ومتكامل",
                icon: "/icons/security-check.svg",
                description: "منصة واحدة تجمع جميع العمليات من إدارة الموظفين إلى التبرعات والتقارير"
              },
              {
                title: " رقمنة كاملة",
                icon: "/icons/database.svg",
                description: "تحويل جميع العمليات الورقية إلى نظام رقمي آمن مع نسخ احتياطية تلقائية"
              },
              { 
                title: " شفافية كاملة",
                icon: "/icons/chart-up.svg",
                description: "تتبع فوري لجميع التبرعات والمصروفات مع تقارير تفصيلية للمتبرعين"
              },
              {
                title: " سرعة وكفاءة",
                icon: "/icons/zap.svg",
                description: "أتمتة العمليات وتبسيط الإجراءات لتوفير الوقت والتركيز على العمل الخيري"
              },
            ]}
          />

          {/* <div className=" flex flex-col gap-8 flex-1  rounded-[12px] p-8">
            <div className="flex justify-center items-center flex-col gap-2 pb-4 border-b border-[#DEE4E7]">
              <SolutionIcon />

              <p className="text-center font-bold text-2xl">
                حلولنا المتقدمة
              </p>

              <p className="text-center font-medium">
                التحديات التي تواجهها معظم المؤسسات
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-4 py-3 flex gap-2 items-start">
                <Image
                  src="/icons/security-check.svg"
                  alt="logo"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-bold">
                    التحديات التي تواجهها معظم المؤسسات
                  </p>
                  <p className="font-medium">
                    منصة واحدة تجمع جميع العمليات من إدارة الموظفين إلى التبرعات والتقارير
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 flex gap-2 items-start">
                <Image
                  src="/icons/database.svg"
                  alt="logo"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-bold">
                    رقمنة كاملة
                  </p>
                  <p className="font-medium">
                    تحويل جميع العمليات الورقية إلى نظام رقمي آمن مع نسخ احتياطية تلقائية
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 flex gap-2 items-start">
                <Image
                  src="/icons/chart-up.svg"
                  alt="logo"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-bold">
                    شفافية كاملة
                  </p>
                  <p className="font-medium">
                    تتبع فوري لجميع التبرعات والمصروفات مع تقارير تفصيلية للمتبرعين
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 flex gap-2 items-start">
                <Image
                  src="/icons/zap.svg"
                  alt="logo"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-bold">
                    سرعة وكفاءة
                  </p>
                  <p className="font-medium">
                    أتمتة العمليات وتبسيط الإجراءات لتوفير الوقت والتركيز على العمل الخيري
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

const ChallengeCard = ({
  icon,
  title,
  description,
  className,
  features
}: {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  features: {
    title: string;
    icon: string;
    description: string;
  }[];
}) => {
  return (
    <div className={cn("flex flex-col gap-8 flex-1 rounded-[12px] p-8", className)}>
      <div className="flex justify-center items-center flex-col gap-2 pb-4 border-b border-[#DEE4E7]">
        {icon}

        <p className="text-center font-bold text-2xl">
          {title}
        </p>

        <p className="text-center font-medium">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <div className="px-4 py-3 flex gap-2 items-start" key={index}>
            <Image
              src={feature.icon}
              alt="logo"
              width={32}
              height={32}
            />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">
                {feature.title}
              </p>
              <p className="font-medium">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SolutionIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
      <path d="M12.1788 30.2402C11.4219 28.539 11 26.6464 11 24.652C11 17.2449 16.8203 11.2402 24 11.2402C31.1798 11.2402 37 17.2449 37 24.652C37 26.6464 36.578 28.539 35.8212 30.2402" stroke="url(#paint0_linear_7494_30632)" stroke-width="3" stroke-linecap="round" />
      <path d="M24 4.24023V6.24023" stroke="url(#paint1_linear_7494_30632)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M44 24.2402H42" stroke="url(#paint2_linear_7494_30632)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 24.2402H4" stroke="url(#paint3_linear_7494_30632)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M38.1408 10.0957L36.7266 11.5099" stroke="url(#paint4_linear_7494_30632)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11.2736 11.5138L9.85938 10.0996" stroke="url(#paint5_linear_7494_30632)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M29.035 38.8511C31.0558 38.1975 31.8662 36.3479 32.0942 34.4875C32.1622 33.9317 31.705 33.4707 31.145 33.4707L16.9547 33.4711C16.3755 33.4711 15.9103 33.9627 15.9795 34.5377C16.2028 36.3945 16.7664 37.7509 18.9079 38.8511M29.035 38.8511C29.035 38.8511 19.2604 38.8511 18.9079 38.8511M29.035 38.8511C28.792 42.7411 27.6686 44.2817 24.0146 44.2385C20.1062 44.3107 19.207 42.4065 18.9079 38.8511" stroke="url(#paint6_linear_7494_30632)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_7494_30632" x1="24.051" y1="12.4439" x2="24.0241" y2="30.2403" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0F6D5C" />
          <stop offset="1" stop-color="#20A98A" />
        </linearGradient>
        <linearGradient id="paint1_linear_7494_30632" x1="24.502" y1="4.36694" x2="24.4942" y2="6.24021" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0F6D5C" />
          <stop offset="1" stop-color="#20A98A" />
        </linearGradient>
        <linearGradient id="paint2_linear_7494_30632" x1="43.0039" y1="24.3036" x2="43.003" y2="25.2402" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0F6D5C" />
          <stop offset="1" stop-color="#20A98A" />
        </linearGradient>
        <linearGradient id="paint3_linear_7494_30632" x1="5.00392" y1="24.3036" x2="5.00295" y2="25.2402" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0F6D5C" />
          <stop offset="1" stop-color="#20A98A" />
        </linearGradient>
        <linearGradient id="paint4_linear_7494_30632" x1="37.4364" y1="10.1853" x2="37.4337" y2="11.5099" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0F6D5C" />
          <stop offset="1" stop-color="#20A98A" />
        </linearGradient>
        <linearGradient id="paint5_linear_7494_30632" x1="10.5693" y1="10.1892" x2="10.5665" y2="11.5138" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0F6D5C" />
          <stop offset="1" stop-color="#20A98A" />
        </linearGradient>
        <linearGradient id="paint6_linear_7494_30632" x1="24.0684" y1="34.153" x2="24.0545" y2="44.2405" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0F6D5C" />
          <stop offset="1" stop-color="#20A98A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const ChallengeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
      <path d="M24 44.2402C35.0457 44.2402 44 35.2859 44 24.2402C44 13.1945 35.0457 4.24023 24 4.24023C12.9543 4.24023 4 13.1945 4 24.2402C4 35.2859 12.9543 44.2402 24 44.2402Z" stroke="url(#paint0_linear_7494_30680)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M24 16.2402V25.2402" stroke="url(#paint1_linear_7494_30680)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M24 32.2168V32.2368" stroke="url(#paint2_linear_7494_30680)" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_7494_30680" x1="24" y1="4.24023" x2="24" y2="44.2402" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C11F1F" />
          <stop offset="1" stop-color="#ED4648" />
        </linearGradient>
        <linearGradient id="paint1_linear_7494_30680" x1="24.5" y1="16.2402" x2="24.5" y2="25.2402" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C11F1F" />
          <stop offset="1" stop-color="#ED4648" />
        </linearGradient>
        <linearGradient id="paint2_linear_7494_30680" x1="24.5" y1="32.2168" x2="24.5" y2="32.2368" gradientUnits="userSpaceOnUse">
          <stop stop-color="#C11F1F" />
          <stop offset="1" stop-color="#ED4648" />
        </linearGradient>
      </defs>
    </svg>
  )
}
