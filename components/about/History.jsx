import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function History() {
  const testimonials = [
    {
      quote:
        "I come from Fatehpur — a small city wrapped in calm and clean air. It’s where I grew up, went to school, and learned the little things that shaped who I am today",
      name: "Fatehpur, Uttar Pradesh",
      designation: "A peaceful city that shaped my beginnings.",
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibxQ_NOY3-c2DvbfAJpJrHjo_poIhBKxKFSpCWNh-3QH7D7THmrLUeUFaXX8L2mYrtdlUt8c-YgplGgk-AM0tmgWyg9M3-NPbT-45SrNR8SZMKncHR8qYeLCcBE0jZjlGCgQIbpKFZt_B6/s1600/3599203-fatehpur-sikri-agra-india%255B1%255D.jpg",
    },
    {
      quote:
        "I’m currently pursuing my B.Tech in Computer Science (Cyber Security) at PSIT College, Kanpur — where I’m diving deeper into the world of technology, innovation, and digital defense.",
      name: "PSIT College, Kanpur",
      designation: "Exploring the tech world at PSIT, Kanpur",
      src: "https://imgs.search.brave.com/Lx1yA02xwPx_FANP-iT9VjhhmGhCpLu_8cilUYwvMjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/a2FucHVyL3EyLzA1/MTJweDUxMi54NTEy/LjIzMDkwNjE5NDQ0/MC53NHEyL2NhdGFs/b2d1ZS9wc2l0LWNv/bGxlZ2Utb2YtaGln/aGVyLWVkdWNhdGlv/bi1iaGF1dGktcHJh/dGFwcHVyLWthbnB1/ci11bml2ZXJzaXRp/ZXMteWx5MzF1M2Z0/ci5qcGc_dz0zODQw/JnE9NzU",
    },
    {
      quote:
        "Coding isn't just a skill for me — it's the one place where the effort actually pays off. No politics, no fluff, just logic. That's why I'm obsessed with it.",
      name: "Built Different: The Code Edition",
      designation: "Coding is my chaos, and I thrive in it.",
      src: "https://i.pinimg.com/1200x/56/67/93/5667936906181a6fbe0501b471e2b5bd.jpg",
    },
    {
      quote:
        "Painting has always been my calm corner — where code turns into color, and logic takes a back seat. Each piece is a reflection of how I see balance between creativity and structure.",
      name: "Painting",
      designation: "A glimpse into my creative side.",
      src: "/painting.jpg",
    },
    
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
