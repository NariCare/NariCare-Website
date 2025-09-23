import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";

const groupSupportPlans = [
  {
    title: "Breastfeeding basics\n(1 month)",
    price: "₹2499",
    description:
      "Perfect for getting started with professional breastfeeding support",
    features: [
      "One-to-One Detailed Lactation Consultation",
      "1 Month Unlimited Text Support & Personalized Guidance in Breastfeeding Support Group",
      "Progress tracking and monitoring in Breastfeeding Support Group",
    ],
    isPopular: false,
  },
  {
    title: "Extended breastfeeding support\n(3 months)",
    price: "₹4499",
    description: "Comprehensive support for your entire breastfeeding journey",
    features: [
      "One-to-One Detailed Lactation Consultation",
      "3 Months Unlimited Text Support & Personalized Guidance in Breastfeeding Support Group",
      "Progress tracking and monitoring in Breastfeeding Support Group",
    ],
    isPopular: true,
  },
  {
    title: "Comprehensive breastfeeding\nsupport (6 months)",
    price: "₹9999",
    description: "Comprehensive support for your entire breastfeeding journey",
    features: [
      "One-to-One Detailed Lactation Consultation",
      "6 Months Unlimited Text Support & Personalized Guidance in Breastfeeding Support Group",
      "Progress tracking and monitoring in Breastfeeding Support Group",
      "Workshop on Introducing Solids to babies",
      "One-to-One Postpartum Nutrition Consultation",
      "One week one-to-one Follow-up text & call support with nutritionist",
    ],
    isPopular: false,
  },
];

const privatePlans = [
  {
    title: "Breastfeeding & nutrition essentials (1 month)",
    price: "₹7499",
    description:
      "Perfect for getting started with professional breastfeeding support",
    features: [
      "One-to-One Detailed Lactation Consultation",
      "Three Follow-Up Lactation Consultations at 2 weeks, 3 weeks and 4 weeks",
      "1 Month Unlimited one-to-one text support from your assigned Lactation Consultant in dedicated WhatsApp Group",
      "Progress tracking and monitoring by your assigned Lactation Consultant",
      "Access to Breastfeeding Support Group",
      "One-to-One Postpartum Nutrition Consultation",
      "One week one-to-one Follow-up text & call support with nutritionist",
    ],
    isPopular: false,
  },
  {
    title: "Advanced breastfeeding & postpartum care (3 months)",
    price: "₹19499",
    description: "Comprehensive support for your entire breastfeeding journey",
    features: [
      "One-to-One Detailed Lactation Consultation",
      "Five Follow-Up Lactation Consultations at 2 weeks, 3 weeks, 4 weeks, 2 Months, 3 Months",
      "3 Months Unlimited one-to-one text support from your assigned Lactation Consultant in dedicated WhatsApp Group",
      "Progress tracking and monitoring by your assigned Lactation Consultant",
      "Access to Breastfeeding Support Group",
      "8 weeks Postnatal Yoga (2 months post delivery) 5 Live classes per week, total-40 classes",
      "Workshop on Introducing Solids to babies",
      "One-to-One Postpartum Nutrition Consultation",
      "One week one-to-one Follow-up text & call support with nutritionist",
    ],
    isPopular: true,
  },
  {
    title: "Ultimate breastfeeding & postpartum wellness (6 months)",
    price: "₹39499",
    description: "Comprehensive support for your entire breastfeeding journey",
    features: [
      "Everything in Advanced Breastfeeding & Postpartum Care",
      "Eight Follow-Up Lactation Consultations at 2 weeks, 3 weeks, 4 weeks, 2 months, 3 months, 4 months, 5 months, 6 months",
      "6 Months Unlimited one-to-one text support from your assigned Lactation Consultant in dedicated WhatsApp Group",
      "6 week Core Rehab Program (2 months post delivery) to reshape your abdomen, strengthen your core muscles heal diastasis recti , improve your pelvic floor function",
      "8 weeks Postnatal Yoga (2 months post delivery) 5 Live classes per week, total-40 classes",
      "One-to-One Newborn Sleep Consult with a certified holistic sleep coach",
      "Four Follow-up Newborn Sleep Consults, 2 per week",
      "2 Weeks Unlimited one-to-one text support with holistic sleep coach",
      "Postpartum Mental Wellness Consult",
    ],
    isPopular: false,
  },
];

