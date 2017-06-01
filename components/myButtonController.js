var React = require('react');
var ListStore = require('../stores/listStore.js');
var ButtonActions = require('../actions/myButtonAction.js');
var MyButton = require('./MyButton.js');

class MyButtonController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: ListStore.getAll()
		};
	}

	componentDidMount() {
		ListStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		ListStore.removeChangeListener(this._onChange.bind(this));
	}

	_onChange() {
		this.setState({
			items: ListStore.getAll()
		});
	}

	createNewItem(event) {
		ButtonActions.addNewItem('new item');
	}

	render() {
		return <MyButton items = { this.state.items } onClick = { this.createNewItem } />;
	}

};

module.exports = MyButtonController;