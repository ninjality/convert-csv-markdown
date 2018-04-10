import { createReadStream, writeFile, mkdirp } from "fs-extra";
import parse from "csv-parse";
import mapKeys from "lodash/mapKeys";
import formatDate from "date-fns/format";
import dedent from "dedent";

// Input CSV file
const CSV_PATH = `${__dirname}/../example.csv`;

// Output Markdown folder
const MARKDOWN_DIR = `${__dirname}/../markdown-posts`;

// Filenames of Markdown files
const getMarkdownPath = post => `${MARKDOWN_DIR}/${post.Slug}.md`;

// Template for Markdown files
const renderMarkdown = post => dedent`
  ---
  title: "${post.Title}"
  excerpt: "${post.Excerpt}"
  author: "${post.Author || "Example default"}"
  categories: "${post.Categories}"
  date: "${formatDate(post["Published date"])}"
  path: "/blog/${post.Slug}"
  ---

  ${post.Content}
`;

const stream = createReadStream(CSV_PATH);

const parser = parse({ columns: true }, (error, posts) => {
  if (error) throw new Error(error);
  if (!Array.isArray(posts)) throw new Error("Incorrect CSV format");

  mkdirp(MARKDOWN_DIR);

  posts.forEach(post => {
    const convertedPost = renderMarkdown(post);
    const filepath = getMarkdownPath(post);

    writeFile(filepath, convertedPost, error => {
      if (error) throw new Error(`Could not create ${filepath}`);
      console.log(`Created ${filepath}`);
    });
  });
});

stream.pipe(parser);
