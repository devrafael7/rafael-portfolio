import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className={icon.className}
      />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    {/* Título */}
    <div className="text-center mb-4">
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold text-blue-200/40 mb-3">
          Certified By
        </h1>

        <div className="w-48   h-[2px] bg-blue-200/20 mx-auto mt-2 rounded-full" />
      </div>
    </div>

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`duplicate-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;