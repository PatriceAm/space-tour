import "./ContentTitle.css";

const ContentTitle = ({count, text}) => {
  return (
    <div className="content_title">
      <span>{count}</span> {text.toUpperCase()}
    </div>
  );
};

export default ContentTitle;
