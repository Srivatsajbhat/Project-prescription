import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

const Header = () => {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem("auth");
        alert("Logout Successfully");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand " >Prescription</Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            {
                                !auth.user ? (<>
                                    <li className="nav-item">
                                        <NavLink to="/dashbord/user/home" className="nav-link" >Home</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/dashbord/user/prescription" className="nav-link" >Your Prescription</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth?.user.name}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink className="dropdown-item" to={"/dashbord/user/account"} >Account</NavLink>
                                            </li>
                                            <li>
                                                <NavLink onClick={handleLogout} to="/" className="dropdown-item" >Logout</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/dashbord/user/complaint" className="nav-link" >Complaint</NavLink>
                                    </li>
                                </>) : (<>
                                    <li className="nav-item">
                                        <NavLink to="/dashbord/user/home" className="nav-link" >Home</NavLink>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Medicine
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink className="dropdown-item" to={"/dashbord/admin/addCompany"} >Add Company</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/"} className="dropdown-item" >Add Medicine</NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pharmacy
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink className="dropdown-item" to={"/dashbord/admin/addPharmacy"} >Add Pharmacy</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/dashbord/admin/managePharmacy"} className="dropdown-item" >Manage Pharmacy</NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Doctor
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink className="dropdown-item" to={"/dashbord/user/account"} >Add Doctor</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/"} className="dropdown-item" >Manage Doctor</NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Manage Address
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink className="dropdown-item" to={"/dashbord/admin/addState"} >Add State</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/dashbord/admin/addDistrict"} className="dropdown-item" >Add District</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/dashbord/admin/addCity"} className="dropdown-item" >Add City</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            View Complaint
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink className="dropdown-item" to={"/dashbord/user/account"} >Manage Complaint</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth?.user.name}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink className="dropdown-item" to={"/dashbord/user/account"} >Account</NavLink>
                                            </li>
                                            <li>
                                                <NavLink onClick={handleLogout} to="/" className="dropdown-item" >Logout</NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/dashbord/user/home" className="nav-link" >Manage User</NavLink>
                                    </li>
                                </>)

                            }



                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header