import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const blogPosts = [
  {
    image: "/image-24.png",
    category: "NariCare • 29 Aug 2025",
    title: "Low milk supply",
    link: "#",
  },
  {
    image: "/image-24-1.png",
    category: "NariCare • 29 Aug 2025",
    title: "Breastfeeding after C-section",
    link: "#",
  },
  {
    image: "/image-24-2.png",
    category: "NariCare • 29 Aug 2025",
    title: "Initiation of breastfeeding - Colostrum",
    link: "#",
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-16 px-0 py-24 relative bg-gray-50">
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full">
        <div className="flex flex-col items-center gap-8 relative self-stretch w-full">
          <div className="flex flex-col max-w-screen-md items-center gap-5 relative w-full">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
              <h2 className="self-stretch [font-family:'Merriweather',Helvetica] text-[#0f1728] text-5xl text-center leading-[normal] relative mt-[-1.00px] font-semibold tracking-[0]">
                Our latest articles
              </h2>
            </div>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-[30px] relative self-stretch">
              Interviews, tips, guides, industry best practices, and news.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col max-w-screen-xl items-start gap-16 px-8 py-0 w-full flex relative">
        <div className="flex flex-wrap items-start justify-center gap-[48px_32px] relative self-stretch w-full">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="flex flex-col min-w-80 items-start gap-5 relative flex-1 grow border-none shadow-none bg-transparent"
            >
              <CardContent className="p-0 w-full">
                <img
                  className="relative w-96 h-60"
                  alt="Blog post image"
                  src={post.image}
                />

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] mt-5">
                  <div className="flex-col gap-2 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-brand-700 text-sm tracking-[0] leading-5">
                      {post.category}
                    </div>

                    <div className="gap-4 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-gray-900 text-2xl tracking-[0] leading-8">
                        {post.title}
                      </h3>
                    </div>
                  </div>

                  <a
                    href={post.link}
                    className="inline-flex gap-2 flex-[0_0_auto] items-center justify-center relative cursor-pointer"
                  >
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-brand-700 text-base tracking-[0] leading-6 whitespace-nowrap">
                      Read post
                    </span>

                    <ArrowUpRightIcon className="relative w-5 h-5 text-brand-700" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            <Button className="h-auto inline-flex gap-1.5 px-[18px] py-3 flex-[0_0_auto] bg-brand-600 rounded-lg overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-lg before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-brand-700">
              <div className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-basewhite text-base tracking-[0] leading-6 whitespace-nowrap">
                  View all posts
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
