import { GoArrowUpRight } from "react-icons/go";
import { Button } from "./ui/button";
import Image from "next/image";

export const ServicesSection = () => {
  return (
    <section id="our-services" className="px-4 md:px-8">
      <div className="grid grid-cols-3 md:gap-8 gap-4">
        {/* Card 1 */}
        <div
          className="[background:linear-gradient(195deg,_#43C4A2_10.85%,_#2B7FFF_142.24%),_linear-gradient(0deg,_rgba(19,136,112,0.30)_-25.91%,_rgba(19,136,112,0.00)_95.25%)] rounded-[12px] p-8 flex justify-center items-center flex-col pb-4"
        >
         
          <div className="py-6">
            <p className="text-white text-center text-[28px] font-bold pb-4 text-balance">
              النظام الأول من نوعه
              <br />
              لإدارة المؤسسات الخيرية
              <br />
              في العالم العربي
            </p>

            <p className="pb-8 text-white font-medium text-center">
              إحصائيات فورية ومؤشرات أداء متقدمة لجميع
              <br />
              جوانب العمل الخيري مع تحليلات ذكية
            </p>

            <Button className="rounded-full bg-[#191615] hover:bg-[#191615]/90 w-full h-14 border-white text-white gap-2 flex items-center">
              <span>
                تجربة مجانية لمدة 30 يوماً
              </span>
              <GoArrowUpRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="p-8 flex justify-center items-center flex-col pb-4 bg-white gap-8 border border-[#F2F2F2] rounded-[12px] shadow-[0_4px_24px_0_rgba(67,196,162,0.10)]"
        >
         
          <div className="py-6">
            <p className="text-[#0A0A0A] text-center text-[28px] font-bold pb-1 text-balance">
              دفع آمن وموثوق لحملاتك
              <br />
              الخيرية
            </p>

            <p className="pb-8 text-[#0A0A0A] text-sm font-medium text-center">
              نوفر نظام دفع إلكتروني مشفر يضمن حماية بيانات المتبرعين
              <br />
              وسهولة تحويل الأموال بكل شفافية واطمئنان.
            </p>

            <Image
              src="/icons/card.svg"
              alt="services"
              width={220}
              height={160}
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>

        <div
          className="p-8 flex justify-center items-center flex-col pb-4 bg-white gap-8 border border-[#F2F2F2] rounded-[12px] shadow-[0_4px_24px_0_rgba(67,196,162,0.10)]"
        >
          <Image
            src="/icons/lock.svg"
            alt="services"
            width={136}
            height={140}
          />

          <div className="text-black gap-2 flex flex-col items-center">
            <p className="text-2xl font-bold">أمان متقدم</p>
            <p className="font-medium">حماية البيانات بأعلى المعايير</p>
          </div>
        </div>
      </div>
    </section>
  );
};