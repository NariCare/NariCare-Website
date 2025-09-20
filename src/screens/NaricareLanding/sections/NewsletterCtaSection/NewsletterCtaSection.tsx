import React from "react";
import { Button } from "../../../../components/ui/button";

const decorativeElements = [
  {
    className: "absolute left-[167px] bottom-[66px] w-[198px] h-[231px]",
    alt: "Group",
    src: "/group-1.svg",
  },
  {
    className: "absolute top-[209px] left-[1049px] w-[213px] h-[231px]",
    alt: "Group",
    src: "/group-2.svg",
  },
  {
    className: "absolute top-[430px] left-[1195px] w-5 h-3.5",
    alt: "Vector",
    src: "/vector-7.svg",
  },
  {
    className: "absolute top-[429px] left-[1087px] w-[18px] h-3.5",
    alt: "Vector",
    src: "/vector-5.svg",
  },
  {
    className: "absolute top-[270px] left-[264px] w-[23px] h-8",
    alt: "Vector",
    src: "/vector-6.svg",
  },
  {
    className: "absolute top-[196px] left-[1162px] w-[54px] h-[78px]",
    alt: "Group",
    src: "/group-36696.png",
  },
];

const appStoreButtons = [
  {
    width: "w-[158px]",
    image: {
      className: "relative w-[99.56px] h-[25.71px] mt-[-0.85px] mb-[-0.85px]",
      alt: "Group",
      src: "/group-36693.png",
    },
  },
  {
    width: "w-[158px]",
    image: {
      className: "relative w-[115.85px] h-[27.99px] mt-[-2.05px] mb-[-1.95px]",
      alt: "Group",
      src: "/group-36694.png",
    },
  },
];

export const NewsletterCtaSection = (): JSX.Element => {
  return (
    <section className="flex flex-col h-[440px] items-center gap-16 px-0 py-24 relative w-full bg-gray-50 overflow-hidden">
      <div className="flex max-w-screen-md items-center gap-4 w-full flex-col relative flex-[0_0_auto]">
        <h2 className="self-stretch [font-family:'Merriweather',Helvetica] text-[#8383ed] text-5xl text-center leading-[normal] relative mt-[-1.00px] font-semibold tracking-[0]">
          Ready to start your journey?
        </h2>

        <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-[30px] relative self-stretch">
          Join thousands of mothers who have found success and confidence in
          their breastfeeding journey with our expert-guided support platform.
        </p>
      </div>

      <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
        <Button className="inline-flex h-12 gap-3 px-6 py-4 flex-[0_0_auto] bg-[#8383ed] rounded-[10px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#7373dd] h-auto">
          <span className="relative w-fit mt-[-8.00px] mb-[-4.00px] [font-family:'Poppins',Helvetica] font-semibold text-basewhite text-base tracking-[0] leading-7 whitespace-nowrap">
            Contact us
          </span>

          <img
            className="relative w-6 h-6 mt-[-4.00px] mb-[-4.00px]"
            alt="Whatsapp"
            src="/whatsapp.svg"
          />
        </Button>

        {appStoreButtons.map((button, index) => (
          <Button
            key={`app-store-${index}`}
            variant="outline"
            className={`flex ${button.width} h-12 gap-1.5 px-[18px] py-3 bg-[#ffffff] rounded-lg overflow-hidden border border-solid border-[#8383ed] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative hover:bg-gray-50 h-auto`}
          >
            <img
              className={button.image.className}
              alt={button.image.alt}
              src={button.image.src}
            />
          </Button>
        ))}
      </div>

      {decorativeElements.map((element, index) => (
        <img
          key={`decorative-${index}`}
          className={element.className}
          alt={element.alt}
          src={element.src}
        />
      ))}
    </section>
  );
};
