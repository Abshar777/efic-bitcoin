export const containerVaribles = {
    hidden: { opacity: 0, y: 75 },
    show: {
        opacity: 1,
        y: 0,
    },
    transition: {
        delay: 0.1,
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
    },
}

export const itemVaribles = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
    },
    transition: {
        delay: 0.1,
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
    },
}


export const qualityVaribles = {
    hidden: { opacity: 0, scale: 0.95, y: 50,blur: 10 },
    show: {
        opacity: 1,
        scale: 1,
        blur: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2
        }
    }
}


