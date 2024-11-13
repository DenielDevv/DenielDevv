interface DigitalArtist {
    name: string;
    age: number;
    location: string;
    yearsOfExperience: number;
}

class DenielDev extends DigitalArtist {
    readonly name = "Deniel 🧙‍♂️";
    readonly age = 20;
    readonly location = "Hungary 🇭🇺";
    readonly yearsOfExperience = 6;
    
    private readonly _passions = [
        "Creating Digital Experiences 🎨",
        "System Architecture Design 🏗️",
        "Problem Solving 🧩",
        "Continuous Learning 📚"
    ];
    
    private readonly _techStack = {
        languages: ["TypeScript", "JavaScript", "Python", "Java", "PHP", "Lua"],
        frontend: ["React", "Next.js", "HTML5", "CSS3", "SASS"],
        backend: ["Node.js", "Express", "NestJS", "Firebase"],
        databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
        tools: ["Docker", "Git", "AWS", "Figma", "VS Code"],
        architecture: ["Microservices", "REST", "GraphQL"]
    };
    
    public getCurrentFocus(): string[] {
        return [
            "Advanced System Architecture 🏗️",
            "AI Integration in Applications 🤖",
            "Cloud Native Development ☁️",
            "Performance Optimization 🚀"
        ];
    }
    
    public getLifePhilosophy(): string {
        return "Code is poetry, and I'm here to write epics! 📝✨";
    }
}

export default DenielDev;
