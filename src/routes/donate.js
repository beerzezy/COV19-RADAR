module.exports = {
    path: '/Donate',
    name: 'Donate',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'share',
            name: 'DonateHome',
            component: () => import('@/views/Donate/Home.vue')
        }
    ]
}