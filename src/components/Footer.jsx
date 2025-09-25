export default function Footer() {
  return (
    <footer className="text-center text-light py-3 bg-dark">
      <div className="d-flex justify-content-center gap-3 mb-3">
        <a href="https://www.facebook.com/your-profile" target="_blank" className="btn btn-outline-primary btn-floating">
          <i className="bi bi-facebook fs-5"></i>
        </a>
        <a href="https://wa.me/918291747546?text=Hello,%20I’d%20love%20to%20know%20how%20I%20can%20help%20you%20😊" target="_blank" className="btn btn-outline-success btn-floating">
          <i className="bi bi-whatsapp fs-5"></i>
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" className="btn btn-outline-danger btn-floating">
          <i className="bi bi-instagram fs-5"></i>
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" className="btn btn-outline-primary btn-floating">
          <i className="bi bi-linkedin fs-5"></i>
        </a>
      </div>
      <p className="mb-0">© 2025 Computer & WebSolution. All Rights Reserved.</p>
    </footer>
  );
}
