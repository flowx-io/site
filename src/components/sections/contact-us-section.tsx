import Image from "next/image"
import { getTranslations } from "next-intl/server"

import { ContactUsForm } from "../contact-us-form"

export const ContactUsSection = async () => {
  const t = await getTranslations("contact")

  return (
    <section
      id="contact"
      className="[background:var(--1,_linear-gradient(180deg,_var(--Bermuda-700,_#0F6D5C)_6.43%,_var(--Bermuda-500,_#20A98A)_99.9%))] px-6 md:px-20 py-8 md:py-14 flex mx-auto flex-col lg:flex-row gap-8 md:gap-14 items-center"
    >
      <div className="flex flex-1 flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-4 text-white">
          <p className="text-[28px] md:text-[40px] font-bold max-w-lg">{t("title")}</p>
          <p className="text-base md:text-lg font-medium max-w-xl">{t("description")}</p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white border border-[#20A98A33] rounded-full size-12 flex items-center justify-center">
              <Image
                src='/icons/mail.svg'
                alt="email"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-1 text-white">
              <p className="text-base md:text-lg font-medium">{t("email")}</p>
              <p className="text-base md:text-lg font-medium">info@flowx-platform.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white border border-[#20A98A33] rounded-full size-12 flex items-center justify-center">
              <Image
                src='/icons/call.svg'
                alt="phone"
                width={24}
                height={24}
              />
            </div>

            <div className="flex flex-col gap-1 text-white">
              <p className="text-base md:text-lg font-medium">{t("phone")}</p>
              <p className="text-base md:text-lg font-medium">+966 11 500 7890</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white border border-[#20A98A33] rounded-full size-12 flex items-center justify-center">
              <Image
                src='/icons/location.svg'
                alt="location"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-1 text-white">
              <p className="text-base md:text-lg font-medium">{t("address")}</p>
              <p className="text-base md:text-lg font-medium">12 Gül Street, Apt. 5, Kadıköy, Istanbul, 34734, Turkey</p>
            </div>
          </div>
        </div>
      </div>

      <ContactUsForm />
    </section>
  );
};