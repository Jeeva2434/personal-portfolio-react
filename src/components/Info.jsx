import {personalInfo} from '../data'

const Info = () => {

  return (
     <>
        {personalInfo && personalInfo.map(({id,title,description})=>{
            return( 
                <li className='info__item' key={id}>
                    <span className='info__title'>{title}</span>
                    <span className='info__description'>{description}</span>
                </li>
            )
        })}
     </>
  )
}

export default Info