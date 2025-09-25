import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = navRef.current;
      if (!el) return;
      if (window.scrollY > 8) {
        el.classList.add("is-scrolled");
      } else {
        el.classList.remove("is-scrolled");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = new URL('favicon.png', import.meta.env.BASE_URL).href;
  return (
    <nav ref={navRef} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top glass-nav" data-aos="fade-down">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logoSrc} alt="Logo" height="30" className="me-2 rounded-circle logo-animated logo-interactive" />
          <span className="fw-bold">Computer & Web Solution</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link rich-link px-3 py-2" href="#home"><i className="bi-house"></i> Home</a></li>
            <li className="nav-item"><a className="nav-link rich-link px-3 py-2" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link rich-link px-3 py-2" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link rich-link px-3 py-2" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
