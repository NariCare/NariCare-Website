import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  StarIcon,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialWrapperSection = (): JSX.Element => {
  const testimonials = [
    {
      text: "I had read enough to realise that breastfeeding was the way to go for my baby's nutrition goals. Also the paediatrician reiterated it enough times to confirm it. Although I did my homework, nothing really prepares you for what comes after childbirth. My baby was low on birth weight and with it came many challenges, especially while feeding he couldn't suckle as he had low jaw strength for breastfeeding. That's where formula came in and hand pumping, so we could feed him via spoon, dropper or paladai.\n\nA week later we were discharged, with a bag full of medicines and a 1.8kg baby. We were instructed to feed him every 2 hrs and give him medicines for weight gain, immunity, vitamins etc. 8 days into this schedule coupled with sleepless nights and healing from a C-section, finally we went back to the hospital to see the progress. The baby had put on 5 gms. From 1.8kg, he was 1.85kg. Our heart sank.\n\nThat's when I started talking to close friends who were new moms, in a hope to find some word of confidence that it will get better. Just by mere coincidence I stumbled upon Naricare, all thanks to my close friend Janhavi, who had already worked with them during her BF journey.\n\nI was convinced that I can figure this out from the moment I spoke to Gayathri. She instilled a sense of confidence in me and I was all set to take the leap. Something Dr. Mugdha said during the 3 hr prep video will always stay with me - \"Breastfeeding is a commitment towards your baby.\" After this there was no looking back.\n\nAfter speaking to Sonal, our lactation consultant , she charted out an excellent to the point, detailed plan customised to my baby's needs. This was followed with almost daily updates. All the tips and advice received at Naricare during the next 4 months really helped me understand my baby's needs and helped me work towards his weight gain.\n\nI'm thankful that I discovered Naricare. From handholding me through times of self doubt to making me extremely confident in feeding my baby and finally achieving his weight goals.\n\nToday baby is 6.1kg and 6 months old. Couldn't be happier. Grateful.",
      name: "Kavita Menon",
      image: "/kavita-menon.webp"
    },
    {
      text: "In breastfeeding journey, I understood the importance of words how positive and negative words impact us. more than anything more then guiding what we need is support and Gayatri's support and positive attitude is the reason I m successfully breastfeeding today. I delivered at 38 week via csec and immediately After baby was born my mother in law started bottlefeeding, nurses, doctors warned again and again her answer used to be \"I bottle fed my baby, what's wrong in it.\" So finally at 3rd day my milk started coming I m keeping him in breast he is not sucking he was not even taking nipple in his mouth, so again my MIL used to tell your nipple is too big it's not going inside his mouth, so we went to lactation consultant she told \"your nipple is fine baby is used to bottle that's why he is not taking breast.\" she also told \"try to keep baby in your breast when he shows 1st hunger cue.\" So I tried but he is not taking nipple in his mouth he used to cry immediately my mother in law used to take him and shove Bottle, in next visit my Doc tried to make her understand but she thought I complained about her and became angry at me, doc also suggested me to keep him in breast 1st then offer ebm so started pumping still he is taking nipple but not latching again she used to tell baby is too weak to latch don't keep him hungry give him from bottle, when I tried to stop formula and give ebm again she used to tell you are vegetarian your milk have no vitamin nutrients feed him formula, uff it was so hard And frustrating to hear all this, I was finally giving up than Gayatri came in this journey her Words her support was everything that encouraged me to try again, then Dr. Mughda's session cleared doubts and encouraged more, and when my mil returned to India started keeping him in breast and top up with ebm completely stopped formula amd now directly from breast. So you see the impact of positive words and negative words, my success on breastfeeding credit goes to Gayatri, her support her guidance and her teaching. Still whenever have doubt Gayatri comes to rescue with all her expert team who are always ready to help.Trust me guys baby's fussiness, grunting , crying everything is gone since I started direct feeding, yes he have become too much clingy but I m loving it , he wants only me , he don't sleep without nipple in his mouth, his eyes lighten up after seeing me taking out Breast, he smack his lips when he sees me, he sleeps only when I m beside him all this I m loving so much. Seriously I m feeling like Only thing that connect mother and baby is breast. so guys never give up , try your breast never listen to all these negative people and yes everyone deserves to have person like Gayatri beside them to support encourage and guide.",
      name: "Shiwani",
      image: "/shiwani.jpg"
    },
    {
      text: "Today I completed 8 months of breastfeeding my baby. I remember hearing from my friends about how difficult breastfeeding is and having no clue about it, I thought of educating myself about it during my last months of pregnancy. While researching I came across \"Naricare\" and I got in touch with Gayathri.\n\nI remember Gayathri asking, \"what is your breastfeeding goal?\" At that point I didn't even know what a good goal should be like.\n\nIt's bin a long journey of being educated about breastfeeding, different positions of feeding, what common challenges could be. All this information made me less anxious about breastfeeding, and I felt better prepared mentally.\n\nBut no amount of theoretical knowledge can prepare you for the actual practical of breastfeeding when the baby arrives.\n\nNaricare literally handheld me through my initial days, answering all my questions and guiding me in successfully breastfeeding.\n\nI remember at one point during my 5th months, my baby went on a nursing strike for a week. Gayathri guided me through it. Honestly, I might have given up that time feeling baby doesn't want to feed and it was also draining me emotionally. Encouraging words of Gayathri and right guidance from Naricare literally pulled me through that difficult phase.\n\nThe breastfeeding kit made by Naricare turned out to be super useful in the hospital and the initial days. I had everything from breastpump, nipple sheilds, bottles, breast pads etc. I used almost everything from it and it made my initial days so smooth. Even my mom n mother in law were super impressed by the kit.\n\nI totally relied on Naricare throughout my breastfeeding journey and today I completed 8 months, which I thought was not even possible for someone like me. When I meet people most of them are surprised or curious that is it even possible to not give formula till now.\n\nMy breastfeeding goal which I discussed with Gayathri was 6 months and not a day more is what I thought. Here I am at 8 months and still continuing to feed.\n\nI really want to thank Naricare from the bottom of my heart for making it possible.",
      name: "Gunjitha Vishal",
      image: "/gunjitha-vishal.jpeg"
    },
    {
      text: "I am a first time mother. My baby use to cry a lot in the first month . Also she was not able to regain its birth weight even after 6 weeks. As a parent we were very tensed and visited paediatrician. He told us my milk supply is low and we need to give formula to our baby and he also told me my supply can't be increased and I have to accept this fact. That day was worst day because as a parent I know how important breastmilk is so I searched different ways how I can increase my supply and then I came across naricare on Instagram. I joined them and then my journey to increase my supply begun . Naricare program provides various videos, lactation consultations and most Amazing WhatsApp support group to clarify all are doubts. Sonal, their lactation expert suggested various techniques to increase my supply and to regain my baby weight. They continuously followed up on me and always motivated me in my journey whenever I felt low, anxious or doubted my capability. Due to their efforts I was able to exclusively breastfeed my baby which I always wanted. Also she is gaining weight as per normal range and achieving all age related milestones. I sincerely thanks naricare team for helping me out and teaching so many techniques, answering all are queries related to diet, baby and feeding. I wish you all the very best and hope you reach out to more mother like us and make their journey more beautiful.",
      name: "Surbhi Gupta",
      image: "/surbhi-gupta.png"
    },
    {
      text: "I was in the final weeks of my pregnancy when I learned about Naricare and their breastfeeding courses. To be honest, I took a class on lactation organized by my hospital, but it left me with a lot of questions unanswered. Naricare came to me at just the right time. I attended a Dr. Mugdha's webinar from the comfort of my home. All of my basic breastfeeding questions were answered with tips, tricks, and even demonstration techniques. Luckily, I attended the webinar just before giving birth. Not only did my little one latch on well right after birth, but I continued to exclusively breastfeed her as we turned 4 months postpartum. I have tried many different breastfeeding positions and so far I have nursed her in the mall, in the coffee shop, in the moving car, while watching. TV - you just name it! Even after the webinar, the support group provided as an extension of the program helped me better understand the fundamentals of breastfeeding. Special thanks to Gayathri for her continued support and guidance. Naricare is my go-to solution to breastfeeding problems to this day. I would advise parents (why stick with moms) to attend the webinar or sign up for the program just before birth as it sets the stage for a smooth journey. Many thanks to Gayathri and her wonderful team.",
      name: "Dr. Shaili Tomar",
      image: "/shaili-tomar.png"
    },
    {
      text: "My 2 cents on Naricare's breastfeeding webinar - it's absolutely worth it and all women who are expecting as well as new mothers, just go for it. There are lot of myths around breastfeeding and all of them were clarified in a clear and concise way. I have given birth to a baby girl via c-section and I have struggled a lot in the initial few days after my delivery to breastfeed and that's when I came across NariCare and their offerings. Their breastfeeding webinar has helped a lot in my journey to breastfeed. Special thanks to Gayathri who is such a wonderful woman and is so patient to answer each and every silly question during my breastfeeding journey. Kudos to Naricare and the amazing work the team has been doing. PS: I highly recommend to attend the session before delivery itself so that you can apply everything you have learned from day zero !",
      name: "Rochini Paidisetty",
      image: "/rochini-paidisetty.png"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [expandedTestimonials, setExpandedTestimonials] = useState<boolean[]>(
    new Array(testimonials.length).fill(false)
  );

  // Auto-rotate testimonials every 5 seconds with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade out
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true); // Start fade in
      }, 300); // Wait 300ms for fade out to complete
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleTestimonialChange = (index: number) => {
    if (index !== currentTestimonial) {
      setIsVisible(false); // Start fade out
      setTimeout(() => {
        setCurrentTestimonial(index);
        setIsVisible(true); // Start fade in
      }, 300); // Wait 300ms for fade out to complete
    }
  };

  const handleVideoPlay = (index: number) => {
    const testimonial = testimonialCards[index];
    
    // Try to play inline first, fallback to new tab if it fails
    try {
      setPlayingVideo(index);
    } catch (error) {
      // Direct fallback to opening in new tab
      window.open(testimonial.videoUrl, '_blank');
    }
  };

  const handleVideoEnd = () => {
    setPlayingVideo(null);
  };

  const handleVideoError = (index: number) => {
    setPlayingVideo(null);
    // Fallback: Open video in new tab
    const testimonial = testimonialCards[index];
    if (testimonial.videoUrl) {
      window.open(testimonial.videoUrl, '_blank');
    }
  };

  const truncateText = (text: string, maxLength: number = 1292): string => {
    if (text.length <= maxLength) return text;
    
    // Find the last space before the maxLength to avoid cutting words
    const truncatedText = text.substring(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
    
    return lastSpaceIndex > 0 ? truncatedText.substring(0, lastSpaceIndex) + '...' : truncatedText + '...';
  };

  const toggleTestimonialExpansion = (index: number) => {
    setExpandedTestimonials(prev => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const getDisplayText = (text: string, index: number): string => {
    if (text.length <= 1292) return text;
    return expandedTestimonials[index] ? text : truncateText(text);
  };
  const testimonialCards = [
    {
      videoUrl: "/video/Video-501.mp4",
      poster: "/thumbnails/Video-501-thumb.jpg",
      title: "2-Month-Old on 700ml Formula daily Gets Exclusively Breastfed in 30 Days",
      name: "Sravya",
      hasPlayButton: true,
      hasVideo: true,
    },
    {
      videoUrl: "/video/Video-812.mp4",
      poster: "/thumbnails/Video-812-thumb.jpg",
      title: "How She Ditched 480ml Daily Formula in Just 40 Days",
      name: "Shagun",
      hasPlayButton: true,
      hasVideo: true,
    },
    {
      videoUrl: "/video/Video-998.mp4",
      poster: "/thumbnails/Video-998-thumb.jpg",
      title: "From Breast Rejection and 800ml of Formula daily to Exclusive Breastfeeding",
      name: "Priti",
      hasPlayButton: true,
      hasVideo: true,
    },
    {
      videoUrl: "/video/Video-164.mp4",
      poster: "/thumbnails/Video-164-thumb.jpg",
      title: "Preterm Baby to Breastfeeding Success: How This Professor Mom Did It in 10 Days",
      name: "Sanjana",
      hasPlayButton: true,
      hasVideo: true,
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
    <section className="pt-12 lg:pt-16 pb-0 px-0 flex flex-col w-full items-center gap-8 lg:gap-16 bg-[#fffcf9]">
      <div className="flex max-w-screen-md w-full max-w-3xl items-center gap-4 lg:gap-5 flex-col px-4">
        <h2 className="text-center [font-family:'Merriweather',Helvetica] text-[#0f1728] text-2xl lg:text-5xl font-semibold tracking-[0] leading-tight lg:leading-normal">
          Don&apos;t just take our word for it
        </h2>

        <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base lg:text-xl text-center tracking-[0] leading-6 lg:leading-[30px]">
          Real stories from real mothers who have transformed their <br className="hidden lg:block" />
          breastfeeding journey with Naricare
        </p>
      </div>

      <div className="flex flex-col max-w-screen-xl items-start gap-8 lg:gap-16 px-4 lg:px-8 py-0 w-full">
        <div className="flex flex-col items-start gap-6 lg:gap-8 w-full">
          <div className="flex items-start gap-4 lg:gap-8 overflow-x-auto w-full">
            {testimonialCards.map((testimonial, index) => (
              <Card
                key={index}
                className={`relative w-[280px] lg:w-[360px] h-[400px] lg:h-[480px] flex-shrink-0 border-0 overflow-hidden`}
              >
                <CardContent className="p-0 h-full relative">
                  {testimonial.hasVideo && playingVideo === index ? (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      playsInline
                      webkit-playsinline="true"
                      onEnded={handleVideoEnd}
                      onError={() => handleVideoError(index)}
                      poster={testimonial.poster}
                      preload="metadata"
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <video
                        className="w-full h-full object-cover"
                        preload="metadata"
                        muted
                        playsInline
                        webkit-playsinline="true"
                        poster={`${testimonial.videoUrl}#t=1`}
                        style={{ pointerEvents: 'none' }}
                      >
                        <source src={`${testimonial.videoUrl}#t=1`} type="video/mp4" />
                      </video>
                    </>
                  )}

                  {playingVideo !== index && (
                    <div className="flex flex-col w-full items-center justify-center pt-16 lg:pt-24 pb-4 lg:pb-6 px-4 lg:px-6 absolute left-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent">
                      <div className="flex flex-col items-start gap-2 lg:gap-3 px-3 lg:px-5 py-4 lg:py-6 w-full bg-white/30 border border-white/20 backdrop-blur-md rounded-lg relative">
                        <p className="[font-family:'Poppins',Helvetica] font-semibold text-white text-sm lg:text-base tracking-[0] leading-5 lg:leading-[30px]">
                          &quot;{testimonial.title}&quot;
                        </p>

                        <div className="flex flex-col items-start gap-3 lg:gap-4 w-full">
                          <div className="flex items-center justify-between w-full">
                            <StarRating />
                            {testimonial.hasPlayButton && (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleVideoPlay(index);
                                }}
                                className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 hover:bg-white/30 rounded-full border-2 border-white/40 hover:border-white/60 transition-all duration-200 hover:scale-110 flex-shrink-0"
                              >
                                <PlayIcon className="w-3 h-3 lg:w-4 lg:h-4 text-white fill-white" />
                              </Button>
                            )}
                          </div>
                          <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl lg:text-3xl tracking-[0] leading-6 lg:leading-[38px]">
                            {testimonial.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-start gap-4 lg:gap-8">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-[#e4e7ec] hover:bg-gray-50"
            >
              <ChevronLeftIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-[#e4e7ec] hover:bg-gray-50"
            >
              <ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-0 pb-12 lg:pb-16 px-0 flex flex-col w-full items-center gap-8 lg:gap-16 bg-[#fffcf9]">
        <div className="flex flex-col max-w-screen-xl items-start gap-6 lg:gap-8 px-4 lg:px-8 py-0 w-full">
          <div className="flex flex-col items-center gap-6 lg:gap-10 w-full">
            <div className={`flex flex-col max-w-screen-lg items-center gap-6 lg:gap-8 w-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-center gap-4 w-full">
                <blockquote className="[font-family:'Poppins',Helvetica] text-[#475467] text-lg lg:text-2xl tracking-[-0.36px] lg:tracking-[-0.48px] leading-7 lg:leading-[44px] font-medium text-center whitespace-pre-line">
                  {getDisplayText(testimonials[currentTestimonial].text, currentTestimonial)}
                </blockquote>
                
                {testimonials[currentTestimonial].text.length > 1292 && (
                  <Button
                    variant="ghost"
                    onClick={() => toggleTestimonialExpansion(currentTestimonial)}
                    className="text-[#8383ed] hover:text-[#7373dd] hover:bg-[#8383ed]/10 font-medium text-base lg:text-lg underline underline-offset-2 px-2 py-1 h-auto"
                  >
                    {expandedTestimonials[currentTestimonial] ? 'Read less' : 'Read more'}
                  </Button>
                )}
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="relative w-16 h-16">
                    <div className="absolute -top-px -left-px w-[66px] h-[66px] bg-[#d9d9d9] rounded-full border border-neutral-300" />
                    <img
                      className="absolute top-0 left-0 w-16 h-16 rounded-full object-cover"
                      alt={testimonials[currentTestimonial].name}
                      src={testimonials[currentTestimonial].image}
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1 w-full">
                    <h4 className="font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-gray-900 text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                      {testimonials[currentTestimonial].name}
                    </h4>
                  </div>
                </div>

                <StarRating />
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTestimonialChange(index)}
                  className={`w-2.5 h-2.5 rounded-md transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-[#ff9e88]' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
