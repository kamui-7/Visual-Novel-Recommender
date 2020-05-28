import React from "react";

const Vns = ({ vns }) => {
  console.log(vns);

  if (vns) {
    return (
      <div className="row justify-content-center align-self-center">
        {vns.map(vn => (
          <div
            key={vn.id}
            className="card"
            style={{ width: "18rem", marginTop: "1em", marginLeft: "1em" }}
          >
            <img src={vn.img} class="card-img-top" />
            <div className="card-body">
              <a href={`https://www.vndb.org/v${vn.id}`}>
                <h5 className="card-title">{vn.title}</h5>
              </a>
              <p className="card-text">{vn.desc}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Vns;
