import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'



const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()  
  return (
      <header className='header'>
          <h1>{title}</h1>
      {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick=
        {onAdd} />}
          
      </header>
  )
}

//you can use default but when you create it in header it override the default

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',   
// }


export default Header
