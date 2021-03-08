import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, } from 'react-twitter-embed'; 



function Tweet() {
  return (

       <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle /> <Time />
        <Message />
        <div className="button">
          <CommentButton />
          <RetweetButton />
          <LikeButton />
          <ShareButton />
          <TwitterTimelineEmbed
  sourceType="profile"
  screenName="Pittsburgh"
  options={{height: 500}}
/>
<TwitterTweetEmbed/>
<TwitterShareButton
    url={''}
    options={{ text: '#reactjs is awesome', via: 'Pittsburgh' }}
  />
  <TwitterMentionButton
    screenName={'Pittsburgh'}
  />
   <TwitterHashtagButton
    tag={'cybersecurity'}
  />
   <TwitterFollowButton
    screenName={'Pittsburgh'}
  />
  
        </div>
      </div>
    </div>
  );
}
 
function Avatar() {
  return (
    <img
      src="https://gravatar.com/avatar/nothing"
      alt="avatar"
      className="avatar"
    />
  );
}
 
function Message() {
  return (
    <div className="message">Today I posted something on twitter!</div>
  );
}
 
function NameWithHandle() {
  return (
    <span className="NameWithHandle">
      <span className="name">Pittsburgh</span>
      <span className="handle">@Welcome Home</span>
    </span>
  );
}
 

const Time = () => <span className="time">1h ago</span>;
 
const CommentButton = () => <i className="far fa-comment" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const ShareButton = () => <i className="fas fa-external-link-alt" />;

ReactDOM.render(<Tweet />, document.querySelector("#root"));