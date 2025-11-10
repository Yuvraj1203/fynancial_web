"use client";
import { Text } from "@/components/common";
import { useTranslations } from "next-intl";
import Switch from "./(components)/Switch";

const Home = () => {
  const t = useTranslations(); // use for translation

  return (
    <div className="bg-on-error ">
      <Text>
        {`Home this is our`}
        <Text as="span" className="text-primary">
          {` ${t("beautiful")} `}
        </Text>
        {`home`}
      </Text>
      <Switch />
      <p>{t("second")}</p>
    </div>
  );
};

export default Home;
