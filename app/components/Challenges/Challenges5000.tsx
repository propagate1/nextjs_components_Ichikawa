'use client';
import Image from 'next/image';

export default function Challenges5000() {
  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
            こんなお悩みありませんか?
          </h2>
        </div>

        {/* Main Content Area with Characters and Thought Bubbles */}
        <div className="relative">
          {/* Mobile Layout: Single Large Thought Bubble (< 768px) */}
          <div className="lg:hidden flex flex-col">
            {/* Large Thought Bubble with Bulleted List */}
            <div className="relative w-full max-w-3xl mx-0">
              <div className="text-center m-auto bg-gray-200 w-full sm:w-[60%] rounded-3xl">

                {/* Bulleted List Content */} 
                <div className="flex items-center justify-center p-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-black">
                        リモートワークで<span className="text-blue-500">ちょっとした雑談</span>が生まれにくい
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-black">
                        人が増えて<span className="text-blue-500">同僚の</span><span className="text-blue-500">ことがわかりにくい</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-black">
                        <span className="text-blue-500">情報・ノウハウの共有が</span>うまくいかない
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-black">
                        <span className="text-blue-500">社員の活躍</span>が見えづらい
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-black">
                        <span className="text-blue-500">会社のバリューや行動指針がなかなか</span>浸透しない
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" relative w-full h-12">
              <Image
                src="/img/Challenges5000_Icon_6.png"
                alt="Thought bubble 1"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Characters Below Thought Bubble */}
            <div className="relative w-full max-w-2xl h-[250px] mx-auto">
              <Image
                src="/img/Challenges5000_Bg_1.png"
                alt="Worried office workers"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* PC Layout: Single Large Thought Bubble (> 768px) */}
          <div className="hidden lg:block">
            {/* Background with Two Characters - Centered */}
            <div className="relative w-full max-w-2xl h-[200px] md:h-[300px] mx-auto" style={{ marginTop: '200px', marginBottom: '100px' }}>
              <Image
                src="/img/Challenges5000_Bg_1.png"
                alt="Worried office workers"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Top Left Bubble - above the man */}
            <div className="absolute -top-32 left-[15%] w-48 md:w-56 lg:w-64">
              <div className="relative w-full h-24 md:h-40">
                <Image
                  src="/img/Challenges5000_Icon_1.png"
                  alt="Thought bubble 1"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center px-4 pt-2">
                  <p className="text-xs md:text-sm font-semibold text-black text-center leading-tight">
                    人が増えて<span className=" text-blue-500">同僚の</span><br /><span className=" text-blue-500">ことがわかりにくい</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Top Center Bubble - between the characters */}
            <div className="absolute -top-42 left-1/2 transform -translate-x-1/2 w-48 md:w-56 lg:w-64">
              <div className="relative w-full h-32 md:h-52">
                <Image
                  src="/img/Challenges5000_Icon_3.png"
                  alt="Thought bubble 2"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <p className="text-xs md:text-sm font-semibold text-black text-center leading-tight">
                    <span className=" text-blue-500">情報・<br />ノウハウの共有が</span><br />うまくいかない
                  </p>
                </div>
              </div>
            </div>

            {/* Top Right Bubble - above the woman */}
            <div className="absolute -top-32 right-[15%] w-48 md:w-56 lg:w-64">
              <div className="relative w-full h-32 md:h-40">
                <Image
                  src="/img/Challenges5000_Icon_4.png"
                  alt="Thought bubble 3"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute -top- inset-0 flex items-center justify-center px-4 pt-2">
                  <p className="text-xs md:text-sm font-semibold text-black text-center leading-tight">
                    <span className=" text-blue-500">社員の活躍</span><br />が見えづらい
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Left Bubble - below the man */}
            <div className="absolute bottom-28 left-[5%] w-48 md:w-56 lg:w-64">
              <div className="relative w-full h-32 md:h-40">
                <Image
                  src="/img/Challenges5000_Icon_1.png"
                  alt="Thought bubble 4"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center px-4 pt-2">
                  <p className="text-xs md:text-sm font-semibold text-black text-center leading-tight">
                    リモートワークで<br /><span className=" text-blue-500">ちょっとした雑談</span><br />が生まれにくい
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Right Bubble - below the woman */}
            <div className="absolute bottom-28 right-[5%] w-48 md:w-56 lg:w-64">
              <div className="relative w-full h-32 md:h-40">
                <Image
                  src="/img/Challenges5000_Icon_5.png"
                  alt="Thought bubble 5"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center px-4 pt-2">
                  <p className="text-xs md:text-sm font-semibold text-black text-center leading-tight">
                    <span className=" text-blue-500">会社のバリューや<br />行動指針がなかなか</span><br />浸透しない
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

