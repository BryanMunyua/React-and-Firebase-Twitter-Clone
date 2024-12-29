import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post2({
    displayName,
    userName,
    verified,
    timestamp,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
    <div className='post__avatar'>
        <Avatar src='https://static3.depositphotos.com/1000951/138/i/450/depositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg'/>
    </div>
    <div className='post__body'>
    <div className='post__header'>
    <div className='header__headerText'>
        <h3>
        Angie {" "} <span className='post__headerSpecial'>
        <VerifiedUserIcon className='post__badge'/>
        @LifeWithAngie
            </span>
        </h3>
        <div className='post__headerDescription'>
            <p>Have yall ever tried building a twitter clone?</p>
        </div>
    </div>
    <img src="https://media.gettyimages.com/id/1289018115/photo/female-anchor-presenting-breaking-news-about-severe-weather-causing-power-outage.jpg?s=612x612&w=gi&k=20&c=uSD-HSZhWuEb4Y5b7Xdr2uFByap0NjZ9CTOJJyQZytk="/>
    <div className='post__footer'>
    <ChatBubbleOutlineIcon fontSize='small'/>
    <RepeatIcon fontSize='small'/>
    <FavoriteBorderIcon fontSize='small'/>
    <PublishIcon fontSize='small'/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Post2