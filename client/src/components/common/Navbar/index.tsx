import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Wrapper, Title, LogoutBtn } from './style';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  return (
    <>
      <Wrapper>
        <Link to='/'>
          <Title>Todo-List</Title>
        </Link>
        <LogoutBtn onClick={handleLogout}>๋ก๊ทธ์์</LogoutBtn>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Navbar;
