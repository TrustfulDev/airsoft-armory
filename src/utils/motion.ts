export const staggerContainer = () => ({
    hidden: {},
    show: {},
});

export const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const blink = () => ({
    hidden: {
        opacity: 0
    },
    show: {
        opacity: [0, 1, 0, 0, 1, 0, 1],
        transition: {
            duration: 0.75,
            ease: "easeInOut"
        },
    }
});