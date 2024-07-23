import { EMAIL } from "@/util/constants";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg-black py-4">
      <div className="flex justify-center space-x-4">
        <SocialIcon
          url="https://www.facebook.com/eliza.verethilo"
          target="_blank"
          className="h-9 w-9"
        />
        <SocialIcon
          url="https://www.instagram.com/elizaveretiloart/?hl=en"
          target="_blank"
          className="h-9 w-9"
        />
        <SocialIcon
          url={`mailto:${EMAIL}`}
          target="_blank"
          className="h-9 w-9"
        />
      </div>
      <div className="text-center text-white mt-4">
        Website by Carlos Reinoso
      </div>
    </div>
  );
};

export default Footer;
