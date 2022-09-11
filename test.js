<button onClick={props.buyproduct} disabled={props.cart&&props.cart.length > 0 ? false:true} className={props.cart&&props.cart.length > 0 ? "buybtn":"butbuttondivdisabled"}>buy {total}$ </button>
