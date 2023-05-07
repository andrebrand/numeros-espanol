interface Props{
    stats: {right: number, wrong: number};
}

function Stats({stats} : Props){
    return (
        <div className="card Stats">
              <div className="card-header">Stats</div>
              <div className="card-body">
                Richtig: { stats.right }
                <br />
                Falsch: { stats.wrong }
              </div>
        </div>
    );
}

export default Stats