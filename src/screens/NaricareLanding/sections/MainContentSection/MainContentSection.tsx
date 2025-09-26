import { CheckCircleIcon } from "lucide-react";
import React from "react";

export const MainContentSection = (): JSX.Element => {
  const benefits = [
    {
      text: "Be in control of your breastfeeding journey, even in the event of a C-section.",
    },
    {
      text: "Feel confident your partner/family is prepared to support your breastfeeding goals.",
    },
    {
      text: "Learn comfortable breastfeeding positions and proper latching techniques.",
    },
    {
      text: "Prevent and get relief from painful and sore nipples, and learn how to overcome common breastfeeding challenges.",
    },
    {
      text: "Establish, increase, and maintain your breast milk supply so you can provide the best possible nutrition for your baby, for as long as you choose.",
    },
    {
      text: "Discover how to express your breast milk by hand and with a breast pump.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 lg:gap-16 px-4 lg:px-0 py-12 lg:py-16 bg-basewhite">
      <div className="max-w-screen-xl items-center gap-8 lg:gap-12 lg:pl-[62px] lg:pr-8 py-0 w-full flex-[0_0_auto] flex flex-col lg:flex-row">
        <img
          className="w-full max-w-sm lg:w-[474px] lg:h-[480px] h-auto object-cover"
          alt="Mask group"
          src="/mask-group.png"
          loading="lazy"
          decoding="async"
          width="474"
          height="480"
        />

        <div className="flex flex-col w-full lg:w-[696px] gap-6 lg:gap-8 lg:mr-[-32.00px] items-start">
          <h2 className="self-stretch mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-semibold text-gray-900 text-2xl lg:text-[40px] tracking-[0] leading-tight lg:leading-[normal]">
            <span className="text-[#0f1728]">Whether you&apos;re </span>
            <span className="text-[#8383ed]">pregnant or breastfeeding,</span>
            <span className="text-[#0f1728]"> you will</span>
          </h2>

          <div className="flex-col gap-4 lg:gap-6 flex items-start self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-3 lg:gap-4 self-stretch w-full flex-[0_0_auto]">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 self-stretch w-full flex-[0_0_auto]"
                >
                  <div className="inline-flex items-center gap-2.5 pt-1 pb-0 px-0 flex-[0_0_auto]">
                    <CheckCircleIcon className="w-5 h-5 lg:w-6 lg:h-6 text-colorsgreen" />
                  </div>
                  <div className="flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#475467] text-base lg:text-xl tracking-[0] leading-6 lg:leading-[30px]">
                    {benefit.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
