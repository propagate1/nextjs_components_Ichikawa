'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Product5001() {
  const [selectedCategory, setSelectedCategory] = useState<'main' | 'therapeutic'>('main');

  const mainProducts = [
    {
      id: 1,
      image: '/img/Product5001_Product_1.jpg',
      recommendation: 'はじめての方にオススメ /',
      title: 'チキン&ベジタブル',
      description: '鶏むね肉やささみに新鮮野菜がたっぷりはいった一番人気のごはん。',
      tags: ['総合栄養食', '冷凍', 'プチ', 'レトルト'],
    },
    {
      id: 2,
      image: '/img/Product5001_Product_2.jpg',
      recommendation: '食が細い子にオススメ/',
      title: 'ポーク&ブロッコリー',
      description: '豚もも肉をメインにワンちゃんの好きなブロッコリーを合わせています。',
      tags: ['総合栄養食', '冷凍', 'プチ', 'レトルト'],
    },
    {
      id: 3,
      image: '/img/Product5001_Product_3.jpg',
      recommendation: 'ダイエット中の子にオススメ/',
      title: 'フィッシュ&パンプキン',
      description: '国産すけそうだらとまぐろに、ビタミン豊富なカボチャを。',
      tags: ['総合栄養食', '冷凍', 'プチ', 'レトルト'],
    },
  ];

  const therapeuticProducts = [
    {
      id: 1,
      image: '/img/Product5001_Product_1.jpg',
      recommendation: '腎臓サポート /',
      title: '腎臓ケア チキン&ベジタブル',
      description: '腎臓に配慮した低リン・低タンパクの特別なレシピ。獣医師監修の療法食です。',
      tags: ['療法食', '冷凍', 'プチ', 'レトルト'],
    },
    {
      id: 2,
      image: '/img/Product5001_Product_2.jpg',
      recommendation: '消化器サポート /',
      title: '消化器ケア ポーク&ブロッコリー',
      description: '消化しやすい食材を使用し、胃腸に優しい特別なレシピ。獣医師監修の療法食です。',
      tags: ['療法食', '冷凍', 'プチ', 'レトルト'],
    },
    {
      id: 3,
      image: '/img/Product5001_Product_3.jpg',
      recommendation: 'アレルギー対応 /',
      title: 'アレルギーケア フィッシュ&パンプキン',
      description: '特定のアレルゲンを除去した特別なレシピ。獣医師監修の療法食です。',
      tags: ['療法食', '冷凍', 'プチ', 'レトルト'],
    },
  ];

  const currentProducts = selectedCategory === 'main' ? mainProducts : therapeuticProducts;

  return (
    <div className="w-full relative bg-[#fcf8f4] rounded-tl-lg ">
      {/* Header Section with Dog and Menu Text - Full Width */}
      <div className="relative w-full h-120 md:h-200 rounded-tl-lg">
        {/* Background Image with Dog and Plate - Full Width */}
        <Image
          src="/img/Product5001_Bg_1.png"
          alt="Dog and Plate"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Gradient fade at bottom for natural transition */}
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-[#fcf8f4] pointer-events-none"></div>

        {/* Menu Text - overlaid on background, positioned below the dog */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center w-full z-10">
          <p className="text-lg md:text-xl text-amber-900 font-bold mb-8">Menu</p>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-amber-900 mb-4 tracking-0 md:tracking-[8px]">新鮮な食材を使った</p>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-amber-900 tracking-0 md:tracking-[8px]">
            おいしくて健康的なメニュー
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20 mt-4">

        {/* Navigation/Filter Section */}
        <div className="flex justify-center w-full gap-4 mb-8 md:mb-12">
          {/* Option: 主食(総合栄養食) */}
          <button
            onClick={() => setSelectedCategory('main')}
            className={`flex items-center gap-3 w-full rounded-2xl px-6 py-3 md:px-8 md:py-4 shadow-md transition-all ${
              selectedCategory === 'main'
                ? 'bg-green-500'
                : 'bg-white border-2 border-gray-300 hover:border-green-400'
            }`}
          >
            <div
              className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                selectedCategory === 'main'
                  ? 'bg-white'
                  : 'border-2 border-gray-400'
              }`}
            >
              {selectedCategory === 'main' && (
                <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full"></div>
              )}
            </div>
            <span
              className={`text-sm md:text-base font-semibold whitespace-nowrap ${
                selectedCategory === 'main' ? 'text-white' : 'text-gray-700'
              }`}
            >
              主食(総合栄養食)
            </span>
          </button>

          {/* Option: 療法食 */}
          <button
            onClick={() => setSelectedCategory('therapeutic')}
            className={`flex items-center gap-3 w-full rounded-2xl px-6 py-3 md:px-8 md:py-4 shadow-md transition-all ${
              selectedCategory === 'therapeutic'
                ? 'bg-green-500'
                : 'bg-white border-2 border-gray-300 hover:border-green-400'
            }`}
          >
            <div
              className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                selectedCategory === 'therapeutic'
                  ? 'bg-white'
                  : 'border-2 border-gray-400'
              }`}
            >
              {selectedCategory === 'therapeutic' && (
                <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full"></div>
              )}
            </div>
            <span
              className={`text-sm md:text-base font-semibold whitespace-nowrap ${
                selectedCategory === 'therapeutic' ? 'text-white' : 'text-gray-700'
              }`}
            >
              療法食
            </span>
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="relative w-full h-48 md:h-56 lg:h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority={product.id === 1}
                />
              </div>

              {/* Product Content */}
              <div className="p-4 md:p-6 text-center">
                <p className="text-xs md:text-sm text-amber-900 m-6">{product.recommendation}</p>
                <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-3">{product.title}</h3>
                <p className="text-sm md:text-base text-amber-900 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex-grow border-t-2 border-amber-900"></div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 m-4 items-center justify-center">
                  {product.tags.map((tag, index) => {
                    if (tag === '総合栄養食' || tag === '療法食') {
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <p className="text-xs md:text-sm text-amber-900">{tag}</p>
                          <p className="text-xs md:text-sm text-amber-900">|</p>
                        </div>
                      );
                    }
                    const tagColors: Record<string, string> = {
                      冷凍: 'bg-green-500',
                      プチ: 'bg-orange-500',
                      レトルト: 'bg-red-600',
                    };
                    return (
                      <span
                        key={index}
                        className={`px-3 py-1 ${tagColors[tag] || 'bg-gray-500'} text-white text-xs font-semibold rounded`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div className="flex-grow border-t-2 border-amber-900"></div>

                {/* View Details Link */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 text-amber-900 hover:text-orange-700 font-semibold text-sm md:text-base m-4"
                >
                  <span>詳細を見る</span>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors flex-shrink-0 border-2 border-amber-900 hover:border-amber-800">
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-amber-900 hover:text-white" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

