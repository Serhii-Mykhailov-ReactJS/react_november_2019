const assert = require('assert')
const rp = require('request-promise')

describe('object operations', () => {
  let data

  before(async () => {
    const params = {
      uri: 'https://api.coindesk.com/v1/bpi/historical/close.json',
      qs: {
        end: '2019-01-31',
        start: '2019-01-01',
      },
      json: true,
    }
    const result = await rp(params)
    data = result.bpi
  })

  it('should pass if the data has been correctly populated', () => {
    const exists = data.hasOwnProperty('2019-01-01')
    assert.ok(exists)
  })

  it('should return the sum of all values', () => {
    const initialSum = 0;
    const actual = Object.values(data).reduce((acc, val) => acc + val, initialSum); // TODO: #1
    const expected = 114390.02239999999
    assert.equal(actual, expected)
  })

  it('should find the top value (Number) from any date', () => {
    const firstIndex = 0;
    const actual = Object.values(data).sort((a, b) => b - a)[firstIndex]; // TODO: #2
    const expected = 4083.165
    assert.equal(actual, expected)
  })

  it('should extract only the results from Mondays', () => {
    const actual = Object.keys(data).reduce((acc, val) => {
      const day = new Date(Date.parse(val)).getDay();
      const monday = 2;
      if (day === monday) {
        acc[val] = data[val];
      }
      return acc;
    }, {}) // TODO: #3
    const expected = {
      '2019-01-01': 3869.47,
      '2019-01-08': 4029.9917,
      '2019-01-15': 3604.1333,
      '2019-01-22': 3598.2183,
      '2019-01-29': 3421.12
    }
    assert.deepEqual(actual, expected)
  })

  it('should return the top 5 dates in descending order', () => {
    const actual = {}; // TODO: #4
    const resultArr = Object.values(data).sort((a, b) => b - a).splice(0, 5);
    for (let key in data) {
      const value = data[key];
      if (resultArr.includes(value)) {
        actual[key] = value;
      }
    }
    const expected = {
      '2019-01-06': 4083.165,
      '2019-01-07': 4041.4583,
      '2019-01-08': 4029.9917,
      '2019-01-09': 4028.2917,
      '2019-01-02': 3941.2167
    }
    assert.deepEqual(actual, expected)
  })
})
