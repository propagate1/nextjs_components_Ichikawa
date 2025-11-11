'use client';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Hero5000() {
  return (
    <div className="w-full relative overflow-hidden">
      {/* 背景画像 - 左と右を組み合わせ、ぼかし効果 */}


      {/* メインコンテンツエリア */}
      <div className="relative w-full -mt-px" style={{ zIndex: 30 }}>
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* 左側の背景画像 */}
            <div className="absolute left-0 top-0 w-1/2 h-full">
              <Image
                src="/img/Hero5000_Bg_Left.png"
                alt="Background Left"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            {/* 右側の背景画像 */}
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <Image
                src="/img/Hero5000_Bg_Right.png"
                alt="Background Right"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* 白い円形のメインコンテンツエリア */}
          <div className="relative mx-auto" style={{ width: 'min(100vw, 700px)', maxWidth: '700px' }}>
            {/* 完全な円形の白いコンテナ */}
            <div
              className="relative bg-white shadow-2xl p-8 md:p-12 lg:p-16 w-full"
              style={{
                borderRadius: '50%',
                aspectRatio: '1 / 1',
                minHeight: '420px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* 緑のテキスト - 円周の上部に沿って配置 */}
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{ overflow: 'visible' }}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* 円周の上部に沿った円弧パス - 中心(50,50)、半径38で円の内側に配置、上向きの弧 */}
                  <path
                    id="circle-text-path"
                    d="M 10 44 A 39 37 0 0 1 90 44"
                    fill="none"
                    stroke="none"
                  />
                </defs>
                <text
                  className="text-[#84c049] font-bold fill-current"
                  style={{
                    fontSize: '4.0px',
                    letterSpacing: '1.2px',
                  }}
                >
                  <textPath href="#circle-text-path" startOffset="50%" textAnchor="middle" dominantBaseline="middle">
                    | 医療、介護、その他法人事業者様必見! |
                  </textPath>
                </text>
              </svg>

              {/* 指差しアイコン - 円周の上部に配置 */}
              <div
                className="absolute"
                style={{
                  top: '12%',
                  right: '28%',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-[#84c049]"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M10 2 L10 12 M10 2 L6 6 M10 2 L14 6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 12 L6 16 M10 12 L14 16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* メイン見出し - 「最大 1億円まで 調達可能!」 */}
              <div className="flex flex-col items-center justify-center mb-6 md:mb-8">
                <div className="flex items-baseline justify-center gap-1 md:gap-2 mb-2">
                  <span
                    className="text-[#84c049] text-lg md:text-xl lg:text-2xl font-bold"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'upright'
                    }}
                  >
                    最大
                  </span>
                  <span className="text-[#ff9f24] font-bold leading-none flex items-baseline">
                    <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl">1</span>
                    <span className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl">億円</span>
                  </span>
                  <span className="text-[#84c049] text-3xl md:text-4xl lg:text-5xl font-bold">まで</span>
                </div>
                <span className="text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  調達可能!
                </span>
              </div>

              {/* 赤いハイライトボックスとサービス名 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mb-6 md:mb-8">
                <div className="bg-[#c00c06] text-white px-5 py-3 md:px-6 md:py-3 rounded-md">
                  <span className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap">
                    翌営業日調達可能
                  </span>
                </div>
                <span className="text-gray-800 text-base md:text-lg lg:text-xl font-semibold">
                  再生支援ファクタリングサービス
                </span>
              </div>

              {/* スローガン */}
              <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 flex items-baseline">
                  <span className="text-[#ff9f24]">借りる</span>
                  <span className="text-black text-base md:text-lg lg:text-xl">から</span>
                  <span className="text-[#ff9f24]">ファクタリング</span>
                  <span className="text-black text-base md:text-lg lg:text-xl">で</span>
                </span>
                <span className="text-[#ff9f24] text-2xl md:text-3xl lg:text-4xl font-bold">
                  作る時代へ
                </span>
              </div>
            </div>

            {/* 4つのオレンジ円形バッジ - 白い形状の周りに配置 */}
            {/* 左上のバッジ */}
            <div
              className="absolute bg-[#ff9f24] text-white font-bold tracking-widest flex items-center justify-center translate-x-[-1%] translate-y-[-10%] sm:translate-x-[-50%] sm:translate-y-[-10%] md:translate-x-[-90%] md:translate-y-[-10%]"
              style={{
                width: 'clamp(80px, 18vw, 140px)',
                height: 'clamp(80px, 18vw, 140px)',
                borderRadius: '50%',
                top: '10%',
                left: '1%',
                fontSize: 'clamp(12px, 2vw, 20px)',
                textAlign: 'center',
                padding: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                zIndex: 10,
                lineHeight: '1.4',
              }}
            >
              <span>初期<br />審査費用<br />0円</span>
            </div>

            {/* 左中のバッジ */}
            <div
              className="absolute bg-[#ff9f24] text-white font-bold tracking-widest flex items-center justify-center translate-x-[-1%] -translate-y-[50%] sm:translate-x-[-80%] sm:-translate-y-[50%]  md:translate-x-[-130%] md:-translate-y-[80%]"
              style={{
                width: 'clamp(80px, 18vw, 140px)',
                height: 'clamp(80px, 18vw, 140px)',
                borderRadius: '50%',
                top: '50%',
                left: '1%',
                fontSize: 'clamp(12px, 2vw, 20px)',
                textAlign: 'center',
                padding: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                zIndex: 10,
                lineHeight: '1.4',
              }}
            >
              <span>最短<br />翌営業日<br />調達可能</span>
            </div>

            {/* 右上のバッジ */}
            <div
              className="absolute bg-[#ff9f24] text-white font-bold tracking-widest flex items-center justify-center translate-x-[1%] translate-y-[-10%] sm:translate-x-[50%] sm:translate-y-[-10%] md:translate-x-[90%] md:translate-y-[-10%]"
              style={{
                width: 'clamp(80px, 18vw, 140px)',
                height: 'clamp(80px, 18vw, 140px)',
                borderRadius: '50%',
                top: '10%',
                right: '1%',
                fontSize: 'clamp(12px, 2vw, 20px)',
                textAlign: 'center',
                padding: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                zIndex: 10,
                lineHeight: '1.4',
              }}
            >
              <span>日本全国<br />対応</span>
            </div>

            {/* 右中のバッジ */}
            <div
              className="absolute bg-[#ff9f24] text-white font-bold tracking-widest flex items-center justify-center translate-x-[1%] -translate-y-[50%] sm:translate-x-[80%] sm:-translate-y-[50%]  md:translate-x-[130%] md:-translate-y-[80%]"
              style={{
                width: 'clamp(80px, 18vw, 140px)',
                height: 'clamp(80px, 18vw, 140px)',
                borderRadius: '50%',
                top: '50%',
                right: '1%',
                fontSize: 'clamp(12px, 2vw, 20px)',
                textAlign: 'center',
                padding: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                zIndex: 10,
                lineHeight: '1.4',
              }}
            >
              <span>新規<br />事業者も<br />OK</span>
            </div>

            {/* 3つのゴールドバッジ - 中央円の下部に配置 */}
            {/* 左のバッジ */}
            <div
              className="absolute"
              style={{
                bottom: '-30px',
                left: '20%',
                transform: 'translateX(-50%)',
                zIndex: 30,
              }}
            >

              <div className="relative flex flex-col items-center justify-center"
                style={{
                  width: 'clamp(140px, 24vw, 250px)',
                  height: 'clamp(100px, 18vw, 180px)',
                }}>
                <Image
                  src="/img/Hero5000_Badge.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />

              {/* テキスト */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4" style={{ paddingTop: '8%', paddingBottom: '8%' }}>
                {/* 上部テキスト - 黒色、最上部に配置 */}
                <span className="text-black font-bold absolute top-2 text-center" style={{ fontSize: 'clamp(9px, 1.1vw, 13px)', textShadow: '0 0 3px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.7)' }}>最大 <br />10億円まで</span>
                {/* メインテキスト - 赤色、約80%のサイズ */}
                <span className="text-[#c00c06] font-bold absolute top-10 sm:top-10 md:top-12 lg:top-14 text-center leading-tight" style={{ fontSize: 'clamp(14px, 2.8vw, 32px)', textShadow: '0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.7)' }}>
                  買い取り<br />可能
                </span>
              </div>
            </div>
          </div>

          {/* 中央のバッジ */}
          <div
            className="absolute"
            style={{
              bottom: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 30,
            }}
          >
            <div
              style={{
                  width: 'clamp(140px, 24vw, 250px)',
                  height: 'clamp(100px, 18vw, 180px)',
                }}>
                <Image
                  src="/img/Hero5000_Badge.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
              {/* テキスト */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4" style={{ paddingTop: '8%', paddingBottom: '8%' }}>
                {/* 上部テキスト - 黒色、最上部に配置 */}
                <span className="text-black font-bold absolute top-2" style={{ fontSize: 'clamp(9px, 1.1vw, 13px)', textShadow: '0 0 3px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.7)' }}>新規ご契約率</span>
                {/* メインテキスト - 赤色、約80%のサイズ */}
                <span className="text-[#c00c06] font-bold" style={{ fontSize: 'clamp(56px, 5.6vw, 84px)', textShadow: '0 0 5px rgba(255, 255, 255, 0.9), 0 0 10px rgba(255, 255, 255, 0.7)' }}>80</span>
                {/* %超 - 小さな赤色、右下に配置 */}
                <span className="text-[#c00c06] font-bold absolute bottom-2 sm:bottom-3 lg:bottom-4 right-8" style={{ fontSize: 'clamp(20px, 1.6vw, 20px)', textShadow: '0 0 3px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.7)' }}>%超</span>
              </div>
            </div>
          </div>

          {/* 右のバッジ */}
          <div
            className="absolute"
            style={{
              bottom: '-30px',
              right: '20%',
              transform: 'translateX(50%)',
              zIndex: 30,
            }}
          >
            <div
              style={{
                  width: 'clamp(140px, 24vw, 250px)',
                  height: 'clamp(100px, 18vw, 180px)',
                }}>
                <Image
                  src="/img/Hero5000_Badge.png"
                  alt="Background Left"
                  fill
                  className=" object-contain object-center"
                  priority
                />
              {/* テキスト */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4" style={{ paddingTop: '8%', paddingBottom: '8%' }}>
                {/* 上部テキスト - 黒色、最上部に配置 */}
                <span className="text-black font-bold absolute top-2" style={{ fontSize: 'clamp(9px, 1.1vw, 13px)', textShadow: '0 0 3px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.7)' }}>リピート率</span>
                {/* メインテキスト - 赤色、約80%のサイズ */}
                <span className="text-[#c00c06] font-bold" style={{ fontSize: 'clamp(56px, 5.6vw, 84px)', textShadow: '0 0 5px rgba(255, 255, 255, 0.9), 0 0 10px rgba(255, 255, 255, 0.7)' }}>90</span>
                {/* %超 - 小さな赤色、右下に配置 */}
                <span className="text-[#c00c06] font-bold absolute bottom-2 sm:bottom-3 lg:bottom-4 right-8" style={{ fontSize: 'clamp(20px, 1.6vw, 20px)', textShadow: '0 0 3px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.7)' }}>%超</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* 緑のバンド */ }
      <div className="relative w-full bg-[#77be39] py-8 md:py-12 overflow-visible" style={{ marginTop: '-1px', zIndex: 0 }}>
        {/* 女性の画像 - 中央円の右下、緑のエリア内に配置 */}


        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
          <div className="flex flex-col gap-6 md:gap-8">
            {/* 上部セクション - 黄色いバナーと電話番号 */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative">
              {/* 左側: 黄色いバナー（吹き出し風/矢印風） */}
              <div className="relative flex-shrink-0">
                <div
                  className=" bg-[#ffff02] px-6 py-4 md:px-8 md:py-5 relative"
                  style={{
                    borderRadius: '8px 12px 12px 8px',
                    clipPath: 'polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                >
                  <div className="flex flex-col">
                    <span className=" text-[#189b5a] text-xs md:text-sm font-semibold leading-tight tracking-widest text-center">
                      再生支援ファクタリングサービス
                    </span>
                    <span className="text-[#189b5a] text-base md:text-lg lg:text-xl font-bold leading-tight mt-1 tracking-widest text-center">
                      お電話でのご相談はこちら
                    </span>
                  </div>
                </div>
              </div>

              {/* 右側: 電話番号と受付時間 */}
              <div className="flex flex-row items-center justify-center">
                {/* 電話アイコン - 黄色いバナーに少し重なる */}
                <Phone
                  className="w-8 h-8 md:w-10 md:h-10 text-[#f7fd20]"
                />
                {/* 電話番号 */}

                <div className="text-[#f7fd20] text-3xl md:text-4xl lg:text-5xl font-bold transition-colors md:ml-12"
                >
                  <p
                    className='transition-colors scale-y-150 py-4'
                    style={{
                      textShadow: '2px 1px 2px rgba(0,0,0,0.3)',
                    }}>
                    03-5647-7360
                  </p>
                  {/* 受付時間 */}
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-white text-xs md:text-sm font-medium">
                      受付時間 9:00~18:00(日曜日を除く)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 下部セクション - お問い合わせボタン */}
            <div className="flex justify-center  ">
              <div
                className="relative px-12 py-4 md:px-16 md:py-5 rounded-[15px] font-bold text-white text-lg md:text-xl lg:text-2xl transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #189b5a 0%, #2E8B57 100%)',
                  boxShadow: '0 4px 15px rgba(255,255,255,0.6), inset 0 1px 0 rgba(255,255,255,0.4)',
                  border: '2px solid rgba(255, 255, 255, 1)',

                }}
              >
                <span className="flex items-center gap-2 tracking-widest">
                  お問合わせはこちら
                  {/* 再生アイコン（右向きの三角形） */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" fill="#FFFFFF" />
                    <polygon points="26,20 26,44 46,32" fill="#189b5a" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 sm:bottom-24 md:bottom-0 lg:bottom-0 right-0 sm:right-5 md:right-10 lg:right-20 pointer-events-none" style={{ zIndex: 30 }}>
        <div className="relative w-60 h-84 md:w-72 md:h-120 lg:w-120 lg:h-[700px]" style={{ minHeight: '500px' }}>
          <Image
            src="/img/Hero5000_Woman.png"
            alt="Business Woman"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </div >

  );
}

