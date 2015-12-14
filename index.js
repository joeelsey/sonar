'use strict'

document.getElementById('sonar').innerHTML = 'sonar'

const cell = {
  location: {
    x: '',
    y: ''
  }
}

const Grid = {
  grid: [
    [cell, cell, cell, cell, cell, cell],
    [cell, cell, cell, cell, cell, cell],
    [cell, cell, cell, cell, cell, cell],
    [cell, cell, cell, cell, cell, cell],
    [cell, cell, cell, cell, cell, cell],
    [cell, cell, cell, cell, cell, cell]
  ],

  whereAreYou: function (x, y) {
    this.grid.map(function (value, index) {})
    let locationObject = this.grid[x][y]
    console.log(this.grid[0])
    document.getElementById('location').innerHTML = String(locationObject)
  },

  whereAmI: function (x, y) {
    return this.whereAreYou(x, y)
  }
}
