import { useState } from "react";

import Sidebar from "../components/account/Sidebar";
import Profile from "../components/account/Profile";
import Orders from "../components/account/Orders";
import Wishlist from "../components/account/Wishlist";
import Address from "../components/account/Address";
import Payment from "../components/account/Payment";
import Password from "../components/account/Password";

import AlertHeader from "../components/header/alertHeader/AlertHeader";
import Navbar from "../components/navbar/Navbar";
import AccountHeader from "../components/account/AccountHeader";

import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import Copyright from "../components/copyright/Copyright";

import styles from "./Account.module.css";

import { useLocation } from "react-router-dom";

const Account = () => {
  const location = useLocation();

  const getInitialTab = () => {
    const params = new URLSearchParams(location.search);
    return params.get("tab") || "profile";
  };

  const [activeView, setActiveView] = useState(getInitialTab());
  const views = {
    Profile: <Profile />,
    Orders: <Orders />,
    Wishlist: <Wishlist />,
    Address: <Address />,
    Payment: <Payment />,
    Password: <Password />,
  };

  return (
    <>
      <AlertHeader />
      <Navbar />
      <AccountHeader />

      {/* ACCOUNT CONTENT */}
      <section className={styles.container}>
        <Sidebar setActiveView={setActiveView} activeView={activeView} />

        <div className={styles.content}>{views[activeView] || <Profile />}</div>
      </section>

      {/* PERMANENT SECTIONS */}
      <Features />
      <Footer />
      <Copyright />
    </>
  );
};

export default Account;
