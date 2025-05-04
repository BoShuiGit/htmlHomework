
<<<<<<< Updated upstream
document.addEventListener("DOMContentLoaded", function(){
=======
document.addEventListener("DOMContentLoaded", function() {
>>>>>>> Stashed changes

  var videos = document.querySelectorAll('.video');
  videos.forEach(function (img) {
    img.parentNode.style.position = "relative";

    var play = document.createElement('div');
    play.style.position = "absolute";
    play.style.bottom = "5px";
    play.style.left = "5px";
    play.style.backgroundColor = "rgba(0,0,0,0.7)";
    play.style.borderRadius = "50%";
    play.style.width = "20px";
    play.style.height = "20px";
    play.style.display = "flex";
    play.style.alignItems = "center";
    play.style.justifyContent = "center";

    var triangle = document.createElement('div');
    triangle.style.width = "0";
    triangle.style.height = "0";
    triangle.style.borderTop = "4px solid transparent";
    triangle.style.borderBottom = "4px solid transparent";
    triangle.style.borderLeft = "6px solid white";
    triangle.style.marginLeft = "2px"; // Center it a bit

    play.appendChild(triangle);
    img.parentNode.appendChild(play);
  });
<<<<<<< Updated upstream
});

// document.addEventListener("DOMContentLoaded",function(){
//   localStorage.setItem("newsOne", JSON.stringify({"title":"myTitle", "content":"myContent"}));
//   local.Storage.setItem("newsTwo", JSON.stringify({"title":"myTitle", "content":"myContent"}));
//   localStorage.setItem("newsThree", JSON.stringify({"title":"myTitle", "content":"myContent"}));
// })

document.addEventListener("DOMContentLoaded", function () {
  const articleSelect = document.getElementById("articleSelect");
  const editSection = document.getElementById("editSection");
  const titleInput = document.getElementById("titleInput");
  const contentInput = document.getElementById("contentInput");

  const previewButton = document.getElementById("previewButton");
  const previewContainer = document.getElementById("previewContainer");
  const previewTitle = document.getElementById("previewTitle");
  const previewContent = document.getElementById("previewContent");
  const applyButton = document.getElementById("applyButton");

  let currentArticleId = "";

  articleSelect.addEventListener("change", () => {
    const selected = articleSelect.value;
    if (selected) {
      currentArticleId = selected + "Display";
      const article = document.getElementById(currentArticleId);
      const currentTitle = article.querySelector("h3").textContent;
      const currentContent = article.querySelector("p").textContent;
      titleInput.value = currentTitle;
      contentInput.value = currentContent;

      editSection.classList.remove("hidden");
      previewContainer.classList.add("hidden");
    } else {
      editSection.classList.add("hidden");
      previewContainer.classList.add("hidden");
    }
  });

  previewButton.addEventListener("click", () => {
    previewTitle.textContent = titleInput.value.trim();
    previewContent.textContent = contentInput.value.trim();
    previewContainer.classList.remove("hidden");
  });

  applyButton.addEventListener("click", () => {
    if (currentArticleId) {
      const article = document.getElementById(currentArticleId);
      article.querySelector("h3").textContent = titleInput.value.trim();
      article.querySelector("p").textContent = contentInput.value.trim();
      alert("Changes applied to the article (in DOM only).");
    }
  });
});
=======


  const selectedArticle = localStorage.getItem('selectedArticle');
  const articleToUpdate = localStorage.getItem('articleToUpdate');

  if (selectedArticle && articleToUpdate) {
    try {
      const articleData = JSON.parse(selectedArticle);
      let targetArticle;


      if (articleToUpdate === 'article1') {
        targetArticle = document.querySelector('article.inrikes:nth-of-type(1)');
      } else if (articleToUpdate === 'article2') {
        targetArticle = document.querySelector('article.inrikes:nth-of-type(2)');
      } else if (articleToUpdate === 'article3') {
        targetArticle = document.querySelector('div.border-t-4 article');
      }

      if (targetArticle) {

        const titleElement = targetArticle.querySelector('.title');
        const contentElement = targetArticle.querySelector('.content');

        if (titleElement) titleElement.textContent = articleData.title;
        if (contentElement) contentElement.textContent = articleData.content;
      }
    } catch (error) {
      console.error('Error updating article:', error);
    }
  }
});


>>>>>>> Stashed changes


