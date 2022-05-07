// BlogNew shows BlogForm and BlogFormReview
import React from 'react'; // { Component }
// import { reduxForm } from 'redux-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import BlogForm from './BlogForm';
import BlogFormReview from './BlogFormReview';
import Wizard from './Wizard';
import formFields from './formFields';
import { submitBlog } from '../../actions/index';

function validate(values) {
  const errors = {};

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

const BlogNew = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(submitBlog(values, navigate));
  };

  return (
    <Wizard onSubmit={handleSubmit}>
      <BlogForm validate={validate} />
      <BlogFormReview />
    </Wizard>
  );
};

export default BlogNew;

// const BlogNew = () => {
//   const [showFormReview, setShowFormReview] = useState(false);

//   return showFormReview ? (
//     <BlogFormReview onCancel={() => setShowFormReview(false)} />
//   ) : (
//     <BlogForm onBlogSubmit={() => setShowFormReview(true)} />
//   );
// };

// export default BlogNew;

// class BlogNew extends Component {
//   state = { showFormReview: false };

//   renderContent() {
//     if (this.state.showFormReview) {
//       return (
//         <BlogFormReview
//           onCancel={() => this.setState({ showFormReview: false })}
//         />
//       );
//     }

//     return (
//       <BlogForm onBlogSubmit={() => this.setState({ showFormReview: true })} />
//     );
//   }

//   render() {
//     return <div>{this.renderContent()}</div>;
//   }
// }

// export default BlogNew;

// export default reduxForm({
//   form: 'blogForm'
// })(BlogNew);
