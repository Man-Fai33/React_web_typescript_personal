import About from "../pages/about";
import HomeBoard from "../pages/homeboard";
import Index from "../pages/index";
import SignIn from "../pages/singin";
import SignUp from "../pages/signup";
import TestPage from "../pages/test";

const RouterList = [
     { name: '', component: Index },
     { name: 'signin', component: SignIn },
     { name: 'signup', component: SignUp },
     { name: 'index', component: HomeBoard },
     { name: 'test', component: TestPage },
     { name: 'about', component: About },
]
export default RouterList;