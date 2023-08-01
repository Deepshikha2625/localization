"use client";
import { useRouter } from "next/navigation";
import { getDictionary } from "../../../getDictionary";
import { use } from "react";
export default function getStaticProps({ params }) {
  const lang = getDictionary(params.lang);
  console.log("lang  - params :>> ", lang);
  const router = useRouter();
  console.log("router :>> ", router);
  const handleChange = (value) => {
    // const newPath = router.asPath.replace(/^\/(en|hi)/, "");
    // const newUrl = `/${lang}/${value}`;
    const newUrl = `/${value}`;

    router.push(newUrl, newUrl, { locale: lang === "hi" ? false : lang });
  };

  return (
    <>
      {/* {lang.form.name} */}
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value={"en"}>english</option>
        <option value={"hi"}>Hindi</option>
      </select>
    </>
  );
}
