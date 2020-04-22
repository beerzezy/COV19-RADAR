import router from "./router";
import axios from "axios";
import store from "./store/store";

axios.defaults.baseURL = "https://covid19.th-stat.com/api/open"

router.beforeEach((to, from, next) => {
    console.log(to)
    next()
})