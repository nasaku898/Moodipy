import { createRouter, createWebHistory } from 'vue-router'
import MusicPage from '../components/MusicPage/MusicPage'
import OnboardingPage from '../components/OnboardingPage/OnboardingPage'
import AboutPage from '../components/AboutPage/AboutPage'
import FeedbackPage from '../components/FeedbackPage/FeedbackPage'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: OnboardingPage
    },
    {
        path: '/music',
        name: 'MusicPage',
        component: MusicPage
    },
    {
        path:'/about',
        name:'AboutPage',
        component:AboutPage
    },
    {
        path:'/feedback',
        name:'FeedbackPage',
        component:FeedbackPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router