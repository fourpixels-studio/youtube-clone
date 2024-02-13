import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted loop></video>
      <h3>Highjacked season 08 | Trap music | Best of 2020-2024 by DJ G400</h3>
      <div className="play-video-info">
        <p>40,000 Views &bull; 4 days ago</p>
        <div>
          <span>
            <img src={like} alt="" /> 404
          </span>
          <span>
            <img src={dislike} alt="" /> 4
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
        <hr />
      </div>
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>DJ G400</p>
          <span>4M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-decription">
        <p>Causing 400 problems for these copycat DJS</p>
        <hr />
        <h4>400 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Arap Trap <span>1 day ago</span>
            </h3>
            <p>
              Give these DJs some uniform cause I'm taking them back to school
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>440</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Arap Trap <span>1 day ago</span>
            </h3>
            <p>
              Give these DJs some uniform cause I'm taking them back to school
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>440</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Arap Trap <span>1 day ago</span>
            </h3>
            <p>
              Give these DJs some uniform cause I'm taking them back to school
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>440</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Arap Trap <span>1 day ago</span>
            </h3>
            <p>
              Give these DJs some uniform cause I'm taking them back to school
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>440</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Arap Trap <span>1 day ago</span>
            </h3>
            <p>
              Give these DJs some uniform cause I'm taking them back to school
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>440</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Arap Trap <span>1 day ago</span>
            </h3>
            <p>
              Give these DJs some uniform cause I'm taking them back to school
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>440</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
