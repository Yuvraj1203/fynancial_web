"use client";
import { CustomButton } from "@/components/custom";
import { setLocale } from "@/utils/cookies";
import { useRouter } from "next/navigation";

export default function LangSwitcher() {
  const router = useRouter();

  const switchLang = async (lang: string) => {
    await setLocale(lang); // note 'locale', not 'NEXT_LOCALE'
    router.refresh();
  };

  return (
    <div>
      <CustomButton onClick={() => switchLang("en")}>English</CustomButton>
      <CustomButton onClick={() => switchLang("hi")}>Hindi</CustomButton>
    </div>
  );
}
