import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";
import api from "../../services/api.js"

function Home(){

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        api.get("/produtos")
        .then((resp) => {
            setProdutos(resp.data);
        })
        .catch((err) => alert('Erro ao carregar produtos'))
    }, []);
    return <>
        <Navbar showMenu = {true}/>
        <div className="container">

            <div className="titulo text-center">
                <h1>Nosso cardápio</h1>
                <p className="subtitulo"> Clique em adicionar para colocar os produtos na sacola de compras.
                    Se preferir, você pode pedir pelo Whatsapp: (18)99888-8888</p>
            </div>
        </div>
        <div className="text-center">

            {
                produtos.map(function(prods){
                    return <ProdutoVitrine  key = {prods.id_produto}
                                            id={prods.id_produto}
                                           nome = {prods.nome}
                                           descricao = {prods.descricao}
                                           preco = {prods.preco}
                                           foto = {prods.foto} />
                })
            }
            
        </div>
        
        
       
    </>
}

export default Home;