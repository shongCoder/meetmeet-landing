import svgPaths from "./svg-1s9gg7jg7d";
import imgRectangle6114 from "figma:asset/b765b62d18f45cd37892c5296169e1036154a476.png";
import imgRectangle6115 from "figma:asset/555571f05d8c1e1f8002e607b919a9e3d27c374d.png";
import imgRectangle6112 from "figma:asset/20e21098badd60bff381f15542474479c8b3642d.png";
import img021 from "figma:asset/bbcfdd12bda2d5caaf51e2c8c0f40ad7e7bd471a.png";
import imgMyCard from "figma:asset/8f5918f97995187b51ec4a92d6ee9adfb07bae41.png";
import imgDeepPurple from "figma:asset/87546b24b870fb4dfb3d0cd4d57ed69fd4d54037.png";
import imgMyCard1 from "figma:asset/65f4750f55746b9276e5aadc44796a40910ff6d7.png";
import imgMyCard2 from "figma:asset/5fa5c857b528fdc9188c8e7ecc761ccda12aa0e7.png";
import imgSection from "figma:asset/276ae741e3542bf9c39b3ef8edc48efdaac04a30.png";

function Text() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[80px] not-italic relative shrink-0 text-[#1c1e22] text-[64px] text-nowrap tracking-[-2.56px] whitespace-pre">당신의 일상이</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[50px] items-start left-[57px] top-[15px] w-[80px]" data-name="1">
      <div className="relative shrink-0 size-[80px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle6114} />
          <div className="absolute bg-[#fa1155] inset-0 mix-blend-hue" />
        </div>
      </div>
      <div className="relative shrink-0 size-[80px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle6115} />
          <div className="absolute bg-[#fa1155] inset-0 mix-blend-hue" />
        </div>
      </div>
      <div className="relative shrink-0 size-[80px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle6112} />
          <div className="absolute bg-[#fa1155] inset-0 mix-blend-hue" />
        </div>
      </div>
      <div className="relative shrink-0 size-[80px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle6114} />
          <div className="absolute bg-[#fa1155] inset-0 mix-blend-hue" />
        </div>
      </div>
    </div>
  );
}

function Currency() {
  return (
    <div className="bg-[#1c1e22] h-[110px] overflow-clip relative rounded-[999px] shrink-0 w-[193px]" data-name="Currency">
      <Component />
      <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_14px_0px_inset_rgba(255,255,255,0.2),0px_16px_28px_0px_inset_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="text">
      <Currency />
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[80px] not-italic relative shrink-0 text-[#1c1e22] text-[64px] text-nowrap tracking-[-2.56px] whitespace-pre">수익이 됩니다.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text">
      <p className="font-['Pretendard:Medium',sans-serif] font-['Pretendard:SemiBold',sans-serif] leading-[80px] not-italic relative shrink-0 text-[#1c1e22] text-[0px] text-[64px] text-nowrap tracking-[-2.56px] whitespace-pre">
        <span className="text-[#fa1155]">밋밋</span>과 함께 시작하세요.
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="text">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #1C1E22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute left-[calc(50%-30px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #1C1E22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10000px] shrink-0 size-[32px]" data-name="btn">
      <Component2 />
      <Component1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1c1e22] content-stretch flex gap-[16px] items-center justify-center pl-[18px] pr-[14px] py-[12px] relative rounded-[32px] shadow-[0px_4px_24px_0px_rgba(46,60,82,0.12)] shrink-0" data-name="Button">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fbf9f9] text-[16px] text-nowrap whitespace-pre">참여하기</p>
      <Btn />
      <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_14px_0px_inset_rgba(255,255,255,0.2)]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #FA1155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute left-[calc(50%-30px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #FA1155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn1() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10000px] shrink-0 size-[32px]" data-name="btn">
      <Component3 />
      <Component4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center pl-[18px] pr-[14px] py-[12px] relative rounded-[32px] shadow-[0px_4px_24px_0px_rgba(46,60,82,0.12)] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute inset-0 rounded-[32px]" />
        <div className="absolute bg-gradient-to-b from-[15.104%] from-[rgba(255,255,255,0.1)] inset-0 mix-blend-soft-light rounded-[32px] to-[rgba(0,0,0,0.01)]" />
      </div>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">수익형 영상채팅 시작하기</p>
      <Btn1 />
      <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_14px_0px_inset_rgba(255,255,255,0.2)]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function DescriptionCta() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Description + CTA">
      <Frame30 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[100px] top-[140px]" data-name="Content">
      <Text3 />
      <DescriptionCta />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[960px] overflow-clip relative shrink-0 w-full" data-name="Section" style={{ backgroundImage: "linear-gradient(0deg, rgb(255, 226, 226) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="absolute bottom-[24px] h-[846px] right-[-267px] w-[1269px]" data-name="02 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img021} />
      </div>
      <Content />
      <div className="absolute bottom-0 h-[430px] left-0 w-[1440px]" data-name="overlay" />
    </div>
  );
}

