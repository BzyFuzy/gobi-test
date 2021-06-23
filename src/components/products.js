import { useState } from 'react';

export const Products = ({ products }) => (
	<>
		<div>
			<p className="toget">TO GET and TO GIFT</p>
		</div>
		<div style={{ width: '894px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto' }}>
			{products.map((product, index) => <ProductItem key={'product' + index} data={product} />)}
		</div>
	</>
);

const ProductItem = ({ data }) => {
	const [ selectedColor, setSelectedColor ] = useState('');
	return (
		<div className="product">
			<img src={`/img/${data.image}`} alt="img" />
			<p className="name">{data.name}</p>
			{data.colors.length > 0 ? (
				<div className="row center" style={{ marginTop: 10 }}>
					{data.colors.map((color, i) => {
						if (i < 7) {
							return (
								<ColorBut
									key={data.name + 'color' + i}
									color={color.color}
									selected={selectedColor === color.color}
									onSelect={() => setSelectedColor(color.color)}
								/>
							);
						} else {
							return null;
						}
					})}
					{data.colors.length > 7 && <p className="pcolors">+{data.colors.length - 7}</p>}
				</div>
			) : (
				<div>
					<p className="colors">+6 colors</p>
					<div className="prices">
						<p className="oprice">$ 299.00</p>
						<p className="cprice">$ 79.00</p>
					</div>
				</div>
			)}
		</div>
	);
};

const ColorBut = ({ color, selected, onSelect }) => {
	return (
		<div
			onClick={() => onSelect()}
			className="colorcont"
			style={selected ? { border: '1px solid rgba(0, 0, 0, 0.87)' } : { border: '1px solid #FFFFFF' }}
		>
			<div style={{ backgroundColor: color }} />
		</div>
	);
};
