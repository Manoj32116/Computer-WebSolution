import bgUrl from '../assets/cwimg.jpg';



export default function Hero() {
 
  return (
    <section
      id="home"
      className="hero d-flex align-items-center text-white"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          
          {/* Left Column - Text */}
          <div className="col-12 col-md-6 mb-5 mb-md-0" data-aos="fade-right" data-aos-delay="100">
            <h1 className="display-4 fw-bold">Welcome to Computer & WebSolution</h1>
            <p className="lead mb-4 text-warning">
              We create modern solutions that help your business grow.
            </p>
            <a href="#services" className="btn btn-primary btn-md me-2 mb-2">
              Our Services
            </a>
            <a href="#contact" className="btn btn-outline-light btn-md mb-2">
              Get in Touch
            </a>
          </div>

          {/* Right Column - Form */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start" data-aos="fade-left" data-aos-delay="200">
            <form
              action="https://formspree.io/f/mkgvzjaw"
              className="glass-container w-100"
              style={{ maxWidth: "20rem" }}
              method="POST"
            >
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-gradient w-100 fw-semibold"
              >
                Send Message
              </button>
            </form>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918291747546?text=Hello,%20I’d%20love%20to%20know%20how%20I%20can%20help%20you%20😊"
              target="_blank"
              rel="noreferrer"
              className="btn btn-lg btn-success text-light shadow-lg mt-3 px-4 py-2"
              style={{ maxWidth: "20rem", width: "100%" }}
            >
              <i className="bi bi-whatsapp fs-5"></i> Let's Start
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
