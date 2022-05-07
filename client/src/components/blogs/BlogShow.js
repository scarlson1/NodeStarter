import React, { useEffect } from 'react'; // Component
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchBlog } from '../../actions';

const BlogShow = () => {
  let { _id } = useParams();
  const blog = useSelector((state) => state.blogs[_id]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog(_id));
  }, [dispatch, _id]);

  if (!blog) {
    return '';
  }

  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogShow;

// class BlogShow extends Component {
//   componentDidMount() {
//     this.props.fetchBlog(this.props.match.params._id);
//   }

//   render() {
//     if (!this.props.blog) {
//       return '';
//     }

//     const { title, content } = this.props.blog;

//     return (
//       <div>
//         <h3>{title}</h3>
//         <p>{content}</p>
//       </div>
//     );
//   }
// }

// function mapStateToProps({ blogs }, ownProps) {
//   return { blog: blogs[ownProps.match.params._id] };
// }

// export default connect(mapStateToProps, { fetchBlog })(BlogShow);
