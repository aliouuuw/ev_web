import React from 'react';

import { Button } from '../../../../components/ui/button';

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center bg-[#f9f9f9] py-[100px]">
      <div className="max-w-[1180px] w-full flex flex-col items-center">
        <div className="flex flex-col items-center w-full max-w-[1120px]">
          <div className="flex items-center justify-center mb-[30px]">
            <div className="w-[42px] h-[42px] flex items-center justify-center">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM21 38.25C11.2453 38.25 3.75 30.7547 3.75 21C3.75 11.2453 11.2453 3.75 21 3.75C30.7547 3.75 38.25 11.2453 38.25 21C38.25 30.7547 30.7547 38.25 21 38.25Z" fill="#AD7F00"/>
                <path d="M21 10.5C17.4109 10.5 14.4844 13.4266 14.4844 17.0156C14.4844 20.6047 17.4109 23.5313 21 23.5313C24.5891 23.5313 27.5156 20.6047 27.5156 17.0156C27.5156 13.4266 24.5891 10.5 21 10.5ZM21 19.7813C19.6969 19.7813 18.6094 18.6938 18.6094 17.3906C18.6094 16.0875 19.6969 15 21 15C22.3031 15 23.3906 16.0875 23.3906 17.3906C23.3906 18.6938 22.3031 19.7813 21 19.7813Z" fill="#AD7F00"/>
                <path d="M21 26.25C16.5375 26.25 12.9375 28.7625 11.025 32.3625C13.275 34.5375 16.95 36 21 36C25.05 36 28.725 34.5375 30.975 32.3625C29.0625 28.7625 25.4625 26.25 21 26.25Z" fill="#AD7F00"/>
              </svg>
            </div>
          </div>

          <h2 className="w-fit mt-[-1.00px] font-['Lato',Helvetica] font-black text-[#435933] text-[41px] text-center tracking-[1.00px] leading-[49.2px] whitespace-nowrap mb-[30px]">
            À PROPOS DE NOUS
          </h2>

          <div className="flex flex-col items-center text-center max-w-[800px] mb-[30px]">
            <p className="font-['Lato',Helvetica] text-[#435933] text-[18px] leading-[27px] tracking-[0.36px]">
              EVEREST Finance est une Société de Gestion et d&apos;Intermédiation (SGI) agréée par le Conseil Régional de l&apos;Epargne Publique et du Marché Financier (CREPMF). Notre mission est de vous accompagner dans la réalisation de vos objectifs financiers avec expertise, éthique et innovation.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Button variant="default" className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
