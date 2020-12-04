import Layout from '@/views/layout'
const routerMap = {
    path: '/',
    component: Layout,
    meta: { active: false },
    hidden: false,
    name:'信访事项查询',
    children: [
        {
            path: '/registrationRecord',
            name: '登记查询',
            component: () => import('@/views/record/registrationRecord'),
            meta: { active: false }
        },
        {
            path: '/transferDeal',
            name: '转交办理查询',
            component: () => import('@/views/record/transferDeal'),
            meta: { active: false }
        },{
            path: '/queryCode',
            name: '查询码查询',
            component: () => import('@/views/record/queryCode'),
            meta: { active: false }
        },
        {
            path: '/statistics',
            name: '信访数量统计',
            component: () => import('@/views/record/statistics'),
            meta: { active: false }
        },
        {
            path: '/higherAuthorities',
            name: '上级转交办件查询',
            component: () => import('@/views/record/higherAuthorities'),
            meta: { active: false }
        },
        {
            path: '/leadeReception',
            name: '领导接待查询',
            component: () => import('@/views/record/leadeReception'),
            meta: { active: false }
        }
    ]
}
export default routerMap