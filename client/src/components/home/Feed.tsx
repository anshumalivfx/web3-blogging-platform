import React from "react";
import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#070910] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

interface Tweet {
  author: TweetAuthor;
  tweet: string;
  timestamp: string;
}

interface TweetAuthor {
  name: string;
  walletAddress: string;
  profileImage: string;
  isProfileImageNft: boolean;
}

const tweets = [
  {
    displayName: "Anshumali",
    username: "0x1209901289081209383129381290139",
    avatar:
      "https://media.licdn.com/dms/image/D5603AQG059cA-3UadA/profile-displayphoto-shrink_800_800/0/1719390971678?e=1726099200&v=beta&t=AmJqsjMU4DeOJDoEs9IOy46AGopx28x2oSwXlD5R4u8",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2024-07-09T12:00:00Z",
  },
  {
    displayName: "Anshumali",
    username: "0x1209901289081209383129381290139",
    avatar:
      "https://media.licdn.com/dms/image/D5603AQG059cA-3UadA/profile-displayphoto-shrink_800_800/0/1719390971678?e=1726099200&v=beta&t=AmJqsjMU4DeOJDoEs9IOy46AGopx28x2oSwXlD5R4u8",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2024-07-09T12:00:00Z",
  },
  {
    displayName: "Anshumali",
    username: "0x1209901289081209383129381290139",
    avatar:
      "https://media.licdn.com/dms/image/D5603AQG059cA-3UadA/profile-displayphoto-shrink_800_800/0/1719390971678?e=1726099200&v=beta&t=AmJqsjMU4DeOJDoEs9IOy46AGopx28x2oSwXlD5R4u8",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2024-07-09T12:00:00Z",
  },
  {
    displayName: "Anshumali",
    username: "0x1209901289081209383129381290139",
    avatar:
      "https://media.licdn.com/dms/image/D5603AQG059cA-3UadA/profile-displayphoto-shrink_800_800/0/1719390971678?e=1726099200&v=beta&t=AmJqsjMU4DeOJDoEs9IOy46AGopx28x2oSwXlD5R4u8",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2024-07-09T12:00:00Z",
  },
  {
    displayName: "Anshumali",
    username: "0x1209901289081209383129381290139",
    avatar:
      "https://media.licdn.com/dms/image/D5603AQG059cA-3UadA/profile-displayphoto-shrink_800_800/0/1719390971678?e=1726099200&v=beta&t=AmJqsjMU4DeOJDoEs9IOy46AGopx28x2oSwXlD5R4u8",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2024-07-09T12:00:00Z",
  },
];

const Feed = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
    </div>
  );
};

export default Feed;
