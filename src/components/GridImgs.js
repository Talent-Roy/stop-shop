import React from "react"
import PropTypes from "prop-types"
import PreviewCompatibleImage from "./PreviewCompactibleImage"

const GridImgs = ({ gridImgs }) => (
  <div className="row">
    {" "}
    {gridImgs.map(item => (
      <div key={item.text} className="col-sm-12 col-lg-4 col-md-6">
        <div className="card shadow-lg">
          <div className="card-image">
            <figure>
              <PreviewCompatibleImage imageInfo={item} />
            </figure>
          </div>
          <div className="card-body">
            <div className="content ">
              <p className="text-center p-2">{item.text} </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    ))}{" "}
  </div>
)

GridImgs.propTypes = {
  gridImgs: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default GridImgs
