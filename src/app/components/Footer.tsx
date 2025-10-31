"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();
  const t = {
    nav: lang === 'zh' ? '导航' : 'Navigation',
    capabilities: lang === 'zh' ? '当前能力' : 'Capabilities',
    plans: lang === 'zh' ? '未来计划' : 'Plans',
    contact: lang === 'zh' ? '联系方式' : 'Contact',
    support: lang === 'zh' ? '支持' : 'Support',
    tagline: lang === 'zh' ? '下一代预测市场' : 'The Next-Generation Prediction Market',
    github: 'GitHub',
    twitter: 'Twitter',
    telegram: 'Telegram',
    email: 'Email',
  } as const;
  return (
    <footer id="site-footer" className="bg-white text-black py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-2">Yield Market</h3>
            <p className="text-gray-600">{t.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.nav}</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#features" className="hover:text-black">{t.capabilities}</Link></li>
              <li><Link href="#plan" className="hover:text-black">{t.plans}</Link></li>
              <li><Link href="#contact" className="hover:text-black">{t.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.support}</h4>
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@yieldmarket.org"
                aria-label="Email"
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                title={t.email}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
                  <path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </a>
              <a
                href="https://github.com/Yield-Market"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                title={t.github}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
                  <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.287-.011-1.243-.017-2.254-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.004 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .321.216.697.825.579C20.565 22.093 24 17.6 24 12.297 24 5.67 18.627.297 12 .297z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/YieldMarketDefi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter @YieldMarketDefi"
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                title={t.twitter}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.608 1.794-1.57 2.163-2.723-.949.564-2.003.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.932 2.206-4.932 4.93 0 .39.044.765.127 1.124-4.094-.205-7.725-2.165-10.158-5.144-.424.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.19 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.402 4.768 2.222 7.557 2.222 9.054 0 14.002-7.496 14.002-13.985 0-.21 0-.42-.016-.63.961-.695 1.8-1.562 2.46-2.549z"/>
                </svg>
              </a>
              <a
                href="https://t.me/+CduPROJk20NhMTFk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                title={t.telegram}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
                  <path d="M9.036 15.803l-.375 5.29c.535 0 .767-.229 1.044-.504l2.502-2.4 5.186 3.806c.951.525 1.63.25 1.893-.88l3.431-16.053.001-.001c.305-1.422-.514-1.977-1.44-1.63L1.404 9.5c-1.39.54-1.369 1.314-.236 1.667l5.27 1.644L19.49 6.857c.612-.373 1.17-.166.711.206"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
