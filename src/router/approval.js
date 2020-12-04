import Layout from '@/views/layout'
const routerMap = {
    path: '/',
    component: Layout,
    meta: { active: false },
    hidden: false,
    name:'接访审批',
    children: [
        {
            path: '/interviewApproval',
            name: '接访审批',
            component: () => import('@/views/approval/interviewApproval'),
            meta: { active: false }
        }
    ]
}
export default routerMap