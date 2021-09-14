import { useState } from "react";
import "./Tweet.css";

const profileImg = {
  height: "60px",
  width: "60px",
  borderRadius: "100%",
  backgroundColor: "gray",
  padding: "10px",
  border: "2px solid white",
};
const Tweet = (props) => {
  // const tweetRef = useRef();
  const [tweetText, setTweetText] = useState("");

  const updateTweet = (e) => {
    setTweetText(e.target.value);
  };
  const uploadTweet = () => {
    props.uploadTweet(tweetText);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div placeholder="User logo" style={profileImg} />
        <input
          type="textarea"
          onChange={updateTweet}
          placeholder="tweet here..."
        />
      </div>
      <div style={{ padding: "10px" }}>
        <button>Upload Image</button>
        <button>Gif Upload</button>
        <button className={tweetText ? "" : "disabled"} onClick={uploadTweet}>
          Tweet
        </button>
      </div>
    </>
  );
};
export default Tweet;
