import TechCategoryCard from "@/components/ui/basicCard";

export default function Home() {
  const backendItems = [
    { name: "Node.js", icon: "nodejs-icons.svg" },
    { name: "Express.js", icon: "express.svg" },
    { name: "FastAPI", icon: "fastAPI.svg" },
    { name: "Django", icon: "/django.svg" },
    { name: "REST", icon: "/rest.svg" },
    { name: "GraphQL", icon: "/graphql.svg" },
    { name: "WebRTC", icon: "/webrtc.svg" },
    { name: "gRPC", icon: "/grpc.svg" },
    { name: "Socket.io", icon: "/socketio.svg" },
    { name: "WebSocket", icon: "/websocket.svg" },
    { name: "Kafka", icon: "/kafka.svg" },
  ];

  const frontendItems = [
    { name: "React", icon: "react-icon.svg" },
    { name: "HTML", icon: "html.svg" },
    { name: "CSS", icon: "css.svg" },
    { name: "JavaScript", icon: "js-icon.svg" },
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "Tailwind CSS", icon: "tailwind.svg" },
    { name: "Bootstrap", icon: "boot.svg" },
    { name: "Aceternity UI", icon: "/aceternityUI.png" },
  ];
  const devopsItems = [
    { name: "Docker", icon: "docker.svg" },
    { name: "Kubernetes", icon: "k8s-icon.svg" },
    { name: "AWS", icon: "aws-icon.svg" },
    { name: "Azure", icon: "azure-icon.svg" },
    { name: "GCP", icon: "gcp-icon.svg" },
    { name: "Jenkins", icon: "jenkins-icon.svg" },
    { name: "GitHub Actions", icon: "github-actions-icon.svg" },
    { name: "Terraform", icon: "terraform-icon.svg" },
  ];

  const languagesItems = [
    { name: "JavaScript", icon: "js-icon.svg" },
    { name: "Python", icon: "python-icon.svg" },
    { name: "java", icon: "java-icon.svg" },
    { name: "C++", icon: "cpp-icon.svg" },
    { name: "TypeScript", icon: "typescript-icon.svg" },
    { name: "Go", icon: "go-icon.svg" },
    { name: "Ruby", icon: "ruby-icon.svg" },
    { name: "PHP", icon: "php-icon.svg" },
  ];

  const toolsItems = [
    { name: "Git", icon: "git-icon.svg" },
    { name: "VS Code", icon: "vscode-icon.svg" },
    { name: "Postman", icon: "postman-icon.svg" },
    { name: "JIRA", icon: "jira-icon.svg" },
    { name: "Confluence", icon: "confluence-icon.svg" },
    { name: "Slack", icon: "slack-icon.svg" },
    { name: "Firebase", icon: "firebase-icon.svg" },
    { name: "Figma", icon: "figma-icon.svg" },
    { name: "Notion", icon: "notion-icon.svg" },
    { name: "Canva", icon: "canva-icon.svg" },
  ];


  return (  
    <main className="p-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <TechCategoryCard title="Backend" items={backendItems} />
        </div>
        <div className="flex-1">
          <TechCategoryCard title="Frontend" items={frontendItems} />
        </div>
        <div>
          <TechCategoryCard title="DevOps" items={devopsItems} />
        </div>
      </div>
    </main>
  );
}
