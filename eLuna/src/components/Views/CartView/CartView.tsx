import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../../features/Product-Slice/product-slice';
import { useAppDispatch, useAppSelector } from '../../../rootHooks'
import Button from '../../Interactibles/Buttons/Button';
import CartViewItem from '../../Modules/Cart/CartViewItem';
import FlexItems from '../../Modules/Flex/FlexItems';
import { INF_Product } from '../ProductView/types';

const CartView = () => {
    const { items, total } = useAppSelector(state => state.product.cart);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    function removeItem(item: INF_Product) {
        dispatch(
            removeFromCart({
                id: item.id,
                price: item.actual_price
            })
        )
    }

    return (
        <section className='[ cart-view ] [ margin-block-1rem ]'>
            <FlexItems direction='y' blockCls='cart__items'>
                {
                    Object.values(items).map(item => (
                        <CartViewItem item={item} removeItem={removeItem} />
                    ))
                }
            </FlexItems>

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