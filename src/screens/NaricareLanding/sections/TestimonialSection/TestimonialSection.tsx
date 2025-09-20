import React from "react";
import { Button } from "../../../../components/ui/button";

export const TestimonialSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-16 px-0 py-24 relative bg-[#f6f4ff]">
      <img
        className="absolute top-0 right-[-113px] w-[182px] h-[148px]"
        alt="Line pattern"
        src="/line-pattern-1.svg"
      />

      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="[font-family:'Merriweather',Helvetica] text-gray-900 text-[44px] tracking-[-0.88px] leading-[60px] relative self-stretch mt-[-1.00px] font-medium text-center">
              <span className="text-[#0f1728] tracking-[-0.39px]">
                With personalized guidance &amp; continuous support from{" "}
              </span>

              <span className="text-[#8383ed] tracking-[-0.39px]">
                NariCare&apos;s Breastfeeding Program,
              </span>

              <span className="text-[#0f1728] tracking-[-0.39px]">
                {" "}
                you&apos;ll prevent or overcome any breastfeeding challenges.
              </span>
            </h2>

            <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <Button className="inline-flex items-center justify-center gap-1.5 px-[18px] py-3 relative flex-[0_0_auto] bg-[#8383ed] rounded-lg overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-lg before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto hover:bg-[#7575e6]">
                <div className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-basewhite text-base tracking-[0] leading-6 whitespace-nowrap">
                    Discover more
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute left-0 bottom-[-265px] w-[251px] h-24"
        alt="Line pattern"
        src="/line-pattern-1.svg"
      />
    </section>
  );
};
