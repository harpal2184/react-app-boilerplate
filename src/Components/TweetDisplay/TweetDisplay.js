import "./TweetDisplay.css";

const TweetDisplay = (props) => {
  console.log(props.tweets);
  const tweetDetails = props.tweets.map((item) => {
    return (
      <div key={item.tweetId}>
        <div>{item.tweet_desc}</div>
        <div>
          <button>Reply</button>
          <button>Re-tweet</button>
          <button>Like {item.likes}</button>
        </div>
      </div>
    );
  });
  return (
    <>
      {tweetDetails}
      <div></div>
    </>
  );
};
export default TweetDisplay;
