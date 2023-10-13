import { useSelector } from "react-redux";

export default function Video() {
  const video = useSelector((state) => state);
  console.log(video.videos && video.videos[0].video);
  return (
    <section className="section_video ">
      <div className="container">
        <div className="thumb-video">
          <video
            id="video"
            style={{ width: "100%" }}
            className="film video-js"
            controls
            autoPlay
            loop
          >
            <source
              src="https://www.dropbox.com/scl/fi/ge1e9mrmjfnfgqi9u8jpo/flour_-_49549-1080p.mp4?rlkey=svv3pywf7s9z8iervjzf2a8b2&raw=1"
              type={video.videos && video.videos[0].type}
            />
          </video>
        </div>
      </div>
    </section>
  )
}