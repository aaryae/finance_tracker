const Footer = () => {
  return (
    <footer className="bg-[#436e82] p-4 text-center text-white  py-14">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-light">Srijan</h2>
          <p className="text-md mt-4">
            © 2035 by Srijan and secured by also srijan
          </p>
        </div>

        <div className="text-center md:text-right mt-6 md:mt-0">
          <p className="text-md">thamel bazar</p>

          <p className="text-md">lyaideu na chokho piyara</p>
          <br />
          <p className="text-md mt-2">info@mysite.com</p>
          <p className="text-md">123-456-7890</p>
          <div className="mt-4">
            <a href="#" className="text-md underline mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-md underline">
              Accessibility Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
