 import React from 'react';
 import { Field, reduxForm } from 'redux-form';

 class StreamCreate extends React.Component {

    renderInput({input, label} ) {
        return (
         <div className="field">
             <label >{label}</label>
             <input  {...input} />
        </div>
        );
     }

     onSubmit(event) {
         event.preventDefault();
     }

     render() {
         return (
             <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                 <Field name="title" component={this.renderInput} label="Enter Title"/>
                 <Field name="description" component={this.renderInput} label="Enter Description"/>
             </form>
         );
     }
 }

 export default reduxForm({
     form: 'streamCreate'
 })(StreamCreate);