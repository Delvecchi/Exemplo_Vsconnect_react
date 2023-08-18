import { useEffect, useState } from "react"
import CardServ from "../../components/CardServ"
import "./style.css"

import api from "../../utils/api";

function ListaServicos() {

    const [servs, setServs] = useState<any[]>([]);
    
    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [servicos, setServicos] = useState<any[]>(servs);

    useEffect(() => {
        document.title = "Lista de Serviços - VSConnect"

        listarServicos()
    }, [])

    function buscarPorSkill(event: any) {
        event.preventDefault();

        const servicosFiltrados = servicos.filter((servico: any) => servico.techs.includes(skillDigitada.toLocaleUpperCase()))

        if (servicosFiltrados.length === 0) {
            alert("Nenhum serviço foi encontrado com essa skill")
        } else {
            setServicos(servicosFiltrados)
        }

    }

    function retornoServicosGeral(event: any) {
        if (event.target.value === "") {
            listarServicos()
        }
        setSkillDigitada(event.target.value)
    }

    function listarServicos() {
        api.get("servicos")
        .then((response: any) => {
        //   console.log(response.data)
          setServicos(response.data)
        })
        // .catch(error => console.log("Erro", error));
      }


    return (

        <main id="lista-servicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr />
                    <form method="post" onSubmit={buscarPorSkill}>
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar serviços</label>
                            <div className="campo-label">
                                <input
                                    type="search"
                                    name="campo-busca"
                                    id="busca"
                                    placeholder="Buscar serviços por tecnologias..." onChange={retornoServicosGeral}
                                />
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        <ul>
                            {servicos.map((servico: any, index: number) => {
                                return <li>
                                    <CardServ
                                        titulo={servico.nome}
                                        salario={servico.valor}
                                        descricao={servico.descricao}
                                        techs={servico.techs}
                                    />
                                </li>
                            }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        
    )
}
export default ListaServicos