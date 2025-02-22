import { Particles } from "@/components/ui/Particles";

const LandingBackground = () => {
  return (
    <Particles
      className="absolute inset-0 pointer-events-none"
      quantity={500}
      staticity={60}
      ease={70}
      size={0.03}
      color="#fde68a"
    />
  );
};

export { LandingBackground };
