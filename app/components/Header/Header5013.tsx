'use client';
import Image from 'next/image';
import { ChevronDown, User } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import { HiDocumentDuplicate } from 'react-icons/hi';

interface Header5013Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Header5013({
  isMobileMenuOpen,
  toggleMobileMenu
}: Header5013Props) {

  return (
    <div className="w-full relative mx-auto min-h-screen  z-50">
      {/* Header Section */}
      <header className="relative z-20 w-full px-4 py-8">
        <div className="mx-auto flex items-start justify-between">
          {/* Logo and Slogan */}
          <div className="flex flex-col items-start gap-3 md:gap-4">
            <p className="text-white text-xs md:text-sm lg:text-base font-medium whitespace-nowrap">
              山梨発!頑張る学生と社会がつながるコミュニティ
            </p>
            <div className="relative w-24 md:w-32 lg:w-40 h-24 lg:h-30">
              <Image
                src="/img/Hero5013_Logo_1.png"
                alt="In Cafe Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-row items-end justify-center gap-4 xl:gap-10 mt-3">
            <a
              href="#"
              className="text-white text-base font-medium hover:text-yellow-400 transition-colors"
            >
              まゆCafeについて
            </a>
            <a
              href="#"
              className="text-white text-sm xl:text-base font-medium hover:text-yellow-400 transition-colors"
            >
              インフォメーションボード
            </a>
            <a
              href="#"
              className="text-white text-sm xl:text-base font-medium hover:text-yellow-400 transition-colors"
            >
              キャリアセンター
            </a>
            <a
              href="#"
              className="text-white text-sm xl:text-base font-medium hover:text-yellow-400 transition-colors"
            >
              企業のみなさまへ
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden xl:flex items-center gap-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-semibold text-sm xl:text-base transition-colors flex items-center gap-2">
              <FaTelegram className="w-6 h-6 " />
              <span>参加申込</span>
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-semibold text-sm xl:text-base transition-colors flex items-center gap-2">
              <User className="w-6 h-6" />
              <span>ログイン</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden absolute top-0 right-0 xl:relative w-12 h-12 z-50"
            aria-label="Toggle menu"
          >
            <div className="w-full h-full flex flex-col justify-center bg-black p-3 gap-1.5">
              <span
                className={`block w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 right-0 w-5/7 sm:w-2/5 md:1/5 lg:1/6 min-h-screen bg-white shadow-lg pt-20 z-30 
">
            <nav className="flex flex-col p-4 space-y-8">
              <a
                href="#"
                className="flex items-center justify-between text-black text-sm font-medium hover:text-yellow-400 transition-colors"
              >
                まゆCafeについて
                <ChevronDown className="w-6 h-6 " />
              </a>
              <a
                href="#"
                className="flex items-center justify-between text-black text-sm font-medium hover:text-yellow-400 transition-colors"
              >
                インフォメーションボード
                <ChevronDown className="w-6 h-6 " />
              </a>
              <a
                href="#"
                className="flex items-center justify-between text-black text-sm font-medium hover:text-yellow-400 transition-colors"
              >
                キャリアセンター
                <ChevronDown className="w-6 h-6 " />
              </a>
              <a
                href="#"
                className="flex items-center justify-start text-black text-sm font-medium hover:text-yellow-400 transition-colors"
              >
                企業のみなさまへ
                <HiDocumentDuplicate className="w-4 h-4 " />
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
                <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
                  <FaTelegram className="w-4 h-4 " />
                  <span>参加申込</span>

                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
                  <User className="w-4 h-4 " />
                  <span>ログイン</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
