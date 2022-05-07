// BlogForm shows a form for a user to add input
// import _ from 'lodash';
import React from 'react'; // , { Component }
// import { reduxForm, Field } from 'redux-form';
import { Field } from 'react-final-form';
// import { Link } from 'react-router-dom';

import BlogField from './BlogField';
import formFields from './formFields';

const BlogForm = () => {
  return (
    <div>
      {formFields.map(({ label, name }) => {
        return (
          <Field
            key={name}
            component={BlogField}
            type='text'
            label={label}
            name={name}
          />
        );
      })}
    </div>
  );
};

export default BlogForm;

// const renderFields = (inputFields) => {
//   return inputFields.map(({ label, name }) => {
//     return (
//       <Field
//         key={name}
//         component={BlogField}
//         type='text'
//         label={label}
//         name={name}
//       />
//     );
//   });
// };

// function validate(values) {
//   const errors = {};

//   formFields.forEach(({ name }) => {
//     if (!values[name]) {
//       errors[name] = 'You must provide a value';
//     }
//   });

//   return errors;
// }

// const BlogForm = ({ onBlogSubmit }) => {
//   return (
//     <Form
//       onSubmit={() => onBlogSubmit()}
//       validate={(values) => validate(values)}
//     >
//       {({ handleSubmit, pristine, reset, submitting }) => (
//         <form onSubmit={handleSubmit}>
//           {renderFields(formFields)}
//           <Link to='/blogs' className='red btn-flat white-text'>
//             Cancel
//           </Link>
//           <button
//             type='submit'
//             className='teal btn-flat right white-text'
//             disabled={submitting}
//           >
//             Next
//             <i className='material-icons right'>done</i>
//           </button>
//         </form>
//       )}
//     </Form>
//   );
// };

// export default BlogForm;

// class BlogForm extends Component {
//   renderFields() {
//     return _.map(formFields, ({ label, name }) => {
//       return (
//         <Field
//           key={name}
//           component={BlogField}
//           type="text"
//           label={label}
//           name={name}
//         />
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.props.handleSubmit(this.props.onBlogSubmit)}>
//           {this.renderFields()}
//           <Link to="/blogs" className="red btn-flat white-text">
//             Cancel
//           </Link>
//           <button type="submit" className="teal btn-flat right white-text">
//             Next
//             <i className="material-icons right">done</i>
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// function validate(values) {
//   const errors = {};

//   formFields.forEach(({ name }) => {
//     if (!values[name]) {
//       errors[name] = 'You must provide a value';
//     }
//   });

//   return errors;
// }

// export default reduxForm({
//   validate,
//   form: 'blogForm',
//   destroyOnUnmount: false
// })(BlogForm);
