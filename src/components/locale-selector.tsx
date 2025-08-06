"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const languages = [
  { value: "en", label: "English", flag: "🇺🇸" },
  { value: "ar", label: "العربية", flag: "🇪🇬" },
];

export function LocaleSelector({ className }: { className?: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();

  const handleLangChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(`/${newLocale}`);
    });
  };

  return (
    <Select
      defaultValue={locale}
      onValueChange={handleLangChange}
      dir="rtl"
    >
      <SelectTrigger
        className={cn("w-fit border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0 dark [&>span_svg]:text-muted-foreground/80 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0", className)}
      >
        <SelectValue placeholder="Select language" className="text-white" />
      </SelectTrigger>
      <SelectContent
        className="border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0"
      >
        {languages.map((item) => (
          <SelectItem
            key={item.value}
            value={item.value}
            disabled={isPending}
            className="border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
          >
            <span className="text-lg leading-none">{item.flag}</span>{" "}
            <span className="truncate hidden md:block">{item.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
