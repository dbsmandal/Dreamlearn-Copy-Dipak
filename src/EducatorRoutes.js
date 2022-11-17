
import SignIn from "./Components/SignIN/SignIn";
import LearnerHome from "./Components/HomePage/Learner";


function EducatorRoute({ Component }) {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.role === "ROLE_EDUCATOR" ? <Component /> : <LearnerHome /> : <SignIn />;
}
export default EducatorRoute;