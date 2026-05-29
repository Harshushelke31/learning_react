import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
//using Link page should be redirect to new address

// const Header = () =>{
//     return(
//         <>
//          <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/">My-Resume</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link"  to="/home">Home</Link>
//         </li>

//         <li className="nav-item">
//           <Link className="nav-link"  to="/about">About</Link>
//         </li>

//         <li className="nav-item">
//           <Link className="nav-link"  to="/services">Services</Link>
//         </li>

//         <li className="nav-item">
//           <Link className="nav-link"  to="/products">Products</Link>
//         </li>

//         <li className="nav-item">
//           <Link className="nav-link"  to="/contact">Contact</Link>
//         </li>
        
    
        
//       </ul>
      
//     </div>
//   </div>
// </nav>
//         </>
//     )

    
// };
//using Link page should be redirect to new address


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">

          <NavLink className="navbar-brand" to="/">
            My Mobile Shoppe
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-link"
                      : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-link"
                      : "nav-link"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};
export default Header;