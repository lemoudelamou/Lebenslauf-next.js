import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/app/data/constants";
import { hobbies } from "@/app/data/education";

export default function AboutContact() {
  return (
    <section className="card two">
      <div>
        <h2>Über mich</h2>

        <dl>
          <div className="dl-row">
            <dt>Ansatz</dt>
            <dd>
              Software soll nicht nur funktionieren, sondern verständlich,
              präzise und interessant sein.
            </dd>
          </div>

          <div className="dl-row">
            <dt>Hintergrund</dt>
            <dd>
              Medieninformatik verbindet technische Entwicklung mit Gestaltung,
              Interaktion und visueller Kommunikation.
            </dd>
          </div>

          <div className="dl-row">
            <dt>Fokus</dt>
            <dd>
              Komplexe technische Prozesse in verständliche, interaktive
              Produkte übersetzen.
            </dd>
          </div>

          <div className="dl-row">
            <dt>Hobbys &amp; Interessen</dt>
            <dd>
              <ul className="bul">
                {hobbies.map((hobby) => (
                  <li key={hobby}>{hobby}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>

      <div className="side">
        <h2>Kontakt</h2>

        <div className="eyebrow">Direkt</div>

        <ul className="bul">
          <li>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            <a href="tel:+4917683432195">+49 176 83432195</a>
          </li>
          <li>Silbersteinstraße 54, 12051 Berlin</li>
        </ul>

        <div className="rule" />

        <div className="eyebrow">Online</div>

        <ul className="bul">
          <li>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              github.com/lemoudelamou
            </a>
          </li>
          <li>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              linkedin.com/in/mourad-daghar
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}