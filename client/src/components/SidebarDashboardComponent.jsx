import { Sidebar } from "flowbite-react";
import { HiArrowLeft, HiUser } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarDashboardComponent = () => {
  const location = useLocation();

  // hook
  const [tab, setTab] = useState("");
  useEffect(() => {
    // mengambil parameter dari url
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]); // setiap location.search/parameter berubah, fungsi ini akan dijalankan

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profil">
            <Sidebar.Item
              active={tab === "profil"}
              icon={HiUser}
              label={"User"}
              labelColor="dark"
              className="cursor-pointer"
            >
              Profil
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowLeft} className="cursor-pointer">
            Keluar
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarDashboardComponent;
