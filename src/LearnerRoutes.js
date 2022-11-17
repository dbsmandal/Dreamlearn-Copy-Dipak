import SignIn from "./Components/SignIN/SignIn";
import EducatorHome from "./Components/HomePage/EducatorHome/MyCourse";

function LearnerRoutes({ Component }) {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.role === "ROLE_LEARNER" ? <Component /> : <EducatorHome /> : <SignIn />;
}

export default LearnerRoutes;