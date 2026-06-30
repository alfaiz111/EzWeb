"use client";

import Image from "next/image";

const hardSkills = [
  "Front-End",
  "UI Design",
  "Word",
  "Excel",
  "Power Point",
  "Graphic Design",
  "Image Editing",
  "Photography",
  "Video Editing",
  "Videography",
  "Sport",
];

const softSkills = [
  "Communication",
  "Leadership",
  "Team Work",
  "Resilience",
  "Time Management",
  "Problem Solving",
];

const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Canva", icon: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
];

function SkillCard({ title }: { title: string }) {
  return (
    <div
      style={{
        background: "#ffffff",
        color: "#004B39",
        padding: "0px 20px", // 🔥 lebih kecil
        borderRadius: "10px",
        fontSize: "13px",
        textAlign: "left",
        height: "36px", // 🔥 tinggi fix tipis
        display: "flex",
        alignItems: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)", // 🔥 lebih soft
        transition: "all 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
      }}
    >
      {title}
    </div>
  );
}
export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: "#004B39",
        minHeight: "100vh",
        padding: "40px 0",
        color: "white",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ width: "85%", margin: "auto" }}>

        {/* HEADER */}
        <div style={{  marginBottom: "-10px" }}>
          <h1 style={{ fontSize: "34px", fontWeight: "700" }}>
            Skills
          </h1>
          <p style={{marginTop: "-20px", opacity: 0.7, fontSize: "14px" }}>
            Kumpulan keterampilan yang saya kembangkan melalui pengalaman dan proses belajar.
          </p>
        </div>

        {/* HARD + SOFT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "70px",
            marginBottom: "20px",
          }}
        >

          {/* HARD */}
          <div>
            <h2 style={{ marginBottom: "10px" }}>Hard Skills</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {hardSkills.map((item, i) => (
                <SkillCard key={i} title={item} />
              ))}
            </div>
          </div>

          {/* SOFT */}
          <div>
            <h2 style={{ marginBottom: "10px" }}>Soft Skills</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {softSkills.map((item, i) => (
                <SkillCard key={i} title={item} />
              ))}
            </div>
          </div>

        </div>

        {/* TECH STACK */}
        <div>
          <h2 style={{ marginTop: "0px", marginBottom: "10px" }}>Tech Stack</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
              gap: "15px",
            }}
          >
            {techStack.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  padding: "10px 0px",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 6px rgba(0,0,0,0.1)";
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={32}
                  height={32}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}