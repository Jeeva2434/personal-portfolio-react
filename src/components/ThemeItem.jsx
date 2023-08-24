import PropTypes from "prop-types";

const ThemeItem = ({color,img}) => {
  return (
    <img src={img} alt="" className="theme__img"/>
  )
}

ThemeItem.propTypes = {
    color: PropTypes.string,
    img: PropTypes.string
}


export default ThemeItem