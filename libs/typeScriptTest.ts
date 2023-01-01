const person: {
  age: number;
  greet: (name: string) => void; // 関数の型宣言には型エイリアスの形を用いる
} = {
  age: 20,
  greet: (name) => console.log(`My name is ${name}`),
};

console.log(person);
person.greet("hoge");

// 関数の宣言時には引数と戻り値に注釈を付ける
const greet = (name: string): void => {
  console.log(`My name is ${name}`);
};
greet("fuga");

// typeof で既存の変数から型を型を抽出できる
const greet2: typeof greet = (name) => {
  console.log(`Hello. I'm ${name}.`);
};
greet2("piyo");

function myMap<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const res = myMap<string, number>(["1", "2", "3"], (x) => parseInt(x));
console.log(res);
