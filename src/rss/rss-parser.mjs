import { writeFileSync } from 'fs';
import Parser from 'rss-parser';
const parser = new Parser();

(async () => {
  const feed = await parser.parseURL('https://zenn.dev/hiromu617/feed');
  const items = feed.items.map((data) => {
    return { title: data.title, link: data.link, pubDate: data.pubDate };
  });
  writeFileSync('src/rss/posts.json', JSON.stringify(items));
})();
