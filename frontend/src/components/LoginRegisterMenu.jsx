import { Fragment } from "react";
import { Link } from "react-router-dom";

function LoginRegisterMenu(){
    return(
        <ul className="navbar-nav ml-auto mr-3">
            {/* <li className="nav-item dropdown"style={{ marginLeft:"700px" }}> */}
                  
              <Link className="nav-link text-dark fw-bold" to="/slogin" id="navbarDropdownMenuLink">
  Login
</Link>
                {/* <div className="dropdown-menu text-dark " aria-labelledby="navbarDropdownMenuLink" > */}
                {/* <Link className="dropdown-item " to="/alogin">Admin</Link> */}
                {/* <Link className="dropdown-item " to="/slogin">Login</Link>                         */}
                {/* <Link className="dropdown-item " to="/clogin">Customer</Link>                         */}
                {/* </div> */}
            {/* </li> */}
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-dark fw-bold
                 mr-3" to="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                Register
                </Link>
                <div className="dropdown-menu text-dark fw-bold" aria-labelledby="navbarDropdownMenuLink" >

                <Link className="dropdown-item pr-0" to="/regsupplier">Guide</Link>
                <Link className="dropdown-item pr-0" to="/register">Customer</Link>                        
                </div>
            </li>
        </ul>
    )
}

export default LoginRegisterMenu;