'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Product5000() {
  return (
    <div className="w-full bg-gray-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-800">
            その他の商品ラインナップ
          </h2>
        </div>

        {/* Product Cards Grid - 3 in first row, 2 in second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* First Row - 3 cards */}
          {/* Product Card 1 */}
          <div className=" bg-orange-100 rounded-xl p-4 md:p-6 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
              <Image
                src="/img/Product5000_Product_1.png"
                alt="Product 1"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base font-semibold text-black hover:text-amber-800">
                本州鹿の手作り鹿皮ガム
              </p>
            </div>
            <button className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors flex-shrink-0 border-2 border-black hover:border-amber-800">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-white" />
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-orange-100 rounded-xl p-4 md:p-6 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
              <Image
                src="/img/Product5000_Product_2.png"
                alt="Product 2"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base font-semibold text-black hover:text-amber-800">
                国産フリーズドライ納豆
              </p>
            </div>
            <button className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors flex-shrink-0 border-2 border-black hover:border-amber-800">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-white" />
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-orange-100 rounded-xl p-4 md:p-6 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
              <Image
                src="/img/Product5000_Product_3.png"
                alt="Product 3"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base font-semibold text-black hover:text-amber-800">
                国産野菜のフリーズドライ
              </p>
            </div>
            <button className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors flex-shrink-0 border-2 border-black hover:border-amber-800">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-white" />
            </button>
          </div>

          {/* Second Row - 2 cards, centered */}
          {/* Product Card 4 */}
          <div className="bg-orange-100 rounded-xl p-4 md:p-6 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow sm:col-span-1 lg:col-start-1">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
              <Image
                src="/img/Product5000_Product_4.png"
                alt="Product 4"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base font-semibold text-black hover:text-amber-800">
                ビーフ&スイートポテト
              </p>
            </div>
            <button className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors flex-shrink-0 border-2 border-black hover:border-amber-800">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-white" />
            </button>
          </div>

          {/* Product Card 5 */}
          <div className="bg-orange-100 rounded-xl p-4 md:p-6 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow sm:col-span-1 lg:col-start-2">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
              <Image
                src="/img/Product5000_Product_5.png"
                alt="Product 5"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex-1 text-sm md:text-base font-semibold text-black hover:text-amber-800">
              <p>
                ココグルメ
              </p>
              <p>
                Xmas BOX 2025
              </p>
            </div>
            <button className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors flex-shrink-0 border-2 border-black hover:border-amber-800">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-white" />
            </button>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <button className="px-8 md:px-12 py-3 md:py-4 rounded-full border-2 border-[#8b4513] bg-transparent text-amber-800 font-semibold text-base md:text-lg hover:bg-[#8b4513] hover:text-white transition-colors">
            全てのラインナップはこちら
          </button>
        </div>
      </div>
    </div>
  );
}

