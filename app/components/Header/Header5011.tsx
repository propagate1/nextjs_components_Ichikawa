'use client';
import Image from 'next/image';
import { Menu, Phone, X } from 'lucide-react';

interface Header5011Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Header5009({
  isMobileMenuOpen,
  toggleMobileMenu
}: Header5011Props) {

  return (
    <header className="w-full relative min-h-screen overflow-hidden font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif]">
      {/* Header Section */}
      <div className={`relative z-20 w-full ${isMobileMenuOpen ? "bg-white" : "bg-none"}`}>
        <div className="mx-auto  pt-4 md:pt-6 lg:pt-8">
          <div className="flex flex-row items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Left: Logo and Navigation */}
            <div className="flex flex-row items-center justify-between w-auto sm:justify-start gap-4 md:gap-12 ">
              {/* Mobile Menu Button - SP Only */}
              <button
                onClick={toggleMobileMenu}
                className={`xl:hidden relative w-6 h-6 md:w-12 md:h-12 flex-shrink-0  ${isMobileMenuOpen ? "text-black" : " text-white"}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 md:w-12 md:h-12" /> : <Menu className="w-6 h-6 md:w-12 md:h-12" />}
              </button>

              {/* Logo */}
              <div className="relative w-20 h-8 sm:w-40 sm:h-10 md:w-48 md:h-12">
                <Image
                  src={isMobileMenuOpen ? "/img/Hero5011_Logo_2.png" : "/img/Hero5011_Logo_1.png"}
                  alt="Company Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>

              {/* Navigation - Hidden on mobile, visible from tablet */}
              <nav className="hidden xl:flex items-center gap-4 lg:gap-12">
                <a href="#thoughts" className="text-white text-sm lg:text-lg hover:text-gray-300 transition-colors">
                  もの作りへの想い
                </a>
                <a href="#services" className="text-white text-sm lg:text-lg hover:text-gray-300 transition-colors">
                  事業案内
                </a>
                <a href="#company" className="text-white text-sm lg:text-lg hover:text-gray-300 transition-colors">
                  会社概要
                </a>
                <a href="#contact" className="text-white text-sm lg:text-lg hover:text-gray-300 transition-colors">
                  お問い合わせ
                </a>
              </nav>
            </div>

            {/* Right: Contact Information */}
            <div className={`flex flex-col items-start sm:items-end gap-2 ${isMobileMenuOpen ? "text-black" : "text-white"}`}>
              {/* Address - Hidden on mobile */}
              <p className="hidden lg:block text-xs md:text-sm">
                岩手県奥州市水沢羽田町字室ノ木34-1
              </p>
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <a
                  href="tel:0197-22-7291"
                  className="text-lg md:text-xl lg:text-2xl font-semibold transition-colors"
                >
                  0197-22-7291
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown - SP Only */}
          {isMobileMenuOpen && (
            <div className="xl:hidden mt-4 pb-4 bg-gray-800 text-center">
              <nav className="flex flex-col gap-0 pt-4">
                <a
                  href="#thoughts"
                  className="text-white text-lg md:text-xl py-6 px-4 border-b border-gray-700  transition-colors"
                  onClick={toggleMobileMenu}
                >
                  もの作りへの想い
                </a>
                <a
                  href="#services"
                  className="text-white text-lg md:text-xl py-6 px-4 border-b border-gray-700  transition-colors"
                  onClick={toggleMobileMenu}
                >
                  事業案内
                </a>
                <a
                  href="#company"
                  className="text-white text-lg md:text-xl py-6 px-4 border-b border-gray-700  transition-colors"
                  onClick={toggleMobileMenu}
                >
                  会社概要
                </a>
                <a
                  href="#contact"
                  className="text-white text-lg md:text-xl py-6 px-4  transition-colors"
                  onClick={toggleMobileMenu}
                >
                  お問い合わせ
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
