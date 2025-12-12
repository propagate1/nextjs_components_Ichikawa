'use client';
import Image from 'next/image';

export default function About5005() {
  return (
    <div className="w-full relative py-8 md:py-12 lg:py-16 overflow-hidden min-h-screen font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif]">
      {/* Background with Textured Pattern */}
      <div className="absolute top-0  w-full h-full z-0 bg-[#c39d72] ">
        <div className="relative w-full h-1/7 bg-[url('/img/About5005_Bg_1.png')]"></div>
        <div className="relative w-full h-5/7 ">
          <Image
            src="/img/About5005_Bg_4.png"
            alt="bg"
            fill
            className="object-cover  object-center"
            priority
          />
        </div>
         <div className="relative w-full h-1/7 bg-[url('/img/About5005_Bg_1.png')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Section: Images and Vertical Text */}
        <div className="relative mb-8 md:mb-12 lg:mb-16">
          {/* Desktop Layout: Side by Side */}
          <div className=" flex flex-col md:gap-8">
            {/* up Column: Vertical Text and Food Image */}
            <div className="flex flex-row w-full lg:gap-8">
              {/* Vertical Text */}
              <div className="flex flex-row relative w-2/5 items-start justify-center md:mt-6 md:gap-8 z-10">
                <p className="text-black text-2xl md:text-4xl xl:text-5xl font-bold [writing-mode:vertical-rl] [text-orientation:upright] tracking-widest border-r-2 p-1 mt-8">
                  串焼き<span className=' text-xl md:text-3xl xl:text-4xl'>が愉<span className='text-black md:text-white'>しめ<span className='text-white md:text-black'>る</span></span></span>
                </p>
                <p className="text-black text-2xl md:text-4xl xl:text-5xl font-bold [writing-mode:vertical-rl] [text-orientation:upright] tracking-widest border-r-2 p-1 ">
                  串揚げ<span className=' text-xl md:text-3xl xl:text-4xl'>と</span>
                </p>
              </div>
              {/* Food Close-up Image */}
              <div className="relative w-3/5 md:h-80 lg:h-100 xl:h-140 overflow-hidden ">
                <Image
                  src="/img/About5005_Bg_2.jpg"
                  alt="Kushikatsu and yakitori skewers"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* down Column: Dining Scene Image */}
            <div className="flex flex-col md:flex-row w-full md:items-center md:justify-center md:gap-6 lg:gap-8">
              <div className="relative w-2/3 md:w-1/2 h-50 md:h-80 lg:h-90 xl:h-120 overflow-hidden -top-6 md:-top-42 lg:-top-54 xl:-top-72 z-0">
                <Image
                  src="/img/About5005_Bg_3.jpg"
                  alt="Two women dining at izakaya"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Middle Section: Main Title and Description */}
              <div className=" relative w-full my-6 md:my- md:w-1/2">
                {/* Main Title */}
                <div className=" text-center md:text-left mb-4 md:mb-8 lg:mb-10">
                  <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-10 md:leading-16">
                    <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl '>なかなか</span><br />
                    いい居酒屋
                  </h1>
                </div>

                {/* Body Text */}
                <div className="max-w-4xl mx-auto space-y-4 md:space-y-5 lg:space-y-6">
                  <p className="text-black text-sm md:text-xs lg:text-lg xl:text-xl leading-8">
                    山形市七日町のシネマ通り沿いに店を構える「創食厨房なかなか」は、名物の串揚げや串焼き、もつ鍋など、お酒に合う品を豊富にご用意している居酒屋です。<br className=' hidden md:block' />飲み放題付きのコースもございますので、ご宴会や女子会など各種お集まりにもぜひご利用ください。山形駅から徒歩圏内でお一人様も歓迎しており、地元の地酒やワインも取り揃えているため、出張や観光でのお越しの方もお気軽にぜひ。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Footer Buttons */}
        <div className="relative z-10 flex flex-col items-center justify-center font-bold">
          <div className="relative w-1/3 border-t  border-black/20 py-3 md:py-4">
            <p className="text-black text-base md:text-2xl lg:text-3xl text-center">
              なかなかの
            </p>
          </div>
          <div className="relative w-1/3 border-t border-b border-black/20 py-3 md:py-4">
            <p className="text-black text-base md:text-2xl lg:text-3xl  text-center">
              こだわり
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

