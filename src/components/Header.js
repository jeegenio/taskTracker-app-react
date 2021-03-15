import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation} from 'react-router-dom';



const Header = ({title, showAdd, onAddClose}) => {
const location = useLocation();

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={onAddClose ? 'blue' : 'green'} text={ onAddClose ? 'Close' : 'Add'} onClick={showAdd}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes= {
    title: PropTypes.string.isRequired,
}
// CSS IN JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black',
// }

export default Header
