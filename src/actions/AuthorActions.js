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
  }
};

export default AuthorActions;
