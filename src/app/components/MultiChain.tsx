import React from 'react';

export default function MultiChain() {
  const chains = ['Ethereum','BSC','Polygon','Base','Solana','Scroll','Sui','Hyperliquid'];
  return (
    <section id="multichain" className="bg-white py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">多链支持</h2>
        <p className="text-gray-700 mb-6">涵盖 Ethereum、BSC、Polygon、Base、Solana、Scroll、Sui、Hyperliquid 等多条公链。</p>
        <div className="flex flex-wrap gap-3">
          {chains.map((c) => (
            <span key={c} className="px-3 py-1 rounded-full border border-gray-200 text-sm">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
