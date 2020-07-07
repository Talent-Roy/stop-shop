// import React, { Component } from "react"
// import styled from "styled-components"
// import { Link } from "gatsby"

// import { ShoppingCart } from "styled-icons/material/ShoppingCart"

// const CartSummary = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   padding: 10px;
//   font-weight: bold;
//   cursor: pointer;
// `

// class HeaderMain extends Component {
//   state = {
//     items: 0,
//   }

//   updateItemTotal = qty => {
//     this.setState({ items: qty })
//   }

//   componentDidMount() {
//     if (window.Snipcart) {
//       //this allows it to work when switching pages
//       var count = window.Snipcart.api.items.count()
//       this.updateItemTotal(count)

//       //this allows it to work when you add or change items
//       window.Snipcart.subscribe("cart.closed", () => {
//         var count = window.Snipcart.api.items.count()
//         this.updateItemTotal(count)
//       })

//       //this allows it to work on refreshing the page
//       window.Snipcart.subscribe("cart.ready", data => {
//         var count = window.Snipcart.api.items.count()
//         this.updateItemTotal(count)
//       })
//     }
//   }

//   componentWillUnmount() {
//     window.Snipcart.unsubscribe("cart.closed")
//     window.Snipcart.unsubscribe("cart.ready")
//   }

//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <Link className="navbar-brand" to="/">
//           {this.props.shopName}
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarColor02"
//           aria-controls="navbarColor02"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarColor02">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <Link className="nav-link" to="#">
//                 Home <span className="sr-only">(current)</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="#">
//                 Features
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="#">
//                 Pricing
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="#">
//                 About
//               </Link>
//             </li>
//           </ul>
//           <CartSummary className="snipcart-summary">
//             <p style={{ float: "left" }}>{this.state.items} </p>
//             <p className="snipcart-checkout">
//               <ShoppingCart size="40px" />
//             </p>
//           </CartSummary>
//         </div>
//       </nav>
//     )
//   }
// }

// export default HeaderMain
