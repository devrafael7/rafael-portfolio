import { socialImgs } from "../constants";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Termos */}
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        {/* Redes sociais */}
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label={`Visitar ${socialImg.name}`}
            >
              <img
                src={socialImg.imgPath}
                alt={socialImg.name}
              />
            </a>
          ))}
        </div>

        {/* Copyright + Back to top */}
        <div className="flex flex-col items-center justify-center gap-4 md:items-end">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Rafael Oliveira. All rights reserved.
          </p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60 transition-all duration-300 hover:border-white/25 hover:bg-white hover:text-black"
            aria-label="Voltar ao topo"
          >
            <span>Back to top</span>

            <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white/10 transition-all duration-300 group-hover:bg-black/10">
              <span className="inline-block transition-transform duration-500 group-hover:-translate-y-1">
                ↑
              </span>
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;