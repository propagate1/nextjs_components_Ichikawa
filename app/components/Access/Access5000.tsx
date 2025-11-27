'use client';
import { ChevronRight } from 'lucide-react';

interface OfficeLocation {
  id: string;
  name: string;
  postalCode: string;
  address: string;
  tel: string;
  fax: string;
  mapEmbedUrl: string;
  mapLink: string;
  companyName: string;
}

export default function Access5000() {
  const offices: OfficeLocation[] = [
    {
      id: 'head-office',
      name: '本社',
      postalCode: '〒501-6001',
      address: '岐阜県羽島郡岐南町上印食5-82',
      tel: '(058) 249-3611',
      fax: '(058) 249-4055',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.1234567890!2d136.7890123!3d35.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIwJzQ0LjQiTiAxMzbCsDQ3JzIwLjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp',
      mapLink: 'https://www.google.com/maps?q=岐阜県羽島郡岐南町上印食5-82',
      companyName: '(株)バウハウス丸栄',
    },
    {
      id: 'sapporo',
      name: '札幌',
      postalCode: '〒060-0004',
      address: '北海道札幌市中央区北四条西4-1-3 伊藤ビル5F',
      tel: '(011) 252-5007',
      fax: '(011) 252-5008',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.1234567890!2d141.3456789!3d43.0621234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDAzJzQzLjYiTiAxNDHCsDIwJzQ0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp',
      mapLink: 'https://www.google.com/maps?q=北海道札幌市中央区北四条西4-1-3+伊藤ビル5F',
      companyName: '(株)バウハウス丸栄 札幌支店',
    },
    {
      id: 'tokyo',
      name: '東京',
      postalCode: '〒141-0031',
      address: '東京都品川区西五反田2-11-8 学研ビル14F',
      tel: '(03) 5436-7331',
      fax: '(03) 5436-7338',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1234567890!2d139.7234567!3d35.6261234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM3JzM0LjAiTiAxMznCsDQzJzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp',
      mapLink: 'https://www.google.com/maps?q=東京都品川区西五反田2-11-8+学研ビル14F',
      companyName: '(株)バウハウス丸栄 東京支店',
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 md:mb-12 lg:mb-16">
          事業所一覧
        </h1>

        {/* Office Locations */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {offices.map((office) => (
            <div key={office.id} className="rounded-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Left Section: Text Content */}
                <div className="flex-1 lg:w-[45%] p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6">
                  {/* Location Heading */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                    {office.name}
                  </h2>

                  {/* Address and Contact Information */}
                  <div className="space-y-2 md:space-y-3 text-xs md:text-lg lg:text-xl text-gray-700">
                    <p className="font-medium">{office.postalCode}</p>
                    <p>{office.address}</p>
                    <p>TEL: {office.tel}<span className=' px-2 lg:px-4'></span>FAX: {office.fax}</p>
                  </div>

                  {/* Google Map Button */}
                  <div className="pt-2 md:pt-4">
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border-2 border-black rounded text-base md:text-lg lg:text-xl text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                    >
                      <span>GoogleMapで見る</span>
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                </div>

                {/* Right Section: Embedded Google Map */}
                <div className="flex-1 lg:w-[55%] relative border-2 border-gray-300 rounded-2xl overflow-hidden">
                  <div className="w-full h-[200px] md:h-[400px] lg:h-full min-h-[200px]">
                    <iframe
                      src={office.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title={`${office.name} location map`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

