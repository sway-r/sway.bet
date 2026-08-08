import Link from "next/link";

export const metadata = {
  title: "Swayam Rathod",
};

export default function Home() {
  return (
    <div className="shell">
      <p className="eyebrow">Physics · Robotics</p>
      <h1>Hi, I&apos;m Sway.</h1>
      <p className="lede">
        I&apos;m a physics student at Georgia State University and the
        founder of SwayForm Robotics, where I build hands-on robotics tools
        for classrooms.
      </p>

      <p>
        I spent my freshman year of college at Gwinnett Technical College
        (2025–2026), where I founded and led the Engineering Club. I&apos;m
        now continuing my degree at GSU (2026–2028), studying physics.
        Alongside school, I run SwayForm Robotics, a project I started to get
        real robots into real classrooms.
      </p>

      <div className="card-grid">
        <Link href="/about" className="card">
          <div className="card-title">About me</div>
          <div className="card-desc">
            My background, education, and the Engineering Club at GTC.
          </div>
        </Link>
        <Link href="/swayform" className="card">
          <div className="card-title">SwayForm Robotics</div>
          <div className="card-desc">
            Why I built it, what it does, and what it&apos;s for.
          </div>
        </Link>
      </div>
    </div>
  );
}
