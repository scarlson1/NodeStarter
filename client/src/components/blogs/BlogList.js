import React, { useEffect } from 'react'; // { Component }
import map from 'lodash/map';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBlogs } from '../../actions';

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div>
      {blogs &&
        map(blogs, (blog) => {
          return (
            <div className='card darken-1 horizontal' key={blog._id}>
              <div className='card-stacked'>
                <div
                  className='card-content'
                  style={{ maxHeight: '210px', overflow: 'hidden' }}
                >
                  <span className='card-title'>{blog.title}</span>
                  <p style={{ maxHeight: '124px', overflow: 'hidden' }}>
                    {blog.content}
                  </p>
                </div>
                <div className='card-action'>
                  <Link to={`/blogs/${blog._id}`}>Read</Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BlogList;

// class BlogList extends Component {
//   componentDidMount() {
//     this.props.fetchBlogs();
//   }

//   renderBlogs() {
//     return map(this.props.blogs, blog => {
//       return (
//         <div className="card darken-1 horizontal" key={blog._id}>
//           <div className="card-stacked">
//             <div className="card-content">
//               <span className="card-title">{blog.title}</span>
//               <p>{blog.content}</p>
//             </div>
//             <div className="card-action">
//               <Link to={`/blogs/${blog._id}`}>Read</Link>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   }

//   render() {
//     return <div>{this.renderBlogs()}</div>;
//   }
// }

// function mapStateToProps({ blogs }) {
//   return { blogs };
// }

// export default connect(mapStateToProps, { fetchBlogs })(BlogList);
