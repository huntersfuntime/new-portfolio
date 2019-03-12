import React from 'react';

const BlogFeaturedImage = props => {
  if (!props.img) {
    return null
  }

  return (
    <div classNam='featured-image-wrapper'>
      <img src={props.img} />
    </div>
  )
}

export default BlogFeaturedImage;