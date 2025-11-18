'use client';
import Image from 'next/image';
import { Phone, Mail, ChevronDown } from 'lucide-react';

export default function Header5005() {
  const navItems = [
    '選ばれる理由',
    'ミライルのポリシー',
    '作業実績',
    'お客様の声',
    '料金のご案内',
    'ご依頼の流れ',
  ];

  return (
    <header className="w-full bg-white">
      {/* Top Row */}
      <div className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Left Section - Logo and Promotional Bubbles */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/img/Hero5005_Logo_1.png"
                  alt="Fortune Partners Logo"
                  width={72}
                  height={64}
                  className="w-12 h-12 lg:w-16 lg:h-16"
                  priority
                />
              </div>

              {/* Promotional Bubbles */}
              <div className="flex flex-row gap-1 md:gap-2">
                {/* Yellow Bubble */}
                <div className="bg-yellow-400 flex items-center justify-center text-black px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
                  お見積り 無料!
                </div>
                {/* Cancellation Text */}
                <div className="hidden lg:block flex-col">
                  <p className="text-xs md:text-sm text-black">ご相談後の</p>
                  <p className="text-sm md:text-base lg:text-lg font-bold text-green-600">キャンセルもOK</p>
                </div>
              </div>
            </div>

            {/* Center Section - Phone Number */}
            <div className="flex flex-col items-center gap-2 md:gap-3">
              {/* Top Text */}

              {/* Phone Number and Info */}
              <div className="flex items-center gap-3 md:gap-4">
                {/* Phone Icon and Number */}
                <div className="flex flex-col items-center">
                  <p className="hidden lg:block text-xs md:text-sm text-black text-center">
                    まずはお気軽にお問い合わせください
                  </p>
                  <div className='flex flex-row items-center justify-center gap-2'>
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                    <a
                      href="tel:0120-868-986"
                      className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      0120-868-986
                    </a>
                  </div>
                </div>

                {/* Info Box */}
                <div className="border border-gray-300 rounded px-3 md:px-4 py-1 md:py-2 bg-gray-50">
                  <p className="text-xs md:text-sm text-black text-center leading-tight">
                    24時間 年中無休
                  </p>
                  <p className="text-xs md:text-sm text-black text-center leading-tight">
                    通話料無料
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Button */}
            <div className="flex-shrink-0">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base lg:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-md flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span>問い合わせ</span>
                <span className="text-lg md:text-xl"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation */}
      <div className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-2 md:py-3">
          <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-4 lg:gap-6">
            {navItems.map((item, index) => (
              <div key={index} className="flex items-center gap-1 md:gap-2">
                <a
                  href="#"
                  className="text-sm md:text-base lg:text-lg text-black hover:text-orange-500 transition-colors font-medium"
                >
                  {item}
                </a>
                <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                {index < navItems.length - 1 && (
                  <div className="w-px h-4 md:h-6 border-l border-dotted border-gray-400 mx-2 md:mx-4"></div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

