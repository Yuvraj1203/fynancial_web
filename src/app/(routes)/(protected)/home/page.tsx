"use client";
import { useTranslations } from "next-intl";
import Switch from "./(components)/Switch";

const Home = () => {
  const t = useTranslations(); // use for translation

  return (
    <div>
      Home
      <Switch />
      <p>{t("second")}</p>
    </div>
  );
};

export default Home;
