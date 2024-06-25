import React from "react";
import { useNavigate } from "react-router";

const Home = (props) => {

    const navigate = useNavigate();

    const login = () => {
        navigate("/login")
    }

    const signup = () => {
        navigate("/signup")
    }
    const logout = () => {
        navigate("/logut")
    }
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pic" width={100 + "%"} height={94 + "%"} />
                    </div>
                    <div className="col">
                        <div className="card pt-5">
                            <div className="card-body text-center">
                                <img src="https://st4.depositphotos.com/11956860/22517/v/450/depositphotos_225173796-stock-illustration-icon-logo-construction-business-combination.jpg" alt="login" width={35 + "%"} />
                                <p>For more employee details just login to the website.
                                    If your are not a existing customer then create or signup to website to login
                                </p>
                                <div>
                                    {props.isLoggedIn ?
                                        <button className="btn btn-success" onClick={logout}>Logout</button>
                                        :
                                        <>
                                            <button className="btn btn-primary btn-lg" type="button" onClick={login}>Login</button>&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-primary btn-lg" type="button" onClick={signup}>Signup</button>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">

                    <div className="card mt-2" style={{ "width": 100 + "%" }}>
                        <div className="card-body">
                            <h5 className="card-title">RC Constructions</h5>
                            <h5 className="card-subtitle mb-2 text-muted">RC Construction: Building Dreams, Crafting Realities</h5>
                            <p className="card-text">
                                At RC Constructions, we specialize in transforming visions into tangible realities. With a commitment to excellence and a passion for innovation, we have established ourselves as a leading force in the construction industry.

                            </p><br></br>
                            <h5 className="card-subtitle mb-2 text-muted">Quality:</h5>
                            <p className="card-text">Our company ethos revolves around the core values of integrity, quality, and customer satisfaction. We understand that every project is unique, and we approach each endeavor with meticulous attention to detail and a dedication to delivering superior results.
                            </p><br></br>
                            <h5 className="card-subtitle mb-2 text-muted">Motive</h5>
                            <p className="card-text">At RC Constructions, we don't just build structures; we build communities, forge connections, and create lasting legacies. With a blend of expertise, innovation, and unwavering dedication, we continue to shape the landscape of construction, one project at a time.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Home