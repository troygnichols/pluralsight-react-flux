import Dispatcher from '../dispatcher/AppDispatcher';
import { CREATE_AUTHOR } from '../constants/ActionTypes';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import _ from 'lodash';

const changeEvent = 'change';
const authors = [];

const AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(changeEvent, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(changeEvent, callback);
  },

  emitChange() {
    this.emit(changeEvent);
  },

  getAllAuthors() {
    return authors;
  },

  getAuthorById(id) {
    return _.find(authors, { id });
  }

});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case CREATE_AUTHOR:
      authors.push(action.author);
      AuthorStore.emitChange();
      break;
    default:
      console.log("¯\\_(ツ)_/¯");
  }
});

export default AuthorStore;
