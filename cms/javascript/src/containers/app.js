import { di, combineMapStateToProps } from 'di'; // Comes from common
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        const pageId = 1; // We would get this some clever way.

        this.props.pageActions.fetchFormFields(pageId);
    }

    render() {
        // Get components from the DI container so we get any modified behaviour.
        const FormComponent = di.container.Form;

        return (
            <div className='app-container'>
                <FormComponent fields={this.props.page.formFields} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        page: state.page
    };
}

function mapDispatchToProps(dispatch) {
    // Get actions from the DI container so we get any modifications.
    const pageActions = di.container.pageActions;

    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    };
}

export default function app(injectedMapStateToProps, injectedMapDispatchToProps) {
    // Takes the default mapStateToProps (defined by the container in this file)
    // and combines it with a mapStateToProps function passed in from outside.
    const combinedMapStateToProps = combineMapStateToProps(mapStateToProps, injectedMapStateToProps);

    return connect(combinedMapStateToProps, mapDispatchToProps)(App);
};
