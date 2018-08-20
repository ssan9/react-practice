import React from 'react';


export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.onSubmit=this.onSubmit.bind(this);
        // this.setEditing=this.setEditing.bind(this);  //why the text doesn't show with bind?
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }
        // console.log(text);
        // TODO: Add the card or list
        this.textInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            const text = `Add a ${this.props.type}`; //why is it hiding when i use bind? Also, why does it hide once i select the input field and doesn't get visible all?
            return (
                <div className="add-button"
                    onClick={()=>this.setEditing(true)}>
                    <a href="#">{text}</a>
                </div>
            );
        }
        const label = `Enter a ${this.props.type}`;
        return (
            <form className="card add-form" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    ref={input => this.textInput = input}
                    aria-label={label}
                />
                <button>Add</button>
                <button type="button" onClick={()=>this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}
