export default function Contact() {
  return (
    <section className="contact-section py-5 bg-dark" id="contact" data-aos="fade-up">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 mb-4 text-light" data-aos="fade-right" data-aos-delay="100">
            <h2 className="fw-bold mb-4">Contact Us</h2>
            <p className="mb-4">Have questions or need help? Get in touch with us and we’ll be happy to assist.</p>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-geo-alt-fill text-primary fs-4 me-3"></i>
                <span>R8/B-7, Nirman Bhuvan, Vikas Nagar, Andheri (E), Mumbai, India</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-telephone-fill text-primary fs-4 me-3"></i>
                <span>+91 8291747546</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope-fill text-primary fs-4 me-3"></i>
                <span>manoj3feb1991@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <h5 className="mb-4 fw-bold">Send us a message</h5>
                <form action="https://formspree.io/f/mkgvzjaw" method="POST">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input type="text" name="name" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input type="email" name="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Phone</label>
                    <input type="tel" name="phone" className="form-control" pattern="[0-9]{10}" required />
                    <small className="text-muted">Format: 10 digits (e.g. 9876543210)</small>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea name="message" rows="4" className="form-control" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-gradient w-100 py-2 fw-semibold">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
