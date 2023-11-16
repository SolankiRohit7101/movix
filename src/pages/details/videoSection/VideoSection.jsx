import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import PlayBtn from "../PlayBtn";
import VideoPopup from "../../../components/VideoPopUp/VideoPopUp";
import Img from "../../../components/lazyLoadImage/Img";
import "./stylce.scss";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results.map((item) => (
              <div
                className="videoItem"
                key={item.id}
                onClick={() => {
                  setVideoId(item.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <Img
                    src={` https://img.youtube.com/vi/${item.key}/mqdefault.jpg `}
                  />
                  <PlayBtn />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
