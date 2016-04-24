import authors from './authorData';
import _ from 'lodash';

function generateId(author) {
  return `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`;
}

function clone(item) {
  return JSON.parse(JSON.stringify(item));
}

const AuthorApi = {
  getAllAuthors() {
    return clone(authors);
  },

  getAuthorById(id) {
    let author = _.find(authors, {id});
  },

  saveAuthor(author) {
    console.debug('Save author', author);
    if (author.id) {
      let existingAuthorIndex = _.indexOf(authors, _.find(authors, {
        id: author.id
      }));
      authors.splice(existingAuthorIndex, 1, author);
    } else {
      author.id = generateId(author);
      authors.push(author);
    }
    return clone(author);
  },

  deleteAuthor(id) {
    console.debug('Delete author', id);
    _.remove(authors, { id });
  }
};

export default AuthorApi;


