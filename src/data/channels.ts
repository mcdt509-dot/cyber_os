export interface Channel {
  id: number;
  name: string;
  category: "General" | "Web Security" | "Networking" | "Career" | "Red Teaming" | "Blue Teaming";
  description: string;
  url: string;
}

export const channels: Channel[] = [
  { id: 1, name: "David Bombal", category: "Networking", description: "Cisco, Networking, and Cybersecurity expert advice.", url: "https://www.youtube.com/@davidbombal" },
  { id: 2, name: "Null Byte", category: "Red Teaming", description: "Ethical hacking and security tutorials for beginners.", url: "https://www.youtube.com/@NullByteWHT" },
  { id: 3, name: "NetworkChuck", category: "Networking", description: "Learn networking, cloud, and security in an engaging way.", url: "https://www.youtube.com/@NetworkChuck" },
  { id: 4, name: "CYBER TRUTH", category: "General", description: "Truth about cyber threats and security trends.", url: "#" },
  { id: 5, name: "HackerSploit", category: "Red Teaming", description: "Comprehensive ethical hacking and penetration testing.", url: "https://www.youtube.com/@HackerSploit" },
  { id: 6, name: "CyberSecurity_PK", category: "General", description: "Cybersecurity awareness and technical tutorials.", url: "#" },
  { id: 7, name: "John Hammond", category: "Red Teaming", description: "CTF walkthroughs, malware analysis, and tool demos.", url: "https://www.youtube.com/@JohnHammond010" },
  { id: 8, name: "Cyber Insecurity", category: "Career", description: "Real-world security insights and career guidance.", url: "https://www.youtube.com/@CyberInsecurity" },
  { id: 9, name: "The Cyber Mentor", category: "Red Teaming", description: "Practical ethical hacking and PNPT certification prep.", url: "https://www.youtube.com/@TheCyberMentor" },
  { id: 10, name: "LearnCyberSecurity", category: "General", description: "Foundational cybersecurity training.", url: "#" },
  { id: 11, name: "GeraldAuger", category: "Career", description: "Cybersecurity career coaching and industry interviews.", url: "https://www.youtube.com/@SimplyCyber" },
  { id: 12, name: "Sami Laiho", category: "Blue Teaming", description: "Windows security and troubleshooting expert.", url: "#" },
  { id: 13, name: "Navin Reddy", category: "General", description: "Programming and computer science fundamentals for security.", url: "https://www.youtube.com/@telusko" },
  { id: 14, name: "The PC Security", category: "Blue Teaming", description: "Antivirus testing and malware prevention.", url: "https://www.youtube.com/@ThePCSecurityChannel" },
  { id: 15, name: "Security Tube", category: "General", description: "The YouTube of security education.", url: "http://www.securitytube.net/" },
  { id: 16, name: "OTW Cybersecurity", category: "Web Security", description: "OverTheWire and foundational security challenges.", url: "#" },
  { id: 17, name: "CyberTalkinators", category: "General", description: "Cybersecurity podcasts and discussions.", url: "#" },
  { id: 18, name: "Trace Labs", category: "General", description: "Crowdsourced OSINT to find missing persons.", url: "https://www.youtube.com/@TraceLabs" },
  { id: 19, name: "LiveOverflow", category: "Web Security", description: "Advanced security research and CTF challenges.", url: "https://www.youtube.com/@LiveOverflow" },
  { id: 20, name: "Cyber Secrets", category: "General", description: "Investigation and forensic techniques.", url: "#" },
  { id: 21, name: "HackerOne", category: "Web Security", description: "Bug bounty hunters and ethical hacking community.", url: "https://www.youtube.com/@HackerOne" },
  { id: 22, name: "HackingeBooks CTF", category: "Red Teaming", description: "CTF challenges and hacking resources.", url: "#" },
  { id: 23, name: "Seytonic", category: "General", description: "Hardware hacking and cybersecurity news.", url: "https://www.youtube.com/@Seytonic" },
  { id: 24, name: "Cybr", category: "General", description: "Security awareness and training platform.", url: "https://www.youtube.com/@Cybr" },
  { id: 25, name: "Adrian Crenshaw", category: "General", description: "Classic security research and conference talks.", url: "https://www.youtube.com/@Irongeek" },
  { id: 26, name: "BlackHat Python", category: "Red Teaming", description: "Security tools development with Python.", url: "#" },
  { id: 27, name: "Cybr Expert", category: "General", description: "Expert insights into modern cyber defense.", url: "#" },
  { id: 28, name: "TechSavvy", category: "General", description: "Tech security tips and software reviews.", url: "#" },
  { id: 29, name: "TechNintra", category: "General", description: "Tech and security insights.", url: "#" },
  { id: 30, name: "SecurityIdiots", category: "Web Security", description: "Web application security and bug bounty tutorials.", url: "#" },
  { id: 31, name: "SemmleDev", category: "General", description: "Secure coding and static analysis.", url: "#" },
  { id: 32, name: "Hackers.Mayuri", category: "General", description: "General community hacking tutorials.", url: "#" },
  { id: 33, name: "Hak5", category: "Red Teaming", description: "Award-winning security show and hardware shop.", url: "https://www.youtube.com/@hak5" },
  { id: 34, name: "Gabriel Alonso", category: "General", description: "Security research and tech exploration.", url: "#" },
  { id: 35, name: "STÖK", category: "Web Security", description: "Bug bounty, lifestyle, and offensive security.", url: "https://www.youtube.com/@stokfredrik" },
  { id: 36, name: "Cyber Weapons Lab", category: "Red Teaming", description: "Technical breakdowns of modern cyber weaponry.", url: "https://www.youtube.com/@CyberWeaponsLab" },
];
