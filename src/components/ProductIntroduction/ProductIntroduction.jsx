import * as React from 'react';
import './ProductIntroduction.scss';
import {isEmpty} from "lodash/lang";
import {Fragment} from "react";
import RecommendationBox from "../RecommendationBox/RecommendationBox";
import {recommendationListMock} from "../../mock-data/recomationListMock";

const recommendationList = recommendationListMock
export default function ProductIntroduction() {
  return (
      <div className="product-introduction">
        {
            !isEmpty(recommendationList) && recommendationList.map((item, index) => (
                (
                    <Fragment key={Math.random()}>
                      <RecommendationBox data={item} isReversed={index % 2 !== 0} />
                    </Fragment>
                )
            ))
        }
      </div>
  );
}
