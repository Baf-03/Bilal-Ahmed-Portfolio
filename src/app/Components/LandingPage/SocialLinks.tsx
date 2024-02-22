import React from "react";
import { BiLogoUpwork } from "react-icons/bi";
import { FiLinkedin } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import { DiGithubFull } from "react-icons/di";

const SocialLinks = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/bilal-ahmed-a94229241/" target="_blank" className="cursor-pointer">
        <FiLinkedin />
      </a>
      <a href="https://github.com/Baf-03" target="_blank" className=" cursor-pointer">
        <DiGithubFull />
      </a>
      <a href="https://www.upwork.com/freelancers/~01b5faeb46f8bcee0a?viewMode=1" target="_blank" className=" cursor-pointer">
        <BiLogoUpwork />
      </a>
     
    </>
  );
};

export default SocialLinks;
