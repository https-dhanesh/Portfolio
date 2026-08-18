export const projectData = [
  {
    title: "Telemetry Guardian: DevSecOps Pipeline",
    description: "Engineered an automated end-to-end CI/CD pipeline in Jenkins utilizing managed JDK 24/Maven tools to run validation tests and compile source modules. Integrated SonarQube SAST security gates via active API status polling to securely assemble production-ready multi-stage Docker container images.",
    tech: ["Jenkins", "SonarQube", "Java 24", "Maven", "Docker"],
    githubUrl: "https://github.com/https-dhanesh/telemetry-guardian",
    imageUrl: "/images/stage_view.png",
  },
  {
    title: "CloudCost_Wise: DevSecOps & GitOps",
    description: "Architected a secure, self-healing cost management platform on AWS EKS. Engineered a full DevSecOps pipeline featuring Shift-Left security with Trivy scanning, automated GitOps synchronization via ArgoCD, and asymmetric RSA encryption for secret management.",
    tech: ["Terraform", "AWS EKS", "ArgoCD", "Trivy", "Sealed Secrets", "Node.js"],
    githubUrl: "https://github.com/https-dhanesh/Cloud_Cost_Wise",
    imageUrl: "/images/CloudCost_Architecture.jpg",
  },
  {
    title: "CoWork Platform",
    description: "A full-stack marketplace for discovering and managing niche coworking spaces, with secure authentication , role-based access , payment gateway and frontend data caching",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS","TanStack Query"],
    githubUrl: "https://github.com/https-dhanesh/Coworking-platform",
    imageUrl: "/images/cowork.png",
  },
  {
    title: "GitOps & Kubernetes Pipeline",
    description: "Architected a multi-node K8s cluster , Automated lifecycle management with ArgoCD  ensuring 100% Git-to-Cluster synchronization and configured Nginx Ingress for efficient Routing ",
    tech: ["Kubernetes", "ArgoCD", "Docker", "Nginx Ingress"],
    githubUrl: "https://github.com/https-dhanesh/devops-go-web-app",
    imageUrl: "/images/pipeline.jpg",
  },
  {
    title: "Cloud Native Microservices",
    description: "Engineered a multi-service platform on Amazon EKS and it's services (DNS/ConfigMaps) for native configuration and discovery, eliminating external Eureka and ConfigServers. Integrated Amazon MSK (Kafka) for resilient, asynchronous event handling.",
    tech: ["Amazon EKS", "Apache Kafka", "Keycloak", "Spring Boot"],
    githubUrl: "https://github.com/https-dhanesh/Fitness_Advisor_MicroServices",
    imageUrl: "/images/Fitness_Advisor.jpg",
  },
  {
    title: "LogiTrace (In-Dev)",
    description: "Architected an event-driven supply chain tracking platform utilizing RabbitMQ topic exchanges for decoupled messaging, Dragonfly sorted sets for SLA priority queuing, and EventStoreDB for audit logging. Built with Node.js microservices and RBAC role scoping across manufacturers, carriers, and warehouses.",
    tech: ["Node.js", "TypeScript", "RabbitMQ", "Dragonfly", "EventStoreDB", "Docker"],
    githubUrl: "https://github.com/https-dhanesh/LogiTrace",
    imageUrl: "/images/LogiTrace.png",
  },
];