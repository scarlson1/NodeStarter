import React from 'react'; // , { Component }
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const renderContent = (auth) => {
  switch (auth) {
    case null:
      return;
    case false:
      return (
        <li>
          <a href={'/auth/google'}>Login With Google</a>
        </li>
      );
    default:
      return [
        <li key='3' style={{ margin: '0 10px' }}>
          <Link to='/blogs'>My Blogs</Link>
        </li>,
        <li key='2'>
          <a href={'/auth/logout'}>Logout</a>
        </li>,
      ];
  }
};

const Header = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <nav className='indigo'>
      <div className='nav-wrapper'>
        <Link
          to={auth ? '/blogs' : '/'}
          className='left brand-logo'
          style={{ marginLeft: '10px' }}
        >
          Blogster
        </Link>
        <ul className='right'>{renderContent(auth)}</ul>
      </div>
    </nav>
  );
};

export default Header;

// class Header extends Component {
//   renderContent() {
//     switch (this.props.auth) {
//       case null:
//         return;
//       case false:
//         return (
//           <li>
//             <a href={'/auth/google'}>Login With Google</a>
//           </li>
//         );
//       default:
//         return [
//           <li key="3" style={{ margin: '0 10px' }}>
//             <Link to="/blogs">My Blogs</Link>
//           </li>,
//           <li key="2">
//             <a href={'/auth/logout'}>Logout</a>
//           </li>
//         ];
//     }
//   }

//   render() {
//     return (
//       <nav className="indigo">
//         <div className="nav-wrapper">
//           <Link
//             to={this.props.auth ? '/blogs' : '/'}
//             className="left brand-logo"
//             style={{ marginLeft: '10px' }}
//           >
//             Blogster
//           </Link>
//           <ul className="right">{this.renderContent()}</ul>
//         </div>
//       </nav>
//     );
//   }
// }

// function mapStateToProps({ auth }) {
//   return { auth };
// }

// export default connect(mapStateToProps)(Header);
