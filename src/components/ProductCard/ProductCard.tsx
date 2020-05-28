import React from 'react';
import "./ProductCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProductCardProps {
    topImage: string,
    title: string,
    description: string,
    url: string,
    platformIconIonfo: {
        info: string,
        fontName: string,
    },
};

const ProductCard = (props: ProductCardProps) => {

    const info: any = props.platformIconIonfo.info;
    const fontName: any = props.platformIconIonfo.fontName;

    return (
        <a href={props.url} className="product-card-a">
            <div className="product-card"
            >
                <div className="top-img" style={{ backgroundImage: `url(${props.topImage})` }}>
                </div>
                <div className="title-line">
                    <h2>{props.title}</h2>
                    <div className="platform-icon">
                        <FontAwesomeIcon icon={[info, fontName]} size={"2x"} />
                    </div>
                </div>
                <p>{props.description}</p>
            </div>
        </a>
    );
};

export default ProductCard;