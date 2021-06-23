export const Menu = ({ title, items }) => {
	return (
		<div className="menu">
			{items.map((item, i) => (
				<MenuItem key={title + 'item' + i} img={item.image} param={item.path} stitle={item.title} title={i === 1 ? title : null} />
			))}
		</div>
	);
};

const MenuItem = ({ img, param, title, stitle }) => {
	return (
		<div
			className="item"
			style={
				title ? (
					{ height: 'auto' }
				) : (
					{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-end',
						background: `url(${img}) no-repeat`,
						backgroundPosition: 'center center',
						backgroundSize: 'cover'
					}
				)
			}
		>
			{title ? (
				<div>
					<p className="title">{title}</p>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							background: `url(${img}) no-repeat`,
							backgroundPosition: 'center center',
							backgroundSize: 'cover',
							height: '78vh'
						}}
					>
						<div className="link">
							<p>{stitle}</p>
							<i className="arrow" />
						</div>
					</div>
				</div>
			) : (
				<div className="link">
					<p>{stitle}</p>
					<i className="arrow" />
				</div>
			)}
		</div>
	);
};
