import * as React from 'react';
import './RecommendationBox.scss';
import Button from '../../Ui/Button/Button';

import cx from 'classnames';

export default function RecommendationBox({ data, isReversed}) {
  const {
    title, thumbnail, image, subtitle, description,
  } = data;

  return (
    <div className={cx("recommendation-box", {"reversed": isReversed })}>
      <div className="recommendation-box__text-container">
        <div className="recommendation-box__title">
          {title}
        </div>
        <div className={cx("recommendation-box__subtitle", {"reversed": isReversed })}>
          <img src={thumbnail} alt="icon" />
          <span>{ subtitle }</span>
        </div>
        <div className="recommendation-box__description">
          { description }
        </div>
        <Button style={{ marginTop: '40px' }}>Order Now</Button>
      </div>

      <img src={image} alt="recommended-set" />
    </div>
  );
}
