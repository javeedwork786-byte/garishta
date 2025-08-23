// src/components/Layout.tsx

import { Outlet } from "react-router-dom"; // 1. Import Outlet
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppBot from "./WhatsAppBot";

// 2. We no longer need the 'children' prop here
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* 3. The 'pt-20' class on main provides top padding to prevent content from hiding under the fixed header */}
      <main className="flex-1 pt-20">
        {/* 4. Replace {children} with <Outlet /> */}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppBot />
    </div>
  );
};

export default Layout;