function MyCard() {
  return (
    <div className="absolute h-[625.634px] left-1/2 rounded-[18.641px] top-[14.25px] translate-x-[-50%] w-[288.932px]" data-name="My card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[18.641px] size-full" src={imgMyCard} />
    </div>
  );
}

function Mockup() {
  return (
    <div className="absolute h-[652.903px] left-1/2 top-[calc(50%+99.45px)] translate-x-[-50%] translate-y-[-50%] w-[320px]" data-name="mockup">
      <MyCard />
      <div className="absolute bottom-[0.11%] left-0 right-0 top-0" data-name="Deep Purple">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.23%]" src={imgDeepPurple} />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="bg-[#f1f1f1] overflow-clip relative rounded-[32px] shrink-0 size-[518px]" data-name="img">
      <Mockup />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Pretendard:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#7d8a9f] text-[18px] w-full">
        <p className="mb-0">1분에 500포인트라면 한 시간만 대화해도 3만 포인트가 쌓여요.</p>
        <p className="mb-0">하루만 집중해도 10만 원 이상은 충분하고, 실제로 많은 파트너들이</p>
        <p>이렇게 꾸준히 수익을 만들고 있어요.</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[88px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle6115} />
          <div className="absolute bg-[#fa1155] inset-0 mix-blend-hue" />
        </div>
      </div>
      <div className="font-['Pretendard:Bold',sans-serif] leading-[58px] min-w-full not-italic relative shrink-0 text-[#1c1e22] text-[44px] w-[min-content]">
        <p className="mb-0">영상통화만으로</p>
        <p>수익 창출</p>
      </div>
      <Frame31 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #1C1E22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute left-[calc(50%-30px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #1C1E22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn2() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10000px] shrink-0 size-[32px]" data-name="btn">
      <Component5 />
      <Component6 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1c1e22] content-stretch flex gap-[16px] items-center justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[32px] shrink-0" data-name="Button">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbf9f9] text-[14px] text-nowrap whitespace-pre">지금 참여하기</p>
      <Btn2 />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[44px] items-start justify-center px-[48px] py-0 relative w-full">
          <Frame9 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white relative rounded-[32px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center pb-[32px] pt-[20px] px-[20px] relative w-full">
          <Img />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Pretendard:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#7d8a9f] text-[18px] w-full">
        <p className="mb-0">원하는 시간과 가격에 맞춰 포인트를 직접 조절할 수 있어요.</p>
        <p>정산 주기도 규칙적이라 수익 관리가 편하고, 투명한 정산 시스템 덕분에 믿고 이용할 수 있어요.</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[88px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle6114} />
          <div className="absolute bg-[#fa1155] inset-0 mix-blend-hue" />
        </div>
      </div>
      <div className="font-['Pretendard:Bold',sans-serif] leading-[58px] min-w-full not-italic relative shrink-0 text-[#1c1e22] text-[44px] w-[min-content]">
        <p className="mb-0">자유로운 포인트</p>
        <p>{`설정 & 정산 시스템`}</p>
      </div>
      <Frame32 />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #1C1E22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute left-[calc(50%-30px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #1C1E22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn3() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10000px] shrink-0 size-[32px]" data-name="btn">
      <Component7 />
      <Component8 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#1c1e22] content-stretch flex gap-[16px] items-center justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[32px] shrink-0" data-name="Button">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbf9f9] text-[14px] text-nowrap whitespace-pre">지금 참여하기</p>
      <Btn3 />
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[44px] items-start justify-center px-[80px] py-0 relative w-full">
          <Frame10 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function MyCard1() {
  return (
    <div className="absolute h-[625.634px] left-1/2 rounded-[18.641px] top-[14.25px] translate-x-[-50%] w-[288.932px]" data-name="My card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[18.641px] size-full" src={imgMyCard1} />
    </div>
  );
}

function Mockup1() {
  return (
    <div className="absolute h-[652.903px] left-1/2 top-[calc(50%+99.45px)] translate-x-[-50%] translate-y-[-50%] w-[320px]" data-name="mockup">
      <MyCard1 />
      <div className="absolute bottom-[0.11%] left-0 right-0 top-0" data-name="Deep Purple">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.23%]" src={imgDeepPurple} />
        </div>
      </div>
    </div>
  );
}

function Img1() {
  return (
    <div className="bg-[#f1f1f1] overflow-clip relative rounded-[32px] shrink-0 size-[518px]" data-name="img">
      <Mockup1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white relative rounded-[32px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center pb-[32px] pt-[20px] px-[20px] relative w-full">
          <Text5 />
          <Img1 />
        </div>
      </div>
    </div>
  );
}

function MyCard2() {
  return (
    <div className="absolute h-[625.634px] left-1/2 rounded-[18.641px] top-[14.25px] translate-x-[-50%] w-[288.932px]" data-name="My card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[18.641px] size-full" src={imgMyCard2} />
    </div>
  );
}

function Mockup2() {
  return (
    <div className="absolute h-[652.903px] left-1/2 top-[calc(50%+99.45px)] translate-x-[-50%] translate-y-[-50%] w-[320px]" data-name="mockup">
      <MyCard2 />
      <div className="absolute bottom-[0.11%] left-0 right-0 top-0" data-name="Deep Purple">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[100.23%]" src={imgDeepPurple} />
        </div>
      </div>
    </div>
  );
}

function Img2() {
  return (
    <div className="bg-[#f1f1f1] overflow-clip relative rounded-[32px] shrink-0 size-[518px]" data-name="img">
      <div className="absolute h-[80px] left-[71px] top-[167px] w-[375px]" data-name="Bg" />
      <Mockup2 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#7d8a9f] text-[18px] w-full">철저한 본인 인증으로 불건전 유저를 차단해 안전하게 이용할 수 있어요. 익명이나 별칭으로 활동하니 개인정보 노출 걱정도 없고, 혹시 문제가 생기면 안전 매니저가 바로 대응해드려요.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[88px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgRectangle6112} />
          <div className="absolute bg-[#fa1155] inset-0 mix-blend-hue" />
        </div>
      </div>
      <div className="font-['Pretendard:Bold',sans-serif] leading-[58px] min-w-full not-italic relative shrink-0 text-[#1c1e22] text-[44px] w-[min-content]">
        <p className="mb-0">본인 인증 기반의</p>
        <p>안전한 대화 환경 제공</p>
      </div>
      <Frame33 />
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #1C1E22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute left-[calc(50%-30px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #1C1E22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn4() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10000px] shrink-0 size-[32px]" data-name="btn">
      <Component9 />
      <Component10 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#1c1e22] content-stretch flex gap-[16px] items-center justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[32px] shrink-0" data-name="Button">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fbf9f9] text-[14px] text-nowrap whitespace-pre">지금 참여하기</p>
      <Btn4 />
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[44px] items-start justify-center px-[80px] py-0 relative w-full">
          <Frame11 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white relative rounded-[32px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center pb-[32px] pt-[20px] px-[20px] relative w-full">
          <Img2 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <Content1 />
      <Content2 />
      <Content3 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-neutral-100 relative rounded-[40px] shrink-0 w-full" data-name="Section">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
          <Section1 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[72px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="Frame 22607">
          <rect fill="url(#paint0_linear_1_955)" height="72" rx="36" width="72" />
          <rect fill="url(#paint1_linear_1_955)" fillOpacity="0.1" height="72" rx="36" style={{ mixBlendMode: "soft-light" }} width="72" />
          <path d={svgPaths.p25126d70} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_955" x1="72" x2="44.0629" y1="71.9999" y2="38.2605">
            <stop stopColor="#EB058F" />
            <stop offset="0.66" stopColor="#FA116E" />
            <stop offset="1" stopColor="#FA116E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_955" x1="36" x2="36" y1="0" y2="72">
            <stop offset="0.151042" stopColor="white" />
            <stop offset="1" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[40px] text-white w-full">
        <span className="font-['Pretendard:ExtraLight',sans-serif]">셀럽이 아니어도 괜찮아요.</span>
        <span>
          <br aria-hidden="true" />
          평범한 일상 속 대화로도 수익을 만들 수 있습니다.
        </span>
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-full">
      <Frame7 />
      <Frame37 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Play:Bold',sans-serif] leading-[56px] ml-[35px] mt-0 not-italic relative text-[40px] text-center text-nowrap text-white translate-x-[-50%] whitespace-pre">{`500 `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Group />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[2000px] shrink-0" data-name="icon">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[28px] text-center text-white">
        <p className="leading-[40px]">P</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Frame1 />
      <Icon />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-end justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7d8a9f] text-[16px] text-center text-nowrap whitespace-pre">1분 영상통화</p>
      <Frame38 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Play:Bold',sans-serif] leading-[56px] ml-[63.5px] mt-0 not-italic relative text-[40px] text-center text-nowrap text-white translate-x-[-50%] whitespace-pre">30,000</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Group1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[2000px] shrink-0" data-name="icon">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[28px] text-center text-white">
        <p className="leading-[40px]">P</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Frame2 />
      <Icon1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-end justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7d8a9f] text-[16px] text-center text-nowrap whitespace-pre">1시간 환산시</p>
      <Frame41 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Play:Bold',sans-serif] leading-[56px] ml-[75px] mt-0 not-italic relative text-[40px] text-center text-nowrap text-white translate-x-[-50%] whitespace-pre">100,000</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Group2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[2000px] shrink-0" data-name="icon">
      <div className="flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[28px] text-center text-white">
        <p className="leading-[40px]">P</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Frame3 />
      <Icon2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-end justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Pretendard:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7d8a9f] text-[16px] text-center text-nowrap whitespace-pre">1시간 당 최대</p>
      <Frame43 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame35 />
      <p className="font-['Pretendard:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c8c8c8] text-[14px] text-right w-full">
        <span>{`영상 통화 비용은 셀럽이 직접 설정할 수 있으며, 상황에 따라 시간당 `}</span>
        <span className="font-['Pretendard:Bold',sans-serif]">10만 원 이상 수익</span>을 얻는 것도 가능합니다.
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center justify-center relative shrink-0 w-full" data-name="text">
      <Frame36 />
      <Frame39 />
    </div>
  );
}

function Section3() {
  return (
    <div className="relative rounded-[56px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[56px]">
        <div className="absolute bg-[#1c1e22] inset-0 rounded-[56px]" />
        <img alt="" className="absolute max-w-none mix-blend-luminosity object-50%-50% object-cover opacity-[0.04] rounded-[56px] size-full" src={imgSection} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[160px] py-[80px] relative w-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Section3 />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0 size-[96px]" data-name="Logo">
      <div className="absolute bottom-[-17.19%] left-[-9.23%] right-[-9.23%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 113">
          <g id="Logo">
            <g filter="url(#filter0_diii_1_990)" id="Vector">
              <path d={svgPaths.p11a3b800} fill="var(--fill-0, white)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="109" id="filter0_diii_1_990" width="113.714" x="0" y="3.5">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="8" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_990" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_990" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-2" dy="-10" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
              <feBlend in2="shape" mode="normal" result="effect2_innerShadow_1_990" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="3.58264" dy="-3.58264" />
              <feGaussianBlur stdDeviation="1.27952" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0" />
              <feBlend in2="effect2_innerShadow_1_990" mode="normal" result="effect3_innerShadow_1_990" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-10" dy="-49" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.995608 0 0 0 0 0.975877 0 0 0 0 0.987058 0 0 0 1 0" />
              <feBlend in2="effect3_innerShadow_1_990" mode="normal" result="effect4_innerShadow_1_990" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[20px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0" data-name="Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
        <div className="absolute inset-0 rounded-[20px]" />
        <div className="absolute bg-gradient-to-b from-[15.104%] from-[rgba(255,255,255,0.1)] inset-0 mix-blend-soft-light rounded-[20px] to-[rgba(0,0,0,0.01)]" />
      </div>
      <Logo />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center mb-[-12px] relative shrink-0">
      <Background />
    </div>
  );
}

function Pointer() {
  return (
    <div className="[grid-area:1_/_1] h-[37.795px] ml-0 mt-0 relative w-[30px]" data-name="pointer">
      <div className="absolute bottom-[-4.76%] left-[-2.67%] right-[-2.67%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
          <g filter="url(#filter0_d_4_496)" id="pointer">
            <path d={svgPaths.p2e748100} fill="var(--fill-0, white)" id="Shape" />
            <path d={svgPaths.p1a7a8700} fill="var(--fill-0, #1C1E22)" id="Shape_2" />
            <path d={svgPaths.p130cbf80} fill="var(--fill-0, #1C1E22)" id="Shape_3" />
            <path d={svgPaths.p3038cf80} fill="var(--fill-0, #1C1E22)" id="Shape_4" />
            <path d={svgPaths.p2a89cc80} fill="var(--fill-0, #1C1E22)" id="Shape_5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="39.5957" id="filter0_d_4_496" width="31.6" x="-1.79571e-08" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_496" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_496" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mb-[-12px] place-items-start relative shrink-0" data-name="1">
      <Pointer />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[12px] pt-0 px-0 relative shrink-0">
      <Frame />
      <Component11 />
    </div>
  );
}

function Group5() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 1597883041">
          <path d={svgPaths.p232ff180} fill="var(--fill-0, #7D8A9F)" id="Vector" />
          <path d={svgPaths.pbfc4100} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-60 relative rounded-[32px] shrink-0 size-[48px]" data-name="Button">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 1597883042">
          <path d={svgPaths.p17be9980} fill="var(--fill-0, #7D8A9F)" id="Vector" />
          <path d={svgPaths.p38828400} fill="var(--fill-0, #7D8A9F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-60 relative rounded-[32px] shrink-0 size-[48px]" data-name="Button">
      <Group6 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 2121452771">
          <path clipRule="evenodd" d={svgPaths.p2e2c780} fill="var(--fill-0, #7D8A9F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-60 relative rounded-[32px] shrink-0 size-[48px]" data-name="Button">
      <Frame28 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[12px] relative shrink-0 w-full">
      <Button5 />
      <div className="bg-[#f1f1f1] h-[12px] shrink-0 w-px" />
      <Button6 />
      <div className="bg-[#f1f1f1] h-[12px] shrink-0 w-px" />
      <Button7 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#7d8a9f] text-[20px] text-center w-full">대화로 수익이 되는 순간, 지금 바로 밋밋하세요 !</p>
      <Frame46 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[58px] not-italic relative shrink-0 text-[#1c1e22] text-[44px] text-center w-full">밋밋은 당신의 시간을 가치 있게 만듭니다.</p>
      <Frame34 />
    </div>
  );
}

function IconMailMono() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon-mail-mono">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="icon-mail-mono">
          <path d={svgPaths.p3e326680} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center justify-center ml-0 mt-0 p-[16px] relative rounded-[30px] shadow-[0px_4px_8px_0px_rgba(0,178,106,0.12)]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute inset-0 rounded-[30px]" />
        <div className="absolute bg-gradient-to-b from-[15.104%] from-[rgba(255,255,255,0.1)] inset-0 mix-blend-soft-light rounded-[30px] to-[rgba(0,0,0,0.01)]" />
      </div>
      <IconMailMono />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-30px)] mt-[calc(50%-30px)] place-items-start relative">
      <Frame13 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#8ea0ac] text-[20px]">인스타그램 ID 또는 카카오톡 ID를 입력해 주세요.</p>
      <Group4 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative rounded-[42px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 62, 129, 0.02) 0%, rgba(0, 62, 129, 0.02) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,62,129,0.08)] border-solid inset-0 pointer-events-none rounded-[42px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[32px] pr-[12px] py-[12px] relative w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_20px_32px_0px_rgba(17,66,46,0.04)] shrink-0 w-[768px]">
      <Frame25 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center justify-center overflow-clip p-[100px] relative shrink-0 w-[1440px]" data-name="Step">
      <Frame40 />
      <Frame42 />
      <Frame12 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[32px] relative shrink-0 w-[146.862px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147 32">
        <g id="Frame 1321315187">
          <g id="Vector">
            <path d={svgPaths.pdbd4f80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pdbd4f80} fill="url(#paint0_linear_1_965)" />
          </g>
          <g id="meetmeet">
            <path d={svgPaths.p364a0cf0} fill="var(--fill-0, #1C1E22)" id="Vector_2" />
            <path d={svgPaths.p2256500} fill="var(--fill-0, #1C1E22)" id="Vector_3" />
            <path d={svgPaths.paf2a700} fill="var(--fill-0, #1C1E22)" id="Vector_4" />
            <path d={svgPaths.p6f78d00} fill="var(--fill-0, #1C1E22)" id="Vector_5" />
            <path d={svgPaths.p265a80} fill="var(--fill-0, #1C1E22)" id="Vector_6" />
            <path d={svgPaths.p27445100} fill="var(--fill-0, #1C1E22)" id="Vector_7" />
            <path d={svgPaths.p22e3b000} fill="var(--fill-0, #1C1E22)" id="Vector_8" />
            <path d={svgPaths.p37c36b00} fill="var(--fill-0, #1C1E22)" id="Vector_9" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_965" x1="16.9795" x2="16.9795" y1="0" y2="32">
            <stop stopColor="#FA1155" />
            <stop offset="1" stopColor="#EB058F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] relative shrink-0 text-[#7d8a9f]">이용약관</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#e1e1e1]">|</p>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#2e3c52]">개인정보처리방침</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#e1e1e1]">|</p>
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[20px] relative shrink-0 text-[#7d8a9f]">운영정책</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[20px] not-italic relative shrink-0 text-[#7d8a9f] text-[13px] text-nowrap whitespace-pre">
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0">상호 :</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0">(주)신아국제교류센터한국지사</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[20px] not-italic relative shrink-0 text-[#7d8a9f] text-[13px] text-nowrap whitespace-pre">
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0">대표 :</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0">안영상</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[20px] not-italic relative shrink-0 text-[#7d8a9f] text-[13px] text-nowrap whitespace-pre">
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0">주소 :</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0">경기도 용인시 기흥구 구갈로60번길 9-1, 6층 602-에이64호(구갈동, 라파빌딩)</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[20px] not-italic relative shrink-0 text-[#7d8a9f] text-[13px] text-nowrap whitespace-pre">
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0">사업자 등록번호 :</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0">438-860-3453</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[20px] not-italic relative shrink-0 text-[#7d8a9f] text-[13px] text-nowrap whitespace-pre">
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0">통신판매업 신고번호 :</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0">2025-용인기흥-02397</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[20px] not-italic relative shrink-0 text-[#7d8a9f] text-[13px] text-nowrap whitespace-pre">
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0">{`이메일 : `}</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0">meetmeet.help24@gmail.com</p>
    </div>
  );
}

function Frame22() {
  return <div className="h-[20px] shrink-0 w-[30px]" />;
}

function Frame23() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame23 />
    </div>
  );
}

function LogoAndDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[512px]" data-name="Logo and Description">
      <Frame27 />
      <Frame24 />
    </div>
  );
}

function Group7() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 1597883041">
          <path d={svgPaths.p232ff180} fill="var(--fill-0, #7D8A9F)" id="Vector" />
          <path d={svgPaths.pbfc4100} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-60 relative rounded-[32px] shrink-0 size-[48px]" data-name="Button">
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 1597883042">
          <path d={svgPaths.p17be9980} fill="var(--fill-0, #7D8A9F)" id="Vector" />
          <path d={svgPaths.p38828400} fill="var(--fill-0, #7D8A9F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-60 relative rounded-[32px] shrink-0 size-[48px]" data-name="Button">
      <Group8 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 2121452771">
          <path clipRule="evenodd" d={svgPaths.p2e2c780} fill="var(--fill-0, #7D8A9F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-60 relative rounded-[32px] shrink-0 size-[48px]" data-name="Button">
      <Frame29 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Button8 />
      <div className="bg-[#f1f1f1] h-[12px] shrink-0 w-px" />
      <Button9 />
      <div className="bg-[#f1f1f1] h-[12px] shrink-0 w-px" />
      <Button10 />
    </div>
  );
}

