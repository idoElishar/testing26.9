
// sum.test.ts
import { expect, test } from 'vitest'
import { sortArray, poli, sum, shoresh,sumArray,findData,fibonachi } from './try'

test('length of string', () => {
    expect(sum('arr')).toBe(3)
})

test('is polindrom', () => {
    expect(poli('arara')).toBe(true)
})

test('shoresh', () => {
    expect(shoresh(-1)).toThrow(Error)
})

test('sum', () => {
    expect(sumArray([1,10,9])).toEqual(20)
})

test('sum bigger then', () => {
    expect(sumArray([1,10,9])).toBeGreaterThan(10)
})
test('sum include', () => {
    expect([1,10,9]).toContain(1)
})
test('first fetchUserData  test  ' , async () => {
    const userData = await findData(1)
 expect(userData).toEqual({
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  })
})
test('next fibonachi number',()=>{
    expect(fibonachi([1,1,2])).toEqual(3)
})

