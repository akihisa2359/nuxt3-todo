function hoge() {
  console.log("hoge is called");
  test();
  return "hoge";
}

function test() {
  console.log("test is called by hoge");
}

const val = "val";

// 呼び出し側の例 import anyName, { hoge } from "~/libs/hoge"
export { hoge, val as default };
