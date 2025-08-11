import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import Image from "next/image";

export const ServicesSection = () => {
  return (
    <section id="our-services" className="px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
        {/* Card 1 */}
        <div className="[background:linear-gradient(195deg,_#43C4A2_10.85%,_#2B7FFF_142.24%),_linear-gradient(0deg,_rgba(19,136,112,0.30)_-25.91%,_rgba(19,136,112,0.00)_95.25%)] rounded-[12px] p-8 flex justify-center items-center flex-col pb-4">
          <div>
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
        <div className="flex justify-center items-center flex-col bg-white border border-[#F2F2F2] rounded-[12px] shadow-[0_4px_24px_0_rgba(67,196,162,0.10)]">
          <div className="pt-8 md:max-w-[340px]">
            <p className="text-[#0A0A0A]  mx-auto text-center text-xl md:text-[28px] font-bold pb-2">
              دفع آمن وموثوق لحملاتك
              الخيرية
            </p>

            <p className="pb-8 text-[#0A0A0A] text-sm md:block hidden font-medium text-center">
              نوفر نظام دفع إلكتروني مشفر يضمن حماية بيانات المتبرعين
              وسهولة تحويل الأموال بكل شفافية واطمئنان.
            </p>

            <p className="pb-8 text-[#0A0A0A] text-sm md:hidden block font-medium text-center">
              خيارات دفع متنوعة تناسب جميع المتبرعين، أينما كانوا.
            </p>
          </div>

          <Image
            src="/creditcard-card.png"
            alt="services"
            width={600}
            height={200}
            className="w-full h-auto mx-auto"
          />
        </div>

        {/* Card 3 */}
        <div className="flex justify-between items-center flex-col bg-white border border-[#F2F2F2] rounded-[12px] shadow-[0_4px_24px_0_rgba(67,196,162,0.10)]">
          <div className="pt-8 md:max-w-[340px] flex-1">
            <p className="text-[#0A0A0A]  mx-auto text-center text-xl md:text-[28px] font-bold pb-2">
              تقارير متقدمة
            </p>

            <p className="pb-8 text-[#0A0A0A] text-sm md:block hidden font-medium text-center">
              احصل على رؤى دقيقة تساعدك على اتخاذ قرارات استراتيجية من خلال تقارير ذكية .
            </p>

            <p className="pb-8 text-[#0A0A0A] text-sm md:hidden block font-medium text-center">
              خيارات دفع متنوعة تناسب جميع المتبرعين، أينما كانوا.
            </p>
          </div>

          <Image
            src="/stats-card.png"
            alt="services"
            width={600}
            height={200}
            className="w-full h-auto"
          />
        </div>

        {/* Card 4 */}
        <div className="flex gap-8 justify-between items-center flex-col bg-white border border-[#F2F2F2] rounded-[12px] shadow-[0_4px_24px_0_rgba(67,196,162,0.10)]">
          <Image
            src="/employee-card.png"
            alt="services"
            width={600}
            height={200}
            className="w-full h-auto"
          />

          <div className="py-8 md:max-w-[340px] flex-1">
            <p className="text-[#0A0A0A]  mx-auto text-center text-xl md:text-[28px] font-bold pb-2">
              إدارة شاملة {" "}
              <span className="text-[#0F6D5C]">
                للموظفين
              </span>
            </p>

            <p className="pb-8 text-[#0A0A0A] text-sm font-medium text-center">
              تنظيم الفريق والمتطوعين بكفاءة عالية
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex  items-center flex-col bg-white border border-[#F2F2F2] rounded-[12px] shadow-[0_4px_24px_0_rgba(67,196,162,0.10)]">
          <Image
            src="/lock-card.png"
            alt="services"
            width={600}
            height={200}
            className="w-full h-auto mx-auto"
          />

          <div className="md:max-w-[340px] flex-1 flex justify-center items-center flex-col">
            <p className="text-[#0A0A0A]  mx-auto text-center text-xl md:text-[28px] font-bold pb-2">
              أمان متقدم
            </p>

            <p className="text-[#0A0A0A] text-sm font-medium text-center">
              حماية البيانات بأعلى المعايير
            </p>
          </div>
        </div>

        <div className="flex  items-center flex-col bg-white border border-[#F2F2F2] rounded-[12px] shadow-[0_4px_24px_0_rgba(67,196,162,0.10)]">
          <Image
            src="/emp.png"
            alt="services"
            width={400}
            height={200}
            className="w-full h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};