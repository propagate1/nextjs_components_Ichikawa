'use client';
import Image from 'next/image';
import { Menu, ChevronRight, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';


export default function Header5009() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  return (
    <div className="w-full h-full relative flex flex-col z-50">

      {/* Header Container */}
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Header */}
        <header className="w-full px-0 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5">
          <div className="w-full mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-24 h-8 sm:w-28 sm:h-10 md:w-32 md:h-12">
                <Image
                  src="/img/Header5009_Logo_1.png"
                  alt="ソクコム Logo"
                  fill
                  className="object-cover object-left"
                  priority
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 lg:gap-5 z-50">
              {/* 機能 with Dropdown */}
              <div className="relative group">
                <a href="#" className="text-sm lg:text-[12px] text-blue-400 hover:text-blue-300 transition-colors">
                  機能
                </a>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      -機能一覧
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      -ロボット発信
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      -ロボット着信
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      -AIエージェント
                    </a>
                  </div>
                </div>
              </div>
              <a href="#" className="text-xs lg:text-[12px] text-blue-400 hover:text-blue-300 transition-colors">
                業界別活用法
              </a>
              <a href="#" className="text-sm lg:text-[12px] text-blue-400 hover:text-blue-300 transition-colors">
                セミナー
              </a>
              <a href="#" className="text-sm lg:text-[12px] text-blue-400 hover:text-blue-300 transition-colors">
                料金・プラン
              </a>
              <a href="#" className="text-sm lg:text-[12px] text-blue-400 hover:text-blue-300 transition-colors">
                記事
              </a>
              <a href="#" className="text-sm lg:text-[12px] text-blue-400 hover:text-blue-300 transition-colors">
                導入事例
              </a>
              <a href="#" className="text-sm lg:text-[12px] text-blue-400 hover:text-blue-300 transition-colors">
                お役立ち資料
              </a>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm lg:text-[12px] font-medium transition-colors">
                資料ダウンロード <ChevronRight className="inline w-4 h-4" />
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm lg:text-[12px] font-medium transition-colors">
                お問い合わせ <ChevronRight className="inline w-4 h-4" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className=" w-full lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col gap-3 pt-4 mx-2">
                <div className="flex flex-col">
                  <button
                    onClick={toggleSubmenu}
                    className="flex items-center justify-between text-base text-black hover:text-blue-600 transition-colors py-2 text-left"
                  >
                    <span>機能</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSubmenuOpen && (
                    <div className="pl-4 flex flex-col gap-2">
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors py-1">
                        -機能一覧
                      </a>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors py-1">
                        -ロボット発信
                      </a>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors py-1">
                        -ロボット着信
                      </a>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors py-1">
                        -AIエージェント
                      </a>
                    </div>
                  )}
                </div>
                <a href="#" className="text-base text-black hover:text-blue-600 transition-colors py-2">
                  業界別活用法
                </a>
                <a href="#" className="text-base text-black hover:text-blue-600 transition-colors py-2">
                  セミナー
                </a>
                <a href="#" className="text-base text-black hover:text-blue-600 transition-colors py-2">
                  料金・プラン
                </a>
                <a href="#" className="text-base text-black hover:text-blue-600 transition-colors py-2">
                  記事
                </a>
                <a href="#" className="text-base text-black hover:text-blue-600 transition-colors py-2">
                  導入事例
                </a>
                <a href="#" className="text-base text-black hover:text-blue-600 transition-colors py-2">
                  お役立ち資料
                </a>
              </nav>
              <div className="flex flex-row justify-between pt-4 w-full">
                <button className=" w-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2  text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <span>資料ダウンロード</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className=" w-1/2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3  text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <span>お問い合わせ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}

