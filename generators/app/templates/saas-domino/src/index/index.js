Page({
  data: {
    name: 'gubao',
    age: '28'
  },

  onLoad(query) {
    console.log(query);
  },

  jump() {
    location.href = './list.html';
  },

  submit() {
    alert('submit');
  }
});
