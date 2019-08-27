Page({
  data: {
    name: 'gubao',
    age: '28'
  },

  onLoad(query) {
    console.log(query);
  },

  jump() {
    location.href = './index.html';
  },

  submit() {
    alert('submit');
  }
});
