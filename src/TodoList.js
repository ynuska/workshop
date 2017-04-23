/**
 * Connect this component to the Redux state for the items and the input value
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import { connect } from 'react-redux';
import { addItem, editInput, checkItem } from './actions.js';

class TodoList extends Component {

	// Check an item
	checkItem = (text) => {
        this.props.dispatch(checkItem(text));
	};

	// Add an item
	addItem = (evt) => {
		evt.preventDefault();
        this.props.dispatch(addItem());
	};
	// Edit the input

	editInput = (evt) => {
        this.props.dispatch(editInput(evt.target.value));
	};


	render() {
		return (
			<div>
				<ul>
					{this.props.items.map((item, index) => (
						<li key={index}>
							<TodoItem
								onClick={this.checkItem}
								text={item.text}
								checked={item.checked}
							/>
						</li>
					))}
				</ul>

				<form>
					<TodoInput
						onChange={this.editInput} value={this.props.inputValue}
					/>
				</form>
                <button onClick={this.addItem}>
                    Add Todo
                </button>
			</div>
		)
	}
}


const mapStateToProps = state => {
    return {
        items: state.items,
        inputValue: state.inputValue
    }
};

export default connect(mapStateToProps)(TodoList);
