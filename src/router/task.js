import Layout from '@/views/layout'
const routerMap = {
    path: '/',
    component: Layout,
    meta: { active: false },
    hidden: false,
    name:'信访事项音视频',
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
            name: '视频记录',
            component: () => import('@/views/task/videoRecord/videoRecords'),
            meta: { active: false }
        },
        {
            path: '/video',
            name: '查看录像',
            component: () => import('@/views/task/videoRecord/watchVideo'),
            meta: { active: false },
            hidden: true
        }
    ]
}
export default routerMap