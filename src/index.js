import fs from "fs";

const works = [
  "アールエス",
  "イストワール",
  "シルフェイド見聞録",
  "グロリアスドーン",
  "タイムアタックRPG"
];

const viewpoints = [
  "世界観に注目",
  "システム重視",
  "初見プレイヤー目線",
  "独特な設計",
  "自由度の高さ",
  "UIや操作性"
];

const templates = [
  (w, v) => `作品名「${w}」。

今回は「${v}」の視点で紹介する。

一般的なRPGとは異なる構造を持ち、プレイヤーごとに体験が変化するタイプの作品。

遊び方そのものに個性があり、探索の自由度が高い点が特徴。`,

  (w, v) => `「${w}」について「${v}」の観点で見ると、
この作品は通常のゲーム構造に収まらない設計が特徴的。

進行や体験が固定されておらず、プレイヤーの選択によって印象が大きく変化する。`,

  (w, v) => `フリーゲーム「${w}」。

今回は「${v}」を軸に紹介。

シンプルな形式に見えて、内部はかなり独自性が強く、一般的なRPGとは異なる体験設計になっている。`
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePost(work) {
  const view = pick(viewpoints);
  const tpl = pick(templates);

  return tpl(work, view);
}

const work = pick(works);
const post = generatePost(work);

console.log(post);

// 保存
fs.mkdirSync("posts", { recursive: true });

const date = new Date().toISOString().slice(0, 10);
fs.writeFileSync(`posts/${date}.md`, post);
