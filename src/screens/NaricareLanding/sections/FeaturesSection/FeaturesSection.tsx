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
    <section className="flex flex-col w-full items-center gap-16 px-0 py-24 bg-basewhite">
      <div className="max-w-screen-xl items-center gap-12 px-8 py-0 w-full flex-[0_0_auto] flex">
        <img
          className="w-[576px] h-[576px] object-cover"
          alt="Image"
          src="/image-22.png"
        />

        <div className="flex flex-col items-start gap-8 flex-1 grow">
          <h2 className="self-stretch mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-semibold text-gray-900 text-[40px] tracking-[0] leading-[normal]">
            <span className="text-[#0f1728]">Many mothers </span>
            <span className="text-[#ff9e88]">stop breastfeeding sooner</span>
            <span className="text-[#0f1728]">
              {" "}
              than they want to due to a lack of{" "}
            </span>
            <span className="text-[#ff9e88]">support and education.</span>
          </h2>

          <div className="flex flex-col w-[446px] items-start gap-6 flex-[0_0_auto]">
            <h3 className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-gray-900 text-xl tracking-[0] leading-[30px]">
              Common breastfeeding challenges are:
            </h3>

            <ul className="flex flex-col items-start gap-4 self-stretch w-full flex-[0_0_auto]">
              {challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 self-stretch w-full flex-[0_0_auto]"
                >
                  <CheckIcon className="w-6 h-6 text-green-500" />
                  <span className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#475467] text-xl tracking-[0] leading-[30px] whitespace-nowrap">
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
