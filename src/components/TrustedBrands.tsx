'use client';

import React from 'react';
import Image from 'next/image';

interface TrustedBrandsProps {
  data?: {
    tagline: string;
    brands: { name: string; logoUrl: string; invert?: boolean; }[];
  };
}

export default function TrustedBrands({ data }: TrustedBrandsProps) {
  if (!data?.brands?.length) return null;

  return (
    <section className="bg-[#F4F2EB] py-12 overflow-hidden border-y border-zinc-200">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className="font-serif text-sm italic text-zinc-500">{data.tagline}</h3>
      </div>
      
      <div className="relative w-full">
        {/* Gradient Masks for smooth fade out on edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#F4F2EB] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#F4F2EB] to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Container */}
        <div className="flex w-max animate-marquee">
          {/* First Set of Brands */}
          <div className="flex shrink-0 items-center justify-center gap-16 md:gap-24 px-8 md:px-12">
            {data.brands.map((brand, index) => (
              <div key={`brand-1-${index}`} className="flex justify-center group relative shrink-0">
                {brand.logoUrl ? (
                  <img 
                    src={brand.logoUrl} 
                    alt={brand.name} 
                    className={`h-16 md:h-24 lg:h-32 w-auto max-w-[200px] object-contain transition-all duration-300 mix-blend-multiply ${brand.invert ? 'invert' : ''}`}
                  />
                ) : (
                  <span className="font-serif italic text-3xl md:text-4xl text-zinc-400 group-hover:text-electric transition-colors duration-300">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
          
          {/* Duplicated Set for infinite scroll */}
          <div className="flex shrink-0 items-center justify-center gap-16 md:gap-24 px-8 md:px-12">
            {data.brands.map((brand, index) => (
              <div key={`brand-2-${index}`} className="flex justify-center group relative shrink-0">
                {brand.logoUrl ? (
                  <img 
                    src={brand.logoUrl} 
                    alt={brand.name} 
                    className={`h-16 md:h-24 lg:h-32 w-auto max-w-[200px] object-contain transition-all duration-300 mix-blend-multiply ${brand.invert ? 'invert' : ''}`}
                  />
                ) : (
                  <span className="font-serif italic text-3xl md:text-4xl text-zinc-400 group-hover:text-electric transition-colors duration-300">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
