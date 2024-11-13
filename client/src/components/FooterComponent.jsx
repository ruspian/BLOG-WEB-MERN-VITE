import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid justify-between sm:flex md:drid-cols-1">
          <div className="">
            {/* Logo  */}
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-blue-500 to-blue-700 rounded-lg text-white">
                Coy
              </span>
              Blog
            </Link>
            {/* <p className="text-sm mt-5">
              Di sini, kami percaya pada kekuatan ide dan cerita yang membentuk
              dunia. Melalui blog ini, kami ingin menciptakan ruang bagi
              pemikiran kreatif, inspirasi, dan kolaborasi. Bergabunglah dengan
              komunitas kami yang gemar berbagi wawasan unik dan temukan hal-hal
              yang menginspirasi hari Anda.
            </p> */}
          </div>

          <div className="grid grid-cols-2 gap-8 mt-6 sm:grid-cols-3 sm:gap-6">
            {/* About footer */}
            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/ruspian?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository Github
                </Footer.Link>

                <Footer.Link
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoyBlog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* follow us footer */}
            <div className="">
              <Footer.Title title="Ikuti saya" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/ruspian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>

                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* follow us footer */}
            <div className="">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>

                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        {/* copyright */}
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Ruspian Majid"
            year={new Date().getFullYear()}
          />

          {/* sosmed icon */}
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://web.facebook.com/ruspian.albanuroji"
              icon={BsFacebook}
            />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="https://github.com/ruspian" icon={BsGithub} />
            <Footer.Icon href="https://wa.me/6282293308893" icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
