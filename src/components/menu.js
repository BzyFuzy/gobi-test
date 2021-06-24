const Menu = ({ title, items, mobile }) => {
  if (mobile) {
    return (
      <div className="m-menu">
        <h1>{title}</h1>
        <div style={{display:"-webkit-inline-box", width: "100vw", overflow: "hidden"}}>
          {items.map((item, i) => (
            <MMenuItem
              key={title + "item" + i}
              img={item.image}
              param={item.path}
              stitle={item.title}
              title={i === 1 ? title : null}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="menu mo-hide">
        {items.map((item, i) => (
          <MenuItem
            key={title + "item" + i}
            img={item.image}
            param={item.path}
            stitle={item.title}
            title={i === 1 ? title : null}
          />
        ))}
      </div>
    );
  }
};

export default Menu;

const MenuItem = ({ img, param, title, stitle }) => {
  return (
    <div
      className="item menuimg"
      style={
        title
          ? { height: "auto" }
          : {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              background: `url(${img}) no-repeat`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }
      }
    >
      {title ? (
        <div>
          <p className="title">{title}</p>
          <div
            className="menuimg"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              background: `url(${img}) no-repeat`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "78vh",
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

const MMenuItem = ({ img, param, title, stitle }) => {
  return (
    <div
      className="menuimg"
      style={{
        display: "flex",
    	width: "calc(50vw - 3.2px)",
    	flexDirection: "column",
    	justifyContent: "flex-end",
    	background: `url(${img}) center center / cover no-repeat`,
    	marginRight: "6.4px"
      }}
    >
      <div className="link">
        <p>{stitle}</p>
        <i className="arrow" />
      </div>
    </div>
  );
};
