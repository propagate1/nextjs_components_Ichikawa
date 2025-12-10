'use client';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Service5001() {
  const services = [
    {
      id: 'shell-core',
      title: 'シェル中子',
      image: '/img/Service5001_Service_1.png',
      alt: 'Shell Core manufacturing process',
    },
    {
      id: 'alkali-phenol',
      title: 'アルカリフェノール硬化ガス中子',
      image: '/img/Service5001_Service_2.png',
      alt: 'Alkali Phenol Hardening Gas Core manufacturing process',
    },
  ];

  return (
    <div className="w-full bg-[#f8f4ea] py-8 md:py-12 lg:py-16 font-['Yu_Mincho','Hiragino_Mincho_ProN','MS_PMincho',serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-sm md:text-base text-black mb-4 md:mb-6">
            事業内容
          </h2>

          {/* Main Heading Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8 lg:gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 space-y-4 md:space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                当社は鋳造に必要不可欠な
                <span className="block mt-2">
                  <ruby>
                    「中<rt className="text-base pl-8 lg:pl-12">なか</rt>子」<rt className="text-base -ml-6 md:-ml-8 lg:-ml-12">ご</rt>
                  </ruby>
                  という製品を製造しております。
                </span>
              </h1>

              <div className="space-y-2 md:space-y-3 text-sm md:text-base lg:text-lg text-black leading-relaxed">
                <p>
                  当社は、岩手県奥州市（南部鉄器で有名な地域）の
                  <br className="hidden sm:block" />
                  羽田に所在し、鋳造に必要不可欠な「中子」という製品を製造しております。
                </p>
                <p>
                  「中子」という製品をご存知の方は、どれくらいいらっしゃるでしょうか。
                  <br className="hidden sm:block" />
                  あまり知られていない「中子」という製品と、当社の事業をご紹介いたします。
                </p>
              </div>
            </div>

            {/* Right: Product Image with Decorative Character */}
            <div className="flex-1 lg:flex-none lg:w-[45%] xl:w-[40%] relative">
              {/* Main Product Image */}
              <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/img/Service5001_Service_3.png"
                  alt="Nakago core products"
                  fill
                  className="object-contain object-center"
                  priority
                />

                {/* Decorative Character Overlay */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2">
                  <Image
                    src="/img/Service5001_Letter_1.png"
                    alt="Decorative character 業"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Examples Section */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {services.map((service) => (
              <div key={service.id} className="space-y-3 md:space-y-4 bg-white">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Caption with Arrow */}
                <a
                  href="#"
                  className="flex items-center justify-between gap-2 text-gray-800 hover:text-[#8b6914] transition-colors group p-4 md:p-6 lg:p-8"
                >
                  <span className="text-base md:text-md lg:text-xl font-medium">
                    {service.title}
                  </span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center group">
          <button className="w-full md:w-auto bg-[#8b6914] hover:bg-[#6b5010] text-white px-8 md:px-12 lg:px-24 py-3 md:py-4 lg:py-6  text-sm md:text-base lg:text-lg font-medium transition-colors flex items-center justify-center gap-2 md:gap-3 tracking-widest">
            <span>中子製造の依頼はこちら</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

