import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'user',
        attributes: {
          firstName: 'Scarlett',
          lastName: 'Johansson',
          city: 'New York',
          website: 'http://www.imdb.com/name/nm0424060/'
        },
        relationships: {}
      }, {
        id: 2,
        type: 'user',
        attributes: {
          firstName: 'Megan',
          lastName: 'Fox',
          city: 'Rockwood',
          website: 'http://www.imdb.com/name/nm1083271/'
        },
        relationships: {}
      }, {
        id: 3,
        type: 'user',
        attributes: {
          firstName: 'Zoe',
          lastName: 'Zaldana',
          city: 'Passaic',
          website: 'http://www.imdb.com/name/nm0757855/'
        },
        relationships: {}
      }]
    });
  }
});
