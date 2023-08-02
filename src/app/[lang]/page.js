"use client";
import { useRouter } from "next/navigation";
import { getDictionary } from "../../../getDictionary";
import { use, useEffect, useState } from "react";
export default function Page({ params }) {
  const [lang, setLang] = useState();
  useEffect(() => {
    getDictionary(params.lang).then((lang) => {
      setLang(lang);
    });
  }, [params.lang]);
  const router = useRouter();
  const handleChange = (value) => {
    // const newPath = router.asPath.replace(/^\/(en|hi)/, "");
    // const newUrl = `/${lang}/${value}`;
    const newUrl = `/${value}`;

    router.push(newUrl, newUrl, { locale: lang === "hi" ? false : lang });
  };

  return (
    <>
      <h3>{lang?.form?.name}</h3>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value={"en"}>english</option>
        <option value={"hi"}>Hindi</option>
      </select>
    </>
  );
}
