
document.addEventListener('DOMContentLoaded', function() {

  const newsItems = [];


  const keys = ["newsOne", "newsTwo", "newsThree", "oldOne", "oldTwo", "oldThree"];


  keys.forEach(key => {
    const item = localStorage.getItem(key);
    if (item) {
      const parsedItem = JSON.parse(item);

      parsedItem.key = key;
      newsItems.push(parsedItem);
    }
  });


  newsItems.sort((a, b) => new Date(a.date) - new Date(b.date));


  const articles = document.querySelectorAll('article.inrikes');


  for (let i = 0; i < Math.min(articles.length, newsItems.length); i++) {
    if (newsItems[i] && articles[i]) {
      const article = articles[i];
      const newsItem = newsItems[i];


      const img = article.querySelector('img');
      const title = article.querySelector('h2.title');
      const content = article.querySelector('p.content');
      const link = article.querySelector('a.link');


      if (img) img.src = newsItem.img || newsItem.imgsrc || "";
      if (title) title.textContent = newsItem.title || "";
      if (content) content.textContent = newsItem.content || "";
      if (link) link.href = newsItem.link || newsItem.linkhref || "#";


      const date = document.createElement('p');
      date.className = 'text-gray-500 text-sm mt-2';
      date.textContent = formatDate(newsItem.date);
      article.appendChild(date);
    } else {

      if (articles[i]) articles[i].style.display = "none";
    }
  }


  function formatDate(dateString) {
    if (!dateString) return "";

    const date = new Date(dateString);
    return date.toLocaleDateString('sv-SE');
  }
});

