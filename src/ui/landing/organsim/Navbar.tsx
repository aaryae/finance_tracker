import useToggle from "@hooks/useToggle";
import { AlignLeft, UserPen, X } from "lucide-react";
import { useEffect } from "react";

const Navbar = () => {
  const [menuOpen, toggleMenuOpen] = useToggle(false);

  // add box shadow when scroll-Y
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar?.classList.add("shadow-md");
      } else {
        navbar?.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* navmenu */}
      <nav
        id="navbar"
        className="flex justify-between py-4 px-20 pt-[17px] w-full top-0 fixed bg-[#f8f5f1]  transition-shadow duration-300"
      >
        {/* logo */}
        <div className="text-2xl">Fmanager</div>

        {/* navlist */}
        <div className="flex gap-20 justify-between">
          <div className="flex gap-5 justify-between items-center text-xl">
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="hidden md:flex gap-4 m-auto">
            {/* <Link className='m-auto text-sm cursor-pointer' to='/login'>
              LogIn
            </Link> */}
            <div className="cursor-pointer" onClick={() => {}}>
              {/* <LogIn size={24} strokeWidth={0.75} absoluteStrokeWidth /> */}
              <UserPen size={28} strokeWidth={1} absoluteStrokeWidth />
            </div>
          </div>
          <div
            onClick={() => toggleMenuOpen()}
            className="flex md:hidden cursor-pointer"
          >
            <AlignLeft strokeWidth={0.5} />
          </div>
        </div>
      </nav>

      {/* Overlay : background blur when sidebar is open  */}
      <div
        className={`md:hidden block fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => toggleMenuOpen()}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed md:hidden top-0 right-0 h-screen w-1/2 bg-[#ede5df] transition-transform duration-300 ease-in-out transform ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          onClick={() => toggleMenuOpen()}
          className="absolute top-0 right-0 p-5 cursor-pointer"
        >
          <X color="#870003" strokeWidth={0.5} />
        </div>
        <ul className="text-sm flex flex-col justify-center text-center m-auto h-screen gap-5">
          {/* <NavItem value='Home' route='/' />
          <NavItem value='Women' route='womenproducts' />
          <NavItem value='Men' route='menproducts' />
          <NavItem value='Shop All' route='allproducts' />
          <NavItem value='About' route='about' /> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
