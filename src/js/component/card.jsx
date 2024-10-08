import React from "react";

function Card(propiedades) {
	return (
                <div class="card text-center w-100">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">{propiedades.description || 'Description'}</p>
                  </div>
                  <div class="card-footer">
                    <button type="button" class="btn btn-primary">Find Out More!</button>
                  </div>
                </div>
	);
};

export default Card;