# Convert CSV to Markdown

This is a Node script to convert CSV files to Markdown files. We recently migrated over from a traditional CMS called [October](https://octobercms.com/) to a static site generator called [Gatsby](https://www.gatsbyjs.org/). With posts being exported in a CSV file, we thought it'd be best to automate the process of creating Markdown files with front matter data that we can then import into our new Gatsby blog (which you can [take a look at the code here](https://github.com/ninjality/web)).

## Install

1. Clone this repository: `git clone https://github.com/ninjality/convert-csv-markdown.git`
2. Install dependencies: `npm install` or `yarn install` [(learn about yarn)](https://yarnpkg.com/)

## Usage

The entire script is in `src/index.js`. Anything configurable is declared at the top, so make sure to update `CSV_PATH`, `MARKDOWN_DIR`, `getMarkdownPath`, and `renderMarkdown` as needed.

The `example.csv` file is what will be used to convert posts into Markdown. Make sure to keep the same format, with the first line being the column names. It's also important to reference these column names correctly in the script.

You can run `npm run convert` or `yarn convert` to run the script, which by default will create `.md` files in the `markdown-posts` folder.

## Credits

Many thanks to the creators of [Noderize](https://noderize.js.org/) and [csv-parse](https://github.com/adaltas/node-csv-parse) for allowing easier development of this script. We hope to update it in the future as an interactive CLI script that you can install globally through npm, but for now we hope this makes your migrations less painful!
