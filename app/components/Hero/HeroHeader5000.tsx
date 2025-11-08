import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function HeroHeader5000() {
  return (
    <header className="w-full bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6">
        <div className="max-w-4xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left Section: Logo and Company Info */}
            <div className="flex items-center gap-3 lg:gap-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/img/HeroHeader5000_Logo_1.jpg"
                  alt="Fortune Partners Logo"
                  width={64}
                  height={64}
                  className="w-12 h-12 lg:w-16 lg:h-16"
                  priority
                />
              </div>
              
              {/* Company Info */}
              <div className="flex flex-col items-center">
                <span className="text-xs sm:text-sm text-gray-700 leading-tight">
                  再生支援ファクタリングサービス
                </span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight mt-0.5">
                  フォーチュンパートナーズ
                </span>
              </div>
            </div>

            {/* Right Section: Phone Info */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Phone Number */}
              <a
                href="tel:03-5647-7360"
                className="flex items-center gap-2 lg:gap-3 group"
              >
                <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-orange-400 flex-shrink-0 scale-y-170" />
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400 group-hover:text-orange-600 transition-colors scale-y-170">
                  03-5647-7360
                </span>
              </a>
              
              {/* Operating Hours */}
              <div className="flex flex-col ml-2 lg:ml-3 items-center">
                <span className="text-xs sm:text-sm lg:text-xl text-gray-700 leading-tight">
                  9:00~18:00
                </span>
                <span className="text-xs sm:text-sm lg:text-sm text-gray-600 leading-tight">
                  (日曜日を除く)
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-4">
            {/* Top Row: Logo and Company Info */}
            <div className="flex items-center gap-3 m-auto">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/img/HeroHeader5000_Logo_1.jpg"
                  alt="Fortune Partners Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                  priority
                />
              </div>
              
              {/* Company Info */}
              <div className="flex flex-col flex-1 min-w-0 items-center">
                <span className="text-xs text-gray-700 leading-tight">
                  再生支援ファクタリングサービス
                </span>
                <span className="text-xl font-bold text-gray-800 leading-tight mt-0.5">
                  フォーチュンパートナーズ
                </span>
              </div>
            </div>

            <hr className="border-t-1 border-gray-100 w-full"/>
            
            {/* Bottom Row: Phone Info */}
            <div className="flex items-center gap-3 m-auto">
              {/* Phone Number */}
              <a
                href="tel:03-5647-7360"
                className="flex items-center gap-3 m-auto"
              >
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0 scale-y-150" />
                <span className=" text-2xl font-bold text-orange-400 group-hover:text-orange-600 transition-colors scale-y-150">
                  03-5647-7360
                </span>
              </a>
              
              {/* Operating Hours */}
              <div className="flex flex-col flex-1 min-w-0 items-center">
                <span className="text-xs text-gray-700 leading-tight whitespace-nowrap">
                  9:00 ~ 18:00
                </span>
                <span className="text-xs text-gray-600 leading-tight whitespace-nowrap">
                  (日曜日を除く)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

