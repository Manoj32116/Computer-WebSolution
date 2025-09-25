export default function Services() {
  return (
    <section id="services" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">Our Services</h2>
        <div className="row g-4">
          {[
            { icon: "🌐", title: "Website Development", text: "Custom, responsive, and SEO-friendly websites tailored to your business needs.", color: "primary" },
            { icon: "💻", title: "Software Development", text: "Scalable and secure software solutions designed to streamline your workflow.", color: "success" },
            { icon: "📱", title: "Mobile App Development", text: "High-performance mobile apps for Android and iOS with user-friendly design.", color: "warning text-dark" },
            { icon: "☁️", title: "Cloud Support", text: "Cloud migration, setup, and support to keep your systems running smoothly.", color: "info" },
            { icon: "🚀", title: "Latest Technologies", text: "Modern programming, cloud hosting, SQL & NoSQL, DevOps & automation.", color: "danger" },
            { icon: "🤝", title: "Customer Support", text: "Dedicated support team ensuring your business runs without interruptions.", color: "secondary" },
          ].map((service, i) => (
            <div key={i} className="col-md-4" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="card h-100 shadow-lg border-0 text-center p-4 service-card">
                <div className="icon mb-3">
                  <div
                    className={`rounded-circle bg-${service.color} d-inline-flex align-items-center justify-content-center text-white`}
                    style={{ width: "70px", height: "70px", fontSize: "30px" }}
                  >
                    {service.icon}
                  </div>
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
