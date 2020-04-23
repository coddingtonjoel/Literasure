import Home from "../pages/Home";
import About from "../pages/About";
import Wireframe from "../pages/aboutImages/Wireframe";
import WireframeHome from "../pages/aboutImages/WireframeHome";
import Highfidelity from "../pages/aboutImages/Highfidelity";
import HighfidelityHome from "../pages/aboutImages/HighfidelityHome";
import Original from "../pages/aboutImages/Original";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const routes = [
    {
        path: process.env.PUBLIC_URL + "/",
        component: Home
    },
    {
        path: process.env.PUBLIC_URL + "/about",
        component: About
    },
    {
        path: process.env.PUBLIC_URL + "/about/img/wireframe",
        component: Wireframe
    },
    {
        path: process.env.PUBLIC_URL + "/about/img/wireframehome",
        component: WireframeHome
    },
    {
        path: process.env.PUBLIC_URL + "/about/img/highfidelity",
        component: Highfidelity
    },
    {
        path: process.env.PUBLIC_URL + "/about/img/highfidelityhome",
        component: HighfidelityHome
    },
    {
        path: process.env.PUBLIC_URL + "/about/img/original",
        component: Original
    },
    {
        path: process.env.PUBLIC_URL + "/login",
        component: Login
    },
    {
        path: process.env.PUBLIC_URL + "/signup",
        component: Signup
    }
];

export default routes;
