"use client";

import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useLocale } from "next-intl";

import { Button } from "./ui/button";
import { LocaleSelector } from "./locale-selector";
import { useT } from "@/hooks/useNextIntl";

export const Header = () => {
  const t = useT("header");
  const locale = useLocale();
  const isEnglish = locale === "en";

  const links = [
    {
      label: t("home"),
      href: "/",
    },
    {
      label: t("about"),
      href: "#about-us",
    },
    {
      label: t("services"),
      href: "#our-services",
    },
    {
      label: t("contact"),
      href: "#contact",
    },
  ];

  return (
    <header className="container mx-auto pt-8">
      <div className="py-3 px-4 flex justify-between items-center bg-[#191615] rounded-full">
        {/* Left side - Logo for English, Start Now button for Arabic */}
        <div className="flex items-center justify-between gap-4">
          {isEnglish ? (
            <>
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
                className="block md:hidden"
                width={32}
                height={32}
              />
            </>
          ) : (
            <>
              <Link href="/">
                <Button className="rounded-full bg-white border-white text-[#191615] hover:bg-white/90 gap-2 flex items-center">
                  <GoArrowUpRight className="size-5" />
                  <span className="font-bold">{t("start-now")}</span>
                </Button>
              </Link>
              <LocaleSelector className="hidden md:flex" />
            </>
          )}
        </div>

        {/* Center - Mobile Locale Selector */}
        <LocaleSelector className="flex md:hidden" />

        {/* Center/Right Navigation - Desktop only */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side - Start Now button for English, Logo for Arabic */}
        <div className="flex items-center justify-between gap-4">
          {isEnglish ? (
            <>
              <LocaleSelector className="hidden md:flex" />
              <Link href="/">
                <Button className="rounded-full bg-white border-white text-[#191615] hover:bg-white/90 gap-2 flex items-center">
                  <GoArrowUpRight className="size-5" />
                  <span className="font-bold">{t("start-now")}</span>
                </Button>
              </Link>
            </>
          ) : (
            <>
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
                className="block md:hidden"
                width={32}
                height={32}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};