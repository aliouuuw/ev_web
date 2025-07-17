import React from "react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const TeamSection = (): JSX.Element => {
  return (
    <section className="flex items-start pt-[30px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
      {/* Middle Column - Contact Form */}
      <div className="flex flex-col items-start relative flex-1 grow">
        <Card className="flex flex-col h-[420px] items-start w-full rounded-none border-0 bg-[#435933]">
          <CardContent className="flex flex-col items-center w-full p-[30px] z-10">
            <div className="flex flex-col items-start pt-0 pb-[30px] px-[15px] self-stretch w-full">
              {/* Icône supprimée */}
            </div>

            <div className="flex flex-col items-start gap-[9px] pt-0 pb-[30px] px-[15px] self-stretch w-full -mt-px">
              <div className="flex flex-col items-center pt-0 pb-[1.5px] self-stretch w-full z-[1]">
                <h2 className="self-stretch mt-[-1.00px] [font-family:'Lato',Helvetica] font-black text-macafricansgicomwhite text-[28px] text-center tracking-[2.00px] leading-[33.6px]">
                  LAISSEZ-NOUS UN MESSAGE
                </h2>
              </div>

              <div className="flex flex-col items-center self-stretch w-full z-0">
                <p className="self-stretch mt-[-1.00px] font-macafricansgi-com-inter-italic font-[number:var(--macafricansgi-com-inter-italic-font-weight)] [font-style:var(--macafricansgi-com-inter-italic-font-style)] text-macafricansgicomnobel text-[length:var(--macafricansgi-com-inter-italic-font-size)] text-center tracking-[var(--macafricansgi-com-inter-italic-letter-spacing)] leading-[var(--macafricansgi-com-inter-italic-line-height)]">
                  et nous reviendrons vers vous.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[563.98px] items-start gap-5 pt-px pb-0 px-[7px] -mt-px">
              <Input
                className="h-[36px] py-2 px-3 rounded-none bg-white border border-[#e8e8e8] shadow-sm focus:border-[#AD7F00] focus:ring-2 focus:ring-[#AD7F00]/40 placeholder:text-[#b0b0b0] transition-all duration-200 [font-family:'Source_Sans_Pro',Helvetica] text-[#222] text-[15px]"
                placeholder="Votre nom*"
              />

              <Input
                className="h-[36px] py-2 px-3 rounded-none bg-white border border-[#e8e8e8] shadow-sm focus:border-[#AD7F00] focus:ring-2 focus:ring-[#AD7F00]/40 placeholder:text-[#b0b0b0] transition-all duration-200 [font-family:'Source_Sans_Pro',Helvetica] text-[#222] text-[15px]"
                placeholder="Email*"
              />

              <Textarea
                className="h-[70px] px-3 py-2 rounded-none bg-white border border-[#e8e8e8] shadow-sm focus:border-[#AD7F00] focus:ring-2 focus:ring-[#AD7F00]/40 placeholder:text-[#b0b0b0] transition-all duration-200 [font-family:'Source_Sans_Pro',Helvetica] text-[#222] text-[15px] resize-none"
                placeholder="Message*"
              />

              <div className="flex justify-center w-full">
                <Button className="min-w-[200px] px-[70.48px] py-3.5 rounded-none bg-[#AD7F00] hover:bg-[#AD7F00]/90 [font-family:'Source_Sans_Pro',Helvetica] font-bold text-macafricansgicomwhite text-[13px] text-center tracking-[0.80px] leading-[22.1px]">
                  ENVOYER
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Image */}
      <div className="flex flex-col items-start relative flex-1 grow">
        <div className="relative self-stretch w-full h-[420px]">
          <div
            className="relative w-full h-[420px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/shutterstock_1593018937.jpg')" }}
          />
        </div>
      </div>
    </section>
  );
};
