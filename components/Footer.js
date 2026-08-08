export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell">
        <span>© {year} Swayam Rathod</span>
        <a href="mailto:swayamrathod2006@gmail.com">
          swayamrathod2006@gmail.com
        </a>
      </div>
    </footer>
  );
}
