import { CheckIcon } from "lucide-react";
import React from "react";

const challenges = [
  "Painful, cracked and/or bleeding nipples",
  "Low Breast Milk Supply",
  "Engorgement and/or mastitis",
  "Flat or Inverted Nipples",
  "Colic or Reflux",
  "Oversupply and forceful letdown",
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-16 px-0 py-12 md:py-24 bg-basewhite">
      <div className="max-w-screen-xl items-center gap-8 md:gap-12 px-4 md:px-8 py-0 w-full flex-[0_0_auto] flex flex-col lg:flex-row">
        <img
          className="w-full h-auto max-w-sm md:max-w-md lg:w-[576px] lg:h-[576px] object-cover rounded-lg"
          alt="Image"
          src="/image-22.png"
        />

        <div className="flex flex-col items-start gap-6 md:gap-8 flex-1 grow">
          <h2 className="self-stretch mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-semibold text-gray-900 text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-tight lg:leading-[normal]">
            <span className="text-[#0f1728]">Many mothers </span>
            <span className="text-[#ff9e88]">stop breastfeeding sooner</span>
            <span className="text-[#0f1728]">
              {" "}
              than they want to due to a lack of{" "}
            </span>
            <span className="text-[#ff9e88]">support and education.</span>
          </h2>

          <div className="flex flex-col w-full items-start gap-4 md:gap-6 flex-[0_0_auto]">
            <h3 className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-gray-900 text-lg md:text-xl tracking-[0] leading-[28px] md:leading-[30px]">
              Common breastfeeding challenges are:
            </h3>

            <ul className="flex flex-col items-start gap-3 md:gap-4 self-stretch w-full flex-[0_0_auto]">
              {challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 self-stretch w-full flex-[0_0_auto]"
                >
                  <CheckIcon className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#475467] text-base md:text-lg lg:text-xl tracking-[0] leading-[24px] md:leading-[28px] lg:leading-[30px]">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
