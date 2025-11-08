'use client';

import { Phone, Play } from 'lucide-react';

export default function Hero5001() {
  return (
    <section className="w-full bg-green-600 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Phone Consultation Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            {/* Yellow Banner */}
            <div className="relative w-full md:w-auto">
              <div className="relative bg-yellow-400 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-l-lg md:rounded-l-xl overflow-visible">
                {/* Arrow shape on the right */}
                <div className="hidden md:block absolute -right-6 top-0 bottom-0 w-6">
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-0 h-0 border-t-[30px] border-t-transparent border-l-[24px] border-l-yellow-400 border-b-[30px] border-b-transparent"></div>
                </div>
                
                <div className="flex flex-col relative z-10">
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg text-green-700 font-medium leading-tight mb-1">
                    再生支援ファクタリングサービス
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-700 font-bold leading-tight">
                    お電話でのご相談はこちら
                  </span>
                </div>
              </div>
            </div>

            {/* Phone Number and Hours */}
            <div className="flex flex-col md:flex-col items-center gap-3 sm:gap-4 md:gap-6">
              {/* Phone Icon and Number */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400 flex-shrink-0" />
                <a
                  href="tel:03-5647-7360"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  03-5647-7360
                </a>
              </div>

              {/* Reception Hours */}
              <div className="text-center md:text-left">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-green-100 leading-tight">
                  受付時間 9:00~18:00(日曜日を除く)
                </span>
              </div>
            </div>
          </div>

          {/* Inquiry Button */}
          <div className="flex justify-center">
            <button className="relative w-full sm:w-auto px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 lg:py-7 bg-gradient-to-r from-green-500 to-green-700 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              {/* Subtle white highlight on top and left */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
              
              <div className="relative flex items-center justify-center gap-3 sm:gap-4">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                  お問合わせはこちら
                </span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white ml-0.5" fill="white" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

