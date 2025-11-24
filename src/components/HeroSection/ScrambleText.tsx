"use client";
import { useScramble } from "use-scramble";

const ScrambleText = ({ text }: { text: string }) => {
  const { ref } = useScramble({
    text: text,
    speed: 1.5,       
    tick: 1,       
    step: 1,         
    scramble: 12, 
    seed: 42,    
    overflow: true,  
    chance: 0.8,       
  });

  return (
    <span
      ref={ref}
      className="cursor-pointer"
    />
  );
};

export default ScrambleText;