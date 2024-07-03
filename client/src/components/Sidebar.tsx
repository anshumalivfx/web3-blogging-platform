"use client";
import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import SidebarOptions from "./SidebarOptions";
import {
  RiHome2Fill,
  RiHome2Line,
  RiFileList2Fill,
  RiHome7Fill,
  RiHome7Line,
} from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegListAlt, FaHashtag, FaBell } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1da1f2] text-white rounded-[100px] py-2 px-4 mt-4 w-full text-center cursor-pointer hover:bg-[#1a91da]`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
};

interface SidebarProps {
  initialSelectedIcon: string;
}

const Sidebar = ({ initialSelectedIcon = "Home" }: SidebarProps) => {
  const [selected, setSelected] = useState<string>("");
  return (
    <div className={style.wrapper}>
      <div className={style.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
        <SidebarOptions
          text="Home"
          Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
          isActive={selected === "Home"}
          setSelected={setSelected}
          redirect="/"
        />
        <button className={style.tweetButton}>Mint</button>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>Name</div>
            <div className={style.handle}>@handle</div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
