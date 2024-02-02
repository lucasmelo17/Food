import "./produto-cart.css";
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";


function ProdutoCart(props){

    const {AddItemCart, RemoveItemCart} = useContext(CartContext);

    function AddItem(){

        const item = {
            id: props.id,
            nome: props.nome,
            preco: props.preco,
            foto: props.foto,
            qtd: 1
        }
        
        AddItemCart(item);
    }

    function RemoveItem() {
        RemoveItemCart(props.id);
    }

    return <div className="produto-cart-box">
        <img src={props.foto} alt="Foto"></img>

        <div>
            <p className="produto-cart-nome">{props.nome}</p>
            <p className="produto-cart-valor">{new Intl.NumberFormat ('PT-BR',
                                {style: 'currency', currency: "BRL"}).format(props.preco)}</p>

            <div className="footer-product-card">
                <div>
                    <button onClick={RemoveItem} className="footer-product-btn">-</button>
                    <span className="footer-product-qtd">{props.qtd}</span>
                    <button onClick={AddItem} className="footer-product-btn">+</button>
                </div>

                <p className="footer-product-preco text-right">{new Intl.NumberFormat ('PT-BR',
                                {style: 'currency', currency: "BRL"}).format(props.preco * props.qtd)}</p>
            </div>
        </div>
    </div>
}

export default ProdutoCart;