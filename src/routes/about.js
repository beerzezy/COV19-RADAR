module.exports = {
    path: '/About',
    name: 'About',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'share',
            name: 'AboutHome',
            component: () => import('@/views/About/Home.vue')
        }
    ]
}