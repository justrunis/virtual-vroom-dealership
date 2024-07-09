import { motion } from "framer-motion";
import Carousel from "../components/UI/Carousel";

const images = [
  "https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/4895425/pexels-photo-4895425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/18108314/pexels-photo-18108314/free-photo-of-modern-expensive-cars-in-the-garage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7144172/pexels-photo-7144172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-center mb-20"
    >
      <h1 className="text-4xl font-semibold text-primary-content mb-2">
        About Us
      </h1>
      <p className="text-2xl text-primary-content ">
        We are a virtual car dealership that offers a wide range of vehicles.
        Our goal is to provide the best car shopping experience to our
        customers.
      </p>
      <div className="flex justify-center items-center w-full h-full mt-5">
        <Carousel
          images={images}
          className="flex justify-center items-center w-1/2 h-1/2 mb-5"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center w-1/2 mx-auto mb-20"
      >
        <h2 className="text-2xl font-semibold text-primary-content mb-2">
          Our Mission
        </h2>
        <p className="text-lg text-primary-content">
          At Virtual Vroom Dealership, our mission is to revolutionize the car
          buying process by providing a seamless online experience. We aim to
          make car shopping convenient, transparent, and enjoyable for our
          customers.
        </p>
      </motion.div>
    </motion.div>
  );
}
