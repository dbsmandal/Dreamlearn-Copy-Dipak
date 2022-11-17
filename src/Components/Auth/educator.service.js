import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const getAllData = () => {
    return axios.get(API_URL + "api/test/all");
}

const getEducatorDashBoard = () => {
    return axios.get(API_URL + "api/educator/showDemoVideos", { headers: authHeader() });
}
const uploadDemoVideo = async (videoDetail) => {
    await axios.post(API_URL + "api/educator/addDemoVideo", videoDetail, { headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' }, })

}
const uploadCourse = (courseDetail) => {
    return axios.post(API_URL + "api/educator/addCourse", courseDetail, { headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' }, });
}

const addSchedule = (userDetail) => {
    return axios.post(API_URL + "api/educator/addSchedule", userDetail,{ headers: {...authHeader(),'Content-Type': 'application/json'},  });
}
const MyCourse = () => {
    return axios.get(API_URL + "api/educator/addedCourses", { headers: { ...authHeader() }, });
}
const showAddedCourseSchedule = (courseTitle) => {
    return axios.get(API_URL + `api/educator/showAddedCourseSchedule/${courseTitle}`,{headers: { ...authHeader() }, });
}

const EducatorService = {
    getAllData,
    getEducatorDashBoard,
    uploadDemoVideo,
    uploadCourse,
    addSchedule,
    MyCourse,
    showAddedCourseSchedule
}

export default EducatorService;
