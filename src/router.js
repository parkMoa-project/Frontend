import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Search from "./views/Search";
import Mark_list from "./views/Mark_list";
import Open_list from "./views/Open_list";
import Park_info from "./views/Park_info";
import Review from "./views/Review";
import More from "./views/More";
import Location from "./views/Location";
import Sample from "./views/Sample";


Vue.use(VueRouter)



const router = new VueRouter({
    mode: "history",
    routes: [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Search",
        name: "Search",
        component: Search,
    },
    {
        path: "/Mark_list",
        name: "Mark_list",
        component: Mark_list,
    },
    {
        path: "/Open_list",
        name: "Open_list",
        component: Open_list,
    },
    {
        path: "/Park_info",
        name: "Park_info",
        component: Park_info,
    },
    {
        path: "/Review",
        name: "Review",
        component: Review
    },
    {
        path: "/More",
        name: "More",
        component: More
    },
    {
        path: "/Location",
        name: "Location",
        component: Location,

    },
    {
        path: "/Sample",
        name: "Sample",
        component: Sample
    },
    ]

})

export default router