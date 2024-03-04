import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductContext } from '../Utils/DataComponent'; 
import { decrease_cart, increase_cart, remove_cart, saveAllBlogs } from '../Redux/BlogSlice';
import NavBar from './NavBar'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';



const CardComp = () => {
    // const navigator = useNavigate();
    // const handelProcess = (() => {
    //     navigator("/process")
    // })
    const { User } = useContext(ProductContext);
    
    const dispatch = useDispatch();


    const blogs = useSelector((state) => state.blogs);


    const [quantities, setQuantities] = useState({});


    useEffect(() => {
        dispatch(saveAllBlogs(User.products));
        
    }, [dispatch, User.products]);

    
    useEffect(() => {
        const initialQuantities = {};
        blogs.forEach(item => {
            initialQuantities[item.id] = item.quantity || 1;
        });
        setQuantities(initialQuantities);
    }, [blogs]);

    
    const handleDecrease = (id, quantity) => {
        if (quantity > 1) {
            dispatch(decrease_cart({ id }));
        }
    };

    
    const handleIncrease = (id, quantity) => {
        if (quantity < 10) {
            dispatch(increase_cart({ id }));
        }
    };

    
    const handleDelete = (id) => {
        dispatch(remove_cart({ id }));
        toast.success('Item removed from cart');
    };

    
    const totalCartQuantity = useSelector((state) =>
        state.blogs.reduce((total, item) => total + (item.quantity || 1), 0)
    );

    
    const totalPrice = useSelector((state) =>
        state.blogs.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
    );

    
    return (
        <div>
    
            <NavBar totalCartQuantity={totalCartQuantity} />
    
            <div className='container-fluid text-white bg-dark h-10 sticky-top d-flex justify-content-evenly align-items-center p-3 bg-success'>
    
                <h3>Total Price: ${totalPrice}</h3>
    
                <h3>Total Quantity: {totalCartQuantity}</h3>
    
                <button className="btn btn-danger" >proceed to pay</button>
            </div>
    
            {blogs.map((item, index) => {
                return (
                    <div className='container' key={index}>
    
                        <div style={{ margin: "2em 0em" }}>
                            <div className="card p-5 mb-5 " id='card-w'>
                                <div className="row g-0">
    
                                    <div className="col-md-4">
                                        <div>
    
                                            <div id={`carouselExample${index}`} className="carousel slide">
                                                <div className="carousel-inner">
    
                                                    {item.images.map((image, i) => (
                                                        <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                                            <img src={image} className="d-block w-100" alt={`Slide ${i}`} />
                                                        </div>
                                                    ))}
                                                </div>
    
                                                <div className='d-flex '>
                                                    <button className="carousel-control-prev my-auto" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="prev" style={{ backgroundColor: "black", height: "2.5em", width: "2em" }}>
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                </div>
                                                <button className="carousel-control-next  my-auto" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="next" style={{ backgroundColor: "black", height: "2.5em", width: "2em" }}>
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-md-8">
                                        <div className="card-body">
    
                                            <div className="d-flex justify-content-between">
                                                <h4 className="card-title w-50">{item.title}</h4>
                                                <h4 className="card-title">${item.price}</h4>
                                            </div>
    
                                            <div className="w-50">
                                                <p className="card-text">{item.description}</p>
                                                <p className="card-text"><b>Brand:</b> {item.brand}</p>
                                                <p className="card-text" style={{ color: "red" }}><span className='stock'> In Stock: {item.stock}</span></p>
                                            </div>
    
                                            <div className="d-flex justify-content-between ">
                                                <p className="card-text"> <b>Rating: {item.rating}</b></p>
                                                <div className="d-flex align-items-center">
                                                    <button className="mx-2 quantity-btn p-2"><i className="fa-solid fa-plus" onClick={() => handleIncrease(item.id, item.quantity || 1)}></i></button>
                                                    <h6 className="mx-2"> {quantities[item.id]}</h6>
                                                    <button className="mx-2 quantity-btn p-2"><i className="fa-solid fa-minus" onClick={() => handleDecrease(item.id, item.quantity || 1)}></i></button>
                                                </div>
                                            </div>
    
                                            <div className="text-warning mb-2 small">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
    
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    
                                            <div className="d-flex justify-content-end" id="btn-div">
                                                <button className="btn btn-danger" id="btn" onClick={() => handleDelete(item.id)} >Remove from Cart</button>
                                            </div>
                                            <hr></hr>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardComp;
