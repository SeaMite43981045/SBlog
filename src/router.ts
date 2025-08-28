import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import PostView from "./views/PostView.vue";
import LinksView from "./views/LinksView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'HomePage',
            path: '/',
            component: HomeView,
            meta: {
                title: "Home"
            }
        },
        {
            name: 'PostPage',
            path: '/p/:id',
            component: PostView,
            meta: {
                title: "Post"
            }
        },
        {
            name: 'LinksView',
            path: '/links',
            component: LinksView,
            meta: {
                title: "Links"
            }
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
});

router.beforeEach((to, _from, next) => {
  const pageTitle = to.meta.title as string || 'Unknown Page';
  document.title = `SMite's Blog | ${pageTitle}`;
  next();
})

export default router;