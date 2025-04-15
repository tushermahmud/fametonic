import { Menu } from "lucide-react";
import Image from "next/image";


const Navbar = () => {
  return (
    <nav className="!w-[60%] self-end md:self-start md:!w-[100%] px-[20px] md:px-[100px] lg:px-[215px] pt-[61px] mb-0 md:mb-[120px] flex justify-between items-center relative">
      <Image
        src="/logo.svg"
        alt="Fametonic"
        width={169}
        height={72}
        className="w-[105px] h-[45px] md:w-[169px] md:h-[72px] justify-self-center md:justify-self-start"
        priority
      />

      <div className="hidden md:flex gap-[40px]">
        <a href="#" className="text-[#A9A9A9]">
          About us
        </a>
        <a href="#" className="text-[#A9A9A9]">
          Contact
        </a>
      </div>

      <button className="md:hidden text-white">
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
