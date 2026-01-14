'use client';
import Image from 'next/image';
import { ShoppingCartIcon, Menu, X } from 'lucide-react';


interface Header5014Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Header5014({
  isMobileMenuOpen,
  toggleMobileMenu
}: Header5014Props) {

  const menu = [
      { id: 1, title: 'トップページ', avatar: '' },
      { id: 2, title: '朱宮神仏具店について', avatar: '' },
      { id: 3, title: '朱宮の安心サービス', avatar: '/img/Hero5014_Avatar_1.jpg' },
      { id: 4, title: 'あんしん設置サービス', avatar: '/img/Hero5014_Avatar_2.jpg' },
      { id: 5, title: '贈答用サービス', avatar: '/img/Hero5014_Avatar_3.jpg' },
      { id: 6, title: '新着情報', avatar: '' },
      { id: 7, title: '商品紹介', avatar: '' },
      { id: 8, title: '仏壇', title1: '位牌', avatar: '/img/Hero5014_Avatar_4.jpg', avatar1: '/img/Hero5014_Avatar_5.jpg' },
      { id: 9, title: '墓石', title1: 'その他', avatar: '/img/Hero5014_Avatar_6.jpg', avatar1: '/img/Hero5014_Avatar_7.jpg' },
      { id: 10, title: '神具', avatar: '/img/Hero5014_Avatar_8.jpg' },
      { id: 11, title: 'お仏壇処分', avatar: '' },
      { id: 12, title: 'よくあるご質問', avatar: '' },
      { id: 13, title: '店舗情報', avatar: '' },
      { id: 14, title: '甲府本店', title1: '石和店', avatar: '/img/Hero5014_Avatar_9.jpg', avatar1: '/img/Hero5014_Avatar_10.jpg' },
      { id: 15, title: '開国橋西店', title1: 'ネットショップ', avatar: '/img/Hero5014_Avatar_11.jpg', avatar1: '/img/Hero5014_Avatar_12.jpg' },
      { id: 16, title: 'shumiya art window', title1: 'inner peace gallery', avatar: '', avatar1:''},
      { id: 17, title: '御寺院様', avatar: '' },
      { id: 18, title: 'お位牌のご依頼', avatar: '' },
      { id: 19, title: 'お問い合わせ', avatar: '' },
      { id: 20, title: '会社概要', avatar: '' },
      { id: 21, title: '個人情報保護方針', avatar: '' },
    ];

  return (
    <div className="w-full relative mx-auto  z-50">
      {/* Header Section */}
        <header className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6">
          <div className="max-w-7xl mx-auto flex flex-row md:flex-col justify-between gap-4 md:gap-0">
            {/* Logo/Store Name */}
            <div className="  flex flex-row items-center justify-between">
              <p className="text-white text-xs md:text-[9px] lg:text-xs xl:text-sm leading-6 md:leading-0">
                山梨で仏壇・仏具・位牌・神棚・神具・墓石のことなら、朱宮神仏具店
              </p>

              {/* Desktop Buttons */}
              <div className="hidden md:flex items-end justify-between gap-3 font-semibold text-[9px] lg:text-xs xl:text-sm transition-colors">
                <button className=" border-1 border-white bg-white text-red-600 px-6 xl:px-6 py-1 flex items-center gap-1">
                  <ShoppingCartIcon className=' w-3 h-3 lg:w-4 lg:h-4' />
                  <span>朱宮神仏具店 ネットショップ</span>
                </button>
                <button className="border-1 border-white hover:bg-gray-700 text-white px-4 xl:px-6 py-1">
                  ▶ 御寺院様
                </button>
                <button className="border-1 border-white hover:bg-gray-700 text-white px-4 xl:px-6 py-1">
                  ▶ お位牌のご依頼
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center text-white text-xs lg:text-base xl:text-lg justify-between gap-8 lg:gap-12 mt-12">
              <a
                href="#"
                className=" font-medium hover:text-yellow-400 transition-colors"
              >
                朱宮神仏具店について
              </a>
              <a
                href="#"
                className=" hover:text-yellow-400 transition-colors"
              >
                新着情報
              </a>
              <a
                href="#"
                className=" hover:text-yellow-400 transition-colors"
              >
                商品紹介
              </a>
              <a
                href="#"
                className=" hover:text-yellow-400 transition-colors"
              >
                お仏壇処分
              </a>
              <a
                href="#"
                className=" hover:text-yellow-400 transition-colors"
              >
                よくあるご質問
              </a>
              <a
                href="#"
                className=" hover:text-yellow-400 transition-colors"
              >
                店舗情報
              </a>
              <a
                href="#"
                className=" hover:text-yellow-400 transition-colors"
              >
                お問い合わせ
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-8 h-8 text-white mt-2 z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className=" w-8 h-8" /> : <Menu className="w-8 h-8 " />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full  bg-black/85 shadow-lg z-30 py-4">
              <nav className="flex flex-col p-4 space-y-4">
                {menu.map((item, index) => (
                  <div key={index}>
                    <a
                      key={index}
                      href="#"
                      className="flex flex-row items-center justify-start text-white text-base font-medium hover:text-yellow-400 transition-colors gap-2"
                    >
                      {item.title1 && item.avatar1 ? (
                        <div className='w-full h-full grid grid-cols-2'>
                          <div className="flex flex-row items-center justify-start text-white text-base font-medium hover:text-yellow-400 transition-colors gap-2">
                              <div className="relative w-8 h-8">
                                <Image
                                  src={item.avatar}
                                  alt=""
                                  fill
                                  className="object-contain object-center"
                                  priority
                                />
                              </div>
                            {item.title}
                          </div>
                          <div className=" flex flex-row items-center justify-start text-white text-base font-medium hover:text-yellow-400 transition-colors gap-2">
                            <div className=' border-l-1 border-l-gray-700 h-8'></div>
                              <div className="relative w-8 h-8">
                                <Image
                                  src={item.avatar1}
                                  alt="1"
                                  fill
                                  className="object-contain object-center"
                                  priority
                                />
                              </div>
                            {item.title1}
                          </div>
                        </div>
                      ) : (
                        <>
                          {item.avatar.length > 0 && (
                            <div className="relative w-8 h-8">
                              <Image
                                src={item.avatar}
                                alt=""
                                fill
                                className="object-contain object-center"
                                priority
                              />
                            </div>
                          )}
                          {item.title}
                        </>
                      )}

                    </a>
                    <div className=' border-b-1 border-b-gray-700 mt-2'></div>
                  </div>
                ))}
              </nav>
            </div>
          )}
        </header>
    </div>
  );
}
