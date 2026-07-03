import fs from "fs";
import { fetchScreenshotByName } from "./screenshot.js";
import { generateSeed } from "./random.js";

function generatePost(result, seed) {
  return `【アンディーメンテ診断結果】

入力ID：
${seed}

診断タイトル：
${result.title}

スクリーンショット：
${result.image}

自動生成結果です。

#アンディーメンテ`;
}

const seed = generateSeed(12);

console.log("生成されたユーザー名:", seed);

const result = await fetchScreenshotByName(seed);

const post = generatePost(result, seed);

console.log(post);

fs.mkdirSync("posts", { recursive: true });

const date = new Date().toISOString().slice(0, 10);
fs.writeFileSync(`posts/${date}.md`, post);
