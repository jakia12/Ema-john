import React, { useEffect, useState } from 'react';
import SearchForm from './Form';
import SingleProduct from './SingleProduct';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState('');

    //store the cart for add a new product
    const [cart, setCart] = useState([]);

    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [tax, setTax] = useState(0);

    useEffect(() => {
        const priceTotal = cart.reduce((acc, curr) => acc + parseInt(curr.price), 0)
        setTotal(priceTotal);
        const totalQty = cart.reduce((acc, curr) => acc + parseInt(curr.qty), 0);
        setQuantity(totalQty);
        const getTotal = total * quantity;
        setTax(getTotal * 0.1);

    }, [cart]);

    const getTotal = total * quantity;


    const grandTotal = getTotal + tax;

    //set increment and decrement feaute
    const [count, setCount] = useState({
        qty: 1
    });

    console.log(cart);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleClick = (e) => {
        console.log(e.target.innerText);
    }

    //for qty increment
    const handleIncrement = () => {

        setCount({ qty: count.qty + 1 });


    }


    //for qty decrement
    const handleDecrement = () => {
        setCount({ qty: count.qty - 1 });
    }

    const filteredProd = products?.filter((product) => {
        return product.title.toLowerCase().includes(value?.toLowerCase());
    });



    //get local storage 



    //add product to the cart
    const addToCart = (productItem) => {


        const cartCopy = [...cart];

        const { id, strThumbnail, } = productItem;
        let existingItem = cartCopy.find((cartItem) => cartItem.id === id);


        productItem['qty'] = 1;
        // console.log(newCart);

        if (existingItem) {

            productItem.qty = productItem.qty + 1;

        } else {
            cartCopy.push(productItem);
        }

        //update cart state 
        setCart(cartCopy);

        //convert the cart into string
        const stringifiedCart = JSON.stringify(cartCopy);
        localStorage.setItem('cart', stringifiedCart);

    }


    //fetch loca storage 
    useEffect(() => {
        const localCart = localStorage.getItem('cart');
        const savedCart = JSON.parse(localCart);
        if (savedCart) {
            setCart(savedCart);
        }

    }, []);

    const removeCart = (c) => {
        //const cart = [...cart];
        const removedCart = cart.filter((prod) => prod.id !== c.id);
        console.log(c);
        setCart(removedCart);
        localStorage.setItem('cart', JSON.stringify(removedCart));
    }

    const handleClear = () => {
        setCart(cart.length == 0)
        localStorage.removeItem('cart');
    }
    return (
        <div className='home_page'>
            <div className="container-fluid">
                <SearchForm
                    value={value}
                    setValue={setValue}
                />
                <div className="whole_cart_wrapper">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                {filteredProd.map((product) => (
                                    <SingleProduct
                                        product={product}
                                        key={product.id}
                                        addToCart={addToCart}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cart_Product border rounded">
                                {
                                    cart.map((c) => (

                                        <div className="d-flex justify-content-around align-items-center">
                                            <img src={c.image} alt="" width="65px" className="img-fluid rounded-pill" />
                                            <h3 class="fw-semibold fs-6 lh-base text-dark text-capitalize product_name"> {c.title}</h3>
                                            <h4 class="fw-semibold fs-6 lh-base text-dark text-capitalize product_price">${c.price}</h4>
                                            <div className="inc_dec_btn d-flex align-items-center">
                                                <button className="rounded py-2 px-3" onClick={handleIncrement}>+</button>
                                                <input type="number" name="" id="" className='py-2 px-3 w-50 qty_field' value={count.qty} />
                                                <button className="rounded py-2 px-3" onClick={handleDecrement}>-</button>
                                            </div>
                                            <button class="fs-5 text-light" onClick={() => removeCart(c)}>Del</button>
                                        </div>

                                    ))
                                }



                            </div>
                            {/* cart footer */}
                            <div className="cart_footer">
                                <h4 className='fw-normal fs-5 lh-base text-dark'>Total :${getTotal} </h4>
                                <h4 className='fw-normal fs-5 lh-base text-dark'>Tax : {tax}</h4>
                                <h4 className='fw-normal fs-5 lh-base text-dark'>Shiping : </h4>
                                <div className="calculation_divider"></div>
                                <h3 className='fw-semibold fs-4 lh-base text-dark'> Grand total:{grandTotal}</h3>

                                <div className="footer_button">
                                    <button className="rounded my-3 " onClick={handleClear} >Clear cart</button>
                                    <button className="rounded my-3">Proceed to checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <button
                    onClick={handleClick}
                >Jewellery</button>
            </div>
        </div>
    )
}

export default Home

