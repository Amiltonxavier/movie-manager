const ROUTES = {
    BASE: 'app',
    PRIVATE: {
        HOME: '',
        DASHBOARD: 'dashboard',
        MY_MOVIE: 'my-movie',
        MOVIE_DETAILS: `details/`,
        NEW_MOVIE: 'new-movie',
    },
    PUBLIC: {
        AUTH: 'auth',
        FORGOT_PASSWORD: '/forgot-password',
        RESET_PASSWORD: '/reset-password',
    },
    NOTIFICATIONS: '/notifications',
    SUPPORT: '/support',
    ERROR: {
        NOT_FOUND: '/404',
        FORBIDDEN: '/403',
    },
} as const;

export const CONSTANT = {
    ROUTES
}