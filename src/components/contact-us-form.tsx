"use client";

import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { PhoneIcon } from "lucide-react";
import { useState } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export const ContactUsForm = () => {
  const t = useTranslations("contact.form");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ name, email, company, phone, message }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error(error)
    } finally {
      setName("")
      setEmail("")
      setCompany("")
      setPhone("")
      setMessage("")
      setIsLoading(false)
    }
  };

  return (
    <div className="flex flex-1 border-[10px] rounded-2xl border-white/10 overflow-hidden">
      <form
        className="bg-white w-full h-full p-8 flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div>
          <p className="text-2xl font-bold">{t("title")}</p>
          <p className="text-lg font-medium">{t("subtitle")}</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-[6px]">
            <Label
              htmlFor="name"
              className="text-sm font-medium text-black"
            >
              {t("name")}
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder={t("name-placeholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-row gap-5 w-full">
            <div className="flex flex-col gap-[6px] flex-1">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-black"
              >
                {t("email")}
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder={t("email-placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-[6px] flex-1">
              <Label
                htmlFor="company"
                className="text-sm font-medium text-black"
              >
                {t("company")}
              </Label>
              <Input
                type="text"
                id="company"
                name="company"
                placeholder={t("company-placeholder")}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-black"
            >
              {t("phone")}
            </Label>
            <div dir="ltr">
              <RPNInput.default
                className="flex rounded-md shadow-xs w-full"
                international
                flagComponent={FlagComponent}
                countrySelectComponent={CountrySelect}
                inputComponent={PhoneInput}
                id="phone"
                placeholder={t("phone-placeholder")}
                value={phone}
                onChange={(newValue) => setPhone(newValue ?? "")}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <Label
              htmlFor="message"
              className="text-sm font-medium text-black"
            >
              {t("message")}
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t("message-placeholder")}
              className="min-h-[120px]"
              value={message}
              onChange={(e) => {
                if (e.target.value.length <= 150) {
                  setMessage(e.target.value);
                }
              }}
              maxLength={150}
              required
            />
            <p className="text-[#565E73] text-sm text-right">
              {message.length}/150 {t("character-count")}
            </p>
          </div>
        </div>

        <Button
          className="rounded-full bg-[#138870] hover:bg-[#138870]/90 w-full h-14 border-white text-white gap-2 flex items-center"
          disabled={isLoading}
        >
          <span className="text-sm font-bold">
            {t("submit")}
          </span>
          <Image
            src="/icons/rocket.svg"
            alt="send"
            width={24}
            height={24}
          />
        </Button>
      </form>
    </div>
  );
};

const PhoneInput = ({ className, ...props }: React.ComponentProps<"input">) => {
  const lang = useLocale()

  return (
    <Input
      data-slot="phone-input"
      className={cn(
        "-ms-px shadow-none focus-visible:z-10",
        lang === "ar" ? "rounded-e-none" : "rounded-s-none",
      )}
      {...props}
    />
  )
}

PhoneInput.displayName = "PhoneInput"

type CountrySelectProps = {
  disabled?: boolean
  value: RPNInput.Country
  onChange: (value: RPNInput.Country) => void
  options: { label: string; value: RPNInput.Country | undefined }[]
}

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const lang = useLocale()
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country)
  }

  return (
    <div
      className={cn(
        "border-input bg-background text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 hover:bg-accent hover:text-foreground has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 relative inline-flex items-center self-stretch border py-2 ps-3 pe-2 transition-[color,box-shadow] outline-none focus-within:z-10 focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:opacity-50",
        lang === "ar" ? "rounded-s-none" : "rounded-e-none",
      )}
    >
      <select
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0"
        aria-label="Select country"
      >
        <option key="default">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{" "}
              {option.value &&
                `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>

      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-muted-foreground/80">
          <ChevronDownIcon size={16} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <PhoneIcon size={16} aria-hidden="true" />
      )}
    </span>
  );
};
