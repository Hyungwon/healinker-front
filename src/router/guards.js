export function authGuard(to, from, next) {
  const isAuthenticated = localStorage.getItem('kakao_access_token') || Cookies.get('kakao_access_token');
  
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
} 