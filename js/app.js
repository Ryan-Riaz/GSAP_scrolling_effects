gsap.to(".video video", {
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        pin: "#main",
        scrub: 2,
    },
    width: "90vw",
});

gsap.to(".one", {
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        pin: "#main",
        scrub: 3,
    },
    left: "-600px",
    opacity: 0,
});

gsap.to(".six", {
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        pin: "#main",
        scrub: 3,
    },
    right: "-600px",
    opacity: 0,
});

gsap.to([".two", ".three"], {
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        pin: "#main",
        scrub: 2,
    },
    left: "-300px",
    opacity: 0,
});

gsap.to([".four", ".five"], {
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        pin: "#main",
        scrub: 2,
    },
    right: "-300px",
    opacity: 0,
});
