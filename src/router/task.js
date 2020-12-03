import Layout from '@/views/layout'
const routerMap = {
    path: '/',
    component: Layout,
    meta: { active: false },
    hidden: false,
    name:'任务',
    children: [
        {
            path: '/petitionVideo',
            name: '视频信访',
            component: () => import('@/views/task/petitionVideo'),
            meta: { active: false }
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