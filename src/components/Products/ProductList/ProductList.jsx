import React from "react";
import Product from "./Product/Product";
import { Products, Headline, HeadlineTitle } from "./ProductList.elements";
const ProductList = ({
	id,
	lightText,
	lightTextCard,
	headlineName,
	products,
}) => {
	console.log("products", products);
	return (
		<div id={id}>
			<Headline>
				<HeadlineTitle lightText={lightText}>{headlineName}</HeadlineTitle>
			</Headline>
			<Products>
				{products.map((product, index) => {
					return (
						<Product
							key={index}
							lightTextCard={lightTextCard}
							cardTitle={product.cardTitle}
							img={product.img}
							description={product.description}
							urlLinkBtn={product.urlLinkBtn}
							buttonLabel={product.buttonLabel}
							trend={product.trend}
							newProduct={product.newProduct}
						/>
					);
				})}
			</Products>
		</div>
	);
};

export default ProductList;
