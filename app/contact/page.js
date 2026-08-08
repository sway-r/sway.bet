export const metadata = {
  title: "Contact — Swayam Rathod",
};

const contacts = [
  {
    label: "Email",
    value: "swayamrathod2006@gmail.com",
    href: "mailto:swayamrathod2006@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/swayam-rathod",
    href: "https://linkedin.com/in/swayam-rathod",
  },
  {
    label: "GitHub",
    value: "github.com/sway-r",
    href: "https://github.com/sway-r",
  },
];

export default function Contact() {
  return (
    <div className="shell">
      <p className="eyebrow">Contact</p>
      <h1>Get in touch</h1>
      <p className="lede">
        Happy to talk physics, robotics, or the Engineering Club at GTC —
        reach me through whichever of these works best.
      </p>

      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <div className="label">{contact.label}</div>
            <a
              className="value"
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {contact.value}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 32 }}>
        <a
          className="btn"
          href="/Swayam_Rathod_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View resume
        </a>{" "}
        <a
          className="link"
          href="/Swayam_Rathod_Resume.pdf"
          download
          style={{ marginLeft: 12 }}
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
