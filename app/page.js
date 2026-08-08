import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Swayam Rathod",
};

export default function Home() {
  return (
    <div className="shell">
      <div className="hero-panel">
        <div className="hero-row">
          <Image
            src="/swayam.jpg"
            alt="Swayam Rathod"
            width={88}
            height={88}
            className="avatar"
            quality={95}
            priority
          />
          <div>
            <p className="eyebrow">Physics · Robotics · AI</p>
            <h1 className="name-big">Swayam Rathod</h1>
          </div>
        </div>

        <p className="lede">
          I go by Sway. I&apos;m pursuing my Associate of Science in Physics
          at Georgia State University with a strong background in
          mechanical engineering and robotics. I build humanoid robots, and
          I founded SwayForm Robotics to get hands-on robotics into
          classrooms.
        </p>

        <p>
          A lot of what I know comes from learning by actually making
          things, breaking them, figuring out why they failed, and
          rebuilding them better. My biggest project is Spookey, an
          independently designed humanoid robot. I spent my freshman year of
          college at Gwinnett Technical College (2025–2026), where I founded
          and led the Engineering Club, and I&apos;m continuing my degree at
          Georgia State University, expected to graduate December 2028.
        </p>
      </div>

      <div className="card-grid">
        <Link href="/about" className="card">
          <div className="card-title">About me</div>
          <div className="card-desc">
            My background, education, skills, and the Engineering Club at
            GTC.
          </div>
        </Link>
        <Link href="/projects" className="card">
          <div className="card-title">Spookey</div>
          <div className="card-desc">
            The humanoid robot I&apos;ve designed and built solo since April
            2025.
          </div>
        </Link>
        <Link href="/swayform" className="card">
          <div className="card-title">SwayForm Robotics</div>
          <div className="card-desc">
            Why I built it, what it does, and what it&apos;s for.
          </div>
        </Link>
        <Link href="/contact" className="card">
          <div className="card-title">Contact</div>
          <div className="card-desc">
            Email, LinkedIn, and GitHub — where to find me.
          </div>
        </Link>
      </div>
    </div>
  );
}
