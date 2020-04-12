import React from 'react';
import "./Product.css";
import ProductCard from "../../components/ProductCard/ProductCard";

import ShirohumiImg from "../../images/shiro.png";
import PortfolioImg from "../../images/Portfolio.png";

const Product = () => {
    return (
        <div className="product">
            <ProductCard
                topImage={ShirohumiImg}
                title="シロフミ"
                description="Unityを用いて作ったios向けのカジュアルゲームです。スワイプのみの簡単操作で遊べます！"
                platformIconIonfo={
                    {
                        info: "fab",
                        fontName: "app-store-ios"
                    }
                }
            />

            <ProductCard
                topImage={PortfolioImg}
                title="ポートフォリオ"
                description="Reactを使用して作成しました。自分の活動をここに残していきたいと思っています！"
                platformIconIonfo={
                    {
                        info: "fas",
                        fontName: "laptop"
                    }
                }
            />
        </div>
    );
};

export default Product;
