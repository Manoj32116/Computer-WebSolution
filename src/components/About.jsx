export default function About() {
  return (
    <section id="about" className="about-section py-5 text-center text-light"
      style={{ background: "linear-gradient(135deg, #0d6efd, #6f42c1)" }}
      data-aos="fade-up"
    >
      <div className="container">
        <h2 className="mb-4 fw-bold display-5">About Us</h2>
        <p className="lead mb-5 mx-auto" style={{ maxWidth: "700px" }}>
          We are a passionate team dedicated to delivering the best solutions for our clients.
          With years of experience in technology and design, our mission is to innovate and
          help businesses grow with creativity and excellence.
        </p>
        <div className="row g-4">
          {[ 
            { icon: "bi-lightbulb", title: "Innovation", text: "Bringing fresh ideas and modern technology into every project we take on." },
            { icon: "bi-people", title: "Teamwork", text: "We believe collaboration is the key to creating powerful solutions." },
            { icon: "bi-graph-up-arrow", title: "Growth", text: "Our mission is to help clients achieve sustainable business growth." },
          ].map((item, i) => (
            <div key={i} className="col-md-4" data-aos="fade-up" data-aos-delay={i * 120}>
              <div className="card bg-transparent border-0 text-light">
                <div className="card-body">
                  <div className="mb-3"><i className={`bi ${item.icon} display-4`}></i></div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="small">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
