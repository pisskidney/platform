export const fakeAuth = {
    isAuthenticated: () => {
        return !!localStorage.getItem('auth');
    },
    authenticate(cb) {
        localStorage.setItem('auth', 'jabfglang09#4rqio');
        setTimeout(cb, 100)
    },
    signout(cb) {
        localStorage.removeItem('auth');
        setTimeout(cb, 100)
    }
};