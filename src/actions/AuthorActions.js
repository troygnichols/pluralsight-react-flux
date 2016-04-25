import Dispatcher from '../dispatcher/AppDispatcher';
import AuthorApi from '../api/AuthorApi';
import ActionTypes from '../constants/ActionTypes';

const AuthorActions = {
  createAuthor(author) {
    const newAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author:     newAuthor
    });
  },

  updateAuthor(author) {
    const updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author:     updatedAuthor
    });
  },

  deleteAuthor(id) {
    AuthorApi.deleteAuthor(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id
    });
  }
};

export default AuthorActions;
