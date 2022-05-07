// BlogFormReview shows users their form inputs for review
// import _ from 'lodash';
import React from 'react'; // , { Component }
// import { connect } from 'react-redux';
import { useFormState } from 'react-final-form';
// import { withRouter } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import formFields from './formFields';
// import * as actions from '../../actions';

const BlogFormReview = () => {
  const { values } = useFormState();

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {values &&
        formFields.map(({ name, label }) => {
          return (
            <div key={name}>
              <label>{label}</label>
              <div>{values[name]}</div>
            </div>
          );
        })}
    </div>
  );
};

export default BlogFormReview;

// const BlogFormReview = (props) => {
//   const { values } = useFormState();
//   let navigate = useNavigate();

//   console.log('values: ', values);

//   const onSubmit = (event) => {
//     event.preventDefault();
//     const { submitBlog } = props;

//     submitBlog(values, navigate);
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <h5>Please confirm your entries</h5>
//       {/* {renderFields(values)} */}
//       {values &&
//         formFields.map(({ name, label }) => {
//           return (
//             <div key={name}>
//               <label>{label}</label>
//               <div>{values[name]}</div>
//             </div>
//           );
//         })}

//       <div>
//         <button
//           className='yellow darken-3 white-text btn-flat'
//           onClick={props.onCancel}
//         >
//           Back
//         </button>
//         <button className='green btn-flat right white-text'>
//           Save Blog
//           <i className='material-icons right'>email</i>
//         </button>
//       </div>
//     </form>
//   );
// };

// export default BlogFormReview;

// class BlogFormReview extends Component {
//   renderFields() {
//     const { formValues } = this.props;

//     return _.map(formFields, ({ name, label }) => {
//       return (
//         <div key={name}>
//           <label>{label}</label>
//           <div>{formValues[name]}</div>
//         </div>
//       );
//     });
//   }

//   renderButtons() {
//     const { onCancel } = this.props;

//     return (
//       <div>
//         <button
//           className="yellow darken-3 white-text btn-flat"
//           onClick={onCancel}
//         >
//           Back
//         </button>
//         <button className="green btn-flat right white-text">
//           Save Blog
//           <i className="material-icons right">email</i>
//         </button>
//       </div>
//     );
//   }

//   onSubmit(event) {
//     event.preventDefault();

//     const { submitBlog, history, formValues } = this.props;

//     submitBlog(formValues, history);
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmit.bind(this)}>
//         <h5>Please confirm your entries</h5>
//         {this.renderFields()}

//         {this.renderButtons()}
//       </form>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return { formValues: state.form.blogForm.values };
// }

// export default connect(mapStateToProps, actions)(withRouter(BlogFormReview));
