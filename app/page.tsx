"use client";

import Footer from "@/components/footer/Footer";
import Banner from "@/components/header/Banner";
import Navbar from "@/components/header/Navbar";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Banner />
      <Navbar />
      <div className="md:hidden flex w-full h-auto py-20">
        <div className="relative w-[390px] h-[326px] flex justify-center mx-auto">
          <Image
            src="https://s3-alpha-sig.figma.com/img/eaea/b187/4d1288cd4dbdbb04d9ed70622b2a9988?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mN4fPy9RtJkzJLifVFXWyLunFAei~Cua-FkofI~SGPZYhtDt3dQ7n41IH7LpxY7l1haE4z5sCwEekkaM0-QLrBtCQiNnK9N8eDaX3SHn0kBFSOJYTZvsBVtpqdbJihpfEAgGx2Cd8nIAU4567-~G1i-OOPxqaSHPCBLOHfy49pWNZudlleZsISwxps6dCat~0M-HpMTaNcA2zARb1elC~qShEM-k752Dui8fWVgtLvywUiPKY3S9le2lL1Cmzenl0~UZdcFwI0lxfhgk3UTI6TgE3~NdQ6mr1wfuTXEsLK-aZnhGyftHfqjO86rMkrC1d-8bxrOBpCBegSrq3Rj-lg__"
            alt="Fametonic App Interface"
            sizes="100%"
            fill
            objectFit="cover"
            className="!w-[390px] !h-[360px]"
            priority
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto px-[20px] md:px-[100px] lg:px-[215px]">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col z-50">
            <h1 className="text-4xl text-[25px] md:text-[35px] font-extrabold md:font-bold leading-tight text-center md:text-left">
              Want to Turn Social Media Into a Profitable Career?{" "}
            </h1>

            <div className="text-[35px] font-bold leading-[100%] text-center md:text-left tracking-[0%] text-[#00E7F9] font-['Urbanist'] drop-shadow-[0_4px_4px_#FC004E]">
              Discover your way to success with Fametonic:
            </div>

            <ul className="flex flex-col gap-[13px] my-[16px]">
              {[
                "Start growing your influence right away—no waiting required!",
                "Create viral TikToks and Reels step by step with easy-to-follow lessons",
                "Use a Personal AI Worker to boost your content",
                "Learn from expert-led courses designed for aspiring influencers",
              ].map((feature, index) => (
                <li key={index} className="flex gap-[10px]">
                  <span className="text-[#FC004E]">✨</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-col-reverse md:flex-col pb-[40px]">
              <div className="w-full md:w-fit flex flex-col gap-2.5">
                <button className="!w-full h-[40px] bg-[#FC004E] hover:bg-[#e0004e] text-white rounded-[10px] font-semibold flex items-center justify-center gap-[10px] px-[40px] md:px-[60px] py-[8px] transition-all shadow-[2px_2px_10px_0px_#00E7F9]">
                  GET STARTED
                  <ChevronRight className="h-5 w-5" />
                </button>
                <p className="text-[12px] text-white text-center">
                  1-minute quiz for personalized insights
                </p>
              </div>
              <Footer />
            </div>
          </div>

          <div className="relative hidden md:block">
            <Image
              src="https://s3-alpha-sig.figma.com/img/eaea/b187/4d1288cd4dbdbb04d9ed70622b2a9988?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mN4fPy9RtJkzJLifVFXWyLunFAei~Cua-FkofI~SGPZYhtDt3dQ7n41IH7LpxY7l1haE4z5sCwEekkaM0-QLrBtCQiNnK9N8eDaX3SHn0kBFSOJYTZvsBVtpqdbJihpfEAgGx2Cd8nIAU4567-~G1i-OOPxqaSHPCBLOHfy49pWNZudlleZsISwxps6dCat~0M-HpMTaNcA2zARb1elC~qShEM-k752Dui8fWVgtLvywUiPKY3S9le2lL1Cmzenl0~UZdcFwI0lxfhgk3UTI6TgE3~NdQ6mr1wfuTXEsLK-aZnhGyftHfqjO86rMkrC1d-8bxrOBpCBegSrq3Rj-lg__"
              alt="Fametonic App Interface"
              sizes="100%"
              fill
              objectFit="cover"
              className="max-w-full z-0 w-full left-auto lg:!left-[-65px] h-auto lg:min-w-[666px] lg:min-h-[679px] absolute !top-[-70px]"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
