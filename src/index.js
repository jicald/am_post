import fs from "fs";

const works = [
  "アールエス",
  "イストワール",
  "シルフェイド見聞録",
  "グロリアスドーン",
  "タイムアタックRPG"
];

function pickWork() {
  return works[Math.floor(Math.random() * works.length)];
}

// 「AIっぽい生成関数（後で本物AIに差し替える）」
function generatePost(title) {
  const styles = [
    "システム中心",
    "世界観重視",
    "初見プレイヤー視点",
    "コアファン向け視点",
    "UI・操作感視点"
  ];

  const style = styles[Math.floor(Math.random() * styles.length)];

  return `【アンディーメンテ紹介】

作品名：${title}

視点：${style}

この作品は独自性の強いフリーゲームで、一般的なRPGとは異なる設計思想を持っています。
プレイヤーごとに印象が変わる構造が特徴です。

#アンディーメンテ
#フリーゲーム`;
}

const work = pickWork();
const post = generatePost(work);

console.log(post);

fs.mkdirSync("posts", { recursive: true });

const date = new Date().toISOString().slice(0, 10);
fs.writeFileSync(`posts/${date}.md`, post);
