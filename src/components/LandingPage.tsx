import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import svgPaths from "../imports/svg-1s9gg7jg7d";
import imgRectangle6114 from "figma:asset/b464a3b109471cb0cfda7041da7aa8de0b9ba1b2.png";
import imgRectangle6115 from "figma:asset/3085e7eb8f38ae3bb545b23289db207411d6aae4.png";
import imgRectangle6112 from "figma:asset/beb371c7e57f209f798dc99e35f3bc4e53c232cb.png";
import img021 from "figma:asset/bbcfdd12bda2d5caaf51e2c8c0f40ad7e7bd471a.png";
import imgMyCard from "figma:asset/8f5918f97995187b51ec4a92d6ee9adfb07bae41.png";
import imgDeepPurple from "figma:asset/87546b24b870fb4dfb3d0cd4d57ed69fd4d54037.png";
import imgMyCard1 from "figma:asset/65f4750f55746b9276e5aadc44796a40910ff6d7.png";
import imgMyCard2 from "figma:asset/5fa5c857b528fdc9188c8e7ecc761ccda12aa0e7.png";
import imgSection from "figma:asset/276ae741e3542bf9c39b3ef8edc48efdaac04a30.png";
import React from "react";
import "../styles/landing-768.css"

// --- Shared Components ---

function ButtonArrow({
  color = "#1C1E22",
}: {
  color?: string;
}) {
  return (
    <div className="bg-white overflow-clip relative rounded-[10000px] shrink-0 size-[32px]">
      <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <path d={svgPaths.pa45e380} fill={color} />
        </svg>
      </div>
      <div className="absolute left-[calc(50%-30px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <path d={svgPaths.pa45e380} fill={color} />
        </svg>
      </div>
    </div>
  );
}

