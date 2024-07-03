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
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";

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
  const [selected, setSelected] = useState<string>(initialSelectedIcon);
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
        <SidebarOptions
          text="Explore"
          Icon={selected === "Explore" ? BiHash : BiHash}
          isActive={selected === "Explore"}
          setSelected={setSelected}
          redirect="/explore"
        />
        <SidebarOptions
          text="Notifications"
          Icon={selected === "Notifications" ? FiBell : FiBell}
          isActive={selected === "Notifications"}
          setSelected={setSelected}
          redirect="/notifications"
        />
        <SidebarOptions
          text="Messages"
          Icon={selected === "Messages" ? HiMail : HiOutlineMail}
          isActive={selected === "Messages"}
          setSelected={setSelected}
          redirect="/messages"
        />
        <SidebarOptions
          text="Bookmarks"
          Icon={selected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
          isActive={selected === "Bookmarks"}
          setSelected={setSelected}
          redirect="/bookmarks"
        />
        <SidebarOptions
          text="Lists"
          Icon={selected === "Lists" ? FaRegListAlt : FaRegListAlt}
          isActive={selected === "Lists"}
          setSelected={setSelected}
          redirect="/lists"
        />
        <SidebarOptions
          text="Profile"
          Icon={selected === "Profile" ? BsPersonFill : BsPerson}
          isActive={selected === "Profile"}
          setSelected={setSelected}
          redirect="/profile"
        />
        <SidebarOptions
          text="More"
          Icon={selected === "More" ? CgMoreO : CgMoreO}
          isActive={selected === "More"}
          setSelected={setSelected}
          redirect="/more"
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
