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
    <section className="flex flex-col w-full items-center justify-center gap-8 lg:gap-16 pt-8 lg:pt-8 pb-16 lg:pb-24 px-4 lg:px-0 relative bg-[#fffcf8]">
      <div className="flex flex-col lg:flex-row max-w-screen-xl items-center justify-center gap-8 lg:gap-16 px-4 lg:px-8 py-0 w-full relative">
        <div className="flex flex-col w-full lg:min-w-[480px] items-start gap-6 lg:gap-[42px] pl-0 pr-0 lg:pr-8 py-0 relative flex-1 grow">
          <div className="flex items-start gap-4 self-stretch w-full flex-col relative flex-[0_0_auto]">
            <h1 className="w-full lg:w-[800px] [font-family:'Merriweather',Helvetica] text-gray-900 text-3xl sm:text-4xl lg:text-[54px] leading-relaxed lg:leading-[64px] relative font-semibold tracking-[0]">
              <span className="text-[#0f1728]">When </span>
              <span className="text-[#8383ed]">breastfeeding</span>
              <span className="lg:hidden"> </span>
              <br className="hidden lg:block" />
              <span className="text-[#0f1728] lg:whitespace-nowrap">feels hard, or you just</span>
              <br className="hidden lg:block" />
              <span className="text-[#0f1728] lg:whitespace-nowrap">want to be prepared…</span>
            </h1>

            <p className="relative [font-family:'Poppins',Helvetica] font-normal text-[#475466] text-lg lg:text-xl tracking-[0] leading-relaxed lg:leading-[30px]">
              You don’t have to do it alone. NariCare gives you expert care, guidance, 
              and support - so you feel ready before birth and fully supported after.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 relative w-full sm:w-auto">
            <Button 
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=918142144762&text&type=phone_number&app_absent=0', '_blank')}
              className="w-full sm:w-auto inline-flex h-12 gap-3 px-6 py-4 bg-[#8383ed] rounded-[10px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#7373dd]">
              <span className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-7 whitespace-nowrap">
                Contact us
              </span>
              <img
                className="relative w-6 h-6"
                alt="Whatsapp"
                src="/whatsapp.svg"
              />
            </Button>

            <div className="flex flex-row gap-3 w-full sm:w-auto">
              <Button
                onClick={() => window.open("https://app.naricare.com?source=app-store", "_blank")}
                variant="outline"
                className="flex flex-1 sm:w-[158px] h-12 gap-1.5 px-3 sm:px-[18px] py-3 bg-[#ffffff] rounded-lg overflow-hidden border border-solid border-[#8383ed] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative hover:bg-gray-50"
              >
                <img
                  className="relative h-6 w-auto"
                  alt="Download NariCare breastfeeding support app from Apple App Store"
                  src="/app-store.png"
                />
              </Button>

              <Button
                onClick={() => window.open("https://app.naricare.com?source=play-store", "_blank")}
                variant="outline"
                className="flex flex-1 sm:w-[158px] h-12 gap-1.5 px-3 sm:px-[18px] py-3 bg-[#ffffff] rounded-lg overflow-hidden border border-solid border-[#8383ed] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative hover:bg-gray-50"
              >
                <img
                  className="relative h-6 w-auto"
                  alt="Download NariCare breastfeeding support app from Google Play Store"
                  src="/google-play.svg"
                />
              </Button>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-[407px] items-start gap-4 relative">
            <img
              className="relative w-[150px] h-[50px] object-cover"
              alt="Nsrcel"
              src="/nsrcel.svg"
            />

            <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#475466] text-lg lg:text-xl tracking-[0] leading-relaxed lg:leading-[30px]">
              Top 15 startups incubated at IIMB NSRCEL
            </p>
          </div>
        </div>

        <div className="relative w-full lg:flex-1 lg:min-w-[480px] h-[300px] sm:h-[400px] lg:h-[640px] flex items-center justify-center lg:block">
          <img
            className="absolute top-0 right-0 w-[200px] sm:w-[250px] lg:w-[282px] h-auto lg:-top-10 lg:-right-32 lg:w-[282px] lg:h-[408px] opacity-20 lg:opacity-100"
            alt="Line pattern"
            src="/line-pattern-3.svg"
          />
          <img
            className="relative w-[280px] sm:w-[350px] lg:w-[654px] h-auto object-cover rounded-2xl lg:rounded-none lg:absolute lg:bottom-[-3%] lg:left-[-10%]"
            alt="Happy mother successfully breastfeeding her baby with confidence and comfort - NariCare expert support"
            src="/image-13.png"
          />
        </div>
      </div>

    </section>
  );
};
