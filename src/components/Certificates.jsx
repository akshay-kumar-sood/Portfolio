import { useState } from "react"
import { MapPin, Calendar } from "lucide-react"

const certificates = [
  {
    id: 1,
    title: "Ethical Hacking",
    source: "IIT KHARAKPUR",
    date: "JULY - OCT 2024",
    image: "certificates/hack.jpg",
  },
  {
    id: 2,
    title: "Deeksharambh",
    source: "CHitkara HP",
    date: "2023",
    image: "/certificates/arambh.jpg",
  },
  {
    id: 3,
    title: "Redhat Linux",
    source: "Infosys",
    date: "27 March 2024",
    image: "/certificates/linux.jpg",
  },
  {
    id: 4,
    title: "Software Testing",
    source: "SpringBoard",
    date: "22 March 2025",
    image: "/certificates/testing.jpg",
  },
  {
    id: 5,
    title: "Intro To Ai",
    source: "Cisco",
    date: "25 DEC 2025",
    image: "/certificates/ai.jpg",
  },
]

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section className="certificates">
      {/* Header */}
      <div className="cert-header">
        <h1>Certificates</h1>
        <p className="cert-punch">
          Learning backed by proof, not claims.
        </p>
      </div>

      {/* Grid */}
      <div className="cert-grid">
        {certificates.map(cert => (
          <div
            key={cert.id}
            className="cert-card"
            onClick={() => setActiveCert(cert)}
            >
            <img src={cert.image} alt={cert.title} />
              <h3 className="cert-title">{cert.title}</h3>
            <div className="cert-meta">
            <div className="cert-source">
            <MapPin size={14} />
            <span>{cert.source}</span>
            </div>

            <div className="cert-date">
            <Calendar size={14} />
            <span >{cert.date}</span>
            </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeCert && (
        <div className="cert-modal" onClick={() => setActiveCert(null)}>
          <img src={activeCert.image} alt={activeCert.title} />
          <button className="close">✕</button>
        </div>
      )}
    </section>
  )
}
