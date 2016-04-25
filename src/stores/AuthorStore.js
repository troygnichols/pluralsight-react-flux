import Dispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
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

    case ActionTypes.INITIALIZE:
      Array.prototype.push.apply(authors, action.initialData.authors);
      AuthorStore.emitChange();
      break;

    case ActionTypes.CREATE_AUTHOR:
      authors.push(action.author);
      AuthorStore.emitChange();
      break;

    case ActionTypes.UPDATE_AUTHOR:
      const existingAuthor = _.find(authors, { id: action.author.id });
      const index = _.indexOf(authors, existingAuthor);
      authors.splice(index, 1, action.author);
      AuthorStore.emitChange();
      break;

    default:
      console.log("No idea ¯\\_(ツ)_/¯");
  }
});

export default AuthorStore;
