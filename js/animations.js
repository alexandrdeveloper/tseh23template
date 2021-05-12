var advl = gsap.timeline({
    scrollTrigger: ".s-advantages-list"
});
    advl.from(".s-advantages-list__item_1", {opacity: 0, duration: .4})
    .from(".s-advantages-list__item_2", {opacity: 0, x: -80, duration: .4})
    .from(".s-advantages-list__item_3", {opacity: 0, x: -80, duration: .4})
    .from(".s-advantages-list__item_4", {opacity: 0, duration: .4})
    .from(".s-advantages-list__item_5", {opacity: 0, x: 80, duration: .4})
    .from(".s-advantages-list__item_6", {opacity: 0, x: 80, duration: .4});

var wl = gsap.timeline({
    scrollTrigger: ".s-warranty"
});

wl.from(".s-warranty__item", {opacity: 0, x: 80, duration: .4, stagger: .2});