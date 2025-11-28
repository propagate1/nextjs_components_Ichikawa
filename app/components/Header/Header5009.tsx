'use client';
import Image from 'next/image';
import { Menu, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

interface Header5009Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Header5009({
  isMobileMenuOpen,
  toggleMobileMenu
}: Header5009Props) {
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setSubmenuOpen(submenuOpen === id ? null : id);
  };

  const menuItems = [
    {
      id: 1,
      title: '機能',
      subtitle: ['機能一覧', 'ロボット発信', 'ロボット着信']
    },
    {
      id: 2,
      title: '業種別活用法',
      subtitle: ['人材業界', 'コールセンター業界', '生活インフラ業界', '不動産業界', '店舗系業界', '金融業界']
    },
    {
      id: 3,
      title: '導入事例',
      subtitle: []
    },
    {
      id: 4,
      title: 'お役立ち資料',
      subtitle: []
    },
    {
      id: 5,
      title: '料金・プラン',
      subtitle: []
    },
    {
      id: 6,
      title: '記事',
      subtitle: []
    },
    {
      id: 7,
      title: 'セミナー',
      subtitle: []
    },

  ];

  return (
    <header className='w-full z-50 bg-white'>
      <div className="flex items-center justify-between w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-5">
        {/* Logo */}
        <div className="relative w-32 h-16 md:w-40">
          <Image
            src="/img/Header5009_Logo_1.png"
            alt="ソクコム Logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5">

          {/* Dropdown (機能) */}
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <span
                key={index}
                className="text-[10px] lg:text-md xl:text-sm text-blue-400 hover:text-blue-300 cursor-pointer"
              >
                {item.title}
              </span>
              {item.subtitle.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <ul className="py-2 text-sm text-black">
                    {item.subtitle.map((subitem, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 flex flex-row items-center justify-between cursor-pointer"
                      >
                        - {subitem}
                        <ChevronRight className="w-4 h-4" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Buttons */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-1">
            資料ダウンロード <ChevronRight className="w-4 h-4" />
          </button>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-1">
            お問い合わせ <ChevronRight className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Button */}
        <button onClick={toggleMobileMenu} className="lg:hidden p-2">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-full h-[645px] lg:hidden border-t border-gray-200 flex flex-col justify-between">

          {/* Other menu items */}
          <div>    
          {menuItems.map((item, index) => (
            <div key={index} className=' relative group border-b border-gray-300'>
              <button key={index} onClick={() => toggleMenu(item.id)} className=" w-full flex justify-between items-center text-base text-blue-400 hover:text-blue-600 px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-5">
                <span className="block text-base py-2 text-blue-400 hover:text-blue-600">
                  {item.title}
                </span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform text-black ${item.id == submenuOpen ? 'rotate-90' : ''}`}
                />
              </button>
              {submenuOpen == item.id && item.subtitle.length > 0 && (
                <div className="pl-8 flex flex-col gap-2 pb-3 px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-5">
                  {item.subtitle.map((item, index) => (
                    <button
                      key={index}
                      className="w-full flex justify-between items-center text-base text-blue-400 hover:text-blue-600"
                    >
                      <span key={index} className="text-sm py-1 text-black hover:text-blue-600">
                        {item}
                      </span>
                      <ChevronRight
                        className='w-4 h-4 transition-transform text-black'
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          </div>

          {/* Buttons */}
          <div className="flex mt-4 ">
            <button className="w-1/2 bg-orange-500 hover:bg-orange-600 text-white py-3 flex items-center justify-center gap-1">
              資料ダウンロード <ChevronRight className="w-4 h-4" />
            </button>

            <button className="w-1/2 bg-yellow-400 hover:bg-yellow-500 text-black py-3 flex items-center justify-center gap-1">
              お問い合わせ <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
