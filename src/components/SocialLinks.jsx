function SocialLinks({ links }) {
  return (
    <div className="redes">
      {links.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="icono"
          style={{ "--hover-color": social.color }}
          aria-label="Red social"
        >
          {social.Icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
