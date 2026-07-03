import fs from "fs";

const works = [
  "アールエス",
  "タイムアタックRPG",
  "エンドレスフロンティア",
  "イストワール",
  "シルフェイド見聞録"
];

function pickWork() {
  return works[Math.floor(Math.random() * works.length)];
}

function generatePost(title) {
  return `【今日のアンディーメンテ紹介】

作品名：${title}

独特な世界観とシステムが特徴のフリーゲーム作品です。

#アンディーメンテ
#フリーゲーム`;
}

const work = pickWork();
const post = generatePost(work);

console.log(post);

// 保存
fs.mkdirSync("posts", { recursive: true });

const date = new Date().toISOString().slice(0, 10);
fs.writeFileSync(`posts/${date}.md`, post);
