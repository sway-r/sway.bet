import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Swayam Rathod",
};

export default function Home() {
  return (
    <div className="shell">
      <Image
        src="/swayam.jpg"
        alt="Swayam Rathod"
        width={84}
        height={84}
        className="avatar"
        priority
      />
      <p className="eyebrow">Physics · Robotics · AI</p>
      <h1>Hi, I&apos;m Sway.</h1>
      <p className="lede">
        I&apos;m a physics student at Georgia State University with a strong
        background in mechanical engineering and robotics — I build
        humanoid robots, and I founded SwayForm Robotics to get hands-on
        robotics into classrooms.
      </p>

      <p>
        A lot of what I know comes from learning by actually making things,
        breaking them, figuring out why they failed, and rebuilding them
        better. My biggest project is Spookey, an independently designed
        humanoid robot. I spent my freshman year of college at Gwinnett
        Technical College (2025–2026), where I founded and led the
        Engineering Club, and I&apos;m now continuing my degree at GSU
        (2026–2028).
      </p>

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
