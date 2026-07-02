"use client";

import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Hero() {
  const text = "Welcome to My Portfolio";
  const [displayText, setDisplayText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 SCROLL FUNCTION
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const socials = [
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/al.ezzzzz?igsh=ZHBtdGdhbHFmczNt",
    },
    {
      icon: FaTiktok,
      link: "https://www.tiktok.com/@paes.ezz?_r=1&_t=ZS-97e7qZTIAlT",
    },
    {
      icon: FaGithub,
      link: "https://github.com/alfaiz111",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/m-arif-alfa-iz-382681277",
    },
  ];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
        padding: isMobile ? "40px 20px" : "20px",
      }}
    >
      {/* BACKGROUND */}
      <Image
        src="/images/bg.jpeg"
        alt="Background"
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#004B39",
          opacity: 0.9,
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          width: "100%",
          maxWidth: "1100px",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "space-between",
          color: "white",
          gap: "20px",
          flexWrap: "wrap",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: "1 1 500px",
            maxWidth: "580px",
            margin: isMobile ? "0 auto" : "0",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: "700",
              letterSpacing: "-1px",
            }}
          >
            {displayText}
            <span
              style={{ borderRight: "2px solid white", marginLeft: "5px" }}
            />
          </h1>

          <p
            style={{
              marginTop: "20px",
              opacity: 0.85,
              lineHeight: "1.7",
              fontSize: "clamp(14px, 2.5vw, 16px)",
            }}
          >
            Saya adalah web developer yang fokus pada pembuatan website modern
            menggunakan Next.js dan teknologi terbaru.
          </p>

          {/* 🔥 BUTTON (SUDAH ADA SCROLL) */}
          <button
            onClick={() => handleScroll("portofolio")}
            style={{
              marginTop: "30px",
              padding: "12px 28px",
              backgroundColor: "white",
              color: "#004B39",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
              transition: "0.3s",
            }}
          >
            Get Started
          </button>

          {/* NAME */}
          <h2
            style={{
              marginTop: "40px",
              fontSize: "20px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            Faiz
          </h2>

          <p
            style={{
              fontSize: "14px",
              opacity: 0.7,
              marginTop: "5px",
            }}
          >
            UI Designer & Front-End
          </p>

          {/* SOCIAL ICON */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "15px",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            {socials.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "10px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <Icon size={20} color="white" />
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        {!isMobile && (
          <div
            style={{
              position: "relative",
              width: "380px",
              height: "600px",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Image
              src="/images/gambar1.png"
              alt="Profile"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "bottom",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 0,
                right: -140,
                width: "60%",
                height: "100%",
                background:
                  "linear-gradient(to left, #004B39 0%, transparent 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: -20,
                width: "100%",
                height: "200px",
                background:
                  "linear-gradient(to top, #004B39 0%, transparent 100%)",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}