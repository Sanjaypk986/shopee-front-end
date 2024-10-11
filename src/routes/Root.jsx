import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Root;
