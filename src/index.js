import fs from "fs";
import { fetchScreenshotUrl } from "./screenshot.js";

const works = [
  "アールエス",
  "イストワール",
  "シルフェイド見聞録",
  "グロリアスドーン",
  "タイムアタックRPG"
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePost(title, imageUrl) {
  return `【アンディーメンテ作品紹介】

作品名：${title}

スクリーンショット：
${imageUrl}

独特な構造を持つフリーゲーム作品。

診断メーカーを利用した自動生成投稿です。

#アンディーメンテ
#フリーゲーム`;
}

const title = pick(works);

console.log("選択された作品:", title);

const imageUrl = await fetchScreenshotUrl(title);

console.log("取得した画像URL:", imageUrl);

const post = generatePost(title, imageUrl);
console.log(post);

fs.mkdirSync("posts", { recursive: true });

const date = new Date().toISOString().slice(0, 10);
fs.writeFileSync(`posts/${date}.md`, post);
