import Link from "next/link";

export const metadata = {
  title: "SwayForm Robotics — Swayam Rathod",
};

export default function SwayForm() {
  return (
    <div className="shell">
      <p className="eyebrow">SwayForm Robotics</p>
      <h1>Why I built SwayForm</h1>
      <p className="lede">
        Students hear about AI and robotics constantly, but most never get
        to build, program, troubleshoot, and understand a real robotic
        system before college. I started SwayForm to close that gap.
      </p>

      <p>
        Building{" "}
        <Link className="link" href="/projects">
          Spookey
        </Link>
        , my own humanoid robot, taught me firsthand how much is actually
        involved in getting a robot to move, sense, and respond, and how
        little of that most students ever get to touch. SwayForm grew out
        of wanting to hand that experience to more people, earlier.
      </p>

      <p>
        SwayForm Robotics is an educational humanoid robotics platform built
        for high schools and community colleges. Every unit is a 21-DOF
        humanoid robot running Linux and ROS 2 on an onboard Raspberry Pi,
        paired with a free curriculum and guided labs so students can go
        straight from unboxing to writing real code on real hardware.
      </p>

      <blockquote>
        &ldquo;What I cannot create, I do not understand.&rdquo; — Richard
        Feynman
      </blockquote>

      <p>
        That idea is the whole premise behind SwayForm. Reading about
        robotics and automation isn&apos;t the same as building and
        debugging it yourself, and I don&apos;t think students should be
        left behind by the tools that are going to shape the next decade of
        work. Kids who get hands-on with robotics early are in a much
        better position to end up guiding these systems later, instead of
        just reacting to them.
      </p>

      <h2>What it is</h2>
      <p>
        Every robot runs real ROS 2 and Python on physical hardware, not a
        simulator. The curriculum currently covers 10 guided labs and is
        expanding to 40 across four levels, plus five demo programs (Wave,
        Handshake, Pick and Place, Rock Paper Scissors, and Interactive
        Exchange) so students can see results early and keep building from
        there. Student code goes through automated checks and instructor
        review before it ever runs on the robot, and everything (control,
        perception, all of it) runs locally on the robot itself. No
        internet required, no cloud dependency, no invisible infrastructure
        standing between a student and their work.
      </p>

      <p>
        I also designed around affordability: replacement 3D-printed parts
        cost under $20, so a classroom robot doesn&apos;t become unusable
        after the first broken part.
      </p>

      <div>
        <span className="pill">ROS 2 + Python</span>
        <span className="pill">21-DOF humanoid</span>
        <span className="pill">Runs fully offline</span>
        <span className="pill">Built for classrooms</span>
      </div>

      <h2>What it&apos;s for</h2>
      <p>
        The goal is simple: bring real robotics into every classroom. Not a
        watered-down kit, and not a lecture about robots: an actual machine
        students can build, program, and understand. I want the people who
        grow up with this technology to be confident around it, not
        intimidated by it. The future gets built by people who understand
        the systems shaping it, and that understanding has to start
        somewhere hands-on.
      </p>

      <p>
        SwayForm Robotics is registered as an LLC in Georgia, and is
        currently open for pilot interest, with commercial availability
        targeted for Fall 2027.
      </p>

      <a
        className="btn"
        href="https://swayform.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit swayform.net
      </a>
    </div>
  );
}
