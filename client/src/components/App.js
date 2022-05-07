import React, { useEffect } from 'react'; // { Component }
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
// import * as actions from '../actions';
import { fetchUser } from '../actions/index';

import Layout from './Layout';
import Landing from './Landing';
import Dashboard from './Dashboard';
import BlogNew from './blogs/BlogNew';
import BlogShow from './blogs/BlogShow';

function App() {
  // const user = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path='/blogs/new' element={<BlogNew />} />
        <Route path='/blogs/:_id' element={<BlogShow />} />
        <Route path='/blogs' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;

// class App extends Component {
//   componentDidMount() {
//     this.props.fetchUser();
//   }

//   render() {
//     return (
//       <div className='container'>
//         <BrowserRouter>
//           <div>
//             <Header />
//             <Routes>
//               <Route path='/blogs/new' element={BlogNew} />
//               <Route exact path='/blogs/:_id' element={BlogShow} />
//               <Route path='/blogs' element={Dashboard} />
//               <Route path='/' element={Landing} />
//             </Routes>
//           </div>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default connect(null, actions)(App);