export const PricingSection = (): JSX.Element => {
  const handleGetStarted = (plan: any) => {
    if (plan.price === "₹2499") {
      window.open("https://app.naricare.com", "_blank");
    } else {
      window.open("https://api.whatsapp.com/send/?phone=918142144762&text&type=phone_number&app_absent=0", "_blank");
    }
  };
  return (
    <section id="pricing" className="w-full bg-[#f7f5ff] py-12 lg:py-16 px-4 lg:px-8 relative">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8 lg:gap-16 relative">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <div className="max-w-screen-md text-center">
            <h2 className="[font-family:'Merriweather',Helvetica] text-[#0f1728] text-2xl lg:text-5xl font-semibold leading-tight lg:leading-normal mb-4 lg:mb-5">
              Our Breastfeeding Group <br />
              Support Programs
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base lg:text-xl leading-6 lg:leading-[30px]">
              Select the program that best fits your needs. Both plans include
              our core features with varying levels of expert access and
              support.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full lg:w-auto">
            {groupSupportPlans.map((plan, index) => (
              <Card
                key={index}
                className="w-full lg:w-96 bg-basewhite rounded-2xl border border-[#e4e7ec] shadow-shadows-shadow-lg relative flex flex-col h-full"
              >
                {plan.isPopular && (
                  <>
                    {/* Mobile popular badge */}
                    <div className="lg:hidden absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge
                        variant="secondary"
                        className="bg-[#8383ed] text-white px-3 py-1 rounded-full [font-family:'Poppins',Helvetica] font-semibold text-xs"
                      >
                        Most popular!
                      </Badge>
                    </div>
                    
                    {/* Desktop popular badge */}
                    <div className="hidden lg:block absolute -top-8 -right-16 w-[152px] h-[54px]">
                      <Badge
                        variant="secondary"
                        className="absolute -top-px -right-1.5 [font-family:'Poppins',Helvetica] font-semibold text-[#8383ed] text-sm bg-transparent border-none p-0"
                      >
                        Most popular!
                      </Badge>
                      <div className="absolute top-[21px] left-px w-14 h-5 rotate-[-30deg]">
                        <img
                          className="absolute w-[104.46%] h-[226.60%] top-[-63.30%] left-[-2.23%] rotate-[30deg]"
                          alt="Vector"
                          src="/vector-3.svg"
                        />
                      </div>
                    </div>
                  </>
                )}
                <CardHeader className="pt-10 pb-0 px-8">
                  <div className="text-center">
                    <h3 className="[font-family:'Poppins',Helvetica] text-gray-600 text-lg font-semibold leading-7 mb-4 whitespace-pre-line">
                      {plan.title}
                    </h3>
                    <div className="[font-family:'Poppins',Helvetica] font-semibold text-gray-900 text-5xl tracking-[-0.96px] leading-[60px] mb-4" role="text" aria-label={`Price: ${plan.price}`}>
                      {plan.price}
                    </div>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base leading-6">
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6 md:pt-8 pb-8 md:pb-10 px-6 md:px-8 flex flex-col">
                  <div className="flex flex-col gap-3 md:gap-4 mb-6 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-3">
                        <img 
                          src="/check-icon.svg" 
                          alt="Check" 
                          className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5" 
                        />
                        <div className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-sm md:text-base leading-5 md:leading-6">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => handleGetStarted(plan)}
                    className="w-full h-auto bg-[#8383ed] hover:bg-[#7373dd] text-basewhite px-[18px] py-3 rounded-lg shadow-shadows-shadow-xs-skeuomorphic mt-auto"
                  >
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-base tracking-[0] leading-6">
                      Get started
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <div className="max-w-screen-md text-center">
            <h2 className="[font-family:'Merriweather',Helvetica] text-[#0f1728] text-2xl lg:text-5xl font-semibold leading-tight lg:leading-normal">
              Our Private & Personalized
              <br />
              Breastfeeding and Postpartum Wellness Programs
            </h2>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full lg:w-auto">
            {privatePlans.map((plan, index) => (
              <Card
                key={index}
                className="w-full lg:w-96 bg-basewhite rounded-2xl border border-[#e4e7ec] shadow-shadows-shadow-lg relative flex flex-col h-full"
              >
                {plan.isPopular && (
                  <>
                    {/* Mobile popular badge */}
                    <div className="lg:hidden absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge
                        variant="secondary"
                        className="bg-[#8383ed] text-white px-3 py-1 rounded-full [font-family:'Poppins',Helvetica] font-semibold text-xs"
                      >
                        Most popular!
                      </Badge>
                    </div>
                    
                    {/* Desktop popular badge */}
                    <div className="hidden lg:block absolute -top-8 -right-16 w-[152px] h-[54px]">
                      <Badge
                        variant="secondary"
                        className="absolute -top-px -right-1.5 [font-family:'Poppins',Helvetica] font-semibold text-[#8383ed] text-sm bg-transparent border-none p-0"
                      >
                        Most popular!
                      </Badge>
                      <div className="absolute top-[21px] left-px w-14 h-5 rotate-[-30deg]">
                        <img
                          className="absolute w-[104.46%] h-[226.60%] top-[-63.30%] left-[-2.23%] rotate-[30deg]"
                          alt="Vector"
                          src="/vector-3.svg"
                        />
                      </div>
                    </div>
                  </>
                )}
                <CardHeader className="pt-10 pb-0 px-8">
                  <div className="text-center">
                    <h3 className="[font-family:'Poppins',Helvetica] text-gray-600 text-lg font-semibold leading-7 mb-4">
                      {plan.title}
                    </h3>
                    <div className="[font-family:'Poppins',Helvetica] font-semibold text-gray-900 text-5xl tracking-[-0.96px] leading-[60px] mb-4">
                      {plan.price}
                    </div>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base leading-6">
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-6 md:pt-8 pb-8 md:pb-10 px-6 md:px-8 flex flex-col">
                  <div className="flex flex-col gap-3 md:gap-4 mb-6 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-3">
                        <img 
                          src="/check-icon.svg" 
                          alt="Check" 
                          className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5" 
                        />
                        <div className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-sm md:text-base leading-5 md:leading-6">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => handleGetStarted(plan)}
                    className="w-full h-auto bg-[#8383ed] hover:bg-[#7373dd] text-basewhite px-[18px] py-3 rounded-lg shadow-shadows-shadow-xs-skeuomorphic mt-auto"
                  >
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-base tracking-[0] leading-6">
                      Get started
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Decorative elements positioned relative to content container - hidden on mobile */}
        <img
          className="hidden lg:block absolute top-[-1%] left-[24%] w-[59px] h-[65px] pointer-events-none"
          alt="Hand drawn accents"
          src="/hand-drawn-accents.svg"
        />

        <img
          className="hidden lg:block absolute top-[-1%] left-[72%] w-[65px] h-[59px] pointer-events-none"
          alt="Hand drawn accents"
          src="/hand-drawn-accents-1.svg"
        />

        <img
          className="hidden lg:block absolute top-[-2%] left-[10%] w-[80%] h-[52%] pointer-events-none"
          alt="Group"
          src="/group-36699.png"
        />
      </div>
    </section>
  );
};
