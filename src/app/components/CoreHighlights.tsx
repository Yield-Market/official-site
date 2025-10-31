"use client";
import React from 'react';
import { useLanguage } from "../contexts/LanguageContext";

export default function CoreHighlights() {
  const { lang } = useLanguage();
  const items = lang === 'zh'
    ? [
        { title: '高收益', desc: '存款获得利息 + 空投，闲置资金不浪费；投注期间资金持续增值。' },
        { title: 'Polygon 支持', desc: '当前版本运行在 Polygon 主网。' },
      ]
    : [
        { title: 'High Yield', desc: 'Earn interest and potential airdrops while your funds are staked during predictions.' },
        { title: 'Polygon Only', desc: 'Current live network: Polygon mainnet.' },
      ];

  return (
    <section id="features" className="bg-white py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{lang === 'zh' ? '当前能力' : 'Current Capabilities'}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((d) => (
            <div key={d.title} className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
              <p className="text-gray-700 leading-7">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
