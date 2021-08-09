import React from "react";
import { img_300, unavailable } from "../../config/config";
import './SingleContent.css'
import Badge from '@material-ui/core/Badge';
import ContentModal from '../ContentModal/ContentModal'
// const SingleContent = (prop) => {
//   const props = prop.item;
//   console.log("hello",props.media_type);
//   console.log("props", props);
//   return (
//     <div className='media'>
//       <Badge badgeContent={props.vote_average} color={props.vote_average>6?"primary":"secondary"}></Badge>
//       <img
//         className="poster"
//         src={props.poster_path ? `${img_300}${props.poster_path}` : unavailable}
//         alt={props.title}
//       />
//       <b className="title">{props.title}</b>
//       <span className="subTitle">
//         {props.media_type === "movie" ?   "Movie":"TV Series"}
//         <span className="subTitle">{props.release_date}</span>
//       </span>
//     </div>
//   );
// };

// export default SingleContent;

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;