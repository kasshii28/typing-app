import { Questions } from "@/app/types/constants/questions";

export const JavaScriptQuestions: Questions = [
  {
    id: 1,
    question: "変数宣言(let)",
    answer: "let name = 'John';"
  },
  {
    id: 2,
    question: "変数宣言(const)",
    answer: "const PI = 3.14;"
  },
  {
    id: 3,
    question: "配列の宣言",
    answer: "const array = [1, 2, 3];"
  },
  {
    id: 4,
    question: "オブジェクトの宣言",
    answer: "const user = { name: 'John', age: 25 };"
  },
  {
    id: 5,
    question: "関数宣言",
    answer: "function greet(name) { return 'Hello, ' + name; }"
  },
  {
    id: 6,
    question: "アロー関数",
    answer: "const add = (a, b) => a + b;"
  },
  {
    id: 7,
    question: "for文",
    answer: "for (let i = 0; i < 10; i++) { console.log(i); }"
  },
  {
    id: 8,
    question: "while文",
    answer: "while (count > 0) { count--; }"
  },
  {
    id: 9,
    question: "if文",
    answer: "if (age >= 18) { return 'Adult'; }"
  },
  {
    id: 10,
    question: "三項演算子",
    answer: "const result = age >= 18 ? 'Adult' : 'Minor';"
  },
  {
    id: 11,
    question: "配列のmap",
    answer: "const doubled = numbers.map(num => num * 2);"
  },
  {
    id: 12,
    question: "配列のfilter",
    answer: "const evens = numbers.filter(num => num % 2 === 0);"
  },
  {
    id: 13,
    question: "配列のreduce",
    answer: "const sum = numbers.reduce((total, num) => total + num, 0);"
  },
  {
    id: 14,
    question: "文字列連結",
    answer: "const fullName = firstName + ' ' + lastName;"
  },
  {
    id: 15,
    question: "テンプレートリテラル",
    answer: "const message = `Hello, ${name}!`;"
  },
  {
    id: 16,
    question: "オブジェクト分割代入",
    answer: "const { name, age } = user;"
  },
  {
    id: 17,
    question: "配列分割代入",
    answer: "const [first, second] = array;"
  },
  {
    id: 18,
    question: "スプレッド演算子(配列)",
    answer: "const newArray = [...oldArray, 4, 5];"
  },
  {
    id: 19,
    question: "スプレッド演算子(オブジェクト)",
    answer: "const newObj = { ...oldObj, age: 30 };"
  },
  {
    id: 20,
    question: "Promiseの作成",
    answer: "const promise = new Promise((resolve, reject) => {});"
  },
  {
    id: 21,
    question: "async関数",
    answer: "async function fetchData() { return await fetch(url); }"
  },
  {
    id: 22,
    question: "try-catch文",
    answer: "try { doSomething(); } catch (error) { console.error(error); }"
  },
  {
    id: 23,
    question: "クラス宣言",
    answer: "class Person { constructor(name) { this.name = name; } }"
  },
  {
    id: 24,
    question: "クラスのメソッド",
    answer: "class Dog { bark() { return 'Woof!'; } }"
  },
  {
    id: 25,
    question: "クラスの継承",
    answer: "class Student extends Person { constructor(name, grade) { super(name); } }"
  },
  {
    id: 26,
    question: "importの構文",
    answer: "import { useState } from 'react';"
  },
  {
    id: 27,
    question: "exportの構文",
    answer: "export default function App() { return <div>Hello</div>; }"
  },
  {
    id: 28,
    question: "オブジェクトのキー取得",
    answer: "const keys = Object.keys(user);"
  },
  {
    id: 29,
    question: "オブジェクトの値取得",
    answer: "const values = Object.values(user);"
  },
  {
    id: 30,
    question: "オブジェクトのエントリー取得",
    answer: "const entries = Object.entries(user);"
  },
  {
    id: 31,
    question: "配列の結合",
    answer: "const combined = array1.concat(array2);"
  },
  {
    id: 32,
    question: "配列の要素追加",
    answer: "array.push('new item');"
  },
  {
    id: 33,
    question: "配列の先頭に要素追加",
    answer: "array.unshift('first item');"
  },
  {
    id: 34,
    question: "配列の最後の要素削除",
    answer: "const lastItem = array.pop();"
  },
  {
    id: 35,
    question: "配列の先頭の要素削除",
    answer: "const firstItem = array.shift();"
  },
  {
    id: 36,
    question: "配列の要素検索",
    answer: "const index = array.indexOf('search item');"
  },
  {
    id: 37,
    question: "配列の存在確認",
    answer: "const exists = array.includes('search item');"
  },
  {
    id: 38,
    question: "文字列を配列に変換",
    answer: "const chars = string.split('');"
  },
  {
    id: 39,
    question: "配列を文字列に変換",
    answer: "const string = array.join(', ');"
  },
  {
    id: 40,
    question: "文字列の切り出し",
    answer: "const substring = string.substring(0, 5);"
  },
  {
    id: 41,
    question: "文字列の置換",
    answer: "const newString = string.replace('old', 'new');"
  },
  {
    id: 42,
    question: "日付の作成",
    answer: "const date = new Date();"
  },
  {
    id: 43,
    question: "数値を文字列に変換",
    answer: "const str = number.toString();"
  },
  {
    id: 44,
    question: "文字列を数値に変換",
    answer: "const num = parseInt(string, 10);"
  },
  {
    id: 45,
    question: "小数点を含む変換",
    answer: "const float = parseFloat(string);"
  },
  {
    id: 46,
    question: "ランダム数の生成",
    answer: "const random = Math.random();"
  },
  {
    id: 47,
    question: "配列のソート",
    answer: "array.sort((a, b) => a - b);"
  },
  {
    id: 48,
    question: "配列のスライス",
    answer: "const sliced = array.slice(1, 3);"
  },
  {
    id: 49,
    question: "条件に一致する要素を検索",
    answer: "const item = array.find(x => x.id === 1);"
  },
  {
    id: 50,
    question: "全ての要素が条件を満たすか確認",
    answer: "const allPass = array.every(num => num > 0);"
  }
];