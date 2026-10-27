import Reveal from "../Reveal/Reveal";
import useTilt from "../../hooks/useTilt";
import UnstopAchievement from "./UnstopAchievement";

export default function Achievements() {
  const ref = useTilt(2, "translateY(-4px)");
  return (
    <section
      id="achievements"
      className="achievements"
      style={{ padding: "var(--section-padding)" }}
    >
      <div className="container">
        <Reveal>
          <h2 className="section-title">Honors &amp; Achievements</h2>
        </Reveal>

        <div className="achievements-grid">
          <Reveal delay={0.1}>
            <div className="achievement-card glass-panel tilt-3d" ref={ref}>
              <span className="shine-sweep" aria-hidden="true" />
              <div className="achievement-trophy">
                <i className="fas fa-trophy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="achievement-title">
                  University Top 10 Achiever
                </h3>

                <div className="achievement-sub">
                  BCA Semester 5 & 6 Examinations | Sardar Patel University
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.95rem",
                    marginBottom: 0,
                  }}
                >
                  Achieved a place among the University Top 10 rank holders in
                  both Semester 5 and Semester 6 of the BCA examinations at
                  Sardar Patel University, demonstrating consistent academic
                  excellence.
                </p>

                <div className="achievement-stats">
                  <span>Sem 5: Rank 9</span>
                
                  <span>GPA: 9.17 / 10.0</span>
                </div>

                <div className="achievement-stats">
                  <span>Sem 6: Rank 8</span>
                  <span>GPA: 9.25 / 10.0</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <UnstopAchievement />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
