# Yue Ming's personal site

A static personal website containing essays, thoughts, reading notes, products, and an investment page.

## Local preview

Run a local server from the project directory:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). A local server is required for loading Markdown articles through `fetch`.

## Main files

- `index.html`: homepage and essay list
- `essay-detail.html`: Markdown essay renderer
- `thoughts.html`: short-form thoughts
- `books.html`: reading list
- `products.html`: product showcase
- `investment.html`: investment portfolio
- `styles.css`: shared styles
- `translations.js`: shared language and theme behavior
