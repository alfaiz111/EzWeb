"use client";

import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  const [active, setActive] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  const getBg = (key: string) =>
    active === key ? "#1aa37a" : "#004B39";

  const getTransform = (key: string) => {
    if (active === key) return "translateY(0px) scale(0.98)";
    if (hover === key) return "translateY(-6px)";
    return "translateY(0px)";
  };

  const getShadow = (key: string) => {
    if (hover === key)
      return "0 12px 22px rgba(0,0,0,0.18)";
    return "0 4px 10px rgba(0,0,0,0.1)";
  };

  const card = (key: string): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    background: getBg(key),
    padding: "12px 16px",
    borderRadius: "15px",
    color: "white",
    boxShadow: getShadow(key),
    cursor: "pointer",
    transform: getTransform(key),
    transition: "all 0.2s ease",
  });

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        fontFamily: "system-ui, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap", // 🔥 penting untuk mobile
        }}
      >
        {/* LEFT IMAGE (HIDDEN MOBILE) */}
        <div
          className="about-image"
          style={{
            position: "relative",
            width: "450px",
            height: "550px",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Image
            src="/images/gambar2.png"
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
              bottom: 0,
              width: "100%",
              height: "160px",
              background:
                "linear-gradient(to top, white 0%, transparent 100%)",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: "500px",
          }}
          className="about-content"
        >
          <p
            style={{
              color: "#004B39",
              fontWeight: "600",
              marginBottom: "10px",
              fontSize: "14px",
            }}
          >
            About Me
          </p>

          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 36px)", // 🔥 responsive font
              fontWeight: "700",
              color: "#004B39",
            }}
          >
            M. Arif Alfaiz
          </h1>

          <p
            style={{
              marginTop: "12px",
              marginBottom: "20px",
              color: "#555",
              lineHeight: "1.6",
              fontSize: "clamp(13px, 2.5vw, 14px)",
            }}
          >
            Saya adalah seorang UI Designer dan Frontend Developer yang memiliki
            ketertarikan tinggi dalam menciptakan tampilan antarmuka yang menarik,
            modern, dan mudah digunakan.
          </p>

          {/* CARDS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* WhatsApp */}
            <a href="https://wa.me/6285176707868">
              <div
                style={card("wa")}
                onMouseEnter={() => setHover("wa")}
                onMouseLeave={() => setHover(null)}
                onMouseDown={() => setActive("wa")}
                onMouseUp={() => setActive(null)}
              >
                <FaWhatsapp size={18} />
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600 }}>
                    WhatsApp
                  </p>
                  <p style={{ fontSize: 12, opacity: 0.8 }}>
                    +62 851 7670 7868
                  </p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:muhammadarif120419@gmail.com">
              <div
                style={card("email")}
                onMouseEnter={() => setHover("email")}
                onMouseLeave={() => setHover(null)}
                onMouseDown={() => setActive("email")}
                onMouseUp={() => setActive(null)}
              >
                <FaEnvelope size={18} />
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600 }}>Email</p>
                  <p style={{ fontSize: 12, opacity: 0.8 }}>
                    muhammadarif120419@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <a href="https://www.google.com/maps/search/?api=1&query=Jakarta+Pusat">
              <div
                style={card("loc")}
                onMouseEnter={() => setHover("loc")}
                onMouseLeave={() => setHover(null)}
                onMouseDown={() => setActive("loc")}
                onMouseUp={() => setActive(null)}
              >
                <FaMapMarkerAlt size={18} />
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600 }}>
                    Location
                  </p>
                  <p style={{ fontSize: 12, opacity: 0.8 }}>
                    Jakarta Pusat, Indonesia
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 🔥 RESPONSIVE STYLE */}
      <style jsx>{`
        @media (max-width: 768px) {
          .about-image {
            display: none; /* 🔥 hilangkan gambar di mobile */
          }

          .about-content {
            text-align: center;
            margin: auto;
          }
        }
      `}</style>
    </section>
  );
}