import Layout from '@/views/layout'
const routerMap = {
    path: '/',
    component: Layout,
    meta: { active: false },
    hidden: false,
    name:'信访人信息',
    children: [
        {
            path: '/humanInfoInput',
            name: '信访人信息录入',
            component: () => import('@/views/petitionMan/humanInfoInput'),
            meta: { active: false }
        },{
            path: '/humanSearch',
            name: '信访人查询搜索',
            component: () => import('@/views/petitionMan/humanSearch'),
            meta: { active: false }
        },{
            path: '/humanSituationScreening',
            name: '信访人情况甄别',
            component: () => import('@/views/petitionMan/humanSituationScreening'),
            meta: { active: false },
            hidden:true
        },{
            path: '/humanStatistics',
            name: '信访人数据统计',
            component: () => import('@/views/petitionMan/humanStatistics'),
            meta: { active: false }
        }
    ]
}
export default routerMap