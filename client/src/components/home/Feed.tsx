import React from "react";
import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";

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
    avatar: "https://avatars.githubusercontent.com/u/52081717?v=4",
    text: "gm",
    isProfileImageNft: true,
    timestamp: "2024-07-09T12:00:00Z",
  },
  {
    displayName: "Anshumali",
    username: "0x1209901289081209383129381290139",
    avatar: "https://avatars.githubusercontent.com/u/52081717?v=4",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2024-07-09T12:00:00Z",
  },
  {
    displayName: "Anshumali",
    username: "0x1209901289081209383129381290139",
    avatar: "https://avatars.githubusercontent.com/u/52081717?v=4",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2024-07-09T12:00:00Z",
  },
  {
    displayName: "Anshumali",
    username: "0x1209901289081209383129381290139",
    avatar: "https://avatars.githubusercontent.com/u/52081717?v=4",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2024-07-09T12:00:00Z",
  },
  {
    displayName: "Anshumali",
    username: "0x1209901289081209383129381290139",
    avatar: "https://avatars.githubusercontent.com/u/52081717?v=4",
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
      {tweets.map((tweet, key) => (
        <div>
          <Post
            key={key}
            displayName={tweet.displayName}
            username={`${tweet.username.slice(0, 4)}...${tweet.username.slice(
              -4
            )}`}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        </div>
      ))}
    </div>
  );
};

export default Feed;
