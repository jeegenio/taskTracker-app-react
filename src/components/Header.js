import PropTypes from 'prop-types';
import Button from './Button';



const Header = ({title, showAdd, onAddClose}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={onAddClose ? 'blue' : 'green'} text={ onAddClose ? 'Close' : 'Add'} onClick={showAdd}/>
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
