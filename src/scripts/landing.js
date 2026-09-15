import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";

gsap.registerPlugin(CustomEase,CustomWiggle);

// wiggle text for 'who are you looking for'
// repeat -1 makes it loop forever
CustomWiggle.create("textWiggle", {wiggles: 6, type: "easeInOut"});
gsap.to(".wiggle", {duration: 4, rotation: 1, ease: "textWiggle", repeat: -1});

CustomWiggle.create("textWiggle2", {wiggles: 4, type: "easeInOut"});
gsap.to(".wiggle2", {duration: 4, rotation: 1, ease: "textWiggle2", repeat: -1});

CustomWiggle.create("textWiggle3", {wiggles: 10, type: "easeInOut"});
gsap.to(".wiggle3", {duration: 6, rotation: 1, ease: "textWiggle3", repeat: -1});

CustomWiggle.create("textWiggle4", {wiggles: 7, type: "easeInOut"});
gsap.to(".wiggle4", {duration: 4, rotation: 1, ease: "textWiggle4", repeat: -1});

CustomWiggle.create("textWiggle5", {wiggles: 3, type: "easeInOut"});
gsap.to(".wiggle5", {duration: 2, rotation: 1, ease: "textWiggle5", repeat: -1});

// astronaut wiggle yay
CustomWiggle.create("astronautwiggle", {wiggles: 8, type: "easeInOut"});
gsap.to(".astronaut", {duration: 4, rotation: -2, ease: "astronautwiggle", repeat: -1, transformOrigin: "top left"});


// artist section 
document.getElementById('artist_sec').addEventListener('mouseenter', () => {
    document.getElementById('artist_outline').classList.remove('hidden')
    document.body.style.cursor = 'pointer';
    
  });
  document.getElementById('artist_sec').addEventListener('mouseleave', () => {
    document.getElementById('artist_outline').classList.add('hidden')
    document.body.style.cursor = 'default';
  });

  document.getElementById('artist_sec').addEventListener('click', () => {
    window.location.href="/portfolio"
  });

// programmer section 
document.getElementById('programmer_sec').addEventListener('mouseenter', () => {
    document.getElementById('programmer_outline').classList.remove('hidden')
  });
  document.getElementById('programmer_sec').addEventListener('mouseleave', () => {
    document.getElementById('programmer_outline').classList.add('hidden')
  });

// wip section 
document.getElementById('wip_sec').addEventListener('mouseenter', () => {
    document.getElementById('wip_outline').classList.remove('hidden')
  });
  document.getElementById('wip_sec').addEventListener('mouseleave', () => {
    document.getElementById('wip_outline').classList.add('hidden')
  });

// variidian section 
document.getElementById('variidian_sec').addEventListener('mouseenter', () => {
    document.getElementById('variidian_outline').classList.remove('hidden')
  });
  document.getElementById('variidian_sec').addEventListener('mouseleave', () => {
    document.getElementById('variidian_outline').classList.add('hidden')
  });
