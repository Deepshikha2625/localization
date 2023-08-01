const dictionaries = {
  en: () => import("./dic/en.json").then((r) => r.default),
  hi: () => import("./dic/hi.json").then((r) => r.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
