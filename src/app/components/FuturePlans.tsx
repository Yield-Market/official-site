"use client";
import React from 'react';
import { useLanguage } from "../contexts/LanguageContext";

export default function FuturePlans() {
  const { lang } = useLanguage();
  const plans = lang === 'zh'
    ? [
        { title: '多链支持', desc: '将逐步覆盖 Ethereum、Base、Solana、Scroll、Sui 等主流公链。' },
        { title: 'AI+ 赋能', desc: 'AI 辅助市场生成与审核，提升覆盖与效率。' },
        { title: '即时预言机', desc: '探索 ZK 确定性结算，降低延迟与争议。' },
        { title: '私人投注', desc: '隐私与策略保护，支持暗池/做市商等高级功能。' },
      ]
    : [
        { title: 'Multi-chain Support', desc: 'Progressively cover major chains: Ethereum, Base, Solana, Scroll, Sui, etc.' },
        { title: 'AI-assisted', desc: 'AI-generated and verified market templates for coverage and efficiency.' },
        { title: 'Instant Oracle', desc: 'ZK-driven settlement to minimize delays and disputes.' },
        { title: 'Private Betting', desc: 'Privacy-preserving trading and advanced features (dark pools/MMs).' },
      ];

  return (
    <section id="plan" className="bg-white py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{lang === 'zh' ? '未来计划' : 'Future Plans'}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <span className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700 mb-3">{lang === 'zh' ? '即将推出' : 'Coming soon'}</span>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-700 leading-7">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
