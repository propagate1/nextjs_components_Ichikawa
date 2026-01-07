'use client';
import Image from 'next/image';

export default function About5004() {
  return (
    <div className=" relative bg-amber-600  overflow-hidden min-h-screen ">
      <div className="absolute top-20  w-full h-full z-0 ">
        <div className="relative w-full h-full">
          <Image
            src="/img/About5004_Bg_4.png"
            alt="bg"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative py-8 md:py-12 lg:py-16">

        {/* Top Orange Section */}
        <div className="relative w-full py-4 md:py-16 lg:py-20 overflow-hidden">
          {/* Main Slogan */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-20 md:mt-2 relative z-10">
            <div className="text-center text-3xl md:text-4xl lg:text-5xl text-amber-600 font-bold mb-8 md:mb-12 leading-12 md:leading-16 lg:leading-20  tracking-wide md:tracking-widest">
              <p >
                「今知りたい」を、
              </p>
              <p>
                すぐにサポート
              </p>
            </div>
            {/* Service Description */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16 font-bold">
              <p className="text-black text-base md:text-lg lg:text-xl xl:text-2xl mb-4 ">
                クイックティーチャーは、
              </p>
              <p className="text-black text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 ">
                <span className="border-b-yellow-300 border-b-6 px-2 py-1 ">
                  24時間365日・全教科全科目の
                </span>
              </p>
              <p className="text-black text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 leading-10 md:leading-0 ">
                <span className="border-b-yellow-300 border-b-6 px-2 py-1 ">
                  学習サポートが受けられるサービス</span>
                <span className='text-md md:text-lg lg:text-xl xl:text-2xl '>です!</span>
              </p>
              <p className="text-black text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-3 flex flex-col leading-8 md:leading-10">
                解説してほしい問題を<br />
                <span>スマートフォンやタブレットから送ると、</span>
                <span>認定講師が徹底サポートします!</span>
              </p>
            </div>
          </div>
        </div>

        {/* image */}
        <div className=' hidden md:block'>
          {/* bg-left */}
          <div className=" absolute top-20 md:-left-30 lg:-left-25 w-full h-full inset-0">
            {/* Main Background Image */}
            <div className="relative w-full md:h-120 lg:h-150 overflow-hidden">
              <Image
                src="/img/About5004_Bg_1.png"
                alt="Students and instructors using Quick Teacher"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* bg-right */}
          <div className=" absolute top-20 md:left-30 lg:left-20 w-full h-full inset-0">
            {/* Main Background Image */}
            <div className="relative w-full md:h-120 lg:h-150 overflow-hidden">
              <Image
                src="/img/About5004_Bg_2.png"
                alt="Students and instructors using Quick Teacher"
                fill
                className="object-contain object-right "
                priority
              />
            </div>
          </div>

          {/* Icon 1 - Top Left Area */}
          <div className="absolute md:top-80 lg:top-100 left-6 w-28 h-28">
            <Image
              src="/img/About5004_Icon_1.png"
              alt="Educational icon"
              fill
              className="object-contain object-center animate-bounce [animation-duration:6s] [animation-timing-function:ease-in-out]"
            />
          </div>

          {/* Icon 2 - Top Right Area */}
          <div className="absolute top-20 right-[20%] w-20 h-20">
            <Image
              src="/img/About5004_Icon_2.png"
              alt="Educational icon"
              fill
              className="object-contain object-right animate-bounce [animation-duration:6s] [animation-timing-function:ease-in-out]"
            />
          </div>

          {/* Icon 3 - Bottom Area */}
          <div className="absolute bottom-30 right-[20%] w-20 h-20">
            <Image
              src="/img/About5004_Icon_3.png"
              alt="Educational icon"
              fill
              className="object-contain object-bottom animate-bounce [animation-duration:6s] [animation-timing-function:ease-in-out]"
            />
          </div>
        </div>

        {/* sp-image */}
        <div className=" block md:hidden relative w-full h-40">
          <Image
            src="/img/About5004_Bg_3.png"
            alt="今知りたいを、すぐにサポート"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    </div>
  );
}

