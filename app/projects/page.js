export const metadata = {
  title: "Projects — Swayam Rathod",
};

export default function Projects() {
  return (
    <div className="shell">
      <p className="eyebrow">Projects</p>
      <h1>Spookey — a humanoid robot, built solo</h1>
      <p className="lede">
        My biggest project so far: an independently designed humanoid robot,
        started in April 2025 to understand what it actually takes to build
        a humanoid, not just study robotics in isolated pieces.
      </p>

      <p>
        Spookey is a roughly 4.5-foot humanoid platform with articulated
        joints, built with the long-term goal of stable bipedal movement
        using sensor feedback for balance and motion correction. I&apos;ve
        worked on the mechanical structure, CAD, 3D-printed components,
        electronics, power distribution, wiring, motor and servo control,
        sensors, software architecture, AI, and motion systems myself.
      </p>

      <div>
        <span className="pill">ROS 2</span>
        <span className="pill">Raspberry Pi</span>
        <span className="pill">Custom PCBs (KiCad)</span>
        <span className="pill">Computer Vision</span>
        <span className="pill">IMU Feedback</span>
        <span className="pill">3D Printing</span>
      </div>

      <h2>Software</h2>
      <p>
        The software is built around ROS 2, with the system split into
        separate nodes for motion, sensing, behaviors, and higher-level
        control, so the robot can eventually perceive its surroundings,
        interpret commands, and respond through physical movement.
        I&apos;ve experimented with Raspberry Pi-based computing, servo and
        motor control, IMU feedback, computer vision, and local AI /
        language-model interpretation as part of the control stack.
      </p>

      <h2>Electronics &amp; power</h2>
      <p>
        As the robot got more complex, temporary breadboard wiring and loose
        connections became unreliable, so I taught myself PCB design to
        replace them, learning KiCad and working through grounding,
        connector placement, trace widths, power distribution, decoupling,
        and manufacturing along the way. Electrical distribution and PCB
        design were both areas I knew very little about before this project
        forced me to learn them.
      </p>

      <h2>How I approach it</h2>
      <p>
        I don&apos;t need to already know how to build something before
        starting it. I learn the concepts required to make it work, apply
        them, find the problems, and iterate. That&apos;s been the process
        for basically every part of Spookey, and it&apos;s how I approach
        engineering in general.
      </p>

      <h2>Other work</h2>
      <p>
        I&apos;ve also worked on a robotic arm mounted to a four-wheeled
        mobile platform as part of a team, contributing to CAD modeling,
        mechanical assembly, electrical layout, motor-driver integration,
        power distribution, alignment, testing, and team coordination.
        Beyond that, I&apos;ve designed a range of 3D-printable parts,
        including humanoid components, rover structures, and custom
        mechanical pieces, with design files shared on my GitHub.
      </p>

      <a
        className="btn"
        href="https://github.com/sway-r"
        target="_blank"
        rel="noopener noreferrer"
      >
        See project files on GitHub
      </a>
    </div>
  );
}
