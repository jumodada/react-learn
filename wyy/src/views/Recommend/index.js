import React, { useEffect } from 'react';
import Slider from '../../components/slider/';
import { connect } from "react-redux";
import {getBannerList, getRecommendList} from './store/actionCreators';
import RecommendList from '../../components/list/';
import Scroll from '../../utils/scroll';
import { Content } from './style';
import { forceCheck } from 'react-lazyload';
import Loading from "../../utils/loading"
function Recommend (props){
    const { bannerList, recommendList ,enterLoading} = props;

    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;
    useEffect (() => {
        if (!bannerList.size) getBannerDataDispatch ();
        if (!recommendList.size) getRecommendListDataDispatch ();
        //eslint-disable-next-line
    }, []);

    const bannerListJS = bannerList ? bannerList.toJS () : [];
    const recommendListJS = recommendList ? recommendList.toJS () :[];

    return (
        <Content>
            {enterLoading ?<Loading/>: null}
            <Scroll className="list" onScroll={forceCheck}>
                <div>
                    <Slider bannerList={bannerListJS} />
                    <RecommendList recommendList={recommendListJS} />
                </div>
            </Scroll>
        </Content>
    );
}

const mapStateToProps = (state) => ({
    bannerList: state.getIn (['recommend', 'bannerList']),
    recommendList: state.getIn (['recommend', 'recommendList']),
    enterLoading: state.getIn(['recommend','enterLoading'])
});
const mapDispatchToProps = (dispatch) => ({
    getBannerDataDispatch () {
        dispatch(getBannerList());
    },
    getRecommendListDataDispatch () {
        dispatch(getRecommendList());
    },
})

export default connect (mapStateToProps, mapDispatchToProps)(React.memo (Recommend))
