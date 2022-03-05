const addStyleSheets = (tagName) => {
  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = tagName;

  head.appendChild(link);
};

addStyleSheets(
  "https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Lato:wght@400;700&display=swap"
);

{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */
}
