function Statistics ({title, stats = []}) {
    return (
        <section class="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">: {percentage}%</span>
          </li>
        ))}
      </ul>
</section>
    )
}


export default Statistics;