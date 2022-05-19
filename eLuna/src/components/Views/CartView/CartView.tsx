import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { TIMES_ICON } from '../../../consts';
import { removeFromCart } from '../../../features/Product-Slice/product-slice';
import { useAppDispatch, useAppSelector } from '../../../rootHooks'
import Button from '../../Interactibles/Buttons/Button';
import IconButton from '../../Interactibles/Buttons/IconButton';
import ItemCard from '../../Modules/Cards/ProductCard';
import CartItem from '../../Modules/Cart/CartItem';
import { INF_Product } from '../ProductView/types';

const CartView = () => {
    const { items, total } = useAppSelector(state => state.product.cart);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    function removeItem(item: INF_Product) {
        dispatch(
            removeFromCart({
                id: item.id,
                price: item.price.actual_price
            })
        )
    }

    return (
        <section className='[ cart-view ] [ margin-block-1rem ]'>
            <div className="[ cart__view-items ] [ flex-col gap-05 ]">
                {
                    Object.values(items).map(item => (
                        <div className='[ flex-justify-between ] [ gap-05 ]'>
                                <ItemCard { ...item } />
                                <IconButton 
                                    onClick={() => removeItem(item)}
                                    scheme='danger'
                                    ariaLabel={`Remove ${item.name} from cart`} 
                                    variant='interactive'>
                                    { TIMES_ICON }
                                </IconButton>
                        </div>
                    ))
                }
            </div>

            {
                Object.values(items).length === 0 && (
                    <div className="[ flex-center gap-1 ]">
                        <p className='[ text-center ]'>You have no items in your cart!</p>
                        <Button variant='interactive' onClick={() => navigate(-1)}>Go back</Button>
                    </div>
                )
            }

            <div className="[ cart__view-checkout ] [ flex-justify-between gap-05 ] [ margin-block-1rem ]">
                <p><span className='[ text-muted ]'>Total:</span> { total }$</p>
                <Button variant='interactive'>Checkout</Button>
            </div>
        </section>
  )
}

export default CartView