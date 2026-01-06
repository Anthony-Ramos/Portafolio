function Technologies({ techs }) {
  return (
    <div className="tecnologias">
      {techs.map((tech, index) => (
        <div key={index} className="tecnologia">
          <span className="tech-icon">{tech.icon}</span>
          <span className="tech-name">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Technologies;
