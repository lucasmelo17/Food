import { useEffect, useState, useContext} from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart.jsx";
import "./cart.css"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context.jsx";
import back from "../../assets/back.png"

function Cart(){

    const [show, setshow] = useState(false);
    const navigate = useNavigate();
    const {cartItems, totalCart} = useContext(CartContext);
    

    useEffect(() => {
        window.addEventListener('openSidebar', () => {
            setshow(true)
        })
        //setCartItems(carrinho);
    }, []);

    function checkout(){
        navigate('./checkout')
    }

    return <Dock position="right"
                 isVisible={show}
                 fluid={false}
                 size={360}
                 onVisibleChange={(visible) => setshow(visible)}
                 
                >
        <div className="text-center">
            <img onClick={() => setshow(false)} src={back} className="cart-btn-close"/>
            <h1>Meu pedido</h1>
        </div>

        <div className="lista-produtos">

            {
                cartItems.map(function(item){
                    return <ProdutoCart key={item.id}
                                        id = {item.id}
                                        foto = {item.foto}
                                        nome = {item.nome}
                                        qtd = {item.qtd}
                                        preco = {item.preco}/>
                })
            }
            
        </div>

        <div className="footer-cart">
            <div className="footer-cart-valor">
                <span>Total</span>
                <span> <strong>{new Intl.NumberFormat ('PT-BR',
                                {style: 'currency', currency: "BRL"}).format(totalCart)}</strong></span>
            </div>
            <div>
                <button onClick={checkout} className="btn-checkout">Finalizar Pedido</button>
            </div>
        </div>
      </Dock>
}

export default Cart;