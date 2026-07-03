export async function fetchScreenshotUrl(title) {
  const url = `https://shindanmaker.com/1078301?name=${encodeURIComponent(title)}`;

  const res = await fetch(url);
  const html = await res.text();

  // 画像URL抽出（診断メーカーのOGP画像想定）
  const match = html.match(/<meta property="og:image" content="([^"]+)"/);

  if (!match) {
    return null;
  }

  return match[1];
}
