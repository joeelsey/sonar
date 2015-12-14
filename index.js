document.getElementById('sonar').innerHTML = 'sonar';

const Grid = {
  grid: [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ],

  whereAreYou: function(x, y) {
    console.log(this.grid[x][y])
    document.getElementById('location').innerHTML = String(this.grid[x][y])
  },

  whereAmI: function(x, y) {
    return this.whereAreYou(x, y)
  }

}