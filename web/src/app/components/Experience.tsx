"use client";

import Image from "next/image";

const experiences = [
  {
    title: "Internship",
    role: "UIUX & Frontend Developer",
    company: "CV. Newus Technology",
    date: "Nov 2025 - Feb 2026",
    logo: "/images/logo.ico",
  },
  {
    title: "HIMA Head Of Division",
    role: "Social Community",
    company: "Himpunan Mahasiswa Informatika",
    date: "Feb 2026 - Feb 2027",
    logo: "/images/logo4.png",
  },
  {
    title: "Student Exchange",
    role: "UIUX & Frontend Developer",
    company: "CV. Newus Technology",
    date: "Okt 2024 - Feb 2025",
    logo: "/images/logo5.png",
  },
  {
    title: "Competition Coordinator",
    role: "Web Design",
    company: "Universitas Teknokrat Indonesia",
    date: "Nov 2025",
    logo: "/images/logo3.png",
  },
  {
    title: "Speaker",
    role: "UIUX Design",
    company: "Universitas Teknokrat Indonesia",
    date: "Jun 2025",
    logo: "/images/logo3.png",
  },
  {
    title: "Chief Executive",
    role: "Bina Desa",
    company: "Himpunan Mahasiswa Informatika",
    date: "Jul 2026",
    logo: "/images/logo4.png",
  },
  {
    title: "Head Of Division",
    role: "UIUX Design",
    company: "Programming Teknokrat",
    date: "Feb 2025 - Mar 2026",
    logo: "/images/logo6.png",
  },
  {
    title: "Vice Chairman",
    role: "Paskibra",
    company: "SMA Negeri 1 Seputih Banyak",
    date: "Jul 2021 - Jul 2022",
    logo: "/images/logo1.png",
  },
];

export default function Experience() {
  return (
    <section
    id="experience"
      style={{
        minHeight: "100vh",
        padding: "60px 0",
        background: "#fff",
        fontFamily: "Arial, sans-serif", // FONT NORMAL UMUM
      }}
    >
      <div style={{ width: "85%", margin: "0 auto" }}>

        {/* HEADER */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#004B39",
            marginBottom: "6px",
          }}
        >
          Experience
        </h1>

        <p
          style={{
            fontSize: "13px",
            color: "#555",
            marginBottom: "30px",
            maxWidth: "650px",
            lineHeight: "1.5",
          }}
        >
          Saya memiliki berbagai pengalaman dalam mengembangkan diri melalui
          kegiatan belajar, proyek, dan keterlibatan dalam berbagai aktivitas.
        </p>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px",
          }}
        >
          {experiences.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#004B39",
                padding: "10px 12px", // 🔥 DIPERKECIL
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0px)";
                el.style.boxShadow = "0 3px 8px rgba(0,0,0,0.12)";
              }}
            >
              {/* LOGO */}
              <div style={{ width: "38px", height: "38px", position: "relative" }}>
                <Image
                  src={item.logo}
                  alt={item.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 style={{ fontSize: "13px", fontWeight: "600", color: "#fff" }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "11px", color: "#e5e5e5" }}>
                  {item.company} • {item.role}
                </p>

                <p style={{ fontSize: "10px", color: "#cfcfcf" }}>
                  {item.date}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}