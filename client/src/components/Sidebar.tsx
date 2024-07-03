import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";

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

const Sidebar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
        <div>Home</div>
        <div>Explore</div>
        <div>Notifications</div>
        <div>Messages</div>
        <div>Bookmarks</div>
        <div>Lists</div>
        <div>Profile</div>
        <div>More</div>
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
