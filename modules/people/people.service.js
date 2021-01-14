const Queue = require('../queue/Queue');
const store = require('../../store');


const people = new Queue()
store.people.forEach(person => people.enqueue(person))


module.exports = {
  get() {
    return people.all();
  },

  show() {
    return people.show();
  },

  enqueue(person) {
    return people.enqueue(person);
  },

  dequeue() {
    return people.dequeue();
  }
};
