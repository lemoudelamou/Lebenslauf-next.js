import Image from "next/image";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/app/data/constants";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="card hero">
      <div className="photo">
        <Image
          src="/md-8.jpeg"
          alt="Mourad Daghar"
          fill
          priority
          sizes="160px"
        />
      </div>

      <div className="hero-content">
        <div className="name">Mourad Daghar</div>
        <h1>Software Developer</h1>

        <p className="sub">Software, KI, Visualisierung und Interaktion.</p>

        <div className="facts">
          <span>
            <b>M.Sc.</b> Medieninformatik
          </span>

          <span>
            <Icon name="pin" size={14} />
            Berlin, DE
          </span>

          <span>
            <i className="status-dot" aria-hidden="true" />
            Offen für neue Aufgaben
          </span>
        </div>

        <div className="btns">
          <a className="btn primary" href={`mailto:${EMAIL}`}>
            <Icon name="mail" size={15} />
            {EMAIL}
          </a>

          <a className="btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a className="btn" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}