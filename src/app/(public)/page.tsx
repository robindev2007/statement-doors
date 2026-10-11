import {
  DesignYourDoorSection,
  FeaturedDoorsSection,
  HeroSection,
  HowItWorksSection,
  InspirationSection,
  ShopByCategorySection,
  TestimonialsSection,
} from "@/features/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ShopByCategorySection />
      <DesignYourDoorSection />
      <FeaturedDoorsSection />
      <HowItWorksSection />
      <InspirationSection />
      <TestimonialsSection />
    </>
  );
}