function EmailSubscriptionInput() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Email Subscription Input">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7d8a9f] text-[13px] text-nowrap whitespace-pre">궁금한 내용이 있으신가요?</p>
    </div>
  );
}

function GeneralButton() {
  return (
    <div className="bg-[#1c1e22] content-stretch flex items-center justify-center px-[28px] py-[12px] relative rounded-[24px] shrink-0" data-name="General Button">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">이메일 문의하기</p>
      <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_14px_0px_inset_rgba(255,255,255,0.2)]" />
    </div>
  );
}

function FormButton() {
  return (
    <div className="bg-white content-stretch flex gap-[40px] items-center pl-[24px] pr-[12px] py-[8px] relative rounded-[32px] shrink-0" data-name="Form Button">
      <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <EmailSubscriptionInput />
      <GeneralButton />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end justify-end relative shrink-0">
      <Frame47 />
      <FormButton />
    </div>
  );
}

function CompanyInformation() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Company Information">
      <LogoAndDescription />
      <Frame45 />
    </div>
  );
}

function CopyrightContainer() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Copyright Container">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Pretendard:Light',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#c1c1c1] text-[14px] text-center">
        <span className="font-['Pretendard:Medium',sans-serif]">{`Copyright © `}</span>
        <span className="font-['Pretendard:Bold',sans-serif]">meetmeet</span>
        <span className="font-['Pretendard:Bold',sans-serif]">.</span>
        <span className="font-['Pretendard:Medium',sans-serif]">{` All rights reserved.`}</span>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[60px] items-center px-[100px] py-[60px] relative shrink-0 w-[1440px]" data-name="Footer">
      <CompanyInformation />
      <CopyrightContainer />
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[32px] relative shrink-0 w-[146.862px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147 32">
        <g id="Frame 1321315186">
          <g id="Vector">
            <path d={svgPaths.pdbd4f80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pdbd4f80} fill="url(#paint0_linear_1_931)" />
          </g>
          <g id="meetmeet">
            <path d={svgPaths.p364a0cf0} fill="var(--fill-0, #1C1E22)" id="Vector_2" />
            <path d={svgPaths.p2256500} fill="var(--fill-0, #1C1E22)" id="Vector_3" />
            <path d={svgPaths.paf2a700} fill="var(--fill-0, #1C1E22)" id="Vector_4" />
            <path d={svgPaths.p6f78d00} fill="var(--fill-0, #1C1E22)" id="Vector_5" />
            <path d={svgPaths.p265a80} fill="var(--fill-0, #1C1E22)" id="Vector_6" />
            <path d={svgPaths.p27445100} fill="var(--fill-0, #1C1E22)" id="Vector_7" />
            <path d={svgPaths.p22e3b000} fill="var(--fill-0, #1C1E22)" id="Vector_8" />
            <path d={svgPaths.p37c36b00} fill="var(--fill-0, #1C1E22)" id="Vector_9" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_931" x1="16.9795" x2="16.9795" y1="0" y2="32">
            <stop stopColor="#FA1155" />
            <stop offset="1" stopColor="#EB058F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #FA1155)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute left-[calc(50%-30px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="1">
          <path d={svgPaths.pa45e380} fill="var(--fill-0, #1C1E22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Btn5() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10000px] shrink-0 size-[32px]" data-name="btn">
      <Component12 />
      <Component13 />
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center pl-[18px] pr-[14px] py-[10px] relative rounded-[32px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute inset-0 rounded-[32px]" />
        <div className="absolute bg-gradient-to-b from-[15.104%] from-[rgba(255,255,255,0.1)] inset-0 mix-blend-soft-light rounded-[32px] to-[rgba(0,0,0,0.01)]" />
      </div>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fbf9f9] text-[16px] text-nowrap whitespace-pre">지금 참여하기</p>
      <Btn5 />
      <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_14px_0px_inset_rgba(255,255,255,0.2)]" />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <Frame26 />
      <Button11 />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.96)] content-stretch flex flex-col h-[80px] items-center justify-center left-0 px-[100px] py-[16px] top-0 w-[1440px]" data-name="Navigation Bar">
      <Content4 />
    </div>
  );
}

export default function Component14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="2.외부 마케팅용 랜딩페이지 (외부)">
      <NavigationBar />
      <Section />
      <Section2 />
      <Section4 />
      <Step />
      <Footer />
    </div>
  );
}