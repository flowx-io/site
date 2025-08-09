import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { getTranslations } from "next-intl/server";

import { Button } from "./ui/button";
import { LocaleSelector } from "./locale-selector";
import { cn } from "@/lib/utils";

export const Header = async () => {
  const t = await getTranslations("header");
  const links = [
    {
      label: t("home"),
      href: "/",
    },
    {
      label: t("services"),
      href: "#features",
    },
    {
      label: t("solutions"),
      href: "#solutions",
    },
    {
      label: t("contact"),
      href: "#contact",
    },
  ];

  return (
    <header className="container mx-auto pt-8">
      <div className="py-3 px-4 flex justify-between items-center rounded-full bg-[rgba(248,248,248,0.19)] backdrop-blur-[2px] border border-[#EDEDF1]">
        <div className="flex items-center justify-between gap-4 px-3">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            className="hidden md:block"
            width={100}
            height={24}
          />
          <Image
            src="/assets/icon.svg"
            alt="Logo"
            className="block md:hidden px-3"
            width={32}
            height={32}
          />
        </div>

        <LocaleSelector className="flex md:hidden" />

        <div className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={link.label}
              className={cn("text-[#191615]", i === 0 && "font-bold")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <LocaleSelector className="hidden md:flex" />
          <Link href="/">
            <Button className="rounded-full bg-[#0F6D5C] h-12 px-1 border-white text-white hover:bg-[#0F6D5C]/90 gap-2 flex items-center">
              <p className="flex items-center gap-2 px-3">
                <span className="font-bold">{t("start-now")}</span>
                <GoArrowUpRight className="size-5" />
              </p>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};