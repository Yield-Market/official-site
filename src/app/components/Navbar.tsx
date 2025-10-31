"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { lang } = useLanguage();
  const t = {
    capabilities: lang === 'zh' ? '当前能力' : 'Capabilities',
    plans: lang === 'zh' ? '未来计划' : 'Plans',
    contact: lang === 'zh' ? '联系' : 'Contact',
  } as const;
  return (
    <header className="bg-white text-black sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Image src="/official-site/icon.png" alt="Yield Market" width={24} height={24} priority />
            <span className="font-bold text-xl">Yield Market</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="hover:text-gray-600">{t.capabilities}</a>
          <a href="#plan" className="hover:text-gray-600">{t.plans}</a>
          <a href="#contact" className="hover:text-gray-600">{t.contact}</a>
        </nav>
        <div className="ml-4 hidden md:block"><LanguageSwitch /></div>
      </div>
    </header>
  );
};

export default Navbar;
