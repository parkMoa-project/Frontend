import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Search from "./views/Search";
import MarkList from "./views/MarkList";
import OpenList from "./views/OpenList";
import ParkInfo from "./views/ParkInfo";
import Review from "./views/Review";


Vue.use(VueRouter)



const router = new VueRouter({
    mode: "history",
    duplicateNavigationPolicy: 'ignore',
    routes: [{
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {
        path: "/markList",
        name: "MarkList",
        component: MarkList,
    },
    {
        path: "/openList",
        name: "OpenList",
        component: OpenList,
    },
    {
        path: "/parkInfo",
        name: "ParkInfo",
        component: ParkInfo,
    },
    {
        path: "/review",
        name: "Review",
        component: Review
    },
    ]

})

export default router