import React from 'react';
import { Link } from 'react-router-dom';

import { useStore } from '../../stores/Store';



function ProductRow() {

   const {productStore} = useStore();

   const {products , deleteProduct , selectProduct} = productStore;

    return ( 
        <>
            {products.map((product)=> {
                return ( 
                    <div key={product.id} className="col-12 col-md-4 col-lg-4">
                        <article className="article article-style-c">
                            <div className="article-header">
                                <div className="article-image" data-background={product.photos![0].url} style={{ backgroundImage: `url(${product.photos![0].url})`}}>
                                </div>
                            </div>
                            <div className="article-details">
                                <div className="article-category"><a href="#">Quantity</a> <div className="bullet"></div> <a href="#">{product.quantity}</a></div>
                                <div className="article-title">
                                    <h2><a href="#">{product.name}</a></h2>
                                </div>
                                <p>{product.description}. </p>
                            </div>
                            <div className="article-user">
                                <img alt="image" src="../assets/img/avatar/avatar-1.png"/>
                                <div className="article-user-details">
                                    <div className="user-detail-name">
                                    <a href="#">Hasan Basri</a>
                                    </div>
                                    <div className="text-job">Web Developer</div>
                                </div>
                            </div>
                        </article>
                  </div>)}
                )}
        </>
    );
}

export default ProductRow;