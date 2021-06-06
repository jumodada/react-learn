import { axiosInstance } from "../api";

export const getBannerRequest = () => {
    return axiosInstance.get ('/banner');
}

export const getRecommendListRequest = () => {
    return axiosInstance.get ('/personalized');
}
