import React from "react"
import "../styles/ItemHeader.css"

export const ItemHeader = props => {
  return (
    <div>
      <div class="wrapper">
        <img alt="..." class="one" fluid={props.image} />
        <img alt="..." class="two" fluid={props.image} />
        <img alt="..." class="three" fluid={props.image} />
        <img alt="..." class="four" fluid={props.image} />
        <img alt="..." class="five" fluid={props.image} />
        <img alt="..." class="six" fluid={props.image} />
      </div>
    </div>
  )
}
