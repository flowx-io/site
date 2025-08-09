import Image from "next/image";

import { Button } from "./ui/button";
import Link from "next/link";
import { useT } from "@/hooks/useNextIntl";

export const Footer = () => {
  const t = useT("footer");

  return (
    <footer className="mx-auto px-4 md:px-20">
      <div className="flex flex-col lg:flex-row pb-14">
        <div className="flex-1 flex flex-col w-full">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={160}
            height={100}
            className="pb-4"
          />

          <p className="text-lg font-medium text-black pb-8 lg:pb-6 max-w-[400px]">
            {t("description")}
          </p>

          <Button
            className="rounded-full hidden lg:block w-fit bg-[#138870] hover:bg-[#138870]/90 h-14 border-white text-white"
          >
            <div className="px-8 gap-2 flex items-center justify-center">
              <span className="text-sm font-bold">
                {t("free-trial")}
              </span>
              <Image
                src="/icons/rocket.svg"
                alt="send"
                width={24}
                height={24}
              />
            </div>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* First two columns: Important Links & Support */}
          <div className="flex flex-row gap-8 w-full lg:w-auto">
            <div className="w-1/2 min-w-[11rem] max-w-[11rem] lg:w-44">
              <p className="text-lg font-bold text-black pb-3">{t("important-links.title")}</p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/">{t("important-links.success-stories")}</Link>
                </li>
                <li>
                  <Link href="/">{t("important-links.blog")}</Link>
                </li>
                <li>
                  <Link href="/">{t("important-links.contact-us")}</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 min-w-[11rem] max-w-[11rem] lg:w-44">
              <p className="text-lg font-bold text-black pb-3">{t("support.title")}</p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/">{t("support.help-center")}</Link>
                </li>
                <li>
                  <Link href="/">{t("support.technical-support")}</Link>
                </li>
                <li>
                  <Link href="/">{t("support.privacy-policy")}</Link>
                </li>
                <li>
                  <Link href="/">{t("support.terms-of-use")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-48 flex flex-col gap-3 mt-8 lg:mt-0">
            <p className="text-lg font-bold text-black pb-3">{t("contact.title")}</p>
            <div className="p-3 border border-[#E0E0E0] w-[200px] rounded-[6px]">
              <Image
                src="/icons/customer-support.svg"
                alt="phone"
                width={24}
                height={24}
                className="mb-2"
              />
              <p className="text-sm font-medium pb-1">
                {t("contact.question")}
              </p>
              <a href="tel:+966115007890"
                className="text-[14px] font-semibold"
              >
                {t("contact.phone")}
              </a>
            </div>
            <div className="flex flex-row gap-2">
              <a
                href="/"
                className="size-8 border-2 border-white/60 bg-[linear-gradient(99deg,rgba(255,255,255,0.80)_27.83%,rgba(255,255,255,0.20)_101%)] shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] rounded-full flex justify-center items-center"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="facebook"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="/"
                className="size-8 border-2 border-white/60 bg-[linear-gradient(99deg,rgba(255,255,255,0.80)_27.83%,rgba(255,255,255,0.20)_101%)] shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] rounded-full flex justify-center items-center"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="instagram"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="/"
                className="size-8 border-2 border-white/60 bg-[linear-gradient(99deg,rgba(255,255,255,0.80)_27.83%,rgba(255,255,255,0.20)_101%)] shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] rounded-full flex justify-center items-center"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="/"
                className="size-8 border-2 border-white/60 bg-[linear-gradient(99deg,rgba(255,255,255,0.80)_27.83%,rgba(255,255,255,0.20)_101%)] shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] rounded-full flex justify-center items-center"
              >
                <Image
                  src="/icons/twitter.svg"
                  alt="twitter"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-black text-center py-6">
        {t("copyright")}
      </p>
    </footer>
  );
};