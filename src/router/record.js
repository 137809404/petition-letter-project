import Layout from '@/views/layout'
const routerMap = {
    path: '/',
    component: Layout,
    meta: { active: false },
    hidden: false,
    name:'记录查询',
    children: [
        {
            path: '/applicationRecord',
            name: '申请记录',
            component: () => import('@/views/record/applicationRecord'),
            meta: { active: false }
        },
        {
            path: '/petitionHistory',
            name: '历史接访',
            component: () => import('@/views/record/petitionHistory'),
            meta: { active: false }
        },
        {
            path: '/statistics',
            name: '数据统计',
            component: () => import('@/views/record/statistics'),
            meta: { active: false }
        }
    ]
}
export default routerMap