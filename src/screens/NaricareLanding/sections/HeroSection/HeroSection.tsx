import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const HeroSection = (): JSX.Element => {
  const statsData = [
    {
      number: "600+",
      description: "Mothers supported",
      icon: "/mothers-supported.svg",
      alt: "Mothers supported",
    },
    {
      number: "25+",
      description: "Years experience",
      icon: "/years-experience.svg",
      alt: "Years experience",
    },
    {
      number: "24/7",
      description: "Support available",
      icon: "/support-available.svg",
      alt: "Support available",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center gap-16 pt-16 pb-24 px-0 relative bg-[#fffcf8]">
      <div className="flex-wrap max-w-screen-xl items-center justify-center gap-[64px_32px] px-8 py-0 w-full flex-[0_0_auto] flex relative">
        <div className="flex flex-col min-w-[480px] items-start gap-[42px] pl-0 pr-8 py-0 relative flex-1 grow">
          <div className="flex items-start gap-4 self-stretch w-full flex-col relative flex-[0_0_auto]">
            <h1 className="self-stretch [font-family:'Merriweather',Helvetica] text-gray-900 text-[54px] leading-[54px] relative mt-[-1.00px] font-semibold tracking-[0]">
              <span className="text-[#0f1728]">Overcome </span>
              <span className="text-[#8383ed]">breastfeeding </span>
              <span className="text-[#0f1728]">challenges with confidence</span>
            </h1>

            <p className="relative [font-family:'Poppins',Helvetica] font-normal text-[#475466] text-xl tracking-[0] leading-[30px]">
              Expert care + smart AI that remembers your story, tracks what
              matters, and answers your 3AM questions. See your baby thrive with
              real data, not guesswork.
            </p>
          </div>

          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            <Button className="inline-flex h-12 gap-3 px-6 py-4 flex-[0_0_auto] bg-[#8383ed] rounded-[10px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#7373dd]">
              <span className="relative w-fit mt-[-8.00px] mb-[-4.00px] [font-family:'Poppins',Helvetica] font-semibold text-basewhite text-base tracking-[0] leading-7 whitespace-nowrap">
                Contact us
              </span>
              <img
                className="relative w-6 h-6 mt-[-4.00px] mb-[-4.00px]"
                alt="Whatsapp"
                src="/whatsapp.svg"
              />
            </Button>

            <Button
              variant="outline"
              className="flex w-[158px] h-12 gap-1.5 px-[18px] py-3 bg-[#ffffff] rounded-lg overflow-hidden border border-solid border-[#8383ed] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative hover:bg-gray-50"
            >
              <img
                className="relative w-[99.56px] h-[25.71px] mt-[-0.85px] mb-[-0.85px]"
                alt="App store"
                src="/app-store.png"
              />
            </Button>

            <Button
              variant="outline"
              className="flex w-[158px] h-12 gap-1.5 px-[18px] py-3 bg-[#ffffff] rounded-lg overflow-hidden border border-solid border-[#8383ed] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative hover:bg-gray-50"
            >
              <img
                className="relative w-[115.85px] h-[27.99px] mt-[-2.05px] mb-[-1.95px]"
                alt="Google play"
                src="/google-play.svg"
              />
            </Button>
          </div>

          <div className="flex flex-col w-[407px] items-start gap-4 relative flex-[0_0_auto]">
            <img
              className="relative w-[150px] h-[50px] object-cover"
              alt="Nsrcel"
              src="/nsrcel.svg"
            />

            <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#475466] text-xl tracking-[0] leading-[30px]">
              Top 15 startups incubated at IIMB NSRCEL
            </p>
          </div>
        </div>

        <div className="relative flex-1 min-w-[480px] grow h-[640px] rounded-[160px_0px_0px_0px]">
          <img
            className="absolute -top-10 -right-32 w-[282px] h-[408px]"
            alt="Line pattern"
            src="/line-pattern-3.svg"
          />
        </div>
      </div>

      <img
        className="absolute top-[71px] left-[623px] w-[654px] h-[654px] object-cover"
        alt="Image"
        src="/image-13.png"
      />

      <Card className="inline-flex items-center gap-6 px-12 py-6 absolute top-[725px] left-[calc(50.00%_-_549px)] bg-[#ffffff] rounded-2xl shadow-[0px_4px_4px_#00000026]">
        <CardContent className="flex items-center gap-6 p-0">
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex w-[302px] items-center justify-between relative">
                <div className="flex flex-col w-[179px] items-start relative">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px] leading-[72px]">
                    {stat.number}
                  </div>
                  <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#475467] text-base tracking-[-0.32px] leading-6">
                    {stat.description}
                  </div>
                </div>
                <img
                  className="relative w-14 h-14"
                  alt={stat.alt}
                  src={stat.icon}
                />
              </div>
              {index < statsData.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="relative self-stretch w-px"
                />
              )}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
