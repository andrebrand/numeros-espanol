interface Props{
    stats: {right: number, wrong: number};
}

function Stats({stats} : Props){
    return (
        <div className="card Stats">
              <div className="card-header">Estadísticas</div>
              <div className="card-body">
                Correcto: { stats.right }
                <br />
                Incorrecto: { stats.wrong }
              </div>
        </div>
    );
}

export default Stats