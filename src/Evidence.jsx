import './Evidence.css';


function Evidence({ response }) {
  const id = response.claim_id;
  const verdict = response.verdict;
  const evidences = response.evidence;

  const published_date = response.published_at;
  const url = response.url;
  const snippet = response.snippet;

  return (
    <section id={id} className=" evidence col-flex-box ">
      <h2>{verdict.label}</h2>
      <Distribution verdict={verdict} />
      <h3 className="score">Score {verdict.score}</h3>
      <div>{published_date}</div>
      <a href={url} className="truncate">
        {snippet}
      </a>
      {evidences.map(e => (
        <Evidence_Item key={e.evidence_id} evidence={e} />
      ))}
    </section>
  );
}

function Distribution({ verdict }) {
  const support = verdict.stance_distribution.support * 100;
  const refute = verdict.stance_distribution.refute * 100;
  const neutral = verdict.stance_distribution.neutral * 100;

  return (
    <div className='row-flex-box distribution'>
      <span
        className="support-distribution center-text truncate"
        style={{ width: `${support}%`}}
      >
        {`Support ${support.toFixed(1)}%`}
      </span>

      <span
        className="refute-distribution center-text"
        style={{ width: `${refute}%`}}
      >
        {`Refute ${refute.toFixed(1)}%`}
      </span>

      <span
        className="neutral-distribution center-text"
        style={{ width: `${neutral}%`}}
      >
        {`Neutral ${neutral.toFixed(1)}%`}
      </span>
    </div>
  );
}

function Evidence_Item({ evidence }) {
  const id = evidence.evidence_id;
  const url = evidence.url;
  const date = evidence.published_at;
  const snippet = evidence.snippet;
  const label = evidence.stance.label;
  const confidence = evidence.stance.confidence;

  return (
    <div id={id} className="evidence-item rol-flex-box understrike-box">
      <a className='truncate snippet' href={url}>{snippet}</a>
      <div className='row-flex-box '>
        <span className='italic'>{date}</span>
        <span className='italic'>{label}</span>
        <span className='italic'>{confidence}</span>
      </div>
    </div>
  );
}

export default Evidence;