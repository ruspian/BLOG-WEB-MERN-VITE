import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const HeaderComponent = () => {
  // aktif path
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      {/* Logo  */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-blue-500 to-blue-700 rounded-lg text-white">
          Coy
        </span>
        Blog
      </Link>

      {/* form pencarian */}
      <form action="">
        <TextInput
          type="text"
          placeholder="Cari..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      {/* tombol pencarian */}
      <Button className="w-12 h-10 lg:hidden" color="grey" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        {/* tombol dark dan light mode */}
        <Button className="w-12 h-10 hidden sm:inline" color="grey" pill>
          <FaMoon />
        </Button>

        <Link to="/sign-in">
          <Button gradientDuoTone="greenToBlue" outline pill>
            Masuk
          </Button>
        </Link>

        {/* tombol hamberger */}
        <Navbar.Toggle />
      </div>

      {/* tombol home about dan project */}
      <Navbar.Collapse>
        {/* as='div' agar tidak error di console browser */}
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={"div"}>
          <Link to="/project">Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderComponent;
