import React from 'react';

const NavBar = ({totalCartQuantity}) => {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                
                <div className="container px-4 px-lg-5">
               
                
                    <a className="navbar-brand text-white fw-bolder" href="#!" id="nav-title">Mobile Store</a>
                    <button className="btn btn-outline-white d-block d-lg-none" type="submit">
                                <span><i className="fa-solid fa-cart-shopping text-white"></i></span>
                                <span className='text-white'>Cart</span>
                                <span className="badge bg-dark text-white ms-1 rounded-pill" id="count">{totalCartQuantity}</span>
                            </button>
                
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="navbar-collapse collapse show" id="navbarSupportedContent">
                
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" id="ul-texts">
                            <li className="nav-item"><a className="nav-link active text-white" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link  text-white" href="#!">About</a></li>
                
                           
                        </ul>
                
                        <form className="d-flex">
                            <button className="btn btn-outline-white" type="submit">
                                <span><i className="fa-solid fa-cart-shopping text-white"></i></span>
                                <span className='text-white'>Cart</span>
                                <span className="badge bg-dark text-white ms-1 rounded-pill" id="count">{totalCartQuantity}</span>
                            </button>
                        </form>
                    </div>
                </div>
              
            </nav>
        
        </div>
    );
};

export default NavBar;