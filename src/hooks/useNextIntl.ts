import { useTranslations } from "next-intl";

export const useT = (namespace: string) => {
  return useTranslations(namespace);
};
