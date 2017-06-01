var AppDispatcher = require('../appDispatcher.js');

var ButtonActions = {
    addNewItem: function (text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    },
};

module.exports = ButtonActions;