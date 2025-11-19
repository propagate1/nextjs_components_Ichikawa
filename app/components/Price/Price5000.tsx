'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Price5000() {
  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Title Section */}
        <div className="text-center  flex items-center w-full">
          <div className="flex-grow border-t border-2 border-black"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-gray-900 m-2 tracking-widest">
            PRICE
          </h2>
          <div className="flex-grow border-t border-2 border-black"></div>
        </div>
        <span className=" flex items-center justify-center text-sm md:text-xl lg:text-2xl font-semibold text-gray-800 mb-8 md:mb-12">
          宅トラの利用料金
        </span>

        {/* Teal Banner */}
        <div className="bg-[#20b2aa] text-white py-4 md:py-6 px-6 md:px-8 rounded-lg mb-12 md:mb-16">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
            使い方に合わせた<span className="text-xl md:text-2xl lg:text-3xl italic">宅トラ</span>の商品紹介
          </p>
        </div>

        {/* Four Main Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* ちびトラ3 */}
          <div className="bg-[#ffd700] rounded-xl p-6 md:p-8 shadow-lg">
            <div className="text-center mb-4">
              <div className="text-lg md:text-xl font-bold bg-black text-white rounded-3xl mb-4 p-1">
                ちびトラ3
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                <p className="text-xl my-4">月額保管料</p>
                <p className="text-4xl italic">¥1,628</p>
                <span className="text-lg md:text-xl">(税込)</span>
              </div>
            </div>
            <div className="relative w-full h-32 md:h-40 mb-8">
              <Image
                src="/img/Price5000_Product_1.png"
                alt="3 boxes"
                fill
                className="object-contain"
                priority
              />
              {/* Badge with "3箱" */}
              <div className="absolute top-2 left-2 bg-black text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <span className="text-sm md:text-base font-bold">3箱</span>
              </div>
            </div>
            <div className="text-sm md:text-base font-bold text-gray-800 mb-10">
              <p className=" text-center">ダンボールー箱辺りのサイズ</p>
              <p className=" text-center">幅60cm×奥行き40cm×高さ40cm</p>
              <p className=" text-center">※重さ20kg以内</p>
            </div>
            <button className="w-full bg-emerald-500 text-white py-2 md:py-3 rounded-3xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <span className="text-sm md:text-base">利用例をみる</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* ちびトラ5 */}
          <div className="bg-[#ffd700] rounded-xl p-6 md:p-8 shadow-lg">
            <div className="text-center mb-4">
              <div className="text-lg md:text-xl font-bold bg-black text-white rounded-3xl mb-4 p-1">
                ちびトラ5
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                <p className="text-xl my-4">月額保管料</p>
                <p className="text-4xl italic">¥2,178</p>
                <span className="text-lg md:text-xl">(税込)</span>
              </div>
            </div>
            <div className="relative w-full h-32 md:h-40 mb-8">
              <Image
                src="/img/Price5000_Product_2.png"
                alt="5 boxes"
                fill
                className="object-contain"
                priority
              />
              {/* Badge with "5箱" */}
              <div className="absolute top-2 left-2 bg-black text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <span className="text-sm md:text-base font-bold">5箱</span>
              </div>
            </div>
            <div className="text-sm md:text-base font-bold text-gray-800 mb-10">
              <p className=" text-center">ダンボールー箱辺りのサイズ</p>
              <p className=" text-center">幅60cm×奥行き40cm×高さ40cm</p>
              <p className=" text-center">※重さ20kg以内</p>
            </div>
            <button className="w-full bg-emerald-500 text-white py-2 md:py-3 rounded-3xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <span className="text-sm md:text-base">利用例をみる</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* ミニボックス */}
          <div className="bg-[#ffd700] rounded-xl p-6 md:p-8 shadow-lg">
            <div className="text-center mb-4">
              <div className="text-lg md:text-xl font-bold bg-black text-white rounded-3xl mb-4 p-1">
                ミニボックス
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                <p className="text-xl my-4">月額保管料</p>
                <p className="text-4xl italic">¥5,478</p>
                <span className="text-lg md:text-xl">(税込)</span>
              </div>
            </div>
            <div className="relative w-full h-32 md:h-40 mb-14">
              <Image
                src="/img/Price5000_Product_3.png"
                alt="Mini box storage container"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-sm md:text-base font-bold text-gray-800 mb-10">
              <p className=" text-center">幅104cm×奥行き104cm×高さ130cm</p>
              <p className=" text-center">※ダンボール約24箱収納可</p>
            </div>
            <button className="w-full bg-emerald-500 text-white py-2 md:py-3 rounded-3xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <span className="text-sm md:text-base">利用例をみる</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* レギュラーボックス */}
          <div className="bg-[#ffd700] rounded-xl p-6 md:p-8 shadow-lg">
            <div className="text-center mb-4">
              <div className="text-lg md:text-xl font-bold bg-black text-white rounded-3xl mb-4 p-1">
                レギュラーボックス
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                <p className="text-xl my-4">月額保管料</p>
                <p className="text-4xl italic">¥6,600</p>
                <span className="text-lg md:text-xl">(税込)</span>
              </div>
            </div>
            <div className="relative w-full h-32 md:h-40 mb-14">
              <Image
                src="/img/Price5000_Product_4.png"
                alt="Regular box storage container"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-sm md:text-base font-bold text-gray-800 mb-10">
              <p className=" text-center">幅104cm×奥行き104cm×高さ170cm</p>
              <p className=" text-center">※ダンボール約30箱収納可</p>
            </div>
            <button className="w-full bg-emerald-500 text-white py-2 md:py-3 rounded-3xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <span className="text-sm md:text-base">利用例をみる</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Section - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Cardboard Box Comparison */}
          <div className="  bg-[#20b2aa] rounded-xl p-6 md:p-8 lg:p-10 shadow-lg h-[300px] sm:h-400px md:h-[80%]">
            <div className=" flex flex-row text-center gap-1 items-center justify-center">
              <div className="bg-white text-black italic px-4 py-2 rounded-lg">
                <span className="text-xl md:text-2xl font-bold">CHECK!</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                宅トラは、ダンボールも大容量!
              </h3>
            </div>
            <div className=" relative mt-16 w-full h-full">
              <Image
                src="/img/Price5000_Product_6.png"
                alt="Woman character"
                fill
                className="object-contatin"
                priority
              />
            </div>
          </div>
          
          {/* Right: Large Items */}
          <div className=" relative bg-[#ffd700] rounded-xl p-6 md:p-8 lg:p-10 shadow-lg">
            <div className="text-center mb-6 ">
              <div className="text-lg md:text-xl font-bold bg-black text-white rounded-3xl mx-0 md:mx-30 mb-4 p-1">
                大型荷物
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                <p className="text-xl my-4">月額保管料</p>
                <p className="text-4xl italic">¥2,475~</p>
                <span className="text-lg md:text-xl">(税込)</span>
              </div>
            </div>


            <div className="absolute -left-4 md:-left-12 top-12 w-24 h-24 md:w-40 md:h-40">
              <Image
                src="/img/Price5000_Product_5.png"
                alt="Microwave"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute -right-2 md:right-2 top-12 w-24 h-24 md:w-40 md:h-40">
              <Image
                src="/img/Price5000_Product_7.png"
                alt="Bed"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mx-0 md:mx-20">
              <button className="w-full bg-emerald-500 text-white py-2 md:py-3 rounded-3xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <span className="text-sm md:text-base">利用例をみる</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

