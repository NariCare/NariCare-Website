import React from "react";
import { Button } from "../../../../components/ui/button";

const decorativeElements = [
  {
    className: "absolute left-[21%] bottom-[66px] w-[198px] h-[231px] filter grayscale",
    alt: "Group",
    src: "/group-1.svg",
  },
  {
    className: "absolute top-[209px] left-[68%] w-[213px] h-[231px] filter grayscale",
    alt: "Group",
    src: "/group-2.svg",
  },
  {
    className: "absolute top-[270px] left-[26%] w-[23px] h-8",
    alt: "Vector",
    src: "/vector-6.svg",
  },
  {
    className: "absolute top-[196px] left-[74%] w-[54px] h-[78px]",
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
    <section className="flex flex-col min-h-[300px] md:h-[440px] items-center gap-8 md:gap-16 px-4 md:px-0 py-12 md:py-24 relative w-full bg-gray-50 overflow-hidden">
      <div className="flex max-w-screen-md items-center gap-4 w-full flex-col relative flex-[0_0_auto] px-4">
        <h2 className="self-stretch [font-family:'Merriweather',Helvetica] text-[#8383ed] text-2xl md:text-3xl lg:text-5xl text-center leading-tight lg:leading-[normal] relative mt-[-1.00px] font-semibold tracking-[0]">
          Ready to start your journey?
        </h2>

        <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6 md:leading-7 lg:leading-[30px] relative self-stretch">
          Join thousands of mothers who have found success and confidence in
          their breastfeeding journey with our expert-guided support platform.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 relative flex-[0_0_auto] w-full max-w-md px-4">
        <Button className="w-full sm:w-auto inline-flex h-12 gap-3 px-6 py-4 flex-[0_0_auto] bg-[#8383ed] rounded-[10px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#7373dd] h-auto">
          <span className="relative w-fit mt-[-8.00px] mb-[-4.00px] [font-family:'Poppins',Helvetica] font-semibold text-basewhite text-sm md:text-base tracking-[0] leading-6 md:leading-7 whitespace-nowrap">
            Contact us
          </span>

          <img
            className="relative w-5 h-5 md:w-6 md:h-6 mt-[-4.00px] mb-[-4.00px]"
            alt="Whatsapp"
            src="/whatsapp.svg"
          />
        </Button>

        <div className="flex gap-3 w-full sm:w-auto">
          {appStoreButtons.map((button, index) => (
            <Button
              key={`app-store-${index}`}
              variant="outline"
              className={`flex flex-1 sm:${button.width} h-12 gap-1.5 px-3 md:px-[18px] py-3 bg-[#ffffff] rounded-lg overflow-hidden border border-solid border-[#8383ed] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative hover:bg-gray-50 h-auto`}
            >
              <img
                className={`${button.image.className.replace('relative w-[99.56px] h-[25.71px]', 'relative w-[80px] h-[20px] md:w-[99.56px] md:h-[25.71px]').replace('relative w-[115.85px] h-[27.99px]', 'relative w-[92px] h-[22px] md:w-[115.85px] md:h-[27.99px]')}`}
                alt={button.image.alt}
                src={button.image.src}
              />
            </Button>
          ))}
        </div>
      </div>

      {decorativeElements.map((element, index) => (
        <img
          key={`decorative-${index}`}
          className={`${element.className} hidden lg:block`}
          alt={element.alt}
          src={element.src}
        />
      ))}
    </section>
  );
};
