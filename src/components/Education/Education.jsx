import Reveal from '../Reveal/Reveal';
import useTilt from '../../hooks/useTilt';

const MCA_SEMS = [
  { title: 'Semester 1', gpa: '7.76 GPA' },
  { title: 'Semester 2', gpa: '8.76 GPA' },
  { title: 'Semester 3', gpa: 'Awaited' },
  { title: 'Semester 4', gpa: 'Awaited' },
];

const BCA_SEMS = [
  { title: 'Semester 1', gpa: '8.18 GPA' },
  { title: 'Semester 2', gpa: '8.82 GPA' },
  { title: 'Semester 3', gpa: '8.79 GPA' },
  { title: 'Semester 4', gpa: '8.64 GPA' },
  { title: 'Semester 5', gpa: '9.17 GPA' },
  { title: 'Semester 6', gpa: '9.25 GPA' },
];

function TiltCard({ children, delay = 0 }) {
  const ref = useTilt(2.5, 'translateX(6px) translateY(-3px)');
  return (
    <Reveal delay={delay}>
      <div className="edu-card glass-panel tilt-3d" ref={ref}>
        {children}
      </div>
    </Reveal>
  );
}

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Academic Timeline</h2>
        </Reveal>

        <div className="edu-grid">
          <TiltCard>
            <div className="edu-header">
              <div>
                <div className="edu-degree">Master of Computer Applications (MCA)</div>
                <div className="edu-uni">Sardar Patel University</div>
                <div className="edu-college">PG Department of Computer Science and Technology</div>
                <div className="edu-college">Vallabh Vidyanagar</div>
              </div>
              <div className="edu-year">2025 – 2027</div>
            </div>

            <div className="cgpa-pill">Currently Pursuing</div>

            <p>
              Currently pursuing <b>MCA</b> with a growing interest in <b>Full Stack Web Development</b>. Actively
              learning modern technologies such as <b>React.js</b>, <b>Node.js</b>, and <b>MongoDB</b> while
              strengthening fundamentals in <b>Data Structures</b>, <b>Database Systems</b>, and <b>Software Development</b>.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Continuously improving coding skills through practical projects, online learning resources, and academic
              assignments, with a focus on building a strong foundation for a professional <b>Full Stack Developer</b> career.
            </p>
            <br />
            <div className="sem-grid">
              {MCA_SEMS.map((s) => (
                <div key={s.title} className="sem-card">
                  <div className="sem-title">{s.title}</div>
                  <div className="sem-gpa">{s.gpa}</div>
                </div>
              ))}
            </div>
          </TiltCard>

          <TiltCard delay={0.1}>
            <div className="edu-header">
              <div>
                <div className="edu-degree">Bachelor of Computer Applications (BCA)</div>
                <div className="edu-uni">Sardar Patel University</div>
                <div className="edu-college">Anand Commerce College</div>
              </div>
              <div className="edu-year">2022 - 2025</div>
            </div>

            <div className="cgpa-pill">Cumulative CGPA: 8.81/10.0</div>

            <p>
              Completed <b>Bachelor of Computer Applications (BCA)</b> from <b>Anand Commerce College</b>, affiliated with{' '}
              <b>Sardar Patel University</b>. Built a strong foundation in <b>programming (C, C++, Java)</b>,{' '}
              <b>database management</b>, and <b>web development</b>. Developed a <b>Library Management System</b> using{' '}
              <b>PHP, HTML, CSS, and JavaScript</b>, gaining hands-on experience in full stack development. Actively
              participated in seminars, workshops, and coding projects, enhancing my <b>problem-solving</b> and{' '}
              <b>software development skills</b>.
            </p>
            <br />
            <div className="sem-grid">
              {BCA_SEMS.map((s) => (
                <div key={s.title} className="sem-card">
                  <div className="sem-title">{s.title}</div>
                  <div className="sem-gpa">{s.gpa}</div>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
