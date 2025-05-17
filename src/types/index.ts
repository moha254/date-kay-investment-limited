export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  imageUrl: string;
}