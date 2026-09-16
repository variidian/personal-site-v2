import { gsap } from "gsap";

window.addEventListener("load", () => {
  gsap.from(".stagger_in", {
    duration: 0.4,
    scale: 0,
    stagger: 0.3,
    ease: "back.out(3)",
    delay: 1
  })
}
)


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
    document.body.style.cursor = 'pointer';
  });
  document.getElementById('programmer_sec').addEventListener('mouseleave', () => {
    document.getElementById('programmer_outline').classList.add('hidden')
    document.body.style.cursor = 'default';
  });

  document.getElementById('programmer_sec').addEventListener('click', () => {
    window.location.href="/projects"
  });

// wip section 
document.getElementById('wip_sec').addEventListener('mouseenter', () => {
    document.getElementById('wip_outline').classList.remove('hidden')
    document.body.style.cursor = 'pointer';
  });
  document.getElementById('wip_sec').addEventListener('mouseleave', () => {
    document.getElementById('wip_outline').classList.add('hidden')
    document.body.style.cursor = 'default';
  });
  document.getElementById('wip_sec').addEventListener('click', () => {
    window.location.href="/wip"
  });

// variidian section 
document.getElementById('variidian_sec').addEventListener('mouseenter', () => {
    document.getElementById('variidian_outline').classList.remove('hidden')
    document.body.style.cursor = 'pointer';
  });
  document.getElementById('variidian_sec').addEventListener('mouseleave', () => {
    document.getElementById('variidian_outline').classList.add('hidden')
    document.body.style.cursor = 'default';
  });
  document.getElementById('variidian_sec').addEventListener('click', () => {
    window.location.href="/me"
  });
