import React from "react";

const BlogFeaturedImage = props => {
  if (!props.img) {
    return null;
  }

  return (
    <div classNam="featured-image-wrapper">
      <img style={{ width: "100rem" }} src={props.img} />
    </div>
  );
};

export default BlogFeaturedImage;
