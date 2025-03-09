import React from "react";
import Image from "next/image";
import footerImage from "../../../public/pill.png"; // Update with your image path

function Footer() {
  return (
    <div className="w-full h-96 flex items-center justify-center  relative">
      <Image
        src={footerImage}
        alt="Footer Image"
        width={1500} // Adjust width as needed
        height={1500} // Adjust height as needed
        className="absolute bottom-0"
      />
    </div>
  );
}

export default Footer;
