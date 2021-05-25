import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({title, onAdd, showAdd}) => {
  const Location = useLocation();

  return (
    <header>
      <h1>{title}</h1>
      { Location.pathname === '/' && <Button 
      color={showAdd ? 'red' : 'Green'} 
      text={showAdd ? 'Close' :  'Add New Task'}
      onClick={onAdd}
     /> }
    </header>
  )
}
Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header
