import FeatureItem from "./FeatureItem";

export default function FeaturesSection() {
  const carImage2 =
    "https://di-uploads-pod19.dealerinspire.com/rontonkinkia/uploads/2022/12/mlp-img-top-2023-sorento-temp.png";
  const carImage1 =
    "https://pics.clipartpng.com/Polar_White_Mercedes_Benz_C_Class_2014_Car_PNG_Clipart-121.png";
  const carImage3 =
    "https://i.pinimg.com/originals/e7/c7/f5/e7c7f5d816bc9dc15583343d73cbda43.png";

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
      <FeatureItem
        iconClass="fas fa-car"
        title="Wide Selection of Cars"
        description="Explore our extensive inventory of new and used cars. Find the perfect vehicle that suits your needs and preferences."
        imageUrl={carImage1}
        delay={0.1}
      />
      <FeatureItem
        iconClass="fas fa-globe"
        title="Virtual Showroom"
        description="Experience our cars with 360-degree views and virtual tours. Take a virtual walk through our showroom and get a detailed look at every car."
        imageUrl={carImage2}
        alternate={true}
        delay={0.2}
      />
      <FeatureItem
        iconClass="fas fa-money-bill-wave"
        title="Competitive Pricing"
        description="Get the best deals and competitive pricing on all vehicles. We offer transparent pricing and ensure that you get the most value for your money."
        imageUrl={carImage3}
        delay={0.3}
      />
    </div>
  );
}
