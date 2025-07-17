import React from "react";

import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full py-0 pb-[30px]">
      <Card className="border-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-[19.1px] pb-5 px-[15px]">
              <header>
                <h2 className="font-macafricansgi-com-inter-regular-upper text-[#f2f2f2] text-[length:var(--macafricansgi-com-inter-regular-upper-font-size)] tracking-[var(--macafricansgi-com-inter-regular-upper-letter-spacing)] leading-[var(--macafricansgi-com-inter-regular-upper-line-height)] [font-style:var(--macafricansgi-com-inter-regular-upper-font-style)]">
                  DERNIÈRES ACTUALITÉS FINANCIÈRES
                </h2>
              </header>

              <div>
                <h3 className="font-macafricansgi-com-semantic-heading-3 font-[number:var(--macafricansgi-com-semantic-heading-3-font-weight)] text-macafricansgicomwhite text-[length:var(--macafricansgi-com-semantic-heading-3-font-size)] tracking-[var(--macafricansgi-com-semantic-heading-3-letter-spacing)] leading-[var(--macafricansgi-com-semantic-heading-3-line-height)] [font-style:var(--macafricansgi-com-semantic-heading-3-font-style)]">
                  Découvrez ici les opportunités du marché et
                  <br />
                  nos analyses
                </h3>
              </div>
            </div>

            <Separator className="w-[736.66px] mx-auto border-[#494949]" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
