"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitch() {
  const { lang, setLang, toggle } = useLanguage();
  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1">
      <button
        aria-label="切换到中文"
        onClick={() => setLang("zh")}
        className={`px-2 py-1 text-sm rounded-md ${lang === "zh" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}`}
      >
        中
      </button>
      <button
        aria-label="Switch to English"
        onClick={() => setLang("en")}
        className={`px-2 py-1 text-sm rounded-md ${lang === "en" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}`}
      >
        EN
      </button>
    </div>
  );
}
