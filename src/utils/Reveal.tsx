/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    delay: number;
}

export const Reveal = ({ children, delay }: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView])

    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}

                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export const BarReveal = ({ children, delay }: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const barControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
            barControls.start("visible");
        }
    }, [inView])

    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}

                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay }}
            >
                {children}
            </motion.div>

            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" }
                }}

                initial="hidden"
                animate={barControls}
                transition={{ duration: 0.5, delay, ease: "easeIn" }}

                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "var(--gold)",
                    zIndex: 5,
                }}
            />
        </div>
    )
}