import Layout from '@/views/layout'
const routerMap = {
    path: '/',
    component: Layout,
    meta: { active: false },
    hidden: false,
    name:'消息通知',
    children: [
        {
            path: '/systemNotice',
            name: '系统通知',
            component: () => import('@/views/notice/systemNotice/index'),
            meta: { active: false }
        },
        {
            path: '/notice',
            name: '通知',
            component: () => import('@/views/notice/notice/index'),
            meta: { active: false }
        }
    ]
}
export default routerMap