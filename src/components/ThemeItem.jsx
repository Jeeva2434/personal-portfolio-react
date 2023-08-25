import PropTypes from "prop-types";

const ThemeItem = ({color,img,changeColor}) => {
  return (
    <img src={img} alt="" className="theme__img" onClick={()=>changeColor(color)}/>
  )
}

ThemeItem.propTypes = {
    color: PropTypes.string,
    img: PropTypes.string,
    changeColor : PropTypes.func
}


export default ThemeItem