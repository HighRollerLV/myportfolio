module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            height: {
                '18': '4.5rem',
            },
            width: {
                '18': '4.5rem',
            },
            keyframes: {
                AnimationName: {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                },
            },
            animation: {
                'background-animate': 'AnimationName 3s ease infinite',
            },
            typography: {
                'text-border': {
                    css: [
                        {
                            '-webkit-text-stroke': '2px black',
                            'text-stroke': '2px black',
                            'text-fill-color': 'transparent',
                        },
                    ],
                },
            },
            transitionDuration: {
                '5000': '5000ms',
            },
        },
    },
    plugins: [],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './public/**/*.html',
            './src/**/*.{js,jsx,ts,tsx}',
        ],
    },
}

