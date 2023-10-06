import About from "../pages/about";
import HomeBoard from "../pages/homeboard";
import Index from "../pages/index";
import SignIn from "../pages/singin";
import SignUp from "../pages/signup";
import TestPage from "../pages/test";

const RouterList = [
     { name: '', element: < Index /> },
     { name: 'signin', element: <SignIn /> },
     { name: 'signup', element: <SignUp /> },
     { name: 'index', element: <HomeBoard /> },
     { name: 'test', element: <TestPage /> },
     { name: 'about', element: <About /> },
]
export default RouterList;