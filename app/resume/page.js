export const metadata = {
  title: "Resume — Swayam Rathod",
};

const skills = [
  "SolidWorks",
  "Fusion 360",
  "AutoCAD",
  "Gazebo",
  "ROS 2",
  "NVIDIA Isaac Sim",
  "Raspberry Pi",
  "Arduino",
  "EasyEDA",
  "URDF Modeling",
  "Python",
  "Java",
  "C++",
  "MS Office (Advanced Excel)",
];

export default function Resume() {
  return (
    <div className="shell">
      <p className="eyebrow">Resume</p>
      <h1>Resume</h1>
      <p className="lede">
        The short version of everything on this site, laid out resume-style.
        Read it here, or use the PDF.
      </p>

      <div className="resume-actions">
        <a
          className="btn"
          href="/Swayam_Rathod_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open PDF
        </a>
        <a className="link" href="/Swayam_Rathod_Resume.pdf" download>
          Download PDF
        </a>
      </div>

      <p className="resume-contact">
        (404) 910-6857 ·{" "}
        <a href="mailto:swayamrathod2006@gmail.com">
          swayamrathod2006@gmail.com
        </a>{" "}
        ·{" "}
        <a
          href="https://linkedin.com/in/swayam-rathod"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/sway-r"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>

      <h2>Education</h2>
      <div className="resume-entry">
        <div className="resume-entry-head">
          <div className="resume-entry-title">
            Associate of Science in Physics — GPA 3.62/4.0
          </div>
          <div className="resume-entry-date">Expected Dec 2028</div>
        </div>
        <div className="resume-entry-where">Georgia State University (Atlanta)</div>
      </div>

      <h2>Technical Skills</h2>
      <div>
        {skills.map((skill) => (
          <span className="pill" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <h2>Academic Projects</h2>
      <div className="resume-entry">
        <div className="resume-entry-head">
          <div className="resume-entry-title">
            Humanoid Robot for Dynamic Motion &amp; AI Control
          </div>
          <div className="resume-entry-date">Apr 2025 – Dec 2025</div>
        </div>
        <ul>
          <li>
            Developing a 4&apos;5&quot; humanoid robot capable of balanced
            bipedal walking using torque-controlled servos and IMU-based
            feedback for pitch and roll correction.
          </li>
          <li>
            Engineered a ROS 2 architecture integrating real-time motion
            control, local LLM interpretation, and sensor-driven adaptation,
            achieving consistent gait stability over 95% of test cycles.
          </li>
        </ul>
      </div>
      <div className="resume-entry">
        <div className="resume-entry-head">
          <div className="resume-entry-title">
            Robotic Arm Mounted on a Four-Wheeled Mobile Platform
          </div>
          <div className="resume-entry-date">Dec 2025 – May 2025</div>
        </div>
        <ul>
          <li>
            Assisted with team coordination, system assembly, and testing to
            ensure the robot operated as intended.
          </li>
          <li>
            Led CAD modeling and contributed to electrical system layout,
            ensuring proper motor driver integration, power distribution,
            and mechanical alignment.
          </li>
        </ul>
      </div>

      <h2>Leadership Experience</h2>
      <div className="resume-entry">
        <div className="resume-entry-head">
          <div className="resume-entry-title">
            Founder &amp; President, Engineering Club
          </div>
          <div className="resume-entry-date">Jan – May 2026</div>
        </div>
        <div className="resume-entry-where">Gwinnett Technical College</div>
        <ul>
          <li>
            Led the development of a student robotics initiative, managing
            and working with Mechanical, Electrical, and Programming
            departments.
          </li>
          <li>
            Ran weekly sessions where members went from zero experience to
            designing and testing their own robot prototypes.
          </li>
        </ul>
      </div>
      <div className="resume-entry">
        <div className="resume-entry-head">
          <div className="resume-entry-title">
            Founder &amp; Product Designer, Craftora 3D Design Studio
          </div>
          <div className="resume-entry-date">May 2025 – Present</div>
        </div>
        <ul>
          <li>
            Built a startup specializing in custom 3D-printed products and
            creative mechanical designs, managing modeling, printing, and
            client delivery.
          </li>
          <li>
            Delivered 20+ original designs and surpassed 100 sales, managing
            the full process independently while balancing a full course
            load.
          </li>
        </ul>
      </div>

      <h2>Engineering Designs &amp; 3D Files</h2>
      <p>
        Design files from personal and academic projects — humanoid robot
        components, rover structures, and custom mechanical parts — shared
        on GitHub:{" "}
        <a
          className="link"
          href="https://github.com/sway-r"
          target="_blank"
          rel="noopener noreferrer"
        >
          @sway-r
        </a>
        .
      </p>

      <h2>Work Experience</h2>
      <div className="resume-entry">
        <div className="resume-entry-head">
          <div className="resume-entry-title">
            Barista &amp; Customer Service, Dunkin&apos;
          </div>
          <div className="resume-entry-date">Feb 2023 – Present</div>
        </div>
      </div>
    </div>
  );
}
