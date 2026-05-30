export type HeroSlide = {
  id: string;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt: string;
  imageFilter?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-banner-1",
    imageSrc: "/hero_section_banner/banner1/pc.png",
    mobileImageSrc: "/hero_section_banner/banner1/mobile.png",
    imageAlt: "Hanket hero banner 1",
  },
  {
    id: "hero-banner-2",
    imageSrc: "/hero_section_banner/banner2/pc.jpg",
    mobileImageSrc: "/hero_section_banner/banner2/mobile.jpg",
    imageAlt: "Hanket hero banner 2",
  },
  {
    id: "hero-banner-3",
    imageSrc: "/hero_section_banner/banner3/pc.png",
    mobileImageSrc: "/hero_section_banner/banner3/mobile.png",
    imageAlt: "Hanket hero banner 3",
  },
  {
    id: "hero-banner-4",
    imageSrc: "/hero_section_banner/banner4/pc.png",
    mobileImageSrc: "/hero_section_banner/banner4/mobile.png",
    imageAlt: "Hanket hero banner 4",
  },
  {
    id: "hero-banner-5",
    imageSrc: "/hero_section_banner/banner5/pc.png",
    mobileImageSrc: "/hero_section_banner/banner5/mobile.png",
    imageAlt: "Hanket hero banner 5",
  },
  {
    id: "hero-banner-6",
    imageSrc: "/hero_section_banner/banner6/pc.png",
    mobileImageSrc: "/hero_section_banner/banner6/mobile.png",
    imageAlt: "Hanket hero banner 6",
  },
];
