'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface Header5008Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Header5008({
  isMobileMenuOpen,
  toggleMobileMenu
}: Header5008Props) {

  return (
    <div className="relative z-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between py-3 md:py-4 lg:py-5">
          {/* Logo */}
          <div className="relative w-20 h-8 md:w-30 md:h-10 lg:w-48 lg:h-12">
            <Image
              src="/img/Hero5008_Logo_1.png"
              alt="Quick Teacher"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 font-bold">
            <a className="text-[10px] lg:text-xs hover:text-orange-500 transition">トップ</a>
            <a className="text-[10px] lg:text-xs hover:text-orange-500 transition">クイックティーチャーとは?</a>
            <a className="text-[10px] lg:text-xs hover:text-orange-500 transition">3つの特徴</a>
            <a className="text-[10px] lg:text-xs hover:text-orange-500 transition">活用事例</a>
            <a className="text-[10px] lg:text-xs hover:text-orange-500 transition">ユーザーの声</a>
            <a className="text-[10px] lg:text-xs hover:text-orange-500 transition">使い方のヒント</a>
            <a className="text-[10px] lg:text-xs hover:text-orange-500 transition">よくある質問</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden bg-orange-500 rounded-full p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="w-full lg:hidden mt-4 pb-4 border-t border-gray-200 z-0">
            <nav className="flex flex-col gap-3 pt-4">
              {[
                'トップ',
                'クイックティーチャーとは?',
                '3つの特徴',
                '活用事例',
                'ユーザーの声',
                '使い方のヒント',
                'よくある質問',
              ].map((item) => (
                <a key={item} className="text-base text-black hover:text-blue-600 transition">
                  <span className="text-orange-500">●</span> {item}
                </a>
              ))}
            </nav>

            <div className="relative flex flex-col items-center justify-center pt-4 w-full">
              <div className="absolute inset-0 w-full h-50 top-10">
                <Image
                  src="/img/Hero5008_Bg_1.png"
                  alt="Background Left"
                  fill
                  className="object-fit"
                />
              </div>

              <div className="relative w-full h-20 mt-10">
                <Image
                  src="/img/Hero5008_Text_1.png"
                  alt="Background text"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-2/3 h-20">
                <Image
                  src="/img/Hero5008_Logo_1.png"
                  alt="Background text"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="relative text-xs font-bold text-white">@ Quick Teacher</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
