import React from 'react';

import IMG_PLACEHOLDER from '../../images/not-found.png';
import { Star } from '../styled';

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <div>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <Star />
            {/* star is style component. it shows a star */}
            <span>{rating.average || 'N/A'}</span>
          </div>
        </div>
        {/* <div>{summary}</div> */}
        {/* if we use the above tag then it will show html tags as text
        so, we need to use dangerouslySetInnerHTML property */}
        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Tags:{' '}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
