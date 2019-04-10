// -------------------------------------
//           TWEETS LIST
// -------------------------------------
import zmq from "zeromq";
import { TweetBox } from "./tweetbox";

const reqSock = zmq.socket("req");
const ZMQ1URL = "tcp://127.0.0.1:8777";
const TWTCHAN = "HoroTweets";
let tweetObj = { sign: "", tweets: [] };

//
// - MAIN
export const TweetsList = () => {
  const { sign, tweets } = tweetObj;

  reqSock.on("message", data => {
    let horoTweets = data.toString("utf8");
    tweetObj = JSON.parse(horoTweets);
  });

  reqSock.connect(ZMQ1URL);
  reqSock.send(TWTCHAN);

  return (
    <>
      {tweets.map(twit => (
        <ul>
          <li key={twit.acct}>
            <TweetBox acct={twit.acct} tweet={twit.tweet} />
          </li>
        </ul>
      ))}
    </>
  );
};
