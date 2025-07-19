import {
  FaBroom,
  FaTruckMoving,
  FaPaintRoller,
  FaTools,
  FaLightbulb,
  FaFaucet,
  FaHammer,
  FaPlus
} from "react-icons/fa"; // FaPlus used for "Many More"

const services = [
  {
    name: "Cleaning",
    icon: <FaBroom className="text-3xl text-pink-500" />,
    description: "Deep clean your space effortlessly",
  },
  {
    name: "Shifting",
    icon: <FaTruckMoving className="text-3xl text-red-500" />,
    description: "Move your stuff quickly and safely",
  },
  {
    name: "Painting",
    icon: <FaPaintRoller className="text-3xl text-teal-500" />,
    description: "Give your walls a fresh color",
  },
  {
    name: "Repair",
    icon: <FaTools className="text-3xl text-yellow-500" />,
    description: "Fix appliances and equipment",
  },
  {
    name: "Electric",
    icon: <FaLightbulb className="text-3xl text-blue-500" />,
    description: "Electrical fixes and installations",
  },
  {
    name: "Plumbing",
    icon: <FaFaucet className="text-3xl text-yellow-600" />,
    description: "Leaks, taps, and pipe solutions",
  },
  {
    name: "Carpentry",
    icon: <FaHammer className="text-3xl text-orange-600" />,
    description: "Furniture repair and woodwork",
  },
  {
    name: "Other Services",
    icon: <FaPlus className="text-3xl text-gray-700" />,
    description: "Explore additional trusted services",
  },
];

const Services = () => {
  return (
    <div  id="services" className="min-h-screen bg-white py-16 px-4 sm:px-10">
      <h2 className="text-4xl font-bold text-center mb-12">
  <span className="text-black">Our </span>
  <span className="text-blue-600">Services</span>
</h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-purple-100 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {service.description}
            </p>
            {service.name === "Other Services" ? (
              <a href="/signin">
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 cursor-pointer transition">
    Explore More
  </button>
              </a>
            ) : (
                <a href="/signin">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition">
    Book Now
  </button>
                </a>

)}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
