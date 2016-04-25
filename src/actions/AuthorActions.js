import Dispatcher from '../dispatcher/AppDispatcher';
import AuthorApi from '../api/AuthorApi';
import { CREATE_AUTHOR } from '../constants/ActionTypes';

const AuthorActions = {
  createAuthor(author) {
    let newAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: CREATE_AUTHOR,
      author:     newAuthor
    });
  }
};

export default AuthorActions;
