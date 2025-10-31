"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { lang } = useLanguage();
  const subtitle = lang === 'zh'
    ? '下一代预测市场 · ETHShanghai 一等奖'
    : 'The Next-Generation Prediction Market · ETHShanghai 1st Prize';
  const ctaPrimary = lang === 'zh' ? '开始体验' : 'Get Started';
  return (
    <section className="relative bg-white text-center py-24 md:py-36">
      <div
        className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-transparent to-pink-100 opacity-40"
        style={{ filter: 'blur(80px)' }}
      ></div>
      <div className="container mx-auto relative">
        <div className="flex justify-center mb-6">
          <Image
            src="/official-site/icon.png"
            alt="Yield Market"
            width={288}
            height={288}
            className="w-48 md:w-64 lg:w-72 h-auto"
            priority
          />
        </div>
        <p className="text-gray-600 mb-2">{subtitle}</p>
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-8">Yield Market</h1>
        <div className="flex justify-center space-x-4">
          <a href="https://yieldmarket.org" className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors">
            {ctaPrimary}
          </a>
          <a href="https://github.com/Yield-Market" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold py-3 px-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
