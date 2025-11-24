"use client";
import { Badge } from "@/components/ui/badge";
import {FaJava, FaHtml5, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaGithub} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiExpress, SiNextdotjs, SiFlask, SiTailwindcss, SiPostgresql, SiMysql, SiFirebase, SiSqlite, SiVercel, SiRender, SiKubernetes 
} from "react-icons/si";

const getSkillIcon = (skillName: string) => {
  const size = "1.2em";
  switch (skillName.toLowerCase()) {
    case "java":
      return <FaJava size={size} className="text-red-500" />;
    case "python":
      return <SiJavascript size={size} className="text-yellow-400" />; 
    case "javascript":
      return <SiJavascript size={size} className="text-yellow-400" />;
    case "typescript":
      return <SiTypescript size={size} className="text-blue-500" />;
    case "sql":
      return <SiPostgresql size={size} className="text-blue-400" />; 
    case "html/css":
      return <FaHtml5 size={size} className="text-orange-500" />;
    case "bash":
      return <SiKubernetes size={size} className="text-gray-400" />;

    case "react.js":
      return <FaReact size={size} className="text-cyan-400" />;
    case "node.js":
      return <FaNodeJs size={size} className="text-green-500" />;
    case "express.js":
      return <SiExpress size={size} className="text-gray-400" />;
    case "next.js":
      return <SiNextdotjs size={size} className="text-white" />;
    case "flask":
      return <SiFlask size={size} className="text-gray-400" />;
    case "tailwind css":
      return <SiTailwindcss size={size} className="text-cyan-500" />;

    case "postgresql":
      return <SiPostgresql size={size} className="text-blue-400" />;
    case "mysql":
      return <SiMysql size={size} className="text-blue-300" />;
    case "firebase":
      return <SiFirebase size={size} className="text-yellow-500" />;
    case "sqlite":
      return <SiSqlite size={size} className="text-blue-600" />;

    case "aws":
      return <FaAws size={size} className="text-orange-400" />;
    case "docker":
      return <FaDocker size={size} className="text-blue-500" />;
    case "git":
      return <FaGitAlt size={size} className="text-orange-600" />;
    case "github":
      return <FaGithub size={size} className="text-white" />;
    case "ci/cd":
      return <SiKubernetes size={size} className="text-blue-400" />; 
    case "vercel":
      return <SiVercel size={size} className="text-white" />;
    case "render":
      return <SiRender size={size} className="text-cyan-400" />;
    case "neon":
      return <SiPostgresql size={size} className="text-green-400" />; 
      
    default:
      return null;
  }
};

export const SkillBadge = ({ skill }: { skill: string }) => {
  const icon = getSkillIcon(skill);

  return (
    <Badge
      variant="secondary"
      className="
        text-md px-3 py-1 bg-slate-700 text-gray-300 
        flex items-center gap-2 
        border border-transparent 
        cursor-pointer
        transition-all duration-300 ease-in-out
        hover:bg-slate-600 
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-red-500/30
        hover:border-red-500/50
      "
    >
      {icon}
      <span>{skill}</span>
    </Badge>
  );
};