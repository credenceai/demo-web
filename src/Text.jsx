export function Title({ className, text }) {
  return <h1 className={className}>{text}</h1>;
}

export function SubTitle({ className, text }) {
  return <h2 className={className}>{text}</h2>;
}

export function History({ id, className, claim }) {
  return (
    <section id={id} className="history interactive">
      <div className="truncate">{claim}</div>
    </section>
  );
}

export function Button({class_name, btn_name}) {
    return (
        <button className={class_name}>{btn_name}</button>
    )
}