function RollingCurrencyImages() {
  return (
    <motion.div
      className="absolute content-stretch flex flex-col gap-[50px] items-start left-[57px] top-[15px] w-[80px]"
      animate={{ y: [0, 0, -130, -130, -260, -260, -390] }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: [
          "linear",
          "easeInOut",
          "linear",
          "easeInOut",
          "linear",
          "easeInOut",
        ],
        times: [0, 0.2, 0.333, 0.533, 0.666, 0.866, 1],
      }}
    >
      {[
        imgRectangle6114,
        imgRectangle6115,
        imgRectangle6112,
        imgRectangle6114,
      ].map((src, i) => (
        <div key={i} className="relative shrink-0 size-[80px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
          >
            <img
              alt=""
              className="absolute max-w-none object-50%-50% object-cover size-full"
              src={src}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full relative shrink-0"
    >
      {children}
    </motion.div>
  );
}

// --- Sections ---

function NavigationBar() {
  const scrollToCTA = () => {
    const element = document.getElementById('bottom-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full border-b border-transparent bg-[rgba(255,255,255,0.96)] backdrop-blur-[4px]">
      <div className="header-wrap w-full max-w-[1280px] mx-auto px-[16px] py-[16px] flex items-center justify-between">
        {/* Logo */}
        <div className="header-logo h-[32px] relative shrink-0 w-[146.862px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 147 32"
          >
            <g>
              <g>
                <path
                  d={svgPaths.pdbd4f80}
                  fill="var(--fill-0, white)"
                />
                <path
                  d={svgPaths.pdbd4f80}
                  fill="url(#paint0_linear_nav_logo)"
                />
              </g>
              <g>
                <path d={svgPaths.p364a0cf0} fill="#1C1E22" />
                <path d={svgPaths.p2256500} fill="#1C1E22" />
                <path d={svgPaths.paf2a700} fill="#1C1E22" />
                <path d={svgPaths.p6f78d00} fill="#1C1E22" />
                <path d={svgPaths.p265a80} fill="#1C1E22" />
                <path d={svgPaths.p27445100} fill="#1C1E22" />
                <path d={svgPaths.p22e3b000} fill="#1C1E22" />
                <path d={svgPaths.p37c36b00} fill="#1C1E22" />
              </g>
            </g>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_nav_logo"
                x1="16.9795"
                x2="16.9795"
                y1="0"
                y2="32"
              >
                <stop stopColor="#FA1155" />
                <stop offset="1" stopColor="#EB058F" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* CTA Button */}
        <motion.div 
          whileTap={{ scale: 0.95 }}
          onClick={scrollToCTA}
          className="header-btn flex content-stretch gap-[16px] items-center justify-center pl-[18px] pr-[14px] py-[10px] relative rounded-[32px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[32px]"
          >
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-[#FA1155] to-[#EB058F]" />
            <div className="absolute bg-gradient-to-b from-[15.104%] from-[rgba(255,255,255,0.1)] inset-0 mix-blend-soft-light rounded-[32px] to-[rgba(0,0,0,0.01)]" />
          </div>
          <p className="header-btn-text font-['Pretendard:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fbf9f9] text-[16px] text-nowrap whitespace-pre">
            지금 참여하기
          </p>
          <div className="scale-100 flex items-center justify-center">
            <ButtonArrow color="#FA1155" />
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_14px_0px_inset_rgba(255,255,255,0.2)]" />
        </motion.div>
      </div>
    </div>
  );
}

function HeroSection() {
  const scrollToCTA = () => {
    const element = document.getElementById('bottom-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="hero-section h-[960px] overflow-visible relative shrink-0 w-full"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgb(255, 226, 226) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      {/* Content Container */}
      <div className="relative overflow-hidden size-full max-w-[1280px] mx-auto md:px-[16px] px-[32px]">
        {/* Background Image */}
        <div className="here-img-box absolute bottom-[24px] h-[846px] right-[-267px] w-[1269px] pointer-events-none">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={img021}
          />
        </div>

        <div className="hero-title-box absolute content-stretch flex flex-col gap-[60px] items-start top-[140px]">
          {/* Text Block */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0">
              <p className="hero-title font-['Pretendard:SemiBold',sans-serif] leading-[80px] not-italic relative shrink-0 text-[#1c1e22] text-[64px] text-nowrap tracking-[-2.56px] whitespace-pre">
                당신의 일상이
              </p>
            </div>
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
              <div className="hero-rolling bg-[#1c1e22] h-[110px] overflow-clip relative rounded-[999px] shrink-0 w-[193px]">
                <RollingCurrencyImages />
                <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_14px_0px_inset_rgba(255,255,255,0.2),0px_16px_28px_0px_inset_rgba(0,0,0,0.04)]" />
              </div>
              <p className="hero-title font-['Pretendard:SemiBold',sans-serif] leading-[80px] not-italic relative shrink-0 text-[#1c1e22] text-[64px] text-nowrap tracking-[-2.56px] whitespace-pre">
                수익이 됩니다.
              </p>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <p className="hero-title font-['Pretendard:SemiBold',sans-serif] leading-[80px] not-italic relative shrink-0 text-[64px] text-nowrap tracking-[-2.56px] whitespace-pre">
                <span className="text-[#fa1155]">밋밋</span>
                <span className="text-[#1c1e22]">
                  과 함께 시작하세요.
                </span>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
              {/* Button 1 */}
              <motion.div 
                whileTap={{ scale: 0.95 }}
                onClick={scrollToCTA}
                className="bg-[#1c1e22] content-stretch flex gap-[16px] items-center justify-center pl-[18px] pr-[14px] py-[12px] relative rounded-[32px] shadow-[0px_4px_24px_0px_rgba(46,60,82,0.12)] shrink-0 cursor-pointer"
              >
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fbf9f9] text-[16px] text-nowrap whitespace-pre">
                  참여하기
                </p>
                <ButtonArrow color="#1C1E22" />
                <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_14px_0px_inset_rgba(255,255,255,0.2)]" />
              </motion.div>

              {/* Button 2 (Gradient) */}
              <motion.div 
                whileTap={{ scale: 0.95 }}
                onClick={scrollToCTA}
                className="content-stretch flex gap-[16px] items-center justify-center pl-[18px] pr-[14px] py-[12px] relative rounded-[32px] shadow-[0px_4px_24px_0px_rgba(46,60,82,0.12)] shrink-0 cursor-pointer"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none rounded-[32px]"
                >
                  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-[#FA1155] to-[#EB058F]" />
                  <div
                    className="absolute inset-0 mix-blend-soft-light rounded-[32px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 15.1%, rgba(0, 0, 0, 0.01) 100%)",
                    }}
                  />
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
                  수익형 영상채팅 시작하기
                </p>
                <ButtonArrow color="#FA1155" />
                <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_14px_0px_inset_rgba(255,255,255,0.2)]" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="gradient-white absolute bottom-0 h-[430px] left-0 w-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
        }}
      />
    </div>
  );
}

