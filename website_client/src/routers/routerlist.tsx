import About from "../pages/about";
import Index from "../pages/index";

import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import TestPage from "../pages/test/test";

const routerlist = [
     { name: '', component: TestPage },
     { name: 'signin', component: SignIn },
     { name: 'signup', component: SignUp },
     { name: 'about', component: About }
]
export default routerlist;