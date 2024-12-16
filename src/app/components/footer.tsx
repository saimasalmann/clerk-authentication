import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer bg-[#CFA6A61C] flex  flex-col items-center justify-center gap-[15px] h-[250px] py-6">
        <div className="icons  flex gap-5">
          <i className="bi bi-facebook text-xl cursor-pointer hover:text-blue-600 transition-colors"></i>
          <i className="bi bi-instagram text-xl cursor-pointer hover:text-pink-500 transition-colors"></i>
          <i className="bi bi-twitter text-xl cursor-pointer hover:text-blue-400 transition-colors"></i>
          <i className="bi bi-linkedin text-xl cursor-pointer hover:text-blue-700 transition-colors"></i>
        </div>

        <div className="copyright text-center text-md  text-gray-900">
          Copyright ©2020 All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
