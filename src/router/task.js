import Layout from '@/views/layout'
const routerMap = {
    path: '/',
    component: Layout,
    meta: { active: false },
    hidden: false,
    name:'接访管理',
    children: [
        {
            path: '/petitionList',
            name: '视频信访',
            component: () => import('@/views/task/petitionVideo/petitionList'),
            meta: { active: false },
        },{
            path: '/petitionVideo',
            name: '视频录制',
            component: () => import('@/views/task/petitionVideo/index'),
            meta: { active: false },
            hidden:true
        },
        {
            path: '/videoRecords',
            name: '信访记录',
            component: () => import('@/views/task/videoRecords'),
            meta: { active: false }
        }
    ]
}
export default routerMap