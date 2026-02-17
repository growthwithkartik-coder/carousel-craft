export interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta?: string;
}

export interface TestimonialData {
  id: number;
  avatar: string;
  quote: string;
  name: string;
  designation: string;
}

const img = (id: number) => `https://picsum.photos/seed/carousel${id}/1200/800`;
const imgPortrait = (id: number) => `https://picsum.photos/seed/port${id}/800/1000`;

export const heroSlides: SlideData[] = [
  { id: 1, image: img(1), title: "Build the Future", subtitle: "Premium design systems for modern teams", description: "Create stunning interfaces with our battle-tested components.", cta: "Get Started" },
  { id: 2, image: img(2), title: "Ship Faster", subtitle: "From prototype to production in days", description: "Accelerate your workflow with pre-built, customizable modules.", cta: "Learn More" },
  { id: 3, image: img(3), title: "Scale with Confidence", subtitle: "Enterprise-ready architecture", description: "Built for performance, designed for growth.", cta: "Explore" },
  { id: 4, image: img(4), title: "Design Excellence", subtitle: "Every pixel, purposefully placed", description: "Crafted with obsessive attention to detail.", cta: "Discover" },
];

export const splitSlides: SlideData[] = [
  { id: 1, image: img(10), title: "Intelligent Analytics", subtitle: "Data-driven insights", description: "Transform raw data into actionable intelligence with our powerful analytics engine." },
  { id: 2, image: img(11), title: "Seamless Integration", subtitle: "Connect everything", description: "Plug into your existing workflow with 200+ native integrations." },
  { id: 3, image: img(12), title: "Real-time Collaboration", subtitle: "Work together, anywhere", description: "Enable teams to collaborate in real-time across time zones." },
];

export const cardSlides: SlideData[] = [
  { id: 1, image: img(20), title: "Cloud Infrastructure", subtitle: "Reliable & Fast", description: "99.99% uptime with global edge deployment." },
  { id: 2, image: img(21), title: "Developer Tools", subtitle: "Built for Speed", description: "CLI, SDK, and API-first approach to every feature." },
  { id: 3, image: img(22), title: "Security First", subtitle: "Enterprise Grade", description: "SOC 2 compliant with end-to-end encryption." },
  { id: 4, image: img(23), title: "AI Powered", subtitle: "Smart Automation", description: "Machine learning models that adapt to your workflow." },
  { id: 5, image: img(24), title: "Mobile Ready", subtitle: "Cross Platform", description: "Native performance on every device and screen size." },
  { id: 6, image: img(25), title: "Open Source", subtitle: "Community Driven", description: "Transparent, extensible, and community-backed." },
];

export const editorialSlides: SlideData[] = [
  { id: 1, image: imgPortrait(30), title: "The Art of Simplicity", subtitle: "Design Philosophy", description: "Great design is not about adding more—it's about achieving more with less. Our approach strips away complexity to reveal clarity." },
  { id: 2, image: imgPortrait(31), title: "Crafted with Purpose", subtitle: "Engineering Excellence", description: "Every line of code serves a purpose. We believe in building systems that are as elegant under the hood as they are on the surface." },
  { id: 3, image: imgPortrait(32), title: "Human-Centered", subtitle: "UX Research", description: "Design decisions backed by research, validated by users, and refined through iteration. People first, always." },
];

export const glassSlides: SlideData[] = [
  { id: 1, image: img(40), title: "Beyond Boundaries", subtitle: "Push the limits of what's possible", description: "Explore new frontiers in digital experience design." },
  { id: 2, image: img(41), title: "Crystal Clear Vision", subtitle: "Transparency meets beauty", description: "Where form and function merge into something extraordinary." },
  { id: 3, image: img(42), title: "Fluid Dynamics", subtitle: "Motion as a language", description: "Every transition tells a story, every animation serves a purpose." },
];

export const luxurySlides: SlideData[] = [
  { id: 1, image: img(60), title: "Timeless Elegance", subtitle: "Where sophistication meets innovation", description: "A curated collection of design elements that transcend trends." },
  { id: 2, image: img(61), title: "Refined Aesthetics", subtitle: "Beauty in every detail", description: "Meticulously crafted interfaces that evoke emotion and inspire action." },
  { id: 3, image: img(62), title: "Pure Luxury", subtitle: "The pinnacle of digital craft", description: "An experience so refined, it redefines expectations." },
];

export const neonSlides: SlideData[] = [
  { id: 1, image: img(70), title: "Neon Dreams", subtitle: "Enter the digital frontier", description: "Where cyberpunk aesthetics meet cutting-edge technology." },
  { id: 2, image: img(71), title: "Electric Soul", subtitle: "Powered by innovation", description: "Pulsing with energy, driven by ambition, illuminated by purpose." },
  { id: 3, image: img(72), title: "Night Protocol", subtitle: "After dark, we build", description: "The future is written in neon. Join the revolution." },
];

export const testimonials: TestimonialData[] = [
  { id: 1, avatar: `https://i.pravatar.cc/150?img=1`, quote: "This platform completely transformed how our team ships products. We went from quarterly releases to weekly deployments.", name: "Sarah Chen", designation: "CTO, TechFlow" },
  { id: 2, avatar: `https://i.pravatar.cc/150?img=2`, quote: "The design system is incredibly polished. It saved us hundreds of hours and our customers notice the quality difference.", name: "Marcus Rivera", designation: "Head of Design, Apex" },
  { id: 3, avatar: `https://i.pravatar.cc/150?img=3`, quote: "Best investment we've made. The developer experience is unmatched and the support team is world-class.", name: "Emily Nakamura", designation: "VP Engineering, Orbit" },
  { id: 4, avatar: `https://i.pravatar.cc/150?img=4`, quote: "We evaluated dozens of solutions. Nothing comes close to the polish, performance, and flexibility we found here.", name: "David Park", designation: "Founder, Luminary" },
];
