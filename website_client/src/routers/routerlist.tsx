import About from "../pages/about";
import Index from "../pages/index";

import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

const routerlist = [
     { name: '', component: Index },
     { name: 'signin', component: SignIn },
     { name: 'signup', component: SignUp },
     { name: 'about', component: About }
]
export default routerlist;