'use client';
import Image from 'next/image';
import { ChevronRight, Menu, X } from 'lucide-react';

interface Header5012Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Header5012({
  isMobileMenuOpen,
  toggleMobileMenu
}: Header5012Props) {

  return (
    <div className="w-full relative mx-auto max-h-screen bg-white z-50">
      <div className="relative w-full z-20">
        {/* Header Section */}
        <header className="relative bg-white w-full  px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 z-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            {isMobileMenuOpen ? (
              <div className="relative mx-auto w-32 md:w-40 lg:w-48 h-8 md:h-10 lg:h-12">
                <Image
                  src="/img/Hero5012_Logo_1.png"
                  alt="ALSOK Logo"
                  fill
                  className="object-contain object-center md:object-left"
                  priority
                />
              </div>
            ) : <div className="relative w-32 md:w-40 lg:w-48 h-8 md:h-10 lg:h-12">
              <Image
                src="/img/Hero5012_Logo_1.png"
                alt="ALSOK Logo"
                fill
                className="object-contain object-center md:object-left"
                priority
              />
            </div>}

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 xl:gap-8 text-indigo-900">
              <a
                href="#"
                className=" text-sm xl:text-base font-medium hover:text-indigo-900 transition-colors"
              >
                ALSOKの仕事
              </a>
              <a
                href="#"
                className=" text-sm xl:text-base font-medium hover:text-indigo-900 transition-colors"
              >
                働く楽しさ・メリット
              </a>
              <a
                href="#"
                className=" text-sm xl:text-base font-medium hover:text-indigo-900 transition-colors"
              >
                選考の流れ
              </a>
              <a
                href="#"
                className=" text-sm xl:text-base font-medium hover:text-indigo-900 transition-colors"
              >
                先輩社員インタビュー
              </a>
              <a
                href="#"
                className=" text-sm xl:text-base font-medium hover:text-indigo-900 transition-colors"
              >
                データで見るALSOK
              </a>
            </nav>

            {/* Entry Button - Desktop */}
            <button className="hidden xl:flex items-center gap-2 bg-[#fff301] hover:bg-amber-400 text-indigo-900 px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-semibold text-sm xl:text-base transition-colors">
              <span>エントリー</span>
              <ChevronRight className="w-6 h-6 bg-indigo-900 rounded-full text-white p-1" />
            </button>

            {/* Mobile Menu Button */}
            {!isMobileMenuOpen && (
              <button
                onClick={toggleMobileMenu}
                className="xl:hidden relative w-8 h-8"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className=" w-6 h-6 md:w-12 md:h-12" /> : <Menu className="w-6 h-6 md:w-12 md:h-12" />}
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="xl:hidden absolute top-full left-0 w-full min-h-screen bg-white shadow-lg z-30">
              <nav className="flex flex-col mx-auto md:w-1/2 p-6 space-y-8 text-indigo-900 font-bold">
                <a
                  href="#"
                  className="flex flex-row items-center justify-between text-base  hover:text-indigo-900 transition-colors px-3"
                >
                  ALSOKの仕事
                  <ChevronRight className="w-6 h-6 bg-indigo-900 rounded-full text-white p-2" />
                </a>
                <a
                  href="#"
                  className="flex flex-row items-center justify-between text-base  hover:text-indigo-900 transition-colors px-3"
                >
                  働く楽しさ・メリット
                  <ChevronRight className="w-6 h-6 bg-indigo-900 rounded-full text-white p-2" />
                </a>
                <a
                  href="#"
                  className="flex flex-row items-center justify-between text-base  hover:text-indigo-900 transition-colors px-3"
                >
                  選考の流れ
                  <ChevronRight className="w-6 h-6 bg-indigo-900 rounded-full text-white p-2" />
                </a>
                <a
                  href="#"
                  className="flex flex-row items-center justify-between text-base  hover:text-indigo-900 transition-colors px-3"
                >
                  先輩社員インタビュー
                  <ChevronRight className="w-6 h-6 bg-indigo-900 rounded-full text-white p-2" />
                </a>
                <a
                  href="#"
                  className=" flex flex-row items-center justify-between text-base  hover:text-indigo-900 transition-colors px-3"
                >
                  <p>データで見るALSOK</p>
                  <ChevronRight className="w-6 h-6 bg-indigo-900 rounded-full text-white p-2" />
                </a>
                <button className="flex items-center justify-between gap-2 bg-[#fff301] hover:bg-amber-400 text-black px-3 py-3 rounded-lg font-semibold text-base transition-colors mt-4">
                  <span>エントリー</span>
                  <ChevronRight className="w-6 h-6 bg-indigo-900 rounded-full text-white p-2" />
                </button>
              </nav>
              {isMobileMenuOpen && (
                <button
                  onClick={toggleMobileMenu}
                  className="xl:hidden  flex items-center justify-center mx-auto mt-16 bg-white text-indigo-900 rounded-full border-2 p-1 w-8 h-8"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X className=" w-6 h-6 md:w-12 md:h-12" /> : <Menu className="w-6 h-6 md:w-12 md:h-12" />}
                </button>
              )}
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
