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
        path: "/mark_list",
        name: "Mark_list",
        component: Mark_list,
    },
    {
        path: "/open_list",
        name: "Open_list",
        component: Open_list,
    },
    {
        path: "/park_info",
        name: "Park_info",
        component: Park_info,
    },
    {
        path: "/review",
        name: "Review",
        component: Review
    },
    {
        path: "/more",
        name: "More",
        component: More
    },
    {
        path: "/location",
        name: "Location",
        component: Location,

    },
    {
        path: "/sample",
        name: "Sample",
        component: Sample
    },
    ]

})

export default router