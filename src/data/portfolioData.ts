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
    { period: "2024 - 2026", title: "Customer Experience Manager", company: "CX Operations & Support Strategy", description: "Led customer experience and technical support operations for a high-growth SaaS environment. Owned support workflows, tooling, and performance metrics while coordinating cross-functional teams to resolve issues efficiently and improve product reliability. Focused on using data, feedback, and operational insights to drive continuous improvements in customer satisfaction and support scalability.", type: "work", technologies: ["CX Operations", "Team Leadership", "Support Systems", "Process Optimization", "Data-Driven Decisions"]},
    { period: "2024 - Present", title: "SOC Analyst", company: "Security Operations & Incident Monitoring", description: "Supported security operations through continuous monitoring, alert triage, and log analysis across monitored environments. Investigated potential security events, identified false positives, and escalated confirmed incidents following established playbooks and procedures. Focused on accurate documentation, operational discipline, and maintaining visibility into security posture.", type: "work", technologies: ["Security Operations", "Alert Triage", "Log Analysis", "Incident Response", "Threat Detection"]},
    { period: "2024 - 2024", title: "IT Support Specialist Intern", company: "IT Support & Systems Assistance", description: "Provided front-line technical support to end users across hardware, operating systems, and network-related issues. Assisted with account management, device setup, and troubleshooting while documenting resolutions to support daily operations. Gained hands-on experience working within structured IT processes and supporting a production environment.", type: "work", technologies: ["IT Support", "Troubleshooting", "Endpoint Management", "Ticketing Systems", "Documentation"]},
    { period: "2023 - 2026", title: "Bachelor's in Information System Security", company: "Cybersecurity & Information Assurance", description: "Pursuing a bachelor’s degree focused on cybersecurity operations, risk management, and defensive security practices. Coursework emphasizes threat analysis, incident response, digital forensics, and secure system design. Applying academic concepts to real-world IT and security environments through hands-on labs and operational experience.", type: "work", technologies: ["Cybersecurity", "Incident Response", "Digital Forensics", "Risk Management", "Security Architecture"]},
    { period: "2023 - 2024", title: "Junior System Administrator", company: "IT Operations & Infrastructure Support", description: "Supported internal IT operations across user accounts, systems, and infrastructure components. Assisted with system administration tasks, environment monitoring, and basic automation while ensuring reliability and operational continuity. Gained exposure to enterprise tooling and infrastructure concepts in a production IT environment.", type: "work", technologies: ["IT Operations", "System Administration", "Infrastructure Support", "Automation Basics", "Operational Monitoring"]},
    { period: "2020 - 2022", title: "Event Sales Representative", company: "Sales & Customer Engagement", description: "Consistently ranked top 3 in sales performance for HP products and partner accessories at high-traffic events. Engaged customers through live product demonstrations, identified needs, and delivered tailored recommendations to drive conversions. Built strong customer relationships while representing brand standards and coordinating with internal teams to support sales goals.", type: "work", technologies: ["Sales Performance", "Product Demonstrations", "Customer Engagement", "Brand Representation", "Relationship Building"]},
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