import "./Button.css";

export default function Button({ href, children, download, badge, width }) {
  const hasBadge = Boolean(badge);

  return (
    <a
      className={`btn ${hasBadge ? "btn--badge" : ""}`}
      href={href}
      {...(download ? { download: true } : {})}
      style={width ? { minWidth: width } : {}}
    >
      {hasBadge && <span className="btn__left">{badge}</span>}
      <span className={hasBadge ? "btn__right" : ""}>{children}</span>
    </a>
  );
}