import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Swayam Rathod",
};

const skills = [
  "Python",
  "C++",
  "Java",
  "ROS 2",
  "Gazebo",
  "Raspberry Pi",
  "Arduino",
  "Machine Learning",
  "3D Printing",
  "SolidWorks",
  "Fusion 360",
  "AutoCAD",
  "Blender",
  "NVIDIA Isaac Sim",
  "URDF Modeling",
  "Electronics",
  "PCB Design (KiCad, EasyEDA)",
];

export default function About() {
  return (
    <div className="shell">
      <Image
        src="/swayam.jpg"
        alt="Swayam Rathod"
        width={140}
        height={140}
        className="avatar-large"
        quality={95}
      />
      <p className="eyebrow">About</p>
      <h1>About me</h1>
      <p className="lede">
        A quick rundown of where I&apos;ve studied, what I&apos;ve worked on,
        and where I&apos;m headed.
      </p>

      <p>
        I&apos;m pursuing my Associate of Science at Georgia State
        University, and most of my hands-on background is in mechanical
        engineering, robotics, and building systems from the ground up. A
        lot of what I know comes from learning by actually making things,
        breaking them, figuring out why they failed, and rebuilding them
        better — not from studying individual pieces of robotics in
        isolation.
      </p>

      <p>
        I graduated high school as valedictorian and was recognized as an
        SAT Star Student, and I&apos;ve kept building on that through
        college, independent projects, and leadership roles since.
      </p>

      <p>
        I started college at Gwinnett Technical College in fall 2025. During
        that year I founded the Engineering Club on campus and served as its
        president, helping organize students across mechanical, electrical,
        and programming work and helping members go from little or no
        robotics experience to designing and testing their own prototypes.
        I&apos;ve since handed that role off as I move on to the next stage
        of my degree at GSU.
      </p>

      <p>
        The biggest project I&apos;ve worked on is my independently designed
        humanoid robot, Spookey — mechanical structure, electronics, power
        distribution, custom PCBs, and the ROS 2 software behind it, all
        built myself. You can read the full story on the{" "}
        <Link className="link" href="/projects">
          Projects page
        </Link>
        .
      </p>

      <p>
        Alongside school, I founded SwayForm Robotics, focused on getting
        real, hands-on robotics into classrooms instead of leaving robotics
        as something students only read about. More on the reasoning behind
        it on the{" "}
        <Link className="link" href="/swayform">
          SwayForm page
        </Link>
        .
      </p>

      <p>
        I also run Craftora 3D Design Studio, a small business I started in
        May 2025 specializing in custom 3D-printed products and creative
        mechanical designs. I handle the modeling, printing, and client
        delivery myself — so far that&apos;s meant 20+ original designs and
        over 100 sales, run independently alongside a full course load.
      </p>

      <h2>Skills</h2>
      <div>
        {skills.map((skill) => (
          <span className="pill" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <h2>Timeline</h2>
      <ul className="timeline">
        <li>
          <div className="when">Expected Dec 2028</div>
          <div className="what">Associate of Science — GPA 3.62/4.0</div>
          <div className="where">Georgia State University</div>
        </li>
        <li>
          <div className="when">May 2025 – Present</div>
          <div className="what">Founder &amp; Product Designer, Craftora 3D Design Studio</div>
          <div className="where">Independent</div>
        </li>
        <li>
          <div className="when">Jan – May 2026</div>
          <div className="what">
            Founder &amp; President, Engineering Club
          </div>
          <div className="where">Gwinnett Technical College</div>
        </li>
        <li>
          <div className="when">2025 – 2026</div>
          <div className="what">Freshman year</div>
          <div className="where">Gwinnett Technical College</div>
        </li>
        <li>
          <div className="when">2025</div>
          <div className="what">
            Graduated Valedictorian — recognized as an SAT Star Student
          </div>
          <div className="where">High School</div>
        </li>
      </ul>
    </div>
  );
}
