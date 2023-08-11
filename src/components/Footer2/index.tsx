import "./style.css"

function Footer2() {
    return(
        <footer>
        <div class="container rodape">
            <div class="rodape_conteudo">
                <div class="rodape_conteudo_paginas">
                    <h2>Páginas</h2>
                    <ul>
                        <li>Login</li>
                        <li>Home</li>
                        <li>Listar Serviços</li>
                        <li>Cadastrar Cliente</li>
                        <li>Cadastrar Desenvolvedor</li>
                    </ul>
                </div>
                <img src="../img/logo.svg" alt="">
                <div class="rodape_conteudo_contatos">
                    <h2>Contatos</h2>
                    <div>
                        <a href="#"><img src="../img/facebook.svg" alt=""></a>
                        <a href="#"><img src="../img/instagram.svg" alt=""></a>
                        <a href="#"><img src="../img/linkedin.svg" alt=""></a>
                    </div>
                    <a href="mailto:">contato@vsconnect.com</a>
                </div>
            </div>
            <p>todos os direitos reservados ©.</p>
        </div>
    </footer>
    )
}
export default Footer2