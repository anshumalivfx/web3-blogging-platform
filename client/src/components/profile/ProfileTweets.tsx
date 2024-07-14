import React from "react";
import Post from "../Post";

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};
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

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          username={`${tweet.username.slice(0, 4)}...${tweet.username.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;
