import { FaSearch, FaUserCheck, FaComments, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-3xl text-blue-500" />,
    title: "Choose a Service",
    desc: "Select from trusted home service options near you.",
  },
  {
    icon: <FaUserCheck className="text-3xl text-green-500" />,
    title: "Find a Professional",
    desc: "We'll match you with verified service providers.",
  },
  {
    icon: <FaComments className="text-3xl text-purple-500" />,
    title: "Chat & Confirm",
    desc: "Talk to the expert and schedule the visit easily.",
  },
  {
    icon: <FaCheckCircle className="text-3xl text-pink-500" />,
    title: "Get It Done",
    desc: "Sit back while the professional gets it done on time.",
  },
];

const About = () => (
  <div id="about" className="bg-purple-100 py-16 px-4 sm:px-10">
<h2 className="text-4xl font-bold text-center mb-12">
  <span className="text-black">How it </span>
  <span className="text-pink-500">Works</span>
</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
      {steps.map((step, idx) => (
        <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
<div className="mb-4 flex justify-center">{step.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
          <p className="text-sm text-gray-600">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default About;