function FeatureSection() {
  const scrollToCTA = () => {
    const element = document.getElementById('bottom-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FeatureMockup = ({
    img,
    bgImage,
  }: {
    img: string;
    bgImage?: boolean;
  }) => (
    <div className="feature-mockup bg-[#f1f1f1] overflow-clip relative rounded-[32px] shrink-0 size-[518px]">
      <div className="absolute h-[652.903px] left-1/2 top-[calc(50%+166.45px)] translate-x-[-50%] translate-y-[-50%] w-[320px]">
        {bgImage && (
          <div className="absolute h-[80px] left-[71px] top-[167px] w-[375px]" />
        )}
        <div className="absolute h-[625.634px] left-1/2 rounded-[18.641px] top-[14.25px] translate-x-[-50%] w-[288.932px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[18.641px] size-full"
            src={img}
          />
        </div>
        <div className="absolute bottom-[0.11%] left-0 right-0 top-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-full left-0 max-w-none top-0 w-[100.23%]"
              src={imgDeepPurple}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const FeatureContent = ({
    iconImg,
    title1,
    title2,
    desc,
    isReversed,
  }: {
    iconImg: string;
    title1: string;
    title2: string;
    desc: React.ReactNode;
    isReversed?: boolean;
  }) => (
    <div
      className="feature-text-box relative w-full max-w-[580px]"
    >
      <div className="flex flex-col justify-center size-full">
        <div
          className="content-stretch flex flex-col gap-[44px] items-start justify-center relative w-full"
        >
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="relative shrink-0 size-[88px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
              >
                <img
                  alt=""
                  className="absolute max-w-none object-50%-50% object-cover size-full"
                  src={iconImg}
                />
              </div>
            </div>
            <div className="feature-title font-['Pretendard:Bold',sans-serif] leading-[58px] min-w-full not-italic relative shrink-0 text-[#1c1e22] text-[44px] w-[min-content]">
              <p className="mb-0">{title1}</p>
              <p>{title2}</p>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="font-['Pretendard:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#7d8a9f] text-[18px] w-full">
                {desc}
              </div>
            </div>
          </div>
          <motion.div 
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCTA}
            className="feature-btn bg-[#1c1e22] flex gap-[16px] items-center justify-center pl-[18px] pr-[14px] py-[12px] relative rounded-[32px] shrink-0 cursor-pointer"
          >
            <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] text-[#fbf9f9] text-[14px] whitespace-nowrap">
              지금 참여하기
            </p>
            <ButtonArrow color="#1C1E22" />
          </motion.div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start py-[20px] relative w-full">
        <div className="bg-neutral-100 relative rounded-[40px] shrink-0 w-full max-w-[1280px] mx-auto">
          <div className="feature-wrap content-stretch flex flex-col items-center justify-center relative w-full gap-[24px] px-[40px] py-[60px]">
            {/* Feature 1 */}
            <FadeInSection>
              <div className="bg-white relative rounded-[32px] shrink-0 w-full max-w-[1280px]">
                <div className="feature-card content-stretch flex gap-[40px] justify-between items-center p-[20px] relative w-full flex-nowrap">
                  <FeatureMockup img={imgMyCard} />
                  <FeatureContent
                    iconImg={imgRectangle6115}
                    title1="영상통화만으로"
                    title2="수익 창출"
                    desc={
                      <>
                        <p className="mb-0">
                          1분에 500포인트라면 한 시간만 대화해도
                          3만 포인트가 쌓여요.
                        </p>
                        <p className="mb-0">
                          하루만 집중해도 10만 원 이상은 충분하고,
                          실제로 많은 파트너들이
                        </p>
                        <p>이렇게 꾸준히 수익을 만들고 있어요.</p>
                      </>
                    }
                  />
                </div>
              </div>
            </FadeInSection>

            {/* Feature 2 */}
            <FadeInSection>
              <div className="bg-white relative rounded-[32px] shrink-0 w-full max-w-[1280px]">
                <div className="feature-card reverse content-stretch flex gap-[40px] justify-between items-center pl-[60px] pr-[20px] py-[20px] relative w-full flex-nowrap">
                  <FeatureContent
                    iconImg={imgRectangle6114}
                    title1="자유로운 포인트"
                    title2="설정 & 정산 시스템"
                    isReversed
                    desc={
                      <>
                        <p className="mb-0">
                          원하는 시간과 가격에 맞춰 포인트를 직접 조절할 수 있어요.
                        </p>
                        <p className="mb-0">
                          정산 주기도 규칙적이라 수익 관리가 편하고,
                        </p>
                        <p>
                          투명한 정산 시스템 덕분에 믿고 이용할 수 있어요.
                        </p>
                      </>
                    }
                  />
                  <FeatureMockup img={imgMyCard1} />
                </div>
              </div>
            </FadeInSection>

            {/* Feature 3 */}
            <FadeInSection>
              <div className="bg-white relative rounded-[32px] shrink-0 w-full max-w-[1280px]">
                <div className="feature-card content-stretch flex gap-[40px] justify-between items-center p-[20px] relative w-full flex-nowrap">
                  <FeatureMockup img={imgMyCard2} bgImage />
                  <FeatureContent
                    iconImg={imgRectangle6112}
                    title1="본인 인증 기반의"
                    title2="안전한 대화 환경 제공"
                    desc={
                      <>
                        <p className="mb-0">
                          철저한 본인 인증으로 불건전 유저를 차단해 안전하게 이용할 수 있어요.
                        </p>
                        <p className="mb-0">
                          익명이나 별칭으로 활동하니 개인정보 노출 걱정도 없고,
                        </p>
                        <p>
                          혹시 문제가 생기면 안전 매니저가 바로 대응해드려요.
                        </p>
                      </>
                    }
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfitSection() {
  const CurrencyIcon = ({ symbol }: { symbol: string }) => (
    <div
      className={`price-stat-icon content-stretch flex items-center overflow-clip p-[8px] relative rounded-[2000px] shrink-0`}
      style={{
        backgroundImage:
          "linear-gradient(215deg, rgb(250, 17, 85) 0%, rgb(235, 5, 143) 100%)",
      }}
    >
      <div className={`price-stat-unit flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] ${symbol === '₩' ? 'text-[25px]' : 'text-[28px]'} text-center text-white`}>
        <p className="leading-[40px]">{symbol}</p>
      </div>
    </div>
  );

  const CountUp = ({ to }: { to: number }) => {
    const nodeRef = React.useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-20%" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

    React.useEffect(() => {
      if (isInView) {
        const controls = animate(count, to, { duration: 2, ease: "easeOut" });
        return controls.stop;
      }
    }, [isInView, to, count]);

    return <motion.span ref={nodeRef}>{rounded}</motion.span>;
  };

  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-0 pt-[12px] relative w-full">
        <div className="relative rounded-[56px] shrink-0 w-full max-w-[1280px] mx-auto overflow-hidden">
          {/* Background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[56px]"
          >
            <div className="absolute bg-[#1c1e22] inset-0 rounded-[56px]" />
            <img
              alt=""
              className="absolute max-w-none mix-blend-luminosity object-50%-50% object-cover opacity-[0.04] rounded-[56px] size-full"
              src={imgSection}
            />
          </div>

          <div className="price-wrap content-stretch flex flex-col items-center justify-center relative w-full gap-[60px] px-[120px] py-[80px]">
            {/* Header */}
            <div className="price-box content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-full">
              <div className="relative shrink-0 size-[72px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 72 72"
                >
                  <g>
                    <rect
                      fill="url(#paint0_linear_profit)"
                      height="72"
                      rx="36"
                      width="72"
                    />
                    <rect
                      fill="url(#paint1_linear_profit)"
                      fillOpacity="0.1"
                      height="72"
                      rx="36"
                      style={{ mixBlendMode: "soft-light" }}
                      width="72"
                    />
                    <path d={svgPaths.p25126d70} fill="white" />
                  </g>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_profit"
                      x1="72"
                      x2="44.0629"
                      y1="71.9999"
                      y2="38.2605"
                    >
                      <stop stopColor="#EB058F" />
                      <stop offset="0.66" stopColor="#FA1155" />
                      <stop offset="1" stopColor="#FA1155" />
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint1_linear_profit"
                      x1="36"
                      x2="36"
                      y1="0"
                      y2="72"
                    >
                      <stop
                        offset="0.151042"
                        stopColor="white"
                      />
                      <stop offset="1" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="price-text font-['Pretendard:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[40px] text-white w-full">
                <span className="font-['Pretendard:ExtraLight',sans-serif]">
                  셀럽이 아니어도 괜찮아요.
                </span>
                <br />
                <div className="price-text-bold flex gap-[16px]">
                  <span>평범한 일상 속 대화로도</span>
                  <span>수익을 만들 수 있습니다.</span>
                </div>

              </p>
            </div>

            {/* Stats */}
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                {/* Stat 1 */}
                <div className="price-stat basis-0 content-stretch flex flex-col gap-[8px] grow items-end justify-center min-h-px min-w-px relative shrink-0">
                  <p className="price-stat-tit font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7d8a9f] text-[16px] text-center text-nowrap whitespace-pre">
                    1분 영상통화
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                    <p className="price-stat-am font-['Play:Bold',sans-serif] leading-[56px] not-italic relative text-[40px] text-center text-nowrap text-white whitespace-pre">
                      <CountUp to={500} />
                    </p>
                    <CurrencyIcon symbol="P" />
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="price-stat basis-0 content-stretch flex flex-col gap-[8px] grow items-end justify-center min-h-px min-w-px relative shrink-0">
                  <p className="price-stat-tit font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7d8a9f] text-[16px] text-center text-nowrap whitespace-pre">
                    500P 환산 금액
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                    <p className="price-stat-am font-['Play:Bold',sans-serif] leading-[56px] not-italic relative text-[40px] text-center text-nowrap text-white whitespace-pre">
                      <CountUp to={30000} />
                    </p>
                    <CurrencyIcon symbol="₩" />
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="price-stat basis-0 content-stretch flex flex-col gap-[8px] grow items-end justify-center min-h-px min-w-px relative shrink-0">
                  <p className="price-stat-tit font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7d8a9f] text-[16px] text-center text-nowrap whitespace-pre">
                    1시간 당 최대
                  </p>
                  <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                    <p className="price-stat-am font-['Play:Bold',sans-serif] leading-[56px] not-italic relative text-[40px] text-center text-nowrap text-white whitespace-pre">
                      <CountUp to={100000} />
                    </p>
                    <CurrencyIcon symbol="₩" />
                  </div>
                </div>
              </div>
              <p className="price-text-sm font-['Pretendard:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c8c8c8] text-[14px] text-right w-full">
                <span>{`영상 통화 비용은 셀럽 직접 설정할 수 있으며, 상황에 따라 시간당 `}</span>
                <div>
                  <span className="font-['Pretendard:Bold',sans-serif]">
                    10만 원 이상 수익
                  </span>
                  을 얻는 것도 가능합니다.
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomCTA() {
  const [inputValue, setInputValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const subject = "밋밋 서비스 신청/문의";
      const body = `입력해주신 ID: ${inputValue}`;
      
      const isConfirmed = window.confirm("메일 앱을 열어 문의 내용을 전송하시겠습니까?\n앱이 실행되면 '보내기' 버튼을 꼭 눌러주세요.");
      
      if (isConfirmed) {
        window.location.href = `mailto:help@bleustudio.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setInputValue("");
      }
    }
  };

  return (
    <div id="bottom-cta" className="bg-white w-full max-w-[1280px] mx-auto px-0 py-[100px] flex flex-col gap-[32px] items-center relative shrink-0">
      {/* Icon with Pointer */}
      <div className="flex flex-col items-center pb-[12px] pt-0 px-0 relative shrink-0">
        <div className="flex items-center justify-center mb-[-12px] relative shrink-0 z-10">
          <motion.div
            animate={{
              scale: [1, 1, 0.95, 1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.35, 0.45, 0.55, 1],
            }}
            className="flex items-center justify-center p-[16px] relative rounded-[20px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 bg-white origin-center"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none rounded-[20px]"
            >
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[#FA1155] to-[#EB058F]" />
              <div
                className="absolute inset-0 mix-blend-soft-light rounded-[20px]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 15.1%, rgba(0, 0, 0, 0.01) 100%)",
                }}
              />
            </div>
            <div className="relative shrink-0 size-[96px] translate-y-[6px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 114 113"
              >
                <g filter="url(#filter0_diii_logo)">
                  <path d={svgPaths.p11a3b800} fill="white" />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="109"
                    id="filter0_diii_logo"
                    width="113.714"
                    x="0"
                    y="3.5"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="8" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      mode="normal"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx="-2" dy="-10" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                    />
                    <feBlend
                      in2="shape"
                      mode="normal"
                      result="effect2_innerShadow"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx="3.58264" dy="-3.58264" />
                    <feGaussianBlur stdDeviation="1.27952" />
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
                    />
                    <feBlend
                      in2="effect2_innerShadow"
                      mode="normal"
                      result="effect3_innerShadow"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx="-10" dy="-49" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.995608 0 0 0 0 0.975877 0 0 0 0 0.987058 0 0 0 1 0"
                    />
                    <feBlend
                      in2="effect3_innerShadow"
                      mode="normal"
                      result="effect4_innerShadow"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{
            y: [0, -8, 0, 0, 0],
            x: [0, -4, 0, 0, 0],
            scale: [1, 1, 0.8, 1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.45, 0.55, 1],
          }}
          className="mb-[-12px] relative size-[30px] z-20 origin-top-left"
        >
             <svg
               className="block size-full"
               fill="none"
               preserveAspectRatio="none"
               viewBox="0 0 32 40"
             >
               <g filter="url(#filter0_d_pointer)">
                  <path d={svgPaths.p2e748100} fill="white" />
                  <path d={svgPaths.p1a7a8700} fill="#1C1E22" />
                  <path d={svgPaths.p130cbf80} fill="#1C1E22" />
                  <path d={svgPaths.p3038cf80} fill="#1C1E22" />
                  <path d={svgPaths.p2a89cc80} fill="#1C1E22" />
               </g>
               <defs>
                 <filter
                   colorInterpolationFilters="sRGB"
                   filterUnits="userSpaceOnUse"
                   height="39.5957"
                   id="filter0_d_pointer"
                   width="31.6"
                   x="0"
                   y="0"
                 >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      mode="normal"
                      result="shape"
                    />
                 </filter>
               </defs>
             </svg>
        </motion.div>
      </div>

      <div className="flex flex-col gap-[16px] items-center w-full max-w-[800px]">
        <p className="contact-title font-['Pretendard:Bold',sans-serif] leading-[58px] text-[#1c1e22] text-[44px] text-center w-full">
          <span>밋밋은 당신의 시간을</span> <span>가치 있게 만듭니다.</span>
        </p>
        <div className="flex flex-col gap-[8px] items-center w-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[32px] text-[#7d8a9f] text-[20px] text-center w-full">
            대화로 수익이 되는 순간, 지금 바로 밋밋하세요 !
          </p>
          {/* Social Icons */}
          <div className="flex items-center justify-center py-[12px] w-full gap-[12px]">
            {[
              {
                path: svgPaths.p232ff180,
                path2: svgPaths.pbfc4100,
              },
              {
                path: svgPaths.p17be9980,
                path2: svgPaths.p38828400,
              },
              { path: svgPaths.p2e2c780 },
            ].map((paths, i) => (
              <div key={i} className="flex items-center">
                <div className="flex gap-[8px] items-center justify-center opacity-60 relative rounded-[32px] shrink-0 size-[48px]">
                  <div className="relative shrink-0 size-[24px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <path
                          d={paths.path}
                          fill="#7D8A9F"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                        {paths.path2 && (
                          <path
                            d={paths.path2}
                            fill={i === 0 ? "white" : "#7D8A9F"}
                          />
                        )}
                      </g>
                    </svg>
                  </div>
                </div>
                {i < 2 && (
                  <div className="bg-[#f1f1f1] h-[12px] shrink-0 w-px" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[768px]">
          <div
            className="relative rounded-[42px] w-full p-1"
            style={{
              backgroundColor: "rgba(0, 62, 129, 0.02)",
            }}
          >
            <div
              aria-hidden="true"
              className={`absolute border-solid inset-0 pointer-events-none rounded-[42px] transition-all duration-200 ${isFocused ? 'border-[2px] border-[#FA1155]' : 'border border-[rgba(0,62,129,0.08)]'}`}
            />
            <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center p-[12px] w-full">
               <div className="flex flex-row items-center justify-between w-full gap-0 pl-8">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="인스타그램 ID 또는 카카오톡 ID를 입력해 주세요."
                    className="font-['Pretendard:Regular',sans-serif] text-[#1c1e22] placeholder-[#8ea0ac] text-[20px] text-left bg-transparent border-none outline-none w-full h-[60px]"
                  />
                  <button type="submit" className="flex items-center justify-center p-[16px] relative rounded-[30px] shadow-[0px_4px_8px_0px_rgba(0,178,106,0.12)] cursor-pointer bg-transparent border-none">
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        className="absolute inset-0"
                    >
                        <div
                        aria-hidden="true"
                        className="absolute inset-0 pointer-events-none rounded-[30px]"
                        >
                        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-b from-[#FA1155] to-[#EB058F]" />
                        <div
                            className="absolute inset-0 mix-blend-soft-light rounded-[30px]"
                            style={{
                            backgroundImage:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 15.1%, rgba(0, 0, 0, 0.01) 100%)",
                            }}
                        />
                        </div>
                    </motion.div>
                    <div className="relative shrink-0 size-[28px] pointer-events-none">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 28 28"
                      >
                        <path
                          d={svgPaths.p3e326680}
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
               </div>
            </form>
          </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white w-full relative shrink-0">
      <div className="w-full max-w-[1280px] mx-auto px-[24px] py-[60px]">
        <div className="footer-wrap flex flex-row items-end justify-between w-full gap-0">
          {/* Logo & Description */}
          <div className="footer-logo flex flex-col gap-[28px] items-start w-[512px]">
            <div className="h-[32px] relative shrink-0 w-[146.862px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 147 32"
              >
                <g>
                  <g>
                    <path
                      d={svgPaths.pdbd4f80}
                      fill="var(--fill-0, white)"
                    />
                    <path
                      d={svgPaths.pdbd4f80}
                      fill="url(#paint0_linear_footer)"
                    />
                  </g>
                  <g>
                    <path d={svgPaths.p364a0cf0} fill="#1C1E22" />
                    <path d={svgPaths.p2256500} fill="#1C1E22" />
                    <path d={svgPaths.paf2a700} fill="#1C1E22" />
                    <path d={svgPaths.p6f78d00} fill="#1C1E22" />
                    <path d={svgPaths.p265a80} fill="#1C1E22" />
                    <path d={svgPaths.p27445100} fill="#1C1E22" />
                    <path d={svgPaths.p22e3b000} fill="#1C1E22" />
                    <path d={svgPaths.p37c36b00} fill="#1C1E22" />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_footer"
                    x1="16.9795"
                    x2="16.9795"
                    y1="0"
                    y2="32"
                  >
                    <stop stopColor="#FA1155" />
                    <stop offset="1" stopColor="#EB058F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="footer-menu flex flex-wrap gap-[8px] items-center text-[15px] text-nowrap w-full">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[#7d8a9f]">
                  이용약관
                </p>
                <p className="font-['Pretendard:Regular',sans-serif] text-[#e1e1e1]">
                  |
                </p>
                <p className="font-['Pretendard:Bold',sans-serif] text-[#2e3c52]">
                  개인정보처리방침
                </p>
                <p className="font-['Pretendard:Regular',sans-serif] text-[#e1e1e1]">
                  |
                </p>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[#7d8a9f]">
                  운영정책
                </p>
              </div>
              <div className="footer-info flex flex-wrap gap-[8px] gap-x-4 items-start w-full">
                <div className="flex gap-[4px] items-center text-[#7d8a9f] text-[14px]">
                  <p className="font-['Pretendard:Medium',sans-serif]">
                    상호 :
                  </p>
                  <p className="font-['Pretendard:Regular',sans-serif]">
                    (주)신아국제교류센터한국지사
                  </p>
                </div>
                <div className="flex gap-[4px] items-center text-[#7d8a9f] text-[14px]">
                  <p className="font-['Pretendard:Medium',sans-serif]">
                    대표 :
                  </p>
                  <p className="font-['Pretendard:Regular',sans-serif]">
                    안영상
                  </p>
                </div>
                <div className="flex gap-[4px] items-center text-[#7d8a9f] text-[14px]">
                  <p className="font-['Pretendard:Medium',sans-serif]">
                    주소 :
                  </p>
                  <p className="font-['Pretendard:Regular',sans-serif]">
                    경기도 용인시 기흥구 구갈로60번길 9-1, 6층
                    602-에이64호
                  </p>
                </div>
                <div className="flex gap-[4px] items-center text-[#7d8a9f] text-[14px]">
                  <p className="font-['Pretendard:Medium',sans-serif]">
                    사업자 등록번호 :
                  </p>
                  <p className="font-['Pretendard:Regular',sans-serif]">
                    438-860-3453
                  </p>
                </div>
                <div className="flex gap-[4px] items-center text-[#7d8a9f] text-[14px]">
                  <p className="font-['Pretendard:Medium',sans-serif]">
                    통신판매업 신고번호 :
                  </p>
                  <p className="font-['Pretendard:Regular',sans-serif]">
                    2025-용인기흥-02397
                  </p>
                </div>
                <div className="flex gap-[4px] items-center text-[#7d8a9f] text-[14px]">
                  <p className="font-['Pretendard:Medium',sans-serif]">{`이메일 : `}</p>
                  <p className="font-['Pretendard:Regular',sans-serif]">
                    meetmeet.help24@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Buttons */}
          <div className="footer-button flex flex-col gap-[12px] items-end w-auto">
            <div className="flex items-center gap-[12px]">
              {[
                {
                  path: svgPaths.p232ff180,
                  path2: svgPaths.pbfc4100,
                },
                {
                  path: svgPaths.p17be9980,
                  path2: svgPaths.p38828400,
                },
                { path: svgPaths.p2e2c780 },
              ].map((paths, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex gap-[8px] items-center justify-center opacity-60 relative rounded-[32px] shrink-0 size-[48px] cursor-pointer hover:opacity-100 transition-opacity">
                    <div className="relative shrink-0 size-[24px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 24 24"
                      >
                        <g>
                          <path
                            d={paths.path}
                            fill="#7D8A9F"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                          {paths.path2 && (
                            <path
                              d={paths.path2}
                              fill={i === 0 ? "white" : "#7D8A9F"}
                            />
                          )}
                        </g>
                      </svg>
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="bg-[#f1f1f1] h-[12px] shrink-0 w-px" />
                  )}
                </div>
              ))}
            </div>
            <div className="bg-white flex flex-row gap-[40px] items-center pl-[24px] pr-[12px] py-[8px] relative rounded-[32px] shrink-0 w-auto border border-[#f1f1f1]">
              <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] text-[#7d8a9f] text-[13px] whitespace-pre text-left">
                궁금한 내용이 있으신가요?
              </p>
              <motion.div 
                whileTap={{ scale: 0.95 }}
                className="bg-[#1c1e22] flex items-center justify-center px-[28px] py-[12px] relative rounded-[24px] shrink-0 cursor-pointer w-auto hover:bg-black transition-colors"
              >
                <p className="font-['Pretendard:Bold',sans-serif] leading-[20px] text-[14px] text-white whitespace-pre">
                  이메일 문의하기
                </p>
                <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_14px_0px_inset_rgba(255,255,255,0.2)]" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-0 pt-[16px] px-0 relative w-full mt-[16px] border-t border-[#f7f7f7]">
          <p className="font-['Pretendard:Light',sans-serif] leading-[20px] text-[#c1c1c1] text-[14px] text-center">
            <span className="font-['Pretendard:Medium',sans-serif]">{`Copyright © `}</span>
            <span className="font-['Pretendard:Bold',sans-serif]">
              meetmeet
            </span>
            <span className="font-['Pretendard:Bold',sans-serif]">
              .
            </span>
            <span className="font-['Pretendard:Medium',sans-serif]">{` All rights reserved.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [scale, setScale] = React.useState(1);
  const [isMobile, setIsMobile] = React.useState(false);
  const [designWidth, setDesignWidth] = React.useState(1280);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      const baseWidth = 1280;
      const mobileBaseWidth = 768;
      const currentWidth = window.innerWidth;
      const isCurrentMobile = currentWidth <= mobileBaseWidth;
      const targetWidth = isCurrentMobile ? mobileBaseWidth : baseWidth;
      setIsMobile(isCurrentMobile);
      setDesignWidth(targetWidth);
      setScale(Math.min(currentWidth / targetWidth, 1));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (!contentRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="w-full overflow-hidden bg-white flex flex-col items-center"
      style={{ height: height * scale }}
    >
      <div 
        style={{ 
          position: "fixed",
          top: 0, 
          left: "50%",
          width: `${designWidth}px`,
          minWidth: `${designWidth}px`,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 50
        }}
      >
        <NavigationBar />
      </div>

      <div 
        ref={contentRef}
        style={{ 
          width: `${designWidth}px`, 
          minWidth: `${designWidth}px`,
          transform: `scale(${scale})`, 
          transformOrigin: "top center" 
        }}
        className="relative flex flex-col items-center"
      >
        <FadeInSection>
          <HeroSection />
        </FadeInSection>
        <div className="w-full px-[32px] flex flex-col items-center">
          <FeatureSection />
          <FadeInSection>
            <ProfitSection />
          </FadeInSection>
          <FadeInSection>
            <BottomCTA />
          </FadeInSection>
          <FadeInSection>
            <Footer />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
