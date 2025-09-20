import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialWrapperSection = (): JSX.Element => {
  const testimonialCards = [
    {
      backgroundImage: "bg-[url(/image-23.png)]",
      title:
        "Preterm Baby to Breastfeeding Success: How This Professor Mom Did It in 10 Days",
      name: "Sanjana",
      hasPlayButton: true,
    },
    {
      backgroundImage: "bg-[url(/image-23-1.png)]",
      title: "How She Ditched 480ml Daily Formula in Just 40 Days",
      name: "Shagun",
      hasPlayButton: true,
    },
    {
      backgroundImage: "bg-[url(/image-23-2.png)]",
      title:
        "From Breast Rejection and 800ml of Formula daily to Exclusive Breastfeeding",
      name: "Priti",
      hasPlayButton: true,
    },
    {
      backgroundImage: "bg-[url(/image-23-3.png)]",
      title:
        "2-Month-Old on 700ml Formula daily Gets Exclusively Breastfed in 30 Days",
      name: "Sravya",
      hasPlayButton: true,
      isPartial: true,
    },
  ];

  const StarRating = () => (
    <div className="inline-flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="relative w-5 h-5">
          <StarIcon className="w-full h-full fill-current text-yellow-400" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="pt-24 pb-0 px-0 flex flex-col w-full items-center gap-16 bg-[#fffcf9]">
      <div className="flex max-w-screen-md w-full max-w-3xl items-center gap-5 flex-col px-4">
        <h2 className="text-center [font-family:'Merriweather',Helvetica] text-[#0f1728] text-5xl font-semibold tracking-[0] leading-normal">
          Don&apos;t just take our word for it
        </h2>

        <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-[30px]">
          Real stories from real mothers who have transformed their <br />
          breastfeeding journey with Naricare
        </p>
      </div>

      <div className="flex flex-col max-w-screen-xl items-start gap-16 px-8 py-0 w-full">
        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex items-start gap-8 overflow-x-auto w-full">
            {testimonialCards.map((testimonial, index) => (
              <Card
                key={index}
                className={`relative w-[360px] h-[480px] flex-shrink-0 ${testimonial.backgroundImage} bg-cover bg-center border-0 overflow-hidden`}
              >
                <CardContent className="p-0 h-full relative">
                  {testimonial.hasPlayButton && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 backdrop-blur-md backdrop-brightness-100 bg-white/20 hover:bg-white/30 rounded-full border-0"
                    >
                      <PlayIcon className="w-6 h-6 text-white fill-white" />
                    </Button>
                  )}

                  <div className="flex flex-col w-full items-center justify-center pt-24 pb-6 px-6 absolute left-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent">
                    <div className="flex flex-col items-start gap-3 px-5 py-6 w-full bg-white/30 border border-white/20 backdrop-blur-md rounded-lg">
                      <p className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-[30px]">
                        &quot;{testimonial.title}&quot;
                      </p>

                      <div className="flex flex-col items-start gap-4 w-full">
                        <StarRating />
                        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-[38px]">
                          {testimonial.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-start gap-8">
            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-[#e4e7ec] hover:bg-gray-50"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-[#e4e7ec] hover:bg-gray-50"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-0 pb-24 px-0 flex flex-col w-full items-center gap-16 bg-[#fffcf9]">
        <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 w-full">
          <div className="flex flex-col items-center gap-10 w-full">
            <div className="flex flex-col max-w-screen-lg items-center gap-8 w-full">
              <blockquote className="[font-family:'Poppins',Helvetica] text-[#475467] text-2xl tracking-[-0.48px] leading-[44px] font-medium text-center">
                My 2 cents on Naricare&apos;s breastfeeding webinar - it&apos;s
                absolutely worth it and all women who are expecting as well as
                new mothers, just go for it. There are lot of myths around
                breastfeeding and all of them were clarified in a clear and
                concise way. I have given birth to a baby girl via c-section and
                I have struggled a lot in the initial few days after my delivery
                to breastfeed and that&apos;s when I came across NariCare and
                their offerings. Their breastfeeding webinar has helped a lot in
                my journey to breastfeed. Special thanks to Gayathri who is such
                a wonderful woman and is so patient to answer each and every
                silly question during my breastfeeding journey. Kudos to
                Naricare and the amazing work the team has been doing. PS: I
                highly recommend to attend the session before delivery itself so
                that you can apply everything you have learned from day zero !
              </blockquote>

              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="relative w-16 h-16">
                    <div className="absolute -top-px -left-px w-[66px] h-[66px] bg-[#d9d9d9] rounded-full border border-neutral-300" />
                    <img
                      className="absolute top-0 left-0 w-16 h-16 rounded-full object-cover"
                      alt="Rochini Paidisetty"
                      src="/mask-group-1.png"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1 w-full">
                    <h4 className="font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-gray-900 text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                      Rochini Paidisetty
                    </h4>
                  </div>
                </div>

                <StarRating />
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-4">
              <div className="w-2.5 h-2.5 bg-[#ff9e88] rounded-md" />
              <div className="w-2.5 h-2.5 bg-gray-200 rounded-md" />
              <div className="w-2.5 h-2.5 bg-gray-200 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
