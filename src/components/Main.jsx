import { TypeAnimation } from "react-type-animation";
import {
  RiInstagramLine,
  RiTelegramLine,
  RiTwitterLine,
  RiWhatsappLine,
} from "react-icons/ri";
const Main = () => {
  return (
    <div id="main">
      <img
        className="h-screen w-full object-cover"
        src="/assets/main.webp"
        alt="mainPic"
      />
      <div className="absolute top-0 left-0 h-screen w-full bg-white/50">
        <div className="h-full w-full flex flex-col justify-center max-w-3xl m-auto items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold">
            I'm Alireza Sharifi Nasab
          </h1>
          <h2 className="flex gap-1 text-2xl sm:text-3xl mt-4">
            I'm a
            <TypeAnimation
              sequence={[
                "React Developer",
                2000,
                "Coder",
                2000,
                "Web Designer",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em" }}
            />
          </h2>
          <div className="mt-6 flex max-w-[200px] w-full justify-between text-3xl sm:text-4xl">
            <RiTelegramLine className="cursor-pointer hover:-rotate-12 ease-in duration-200" />
            <RiWhatsappLine className="cursor-pointer  hover:-rotate-12 ease-in duration-200" />
            <RiInstagramLine className="cursor-pointer  hover:-rotate-12 ease-in duration-200" />
            <RiTwitterLine className="cursor-pointer  hover:-rotate-12 ease-in duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
