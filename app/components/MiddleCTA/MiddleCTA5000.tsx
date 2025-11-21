'use client';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

interface ContactRegion {
  id: number;
  region: string;
  phone: string;
  hours: string;
}

export default function MiddleCTA5000() {
  const contactRegions: ContactRegion[] = [
    {
      id: 1,
      region: '関東のお客様',
      phone: '0120-535-121',
      hours: '営業時間 10:00～17:00 (土日祝休業)',
    },
    {
      id: 2,
      region: '関西のお客様',
      phone: '0120-535-929',
      hours: '営業時間 10:00～17:00 (土日祝休業)',
    },
    {
      id: 3,
      region: '中部のお客様',
      phone: '0120-535-778',
      hours: '営業時間 10:00～17:00 (土日祝休業)',
    },
    {
      id: 4,
      region: '東北のお客様',
      phone: '0120-535-141',
      hours: '営業時間 10:00～17:00 (土日祝休業)',
    },
    {
      id: 5,
      region: '九州のお客様',
      phone: '0120-535-445',
      hours: '営業時間 10:00～17:00 (土日祝休業)',
    },
    {
      id: 6,
      region: '中国・四国のお客様',
      phone: '0120-535-282',
      hours: '営業時間 10:00～17:00 (土日祝休業)',
    },
    {
      id: 7,
      region: '北海道のお客様',
      phone: '0120-535-226',
      hours: '営業時間 10:00～17:00 (土日祝休業)',
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/MiddleCTA5000_Bg_1.jpg"
          alt="Office background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-12 md:py-16 lg:py-20">
        {/* Header Section */}
        <div className="bg-black py-8 md:py-12 mb-8 md:mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d4af37] -mt-14 md:-mt-20 lg:-mt-22 mb-2 md:mb-4">
              CONTACT
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white">
              無料相談・無料見積・お問い合わせ
            </p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-gray-100 rounded-lg md:rounded-xl p-6 md:p-8 lg:p-12 shadow-2xl">
            {/* Card Header */}
            <div className="text-center mb-8 md:mb-12">
              <p className="text-base md:text-lg lg:text-xl text-gray-800 mb-6 md:mb-8">
                オフィスのことは何でもオフィスコムにお任せください！
              </p>

              {/* Free Trial Button */}
              <button className="inline-flex items-center gap-3 px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-[#556b2f] hover:bg-[#4a5d28] text-white rounded-lg md:rounded-xl text-base md:text-lg lg:text-xl font-semibold transition-colors shadow-lg">
                <Mail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#d4af37]" />
                <span>無料体験の予約はこちら</span>
              </button>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {contactRegions.map((region) => (
                <div
                  key={region.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  {/* Region Header Bar */}
                  <div className="bg-gray-700 text-white py-2 md:py-3 px-4 text-sm md:text-base font-medium">
                    {region.region}
                  </div>

                  {/* Contact Details */}
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#d4af37] flex-shrink-0" />
                      <a
                        href={`tel:${region.phone.replace(/-/g, '')}`}
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 hover:text-[#556b2f] transition-colors"
                      >
                        {region.phone}
                      </a>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 ml-8 md:ml-10">
                      {region.hours}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

