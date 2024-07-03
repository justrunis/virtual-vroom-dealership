import FeatureItem from "./FeatureItem";

export default function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureItem
        iconClass="fas fa-car"
        title="Wide Selection of Cars"
        description="Explore our extensive inventory of new and used cars."
        delay={0.1}
      />
      <FeatureItem
        iconClass="fas fa-globe"
        title="Virtual Showroom"
        description="Experience our cars with 360-degree views and virtual tours."
        delay={0.2}
      />
      <FeatureItem
        iconClass="fas fa-money-bill-wave"
        title="Competitive Pricing"
        description="Get the best deals and competitive pricing on all vehicles."
        delay={0.3}
      />
    </div>
  );
}
