import FeatureItem from "./FeatureItem";

export default function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureItem
        iconClass="fas fa-car"
        title="Wide Selection of Cars"
        description="Explore our extensive inventory of new and used cars. Find the perfect vehicle that suits your needs and preferences."
        delay={0.1}
      />
      <FeatureItem
        iconClass="fas fa-globe"
        title="Virtual Showroom"
        description="Experience our cars with 360-degree views and virtual tours. Take a virtual walk through our showroom and get a detailed look at every car."
        delay={0.2}
      />
      <FeatureItem
        iconClass="fas fa-money-bill-wave"
        title="Competitive Pricing"
        description="Get the best deals and competitive pricing on all vehicles. We offer transparent pricing and ensure that you get the most value for your money."
        delay={0.3}
      />
    </div>
  );
}
