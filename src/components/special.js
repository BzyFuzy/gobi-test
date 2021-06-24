const Special = ({ className }) => (
  <div
    className="b1"
    style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
  >
    <div className={className}>
      <p className="summer">SUMMER </p>
      <p className="sale">Sale</p>
      <div className="off row center">
        <p className="upto">upto</p>
        <p className="stp">60</p>
		<p className="pe">%</p>
        <p className="ff">ff</p>
      </div>
      <div style={{
		  display: "flex",
		  justifyContent: "center"
	  }}>
        <button>shop now</button>
      </div>
    </div>
  </div>
);

export default Special;
