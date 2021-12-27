import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Created by Alexander Rodriguez ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
