import Tweet from "../Tweet/Tweet";
import TweetDisplay from "../TweetDisplay/TweetDisplay";

export default function Main() {
  const user = {
    id: 1,
    uname: "harpalmsu",
    firstName: "Harpal",
    lastName: "Chauhan",
  };
  const tweets = [
    {
      tweetId: 1,
      tweet_desc: "Today I worked so hard",
      likes: 10,
    },
    {
      tweetId: 2,
      tweet_desc: "I am developing Tweeter app",
      likes: 0,
    },
  ];

  const uploadTweet = (e) => {
    console.log("tweeted", e);
  };
  return (
    <>
      <h1>Clone</h1>
      <Tweet user={user} uploadTweet={uploadTweet} />
      <TweetDisplay tweets={tweets} />
    </>
  );
}
