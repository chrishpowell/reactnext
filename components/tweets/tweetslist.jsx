// -------------------------------------
//           TWEETS LIST
// -------------------------------------
import { TweetBox } from "./tweetbox";
// Context (App)
import { useContext, useState, useEffect } from "react";
import { BrsContext } from "../context/brscontext";

//
// - MAIN
export const TweetsList = ({ loc }) => {
  const context = useContext(BrsContext);
  const [stweets, setTweets] = useState([]);

  // The square brackets are required for this to work: non-looping, component mount time only.
  useEffect(() => {
    const fetchTweets = async () => {
      await context
        .getTweets(loc)
        .then(stweets => setTweets(stweets))
        .catch(err => console.warn("*** Tweetlist error: ", err));
    };

    fetchTweets();
  }, []);

  //------> * React doesn't like direct async functions
  // useEffect(async () => {
  //   await context
  //     .getTweets(loc)
  //     .then(stweets => setTweets(stweets))
  //     .catch(err => console.warn("*** Tweetlist error: ", err));
  // }, []);

  //-------> * Called over and over
  // (async () => {
  //   console.log("Tweetslist:async call!!");
  //   await context
  //     .getTweets(loc)
  //     .then(stweets => setTweets(stweets))
  //     .catch(err => console.warn("*** Tweetlist error: ", err));
  // })();

  //-------> * Test
  // const getTweetList = loc => {
  //   const tweetslist = [
  //     {
  //       acct: "Taurus_Horo",
  //       tweet:
  //         "It is a given that at some point during your birthday month, the Moon will return to your relationship sector and oppose the Sun to create a Full Moon. https://t.co/d0lNlT83Rj"
  //     },
  //     {
  //       acct: "taurus_scope",
  //       tweet:
  //         "Famous Birthdays for May 17, 2019 => See more: https://t.co/6yb5uEDVa4 #HappyBirthday https://t.co/mHqYbTd2BK"
  //     },
  //     {
  //       acct: "taurus_scopes",
  //       tweet:
  //         "May 17th Horoscope: We accept that much we do in life is borne from a sense of responsibility or obligation. What we know we are expected to do... more: https://t.co/QvTV8MMN1k"
  //     }
  //   ];

  //   return tweetslist;
  // };

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {stweets.map(twit => (
          <li key={twit.acct}>
            <TweetBox acct={twit.acct} tweet={twit.tweet} />
          </li>
        ))}
      </ul>
    </div>
  );
};
