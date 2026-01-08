'use client';
import Image from 'next/image';
import { Phone, ChevronRight } from 'lucide-react';


export default function Hero5006() {
  return (
    <div className="w-full relative overflow-hidden min-h-screen">
      <div className="relative w-full z-30">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <div className="absolute left-0 top-0 w-full h-full opacity-80">
              <Image
                src="/img/Hero5006_Bg_1.png"
                alt="Background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="relative mx-auto" style={{ width: 'min(100vw, 700px)', maxWidth: '700px' }}>
            {/* Badge */}
            <div
              className="absolute left-[10%] top-0"
              style={{
                transform: 'translateX(-50%)',
                zIndex: 30,
              }}
            >

              <div className="relative flex flex-col items-center justify-center mt-6"
                style={{
                  width: 'clamp(120px, 20vw, 220px)',
                  height: 'clamp(80px, 18vw, 200px)',
                }}>
                <Image
                  src="/img/Hero5006_Badge_1.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />

                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-2" style={{ paddingTop: '8%', paddingBottom: '8%' }}>
                  {/* テキスト */}
                  <div className="relative  text-amber-900 font-bold z-10 w-full h-full flex flex-col items-center justify-center text-center" style={{ paddingTop: '6%', paddingBottom: '8%' }}>
                    <p className="   text-[9px] md:text-base lg:text-lg xl:text-xl px-4">ご利用実績</p>
                    <div className=' border-t-2 border-amber-900 border-solid w-2/4'></div>
                    <p className="  text-sm md:text-2xl lg:text-3xl xl:text-4xl">1,000<span className='text-[9px] md:text-base lg:text-lg xl:text-xl'>件</span></p>
                    <p className=" text-[9px] md:text-base lg:text-lg xl:text-xl">以上</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative bg-white  shadow-2xl p-8 md:p-12 lg:p-16 w-full aspect-[6/5] xl:aspect-[5/4]"
              style={{
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center',
                alignItems: 'center',
                clipPath: "polygon(50% 10%, 100% 35%,97% 38%, 90% 38%, 90% 90%, 10% 90%, 10% 38%,3% 38%,0% 35%, 50% 10%)"
              }}
            >
              
              {/* メイン見出し - 「最大 1億円まで 調達可能!」 */}
              {/* <div className="flex flex-col items-center justify-center mb-6 md:mb-8"> */}
              <div className="relative flex items-center justify-center text-[10px] md:text-base lg:text-lg  font-bold bg-green-800 rounded-full mt-8 py-2 px-6">
                <span className=" text-amber-200 flex items-baseline">
                  空室にお悩みのオーナー様
                </span>
                <span className="text-white">必見!</span>
                <div className="absolute left-1/2 transform -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[20px] border-transparent border-t-green-800" style={{ top: '90%' }}></div>
              </div>
              <div className='text-green-800 text-xl md:text-4xl xl:text-5xl font-extrabold py-6'>
                <span>
                  “住みたい賃貸物件”<span className=" text-black text-xl md:text-2xl xl:text-3xl">作りで</span>
                </span>
              </div>
              {/* </div> */}

              {/* 赤いハイライトボックスとサービス名 */}
              <div className="flex flex-row items-center justify-center gap-2 mb-4">
                <div className=" bg-white text-gray-800 shadow-lg shadow-gray-400 px-1 py-2 md:px-4  rounded-md">
                  <span className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                    空室解消
                  </span>
                </div>
                <span className="text-gray-800 text-lg lg:text-xl font-semibold">
                  を
                </span>
                <div className=" bg-white text-gray-800 shadow-lg shadow-gray-400 px-1 py-2 md:px-4  rounded-md">
                  <span className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                    サポート
                  </span>
                </div>

              </div>
              <div className=' border-t-4 border-green-800 border-dotted w-3/4 mb-6'>

              </div>
              {/* スローガン */}
              <div className="flex flex-col items-center justify-center">
                <span className="text-green-800 text-2xl md:text-4xl lg:text-5xl font-extrabold mb-1">
                  イエスリノベーション
                </span>
              </div>
            </div>

            {/* 右中のバッジ */}
            <div
              className="absolute flex items-center justify-center bottom-0 -right-[40%] md:-right-[45%] lg:-right-[60%] z-10 w-full h-3/5">
              <Image
                src="/img/Hero5006_Woman_1.png"
                alt="Background Left"
                fill
                className=" object-contain object-center"
                priority
              />
            </div>
            {/* 左のバッジ */}
            <div
              className="absolute left-[12%] -bottom-[30px] lg:-bottom-[40px] z-30"
            >
              <div className="relative flex flex-col items-center justify-center"
                style={{
                  width: 'clamp(120px, 24vw, 160px)',
                  height: 'clamp(80px, 18vw, 160px)',
                }}>
                <Image
                  src="/img/Hero5006_Icon_1.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />

                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-2" style={{ paddingTop: '8%', paddingBottom: '8%' }}>
                  {/* テキスト */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center" style={{ paddingTop: '10%', paddingBottom: '8%' }}>
                    <span className="text-white rounded-full bg-yellow-600 font-bold text-[10px] md:text-xl px-2 lg:px-4">専門の</span><br />
                    <span className="text-yellow-600 font-bold text-lg md:text-3xl lg:text-4xl -mt-5">2.5<span className=" text-[12px] md:text-xl">万円/㎡</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* 中央のバッジ */}
            <div
              className="absolute -bottom-[30px] lg:-bottom-[40px] left-[37%] lg:left-[39%] z-30"
            >
              <div
                style={{
                  width: 'clamp(120px, 24vw, 160px)',
                  height: 'clamp(80px, 18vw, 160px)',
                }}>
                <Image
                  src="/img/Hero5006_Icon_2.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-4" style={{ paddingTop: '8%', paddingBottom: '8%' }}>
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center" style={{ paddingTop: '10%', paddingBottom: '8%' }}>
                    <span className="text-white rounded-full bg-yellow-600 font-bold text-[10px] md:text-xl px-2 lg:px-4">家賃平均</span><br />
                    <span className="text-yellow-600 font-bold text-xl md:text-3xl lg:text-4xl -mt-5">9<span className=" text-[12px] md:text-xl">%</span><span className="text-yellow-600 font-bold text-xl md:text-3xl lg:text-4xl -mt-5">UP</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* 右のバッジ */}
            <div
              className="absolute -bottom-[30px] lg:-bottom-[40px] right-[12%] z-30"
            >
              <div
                style={{
                  width: 'clamp(120px, 24vw, 160px)',
                  height: 'clamp(80px, 18vw, 160px)',
                }}>
                <Image
                  src="/img/Hero5006_Icon_3.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
                {/* テキスト */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-1 lg:px-4" style={{ paddingTop: '8%', paddingBottom: '8%' }}>
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center" style={{ paddingTop: '10%', paddingBottom: '8%' }}>
                    <span className="text-white rounded-full bg-yellow-600 font-bold text-[8px] md:text-xl px-2">リピート率</span><br />
                    <span className="text-yellow-600 font-bold text-xl md:text-3xl lg:text-4xl -mt-5">85<span className=" text-[12px] md:text-xl">%以上</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 緑のバンド */}
      <div className="relative w-full bg-white overflow-visible z-0 mt-12">
        {/* 女性の画像 - 中央円の右下、緑のエリア内に配置 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
          <div className="flex items-center justify-center l gap-4">
            <div className="text-center">
              <button className="bg-yellow-500  text-white px-8 md:px-12 lg:px-16 py-3  mt-4 rounded-full text-md md:text-xl lg:text-2xl font-bold hover:bg-yellow-700 transition-all shadow-lg flex items-center gap-3 mx-auto">
                <span>お見積り・お問い合わせはこちら</span>
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              </button>
              <div className='flex flex-row items-center justify-center gap-2 m-2 lg:m-6 border-amber-400 border-2 rounded-full p-2'>
                <Phone className="w-4 h-4 md:w-6 md:h-6 text-amber-400" />
                <a
                  href="tel:0120-868-986"
                  className="text-md md:text-2xl lg:text-3xl font-bold text-yellow-500 hover:text-orange-600 transition-colors"
                >
                  03-5843-1144<span className=' text-[10px] md:text-lg lg:text-xl text-black'>(平日/9:00~18:00)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >

  );
}

