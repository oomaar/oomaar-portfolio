const addStyleSheets = (tagName) => {
  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = tagName;

  head.appendChild(link);
};

addStyleSheets(
  "https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
);
