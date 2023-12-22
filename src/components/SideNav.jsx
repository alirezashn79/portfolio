import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdWorkOutline, MdLanguage } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { GrContact } from "react-icons/gr";
import { useState } from "react";
const SideNav = () => {
  //! open nav State
  const [navOpen, setNavOpen] = useState(false);

  //! fire nav
  const fireNav = () => setNavOpen(!navOpen);

  //! nav item
  const navItem = [
    {
      id: 1,
      name: "Home",
      icon: <AiOutlineHome size={20} />,
      href: "#main",
    },
    {
      id: 2,
      name: "Work",
      icon: <MdWorkOutline size={20} />,
      href: "#work",
    },
    {
      id: 3,
      name: "Projects",
      icon: <AiOutlineFundProjectionScreen size={20} />,
      href: "#projects",
    },
    {
      id: 4,
      name: "Resume",
      icon: <RxPerson size={20} />,
      href: "#main",
    },
    {
      id: 5,
      name: "Contact",
      icon: <GrContact size={20} />,
      href: "#contact",
    },
  ];

  return (
    <div>
      {/* mobile */}
      <AiOutlineMenu
        size={20}
        onClick={fireNav}
        className="fixed top-4 right-4 cursor-pointer md:hidden z-50"
      />

      {navOpen && (
        <div className="bg-white/90 h-screen w-full flex fixed flex-col gap-2 items-center justify-center z-40 md:hidden animate-bounce-short">
          {navItem.map((item) => (
            <a
              key={item.id}
              className="flex items-center gap-2 bg-gray-100 w-[75%] justify-center p-4 rounded-full shadow-lg shadow-gray-400 hover:scale-110 ease-in duration-200"
              href={item.href}
              onClick={fireNav}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      )}

      {/* screen */}

      <div className="fixed hidden md:block top-[25%] z-50">
        <div className="flex flex-col gap-4 ml-2">
          {navItem.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="bg-gray-100 p-4 rounded-full shadow-md shadow-gray-400 hover:scale-110 ease-in duration-200 hover:bg-gradient-to-t from-blue-300 to-myColor"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
