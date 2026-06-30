"use client";

import Image from "next/image";
import { useState } from "react";

export default function Education() {
  const data = [
    {
      title: "SMP Paramarta 1",
      subtitle: "Science Program",
      year: "2017 - 2020",
      img: "/images/logo2.png",
    },
    {
      title: "SMA Negri Seputih Banyak",
      subtitle: "Science Program",
      year: "2020 - 2023",
      img: "/images/logo1.png",
    },
    {
      title: "Universitas Teknokrat Indonesia",
      subtitle: "Informatic",
      year: "2023 - 2027",
      img: "/images/logo3.png",
    },
  ];

  return (
    <section
      id="education"
      style={{
        minHeight: "100vh",
        padding: "100px 0",
        background: "#f8f9fa",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: "85%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#004B39",
            textAlign: "center",
          }}
        >
          Education
        </h1>

        <p
          style={{
            marginTop: "10px",
            color: "#555",
            fontSize: "14px",
            maxWidth: "600px",
            textAlign: "center",
            marginInline: "auto",
          }}
        >
          Saya memiliki beberapa pengalaman pendidikan yang telah membentuk
          dasar pengetahuan dan keterampilan saya hingga saat ini.
        </p>

        {/* CARD LIST */}
        <div
          style={{
            marginTop: "70px",
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center", // ✅ center
          }}
        >
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 🔥 COMPONENT CARD (biar useState aman) */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Card({ item }: any) {
  const [active, setActive] = useState(false);

  return (
    <div
      style={cardWrapper}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {/* LOGO FLOAT */}
      <div style={logoFloat}>
        <Image
          src={item.img}
          alt={item.title}
          fill
          style={{
            objectFit: "contain",
            filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.25))",
          }}
        />
      </div>

      {/* CARD */}
      <div
        style={{
          ...cardStyle,
          transform: active
            ? "translateY(-12px) scale(1.03)"
            : "translateY(0)",
          boxShadow: active
            ? "0 20px 40px rgba(0,0,0,0.2)"
            : "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={titleStyle}>{item.title}</h3>

        {item.subtitle && (
          <p style={subtitleStyle}>{item.subtitle}</p>
        )}

        <p style={yearStyle}>{item.year}</p>
      </div>
    </div>
  );
}

/* 🎨 STYLE */

const cardWrapper: React.CSSProperties = {
  position: "relative",
  width: "300px",
  paddingTop: "70px",
};

const logoFloat: React.CSSProperties = {
  position: "absolute",
  top: "-20", // ✅ fix
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "140px",
  height: "140px",
  zIndex: 2,
};

const cardStyle: React.CSSProperties = {
  background: "#004B39",
  borderRadius: "16px",
  padding: "80px 20px 25px",
  color: "white",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  transition: "all 0.25s ease", // 🔥 smooth
  cursor: "pointer",
};

const titleStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "600",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "13px",
  opacity: 0.8,
  marginTop: "5px",
};

const yearStyle: React.CSSProperties = {
  marginTop: "15px",
  fontSize: "13px",
  opacity: 0.9,
};