// -------------------------------------
//           TWEETS LIST
// -------------------------------------
import { TweetBox } from "./tweetbox";
// Context (App)
import { useContext } from "react";
import { BrsContext } from "../context/brscontext";

//
// - MAIN
export const TweetsList = () => {
  const context = useContext(BrsContext);

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {context.getTweets(context.getCtryLang()).map(twit => (
          <li key={twit.acct}>
            <TweetBox acct={twit.acct} tweet={twit.tweet} />
          </li>
        ))}
      </ul>
    </div>
  );
};
