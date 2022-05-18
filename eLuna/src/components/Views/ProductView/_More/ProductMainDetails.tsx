import React from 'react'
import { addToCart, removeFromCart } from '../../../../features/Product-Slice/product-slice';
import { useAppDispatch, useAppSelector } from '../../../../rootHooks';
import Button from '../../../Interactibles/Buttons/Button';
import Price from '../../../Modules/Price/Price'
import { INF_Product } from '../types'

const ProductMainDetails = (props: INF_Product) => {
    const { items } = useAppSelector(state => state.product.cart);
    const dispatch = useAppDispatch();

    return (
    <div className='[ product__main-details ] [ flex-col flex-justify-between width-100pct ]'>
        <article className='[ product__info ] [ fs-200 margin-block-025rem height-100pct ]'>
            <p>
                { props.description.length > 0 ? props.description : 'This product has no description!' }
            </p>
        </article>
        <div className='[ flex-justify-between gap-05 margin-top-1-5rem ]'>
            <Price { ...props.price } />
            {
                !items[props.id] 
                ?
                    <Button
                    onClick={() => 
                        dispatch(
                            addToCart({ product: props })
                        )} 
                    variant='interactive'>Add to cart</Button>
                :
                <Button
                onClick={() => 
                    dispatch(
                        removeFromCart({ id: props.id, price: props.price.actual_price })
                    )} 
                variant='interactive'>Remove from cart</Button>
            }
        </div>
    </div>
    )
}

export default ProductMainDetails