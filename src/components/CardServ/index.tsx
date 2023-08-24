
import { Link } from "react-router-dom"
import "./style.css"

export default function CardServ(props: any) {

    function parseListaServicos() {
        if(typeof props.techs === "string") {
            return JSON.parse(props.techs)
        } else {
            return props.techs
        }
    }

    return (
        <div className="servico">
            <div className="topo_servico">
                <Link to={"/visualizarservico/" + props.id}>{props.nome}</Link>
                {/* <h3>{props.nome}</h3> */}
                <span>{props.valor}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">
                {
                    parseListaServicos().map((tech: string, index: number) => {
                        return <span key={index}>{tech}</span>
                    })
                }
            </div>
        </div>
    )
}