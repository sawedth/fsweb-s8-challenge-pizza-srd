import './OrderConf.css';
import logo from '../assets/logo.svg'
import { useState } from 'react';
export default function OrderConf(prop) {
    const { user, toppings, value } = prop;

    return (
        <>
            <div className='main'>
                <div>
                    <div className='text'>
                        <h2 className='header-text-yellow'>lezzetin yolda</h2>
                        <h1 className='header-text'>SİPARİŞ ALINDI!</h1>
                    </div>
                    <h4 className='pizza-name'>Position Absolute Acı Pizza</h4>
                </div>
                <div className='pizza-card'>
                    <p>Boyut: <b>{user[0]}</b></p>
                    <p>Hamur: <b>{user[1]}</b></p>
                    <p>Ek Malzemeler: <b>{toppings.join(", ")}</b></p>
                </div>
                <div className='order-card'>
                    <h6>Sipariş Toplamı</h6>
                    <div className='line-value'>
                        <p>Seçimler </p>
                        <div>{user[2] * toppings.length * 5}₺</div>
                    </div>
                    <div className='line-value'>
                        <p>Toplam </p>
                        <p>{value.toFixed(2)}₺</p>
                    </div>


                </div>
            </div>
        </>
    );
};