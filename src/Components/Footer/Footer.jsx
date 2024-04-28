const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img
            className="w-16 border rounded-full "
            src="https://i.postimg.cc/pTP97GRj/image.png"
            alt=""
          />
          <p className="font-bold">ExploreAsiaParadise</p>
        </aside>
        <nav>
          <h6 className="footer-title">Our Services</h6>
          <a className="link link-hover">Best Place Choice</a>
          <a className="link link-hover">Affordable Price</a>
          <a className="link link-hover">Guide Services</a>
          <a className="link link-hover">Securety Insuring</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
