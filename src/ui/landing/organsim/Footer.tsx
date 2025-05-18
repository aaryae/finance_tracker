const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#262626] p-2 mt-6 text-center text-white">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className=" flex justify-between w-full text-center md:text-left">
          <h2 className="text-2xl font-light">Srijan</h2>
          <p className="text-md mt-4">
            © {currentYear} by Srijan. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
