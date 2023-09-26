const axios = require('axios')
export function sum(a: string) {
    return a.length
}

export function poli(a: string): boolean {
    for (let i = 0; i < a.length; i++) {
        if (a[i] != a[a.length - 1 - i]) {
            return false
        }
    }
    return true
}


export function sortArray(arr: number[]): number[] {
    return arr.slice().sort((a, b) => a - b);
}
export function shoresh(a: number): number | Error {
    if (a < 0) {
        return new Error('number is nagative')
    }
    else {
        return a ** 0.5;
    }
}

export function sumArray(arr: number[]): number {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

export async function findData(userId: number) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        return response.data;
    } catch (error) {
        return new Error('no id')
    }
}

export function fibonachi(arr: number[]): number|Error {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] != arr[i - 1] + arr[i - 2]) {
            return new Error('no fibonachi array')
        }
    }
    return arr[arr.length - 1] + arr[arr.length - 2]
}
