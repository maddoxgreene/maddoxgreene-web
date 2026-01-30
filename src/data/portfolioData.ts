import { Shield, Server, Lock, Origami } from 'lucide-react';

export interface JourneyItem {
    period: string;
    title: string;
    company: string;
    description: string;
    type: 'work' | 'education';
    technologies: string[];
}

export const journey: JourneyItem[] = [
    { period: "2024 - 2026", title: "Customer Experience Manager", company: "Leading CX Operations", description: "Spearheading customer experience initiatives, managing cross-functional teams, and implementing data-driven improvements.", type: "work", technologies: ["Team Leadership", "Data Analytics", "Process Optimization"] },
    { period: "2024 - 2024", title: "IT Support Specialist Intern", company: "IT Support", description: "Providing first-line technical assistance to end-users, troubleshooting hardware, software, and network issues, and documenting resolutions to support daily operations.", type: "work", technologies: ["Zendesk", "Hardware", "OS", "Troubleshooting"] },
    { period: "2024 - 2026", title: "Bachelor's in Information System Security", company: "University Studies", description: "Pursuing specialized education in cybersecurity, focusing on advanced threat analysis, digital forensics, and security architecture.", type: "education", technologies: ["Digital Forensics", "Cryptography", "Incident Response"] },
    { period: "2023 - 2024", title: "System Administrator", company: "Enterprise IT Operations", description: "Managing hybrid cloud infrastructure for 10,000+ users, implementing automation, and maintaining 99.9% uptime.", type: "work", technologies: ["AWS", "Docker", "Kubernetes", "Ansible"] },
    { period: "2020 - 2022", title: "Event Sales Representative", company: "Sales Management and Showcasing", description: "Leading top 3 in sales of HP products and partnership accessories, showcasing products and building customer loyalty.", type: "work", technologies: ["Sales Force", "Microsoft Teams"] }
];

export const certifications = [
    { title: "CS50X Cyber Security Certificate", subtitle: "Professional Certificate", desc: "Harvard University's Cybersecurity Course", color: "red", icon: Origami },
    { title: "Google Cybersecurity Certificate", subtitle: "Professional Certificate", desc: "Foundational Cybersecurity Skills and Hands-on Labs", color: "blue", icon: Shield },
    { title: "Google IT Support Certificate", subtitle: "Professional Certificate", desc: "Technical Troubleshooting and Customer Support", color: "pink", icon: Server },
    { title: "In Progress", subtitle: "Security+", desc: "System Security Architecture and Design", color: "gray", icon: Lock }
];

export const collaborations = [
    { name: 'AuraSide', imgSrc: '/Auraside.jpg' },
    { name: 'Hone', imgSrc: '/Hone.jpg' },
    { name: 'Ghast', imgSrc: '/Ghast.jpg' },
    { name: 'DuelSet', imgSrc: '/duelset_logo.jpg' },
    { name: 'RegeditMC', imgSrc: '/RegeditMC.jpg' },
    { name: 'TJA', imgSrc: '/TJA.jpg' },
    { name: "Badlion Client", imgSrc: '/badlionclient.jpg'},
    { name: "Feather Client", imgSrc: '/featherclient.jpg'},
    { name: "2020 Companies", imgSrc: '/2020companies.webp'},
    { name: "Timeless Tokens", imgSrc: '/timelesstokens.jpg'}
];

export const projects = [
    { name: "Project Redeye", imgSrc: "/projectredeye.png", desc: "Sub-Domain Enumeration & Discovery Tool", link: "https://github.com/maddoxgreene/project-redeye"},
    { name: "WarpTune", imgSrc: "/WarpTune.png", desc: "A High Performance Network Optimizer", link: "https://github.com/maddoxgreene/WarpTune" },
    { name: "NetPulse", imgSrc: "/NetPulse.png", desc: "Network & Latency Diagnostics Tool", link: "https://github.com/maddoxgreene/NetPulse"}
];