'use client';
import Image from 'next/image';

export default function Voice5000() {
  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-4">
            <div className="flex-grow border-t-2 border-black"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-wider">
              USERS VOICE
            </h2>
            <div className="flex-grow border-t-2 border-black"></div>
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
            お客さまの声
          </h3>
        </div>

        {/* Teal Banner with Arrow Shape */}
        <div className="relative mb-12 md:mb-16">
          {/* Banner Rectangle */}
          <div className="bg-[#20b2aa] text-white py-4 md:py-6 px-6 md:px-8">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
              宅トラは、たくさんの方にご好評いただいています!
            </p>
          </div>
          {/* Triangle below the banner */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[30px] border-r-[30px] border-t-[30px] border-transparent border-t-[#20b2aa]" style={{ top: '100%' }}></div>
        </div>

        {/* Five Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 mb-12 md:mb-16">
          {/* Testimonial 1 - Blue Speech Bubble */}
          <div className="flex flex-col items-center relative z-10">
            {/* Default Text - above the speech bubble */}
            <div className="mb-2" style={{ marginTop: '0px' }}>
              <p className="text-xs md:text-sm font-bold text-black text-center">
                \洗濯機も保管OK!/
              </p>
            </div>
            {/* Speech Bubble - positioned above, different height */}
            <div className="relative mb-6" style={{ width: '200px', height: '180px', marginRight: '-30px' }}>
              <Image
                src="/img/Voice5000_Badge_1.png"
                alt="Speech bubble 1"
                fill
                className="object-contain"
                priority
              />
              {/* Text Content */}
              <div className="absolute flex flex-col items-center justify-center px-4" style={{ top: '25%', bottom: '20%', left: '10%', right: '10%' }}>
                <p className="text-[10px] md:text-xs text-white mb-1 text-center leading-tight">
                  洗濯機やベッドまで預かってくれた!
                </p>
                <p className="text-[9px] md:text-[10px] text-white/80 text-center leading-tight">
                  江東区 / 50代女性
                </p>
              </div>
            </div>
            {/* Character */}
            <div className="relative w-32 h-40 md:w-40 md:h-48">
              <Image
                src="/img/Voice5000_Person_1.png"
                alt="Customer testimonial 1"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Testimonial 2 - Pink Speech Bubble */}
          <div className="flex flex-col items-center relative z-20">
            {/* Default Text - above the speech bubble */}
            <div className="mb-2" style={{ marginTop: '20px' }}>
              <p className="text-xs md:text-sm font-bold text-black text-center">
                \ヤマトで全国対応!/
              </p>
            </div>
            {/* Speech Bubble - positioned above, different height */}
            <div className="relative mb-6" style={{ width: '200px', height: '180px', marginLeft: '-30px', marginRight: '-30px' }}>
              <Image
                src="/img/Voice5000_Badge_2.png"
                alt="Speech bubble 2"
                fill
                className="object-contain"
                priority
              />
              {/* Text Content */}
              <div className="absolute flex flex-col items-center justify-center px-4" style={{ top: '25%', bottom: '20%', left: '10%', right: '10%' }}>
                <p className="text-[10px] md:text-xs text-white mb-1 text-center leading-tight">
                  田舎のホテルまで時間指定で届いた!
                </p>
                <p className="text-[9px] md:text-[10px] text-white/80 text-center leading-tight">
                  名古屋市 / 40代女性
                </p>
              </div>
            </div>
            {/* Character */}
            <div className="relative w-32 h-40 md:w-40 md:h-48">
              <Image
                src="/img/Voice5000_Person_2.png"
                alt="Customer testimonial 2"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Testimonial 3 - Yellow Speech Bubble */}
          <div className="flex flex-col items-center relative z-30">
            {/* Default Text - above the speech bubble */}
            <div className="mb-2" style={{ marginTop: '-10px' }}>
              <p className="text-xs md:text-sm font-bold text-black text-center">
                \梱包までしてくれる!/
              </p>
            </div>
            {/* Speech Bubble - positioned above, different height */}
            <div className="relative mb-6" style={{ width: '200px', height: '180px', marginLeft: '-30px', marginRight: '-30px' }}>
              <Image
                src="/img/Voice5000_Badge_3.png"
                alt="Speech bubble 3"
                fill
                className="object-contain"
                priority
              />
              {/* Text Content */}
              <div className="absolute flex flex-col items-center justify-center px-4" style={{ top: '25%', bottom: '20%', left: '10%', right: '10%' }}>
                <p className="text-[10px] md:text-xs text-gray-900 mb-1 text-center leading-tight">
                  引取当日は自分は何もせずに済みました。
                </p>
                <p className="text-[9px] md:text-[10px] text-gray-700 text-center leading-tight">
                  港区 / 30代女性
                </p>
              </div>
            </div>
            {/* Character */}
            <div className="relative w-32 h-40 md:w-40 md:h-48">
              <Image
                src="/img/Voice5000_Person_3.png"
                alt="Customer testimonial 3"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Testimonial 4 - Green Speech Bubble */}
          <div className="flex flex-col items-center relative z-40">
            {/* Default Text - above the speech bubble */}
            <div className="mb-2" style={{ marginTop: '30px' }}>
              <p className="text-xs md:text-sm font-bold text-black text-center">
                \ほしい時に届く!/
              </p>
            </div>
            {/* Speech Bubble - positioned above, different height */}
            <div className="relative mb-6" style={{ width: '200px', height: '180px', marginLeft: '-30px', marginRight: '-30px' }}>
              <Image
                src="/img/Voice5000_Badge_4.png"
                alt="Speech bubble 4"
                fill
                className="object-contain"
                priority
              />
              {/* Text Content */}
              <div className="absolute flex flex-col items-center justify-center px-4" style={{ top: '25%', bottom: '20%', left: '10%', right: '10%' }}>
                <p className="text-[10px] md:text-xs text-white mb-1 text-center leading-tight">
                  急遽必要になった服もすぐに届けてくれた!
                </p>
                <p className="text-[9px] md:text-[10px] text-white/80 text-center leading-tight">
                  横浜市 / 40代男性
                </p>
              </div>
            </div>
            {/* Character */}
            <div className="relative w-32 h-40 md:w-40 md:h-48">
              <Image
                src="/img/Voice5000_Person_4.png"
                alt="Customer testimonial 4"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Testimonial 5 - Magenta Speech Bubble */}
          <div className="flex flex-col items-center relative z-50">
            {/* Default Text - above the speech bubble */}
            <div className="mb-2" style={{ marginTop: '10px' }}>
              <p className="text-xs md:text-sm font-bold text-black text-center">
                \保管料が安い!/
              </p>
            </div>
            {/* Speech Bubble - positioned above, different height */}
            <div className="relative mb-6" style={{ width: '200px', height: '180px', marginLeft: '-30px' }}>
              <Image
                src="/img/Voice5000_Badge_5.png"
                alt="Speech bubble 5"
                fill
                className="object-contain"
                priority
              />
              {/* Text Content */}
              <div className="absolute flex flex-col items-center justify-center px-4" style={{ top: '25%', bottom: '20%', left: '10%', right: '10%' }}>
                <p className="text-[10px] md:text-xs text-white mb-1 text-center leading-tight">
                  他社から宅トラに切替えたら今までの半額になった!
                </p>
                <p className="text-[9px] md:text-[10px] text-white/80 text-center leading-tight">
                  新宿区 / 30代男性
                </p>
              </div>
            </div>
            {/* Character */}
            <div className="relative w-32 h-40 md:w-40 md:h-48">
              <Image
                src="/img/Voice5000_Person_5.png"
                alt="Customer testimonial 5"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

      </div>
      
      {/* Bottom Satisfaction Section - Full Width */}
      <div className="relative w-full">
        {/* Full-width teal overlay from middle of yellow section to bottom */}
        <div className="absolute left-0 right-0 bg-[#20b2aa]" style={{ top: '50%', bottom: 0, zIndex: 0 }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          {/* Yellow section with content */}
          <div className="bg-[#ffd700] rounded-xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className='flex items-center justify-center mb-12 relative z-10'>
              <p className="text-lg md:text-2xl lg:text-3xl text-center font-semibold text-black">
                ぜんぶお任せで、部屋がキレイに片付きました!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative z-10">
              {/* Left Side - Text and Pie Chart */}
              <div className="space-y-6">
                {/* Pie Chart */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                  {/* やや不満 10.7% - upper left corner */}
                  <div className="absolute" style={{ top: '1%', left: "-24%" }}>
                    <p className="text-md md:text-xl font-bold text-black text-center leading-tight">
                      やや不満
                    </p>
                    <p className="text-lg md:text-2xl font-bold text-black text-center leading-tight">
                      10.7%
                    </p>
                  </div>
                  <Image
                    src="/img/Voice5000_PieChart_1.png"
                    alt="Satisfaction pie chart"
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Text Labels */}
                  {/* 満足89.3% (やや満足含む) - in the teal section */}
                  <div className="absolute" style={{ top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <p className="text-lg sm:text-lg md:text-2xl font-bold text-white text-center">
                      満足89.3%
                    </p>
                    <p className=" text-[8px] md:text-sm text-white text-center leading-tight">
                      (やや満足含む)
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Satisfaction Rate Display */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
                  満足度
                </h3>
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-4">
                  89.3%
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  ※自社調べ 2019年6月 (n=150)
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Green section below yellow - full width */}
        <div className="w-full bg-[#20b2aa] h-32 md:h-40 -mt-8 md:-mt-12 lg:-mt-16 relative z-0"></div>
      </div>
    </div>
  );
}

