import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarDashboardComponent from "../components/SidebarDashboardComponent";
import ProfilDashboardComponent from "../components/ProfilDashboardComponent";

const DashboardPage = () => {
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
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* sidebar */}
        <SidebarDashboardComponent />
      </div>
      {tab === "profil" && <ProfilDashboardComponent />}
    </div>
  );
};

export default DashboardPage;
