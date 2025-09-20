import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesWrapperSection = (): JSX.Element => {
  const leftFeatures = [
    {
      icon: "/featured-icon-2.svg",
      title: "AI-Powered Support",
      description:
        "Get instant answers to your breastfeeding questions with our GPT-powered chatbot, available 24/7.",
    },
    {
      icon: "/featured-icon-3.svg",
      title: "Expert Consultations",
      description:
        "Schedule video calls with certified lactation consultants for personalized guidance.",
    },
    {
      icon: "/featured-icon-5.svg",
      title: "Baby Growth Tracking",
      description:
        "Monitor your baby's development with easy-to-use tracking tools and visual reports.",
    },
  ];

  const rightFeatures = [
    {
      icon: "/featured-icon-1.svg",
      title: "Mom-to-Mom Community",
      description:
        "Connect with other mothers in our supportive group chats, moderated by experts.",
    },
    {
      icon: "/featured-icon-4.svg",
      title: "Knowledge Base",
      description:
        "Access a comprehensive library of articles, tips, and resources organized by topic and baby age.",
    },
    {
      icon: "/featured-icon.svg",
      title: "Expert-Verified Content",
      description:
        "All information is reviewed and approved by certified lactation consultants and pediatricians.",
    },
  ];

  const topFeatureCards = [
    {
      image: "/frame-1984077200.svg",
      title: "Knowledge base",
    },
    {
      image: "/frame-1984077202.svg",
      title: "Trackers",
    },
    {
      image: "/frame-1984077202-1.svg",
      title: "AI-based assistant",
    },
  ];

  const bottomFeatureCards = [
    {
      image: "/frame-1984077203.svg",
      title: "Consultation booking",
    },
  ];

  return (
    <section id="products" className="flex flex-col w-full items-center gap-16 px-0 py-24 relative bg-basewhite">
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full">
        <div className="flex flex-col items-center gap-8 relative w-full">
          <div className="flex flex-col max-w-screen-md items-center gap-5 relative w-full">
            <div className="flex-col gap-3 flex items-start relative w-full">
              <h2 className="w-full [font-family:'Merriweather',Helvetica] text-[#0f1728] text-5xl text-center leading-[normal] relative mt-[-1.00px] font-semibold tracking-[0]">
                Everything you need for success
              </h2>
            </div>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-[30px] relative w-full">
              Our comprehensive platform provides expert guidance, community
              support, and powerful tools to ensure your breastfeeding journey
              is successful.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl items-start justify-center gap-24 px-8 py-0 w-full flex relative">
        <div className="flex flex-col items-start gap-12 relative flex-1">
          {leftFeatures.map((feature, index) => (
            <div
              key={`left-feature-${index}`}
              className="flex flex-col min-w-60 items-start gap-5 relative w-full"
            >
              <img
                className="relative w-14 h-14 mt-[-4.00px] ml-[-4.00px]"
                alt="Featured icon"
                src={feature.icon}
              />

              <div className="gap-2 w-full flex flex-col items-start relative">
                <h3 className="relative w-full mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-gray-900 text-xl tracking-[0] leading-[30px]">
                  {feature.title}
                </h3>

                <p className="relative w-full [font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-[480px] h-[640px]">
          <img
            className="absolute top-[calc(50.00%_-_240px)] left-[calc(50.00%_-_266px)] w-[532px] h-[480px]"
            alt="Blob"
            src="/blob.svg"
          />

          <div className="absolute top-0 left-[calc(50.00%_-_157px)] w-[314px] h-[640px]">
            <div className="absolute h-[95.31%] top-[2.23%] left-[calc(50.00%_-_141px)] w-[282px] bg-[#f9f9f9] overflow-hidden">
              <div className="absolute w-full h-[4.68%] top-0 left-0 flex gap-[174.1px]">
                <img
                  className="mt-[12.9px] w-[21.35px] h-[8.33px] ml-[25.1px]"
                  alt="Date"
                  src="/date.png"
                />

                <img
                  className="mt-[13.0px] w-[50.08px] h-[8.51px]"
                  alt="Right"
                  src="/right.png"
                />
              </div>

              <div className="absolute top-[584px] left-px w-[282px] h-[26px] flex items-end">
                <div className="mb-[5.5px] w-[100.66px] h-[3.76px] ml-[32.27%] mr-[32.0%] flex-1 bg-black rounded-[75.12px]" />
              </div>

              <img
                className="absolute top-[65px] left-[calc(50.00%_-_133px)] w-[264px] h-[333px]"
                alt="Group"
                src="/group-36720.png"
              />

              <div className="absolute top-[47px] left-[9px] [font-family:'Poppins',Helvetica] font-normal text-[#8b8b8b] text-[10px] tracking-[0] leading-[normal]">
                THURSDAY, 11 SEPTEMBER
              </div>

              <div className="flex flex-col w-[149px] items-start gap-2 absolute top-[74px] left-[17px]">
                <div className="flex flex-col items-start gap-1 relative w-full">
                  <div className="relative w-full mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#475466] text-sm tracking-[0] leading-[14px]">
                    <span className="leading-6">Good Morning,</span>

                    <span className="text-xl leading-6"> </span>

                    <span className="[font-family:'Merriweather',Helvetica] font-medium text-xl leading-6">
                      Gayathri &amp; Aira
                    </span>
                  </div>

                  <div className="relative w-full [font-family:'Poppins',Helvetica] font-normal text-[#8c8cff] text-[10px] tracking-[0] leading-[normal]">
                    21 days of Motherhood
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-2.5 px-2 py-1 relative bg-[#a1a1ff] rounded border-[0.5px] border-solid border-[#cfcfff]">
                  <div className="relative w-fit mt-[-0.50px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-[8px] tracking-[0] leading-[normal]">
                    Explore programs
                  </div>
                </div>
              </div>

              <img
                className="absolute w-[5.11%] h-[2.36%] top-[25.47%] left-[48.99%]"
                alt="Vector"
                src="/vector-2.svg"
              />

              <img
                className="absolute w-[6.33%] h-[2.92%] top-[11.15%] left-[67.90%]"
                alt="Vector"
                src="/vector-1.svg"
              />

              <img
                className="absolute w-[7.10%] h-[3.28%] top-[20.61%] left-[80.59%]"
                alt="Vector"
                src="/vector.svg"
              />
            </div>

            <img
              className="absolute w-full h-[99.77%] top-0 left-0"
              alt="Iphone mockup"
              src="/iphone-mockup.svg"
            />
          </div>

          <Card className="absolute top-[394px] left-0 rounded-[10px] bg-[linear-gradient(180deg,rgba(249,250,251,1)_0%,rgba(217,208,255,1)_100%)]">
            <CardContent className="flex flex-col items-start gap-2 p-4">
              <div className="flex items-center gap-3 relative w-full">
                {topFeatureCards.map((card, index) => (
                  <div
                    key={`top-card-${index}`}
                    className="flex flex-col w-[136px] items-center gap-1 relative"
                  >
                    <div className="flex flex-col items-start gap-1 relative w-full">
                      <img
                        className="relative w-full h-[100px]"
                        alt="Frame"
                        src={card.image}
                      />

                      <div className="relative w-full [font-family:'Poppins',Helvetica] font-medium text-[#6868ff] text-xs text-center tracking-[0] leading-6">
                        {card.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 relative w-full">
                {bottomFeatureCards.map((card, index) => (
                  <div
                    key={`bottom-card-${index}`}
                    className="flex flex-col w-[136px] items-start gap-1 relative"
                  >
                    <img
                      className="relative w-full h-[100px]"
                      alt="Frame"
                      src={card.image}
                    />

                    <div className="relative w-full [font-family:'Poppins',Helvetica] font-medium text-[#6868ff] text-xs text-center tracking-[0] leading-6">
                      {card.title}
                    </div>
                  </div>
                ))}

                <div className="flex flex-col w-[284px] items-center gap-1 relative">
                  <Card className="h-[100px] bg-[#ffffff] rounded-[10px] border border-solid border-[#e8e3ff]">
                    <CardContent className="flex items-center justify-center gap-2.5 px-4 py-2 h-full">
                      <div className="inline-flex items-center gap-3.5 relative">
                        <div className="w-[154px] h-14 gap-4 flex flex-col items-start">
                          <div className="relative w-full [font-family:'Poppins',Helvetica] font-normal text-[#8383ed] text-xs tracking-[0] leading-[2px]">
                            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#8383ed] text-xs tracking-[0] leading-[2px]">
                              Private &amp; Personalized
                            </span>
                          </div>

                          <div className="relative w-full [font-family:'Poppins',Helvetica] font-normal text-[#8383ed] text-xs tracking-[0] leading-[2px]">
                            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#8383ed] text-xs tracking-[0] leading-[2px]">
                              Breastfeeding
                            </span>
                          </div>

                          <div className="relative w-full [font-family:'Poppins',Helvetica] font-normal text-[#8383ed] text-xs tracking-[0] leading-[2px]">
                            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#8383ed] text-xs tracking-[0] leading-[2px]">
                              and Postpartum Wellness
                            </span>
                          </div>

                          <div className="relative w-full [font-family:'Poppins',Helvetica] font-normal text-[#8383ed] text-xs tracking-[0] leading-[2px]">
                            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#8383ed] text-xs tracking-[0] leading-[2px]">
                              Programs
                            </span>
                          </div>
                        </div>

                        <img
                          className="relative w-[82.13px] h-[83.66px]"
                          alt="Group"
                          src="/group-36712.png"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <div className="relative w-full [font-family:'Poppins',Helvetica] font-medium text-[#6868ff] text-xs text-center tracking-[0] leading-6">
                    Breastfeeding programs
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-start gap-12 relative flex-1">
          {rightFeatures.map((feature, index) => (
            <div
              key={`right-feature-${index}`}
              className="flex flex-col min-w-60 items-start gap-5 relative w-full"
            >
              <img
                className="relative w-14 h-14 mt-[-4.00px] ml-[-4.00px]"
                alt="Featured icon"
                src={feature.icon}
              />

              <div className="gap-2 w-full flex flex-col items-start relative">
                <h3 className="relative w-full mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-gray-900 text-xl tracking-[0] leading-[30px]">
                  {feature.title}
                </h3>

                <p className="relative w-full [font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        className="absolute left-[1210px] bottom-[781px] w-[230px] h-[260px]"
        alt="Line pattern"
        src="/line-pattern.svg"
      />
    </section>
  );
};
