
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'about', component: () => import('pages/About.vue'), name: 'about' },
      { path: 'treasury', component: () => import('pages/Treasury.vue'), name: 'treasury' },
      { path: 'skills', component: () => import('pages/Skills.vue'), name: 'skills' },
      { path: 'contact', component: () => import('pages/Contact.vue'), name: 'contact' },
      { path: 'education', component: () => import('pages/Education.vue'), name: 'contact' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
