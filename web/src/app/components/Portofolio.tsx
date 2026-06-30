"use client";

import Image from "next/image";
import { useState } from "react";

type TabType = "project" | "certificates";

const projects = [
  {
    title: "Lamigo",
    desc: "Platform travel destination Lampung berbasis web dan mobile",
    image: "/images/Lamigo.webp",
    link: "https://lamigo-umber.vercel.app",
  },
];

const certificates = [
  {
    title: "BNSP Certificate",
    desc: "Junior Web Developer",
    image: "/images/bnsp.png",
    link: "#",
  },
  {
    title: "BNSP Certificate",
    desc: "Associate Data Scientist",
    image: "/images/bnsp.png",
    link: "#",
  },
];

export default function Portofolio() {
  const [activeTab, setActiveTab] = useState<TabType>("project");

  const data = activeTab === "project" ? projects : certificates;

  return (
    <section
      id="portofolio"
      style={{
        background: "#004B39",
        minHeight: "100vh",
        padding: "60px 0",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ width: "85%", margin: "auto" }}>
        {/* HEADER */}
        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ fontSize: "34px", fontWeight: "700" }}>
            Portofolio
          </h1>
          <p style={{ opacity: 0.7, fontSize: "14px", maxWidth: "600px" }}>
            Portofolio ini menampilkan berbagai proyek yang telah saya kerjakan
            sebagai bentuk pengembangan kemampuan dan pengalaman.
          </p>
        </div>

        {/* BUTTON */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          <button
            onClick={() => setActiveTab("project")}
            style={{
              padding: "10px 24px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              background:
                activeTab === "project"
                  ? "#0E7C61"
                  : "rgba(255,255,255,0.1)",
              color: "white",
            }}
          >
            Proyek
          </button>

          <button
            onClick={() => setActiveTab("certificates")}
            style={{
              padding: "10px 24px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              background:
                activeTab === "certificates"
                  ? "#0E7C61"
                  : "rgba(255,255,255,0.1)",
              color: "white",
            }}
          >
            Certificates
          </button>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {data.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "14px",
                  padding: "16px",
                  color: "#004B39",
                  transition: "0.25s",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 18px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* IMAGE SMALL */}
                <div
                  style={{
                    background: "#f8f9fa",
                    borderRadius: "10px",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={70}
                    height={70}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* TEXT */}
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "12px",
                    opacity: 0.7,
                    lineHeight: "1.4",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}