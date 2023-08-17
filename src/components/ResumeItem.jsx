import PropTypes from 'prop-types';
import parse from 'html-react-parser';


const ResumeItem = ({icon,year,title,desc}) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>
      <span className="resume__date">{year}</span>
      <h3 className="resume__subtitle">{parse(title)}</h3>
      <p className="resume__description">{desc}</p>
    </div>
  )
}

ResumeItem.propTypes = {
    icon: PropTypes.node.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string, // You can adjust the prop type based on the actual data type of 'desc'
  };

export default ResumeItem