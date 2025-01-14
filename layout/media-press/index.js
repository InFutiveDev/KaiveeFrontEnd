import MediaSection from "./media-section";

const MediaPressLayout = ({ data }) => {
  return (
    <>
      <div className="boxmedia">
        <div className="media-frame-wrapper">
          <div className="media-frame">
            <h1 className="media-press">Print Media Coverage</h1>
          </div>
        </div>
      </div>
      <MediaSection data={data} />
    </>
  );
};

export default MediaPressLayout;
