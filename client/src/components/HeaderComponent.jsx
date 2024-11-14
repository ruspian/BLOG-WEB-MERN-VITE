import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

const HeaderComponent = () => {
  // aktif path
  const path = useLocation().pathname;

  // dispatch
  const dispatch = useDispatch();

  // mengambil data user dari redux
  const { currentUser } = useSelector((state) => state.user);

  // mengambil theme dari redux
  const { theme } = useSelector((state) => state.theme);

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
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="grey"
          pill
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {theme === "light" ? (
            <FaMoon className="text-black" />
          ) : (
            <FaSun className="text-white" />
          )}
        </Button>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User avatar"
                img={currentUser.profilPicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                @{currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Keluar</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="greenToBlue" outline pill>
              Masuk
            </Button>
          </Link>
        )}

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
