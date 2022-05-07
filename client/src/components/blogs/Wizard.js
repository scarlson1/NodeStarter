import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';

const Wizard = ({ children, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = React.Children.toArray(children);

  const isLastPage = () => currentStep === steps.length - 1;

  const next = () => {
    setCurrentStep(Math.min(currentStep + 1, children.length - 1));
  };
  const previous = () => {
    setCurrentStep(Math.max(currentStep - 1, 0));
  };

  const validate = (values) => {
    let activeStep = steps[currentStep];

    return activeStep && activeStep.props.validate
      ? activeStep.props.validate(values)
      : {};
  };

  const handleSubmit = (values) => {
    if (isLastPage()) {
      return onSubmit(values);
    } else {
      next();
    }
  };

  return (
    <Form validate={validate} onSubmit={handleSubmit}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div style={{ paddingBottom: '16px' }}>{steps[currentStep]}</div>
          <Link to='/blogs' className='red btn-flat white-text'>
            Cancel
          </Link>
          {currentStep > 0 && (
            <button
              className='yellow darken-3 white-text btn-flat'
              style={{ marginLeft: '8px' }}
              onClick={previous}
            >
              Previous
            </button>
          )}
          {!isLastPage() && (
            <button className='teal btn-flat right white-text'>
              Next<i className='material-icons right'>done</i>
            </button>
          )}
          {isLastPage() && (
            <button
              type='submit'
              disabled={submitting}
              className='green btn-flat right white-text'
            >
              Save Blog
              <i className='material-icons right'>email</i>
            </button>
          )}
        </form>
      )}
    </Form>
  );
};

export default Wizard;
