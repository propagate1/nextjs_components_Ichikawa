'use client';
import Image from 'next/image';
import { Phone, ChevronRight } from 'lucide-react';

export default function Hero5006() {
  return (
    <div className="w-full relative overflow-hidden min-h-screen">
      <div className='  h-screen flex flex-col'>
        <div className=" h-[70%] z-30 relative flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full">
              <div className="absolute left-0 top-0 w-full h-full opacity-80">
                <Image
                  src="/img/Hero5006_Bg_1.png"
                  alt="Background"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
          
          <div className=" w-xl xl:w-2xl relative">
            <div className="absolute -left-0 md:-left-20 lg:-left-24 -top-28 md:-top-14 z-30">
              <div className="relative flex flex-col items-center justify-center mt-6 w-32 h-32 md:w-48 md:h-48 xl:w-56 xl:h-56">
                <Image
                  src="/img/Hero5006_Badge_1.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-2" >
                  <div className="relative  text-amber-900 font-bold z-10 w-full h-full flex flex-col items-center justify-center text-center">
                    <p className="   text-[12px] md:text-base lg:text-lg xl:text-xl px-4">ご利用実績</p>
                    <div className=' border-t-2 border-amber-900 border-solid w-2/4'></div>
                    <p className="  text-sm md:text-2xl lg:text-3xl xl:text-4xl">
                      1,000
                      <span className='text-[12px] md:text-base lg:text-lg xl:text-xl'>件</span>
                    </p>
                    <p className=" text-[12px] md:text-base lg:text-lg xl:text-xl">以上</p>
                  </div>
                </div>
              </div>
            </div>

            {/* sp 3 badges here */}
            <div className='block md:hidden absolute -bottom-20 left-2 z-50'>
            <div className='flex flex-row items-center justify-center gap-2'>
              {/* 左のバッジ */}
              <div className="relative flex flex-col items-center justify-center w-24 h-24">
                <Image
                  src="/img/Hero5006_Icon_1.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1">
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                    <span className="text-white rounded-full bg-yellow-600 font-bold text-[10px] md:text-xl px-2 lg:px-4">専門の</span><br />
                    <span className="text-yellow-600 font-bold text-lg md:text-3xl xl:text-3xl -mt-5">2.5<span className=" text-[12px] md:text-lg xl:text-xl">万円/㎡</span></span>
                  </div>
                </div>
              </div>

              {/* 中央のバッジ */}

              <div className="relative flex flex-col items-center justify-center w-24 h-24">
                <Image
                  src="/img/Hero5006_Icon_2.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-4">
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                    <span className="text-white rounded-full bg-yellow-600 font-bold text-[10px] md:text-xl px-2">家賃平均</span><br />
                    <span className="text-yellow-600 font-bold text-xl md:text-3xl lg:text-3xl -mt-5">9<span className=" text-[12px] md:text-xl">%</span><span className="text-yellow-600 font-bold text-xl md:text-3xl lg:text-3xl -mt-5">UP</span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              {/* 右のバッジ */}

              <div className="relative flex flex-col items-center justify-center w-24 h-24">
                <Image
                  src="/img/Hero5006_Icon_3.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1">
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                    <span className="text-white rounded-full bg-yellow-600 font-bold text-[8px] md:text-xl px-1 -tracking-widest">リピート率</span><br />
                    <span className="text-yellow-600 font-bold text-xl md:text-3xl lg:text-3xl -mt-5">85<span className=" text-[12px] md:text-lg">%以上</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="relative -top-20 md:top-0 md:-left-12 lg:-left-16 bg-white shadow-2xl py-6 px-6 md:px-12 md:py-20 w-full flex flex-col justify-center items-center [clip-path:polygon(50%_4%,100%_35%,96%_39%,92%_39%,92%_97%,8%_97%,8%_39%,4%_39%,0%_35%,50%_4%)] lg:[clip-path:polygon(50%_4%,100%_35%,98%_39%,95%_39%,95%_97%,5%_97%,5%_39%,2%_39%,0%_35%,50%_4%)]">
              <div className="relative flex items-center justify-center text-[12px] md:text-base lg:text-lg  font-bold bg-green-800 rounded-full mt-16 md:mt-8 mb-2 py-2 px-2 md:px-6">
                <span className=" text-amber-200 flex items-baseline">
                  空室にお悩みのオーナー様
                </span>
                <span className="text-white">必見!</span>
                <div className="absolute left-1/2 transform -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[20px] border-transparent border-t-green-800 top-[90%]"></div>
              </div>
              <div className='text-green-800 text-2xl md:text-4xl xl:text-5xl font-extrabold py-4 md:py-6'>
                <span>
                  “住みたい賃貸物件”<span className=" text-black text-base md:text-2xl xl:text-3xl">作りで</span>
                </span>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 mb-4">
                <div className=" bg-white text-gray-800 shadow-lg shadow-gray-400 px-1 py-2 md:px-4  rounded-md">
                  <span className="text-2xl md:text-4xl xl:text-5xl font-extrabold">
                    空室解消
                  </span>
                </div>
                <span className="text-gray-800 text-lg lg:text-xl font-semibold">
                  を
                </span>
                <div className=" bg-white text-gray-800 shadow-lg shadow-gray-400 px-1 py-2 md:px-4  rounded-md">
                  <span className="text-2xl md:text-4xl xl:text-5xl font-bold">
                    サポート
                  </span>
                </div>

              </div>
              <div className=' border-t-4 border-green-800 border-dotted w-3/4 mb-4 md:mb-6'>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-green-800 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 md:mb-1">
                  イエスリノベーション
                </span>
              </div>
            </div>

            {/* 右中のバッジ */}
            <div
              className="absolute -bottom-[32%] md:-bottom-[26%] -right-[2%] md:-right-20 z-0 w-40 h-60 md:w-64 xl:w-70 md:h-full overflow-hidden">
              <Image
                src="/img/Hero5006_Woman_1.png"
                alt="Background Left"
                fill
                className=" object-contain object-center"
                priority
              />
            </div>

            {/* 左のバッジ */}
            <div
              className=" hidden md:block absolute md:translate-x-1/5 left-0 -bottom-[54px] xl:-bottom-[70px] z-50"
            >
              <div className="relative flex flex-col items-center justify-center w-32 h-32 xl:w-36 xl:h-36">
                <Image
                  src="/img/Hero5006_Icon_1.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1">
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                    <span className="text-white rounded-full bg-yellow-600 font-bold text-[10px] md:text-xl px-2 lg:px-4">専門の</span><br />
                    <span className="text-yellow-600 font-bold text-lg md:text-3xl xl:text-3xl -mt-5">2.5<span className=" text-[12px] md:text-lg xl:text-xl">万円/㎡</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* 中央のバッジ */}
            <div
              className=" hidden md:block absolute -bottom-[54px] xl:-bottom-[70px] left-1/3 -translate-x-1/12 z-50"
            >
              <div className="relative flex flex-col items-center justify-center w-32 h-32 xl:w-36 xl:h-36">
                <Image
                  src="/img/Hero5006_Icon_2.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-4">
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                    <span className="text-white rounded-full bg-yellow-600 font-bold text-[10px] md:text-xl px-2">家賃平均</span><br />
                    <span className="text-yellow-600 font-bold text-xl md:text-3xl lg:text-3xl -mt-5">9<span className=" text-[12px] md:text-xl">%</span><span className="text-yellow-600 font-bold text-xl md:text-3xl lg:text-3xl -mt-5">UP</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* 右のバッジ */}
            <div
              className="  hidden md:block absolute right-30 xl:-translate-x-1/7 -bottom-[54px] xl:-bottom-[70px] z-50"
            >
              <div className="relative flex flex-col items-center justify-center w-32 h-32 xl:w-36 xl:h-36">
                <Image
                  src="/img/Hero5006_Icon_3.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1">
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                    <span className="text-white rounded-full bg-yellow-600 font-bold text-[8px] md:text-xl px-1 -tracking-widest">リピート率</span><br />
                    <span className="text-yellow-600 font-bold text-xl md:text-3xl lg:text-3xl -mt-5">85<span className=" text-[12px] md:text-lg">%以上</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[30%] bg-white z-10">
          <div className=' w-full h-full flex items-center justify-center'>
            <div className=' flex flex-col items-center justify-center mx-auto mt-6'>
              <button className="bg-yellow-500  text-white px-4 md:px-12 lg:px-16 py-6  rounded-full text-md md:text-xl lg:text-2xl font-bold hover:bg-yellow-700 transition-all shadow-lg flex items-center gap-3 m-auto">お見積り・お問い合わせはこちら<ChevronRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              </button>
              <div className='flex flex-row items-center justify-center gap-2 mt-4 border-amber-400 border-2 rounded-full p-2'>
                <Phone className="w-4 h-4 md:w-6 md:h-6 text-amber-400" />
                <a
                  href="tel:0120-868-986"
                  className="text-md md:text-2xl lg:text-3xl font-bold text-yellow-500 hover:text-orange-600 transition-colors"
                >
                  03-5843-1144<span className=' text-[10px] md:text-lg lg:text-xl text-black'>(平日/9:00~18:00)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
}

