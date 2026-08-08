export const metadata = {
  title: "About — Swayam Rathod",
};

export default function About() {
  return (
    <div className="shell">
      <p className="eyebrow">About</p>
      <h1>About me</h1>
      <p className="lede">
        A quick rundown of where I&apos;ve studied, what I&apos;ve worked on,
        and where I&apos;m headed.
      </p>

      <p>
        I started college at Gwinnett Technical College in fall 2025. During
        that year I founded the Engineering Club on campus and served as its
        president, building it from scratch into a space for students to work
        on projects together outside of class. I&apos;ve since handed that
        role off as I move on to the next stage of my degree.
      </p>

      <p>
        Alongside school, I founded SwayForm Robotics, a project focused on
        getting real, hands-on robotics into classrooms instead of leaving
        robotics as something students only read about. You can read more
        about the reasoning behind it on the{" "}
        <a className="link" href="/swayform">
          SwayForm page
        </a>
        .
      </p>

      <h2>Timeline</h2>
      <ul className="timeline">
        <li>
          <div className="when">2026 – 2028</div>
          <div className="what">B.S. in Physics</div>
          <div className="where">Georgia State University</div>
        </li>
        <li>
          <div className="when">2025 – 2026</div>
          <div className="what">
            Freshman year — Founder &amp; President, Engineering Club
          </div>
          <div className="where">Gwinnett Technical College</div>
        </li>
      </ul>
    </div>
  );
}
