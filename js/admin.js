
document.addEventListener("DOMContentLoaded",function () {

  localStorage.setItem("newsOne", JSON.stringify({
    "title": "Technology Giant Releases Revolutionary Product",
    "content": "The new device is expected to transform how people interact with digital content in their daily lives."
  }));

  localStorage.setItem("newsTwo", JSON.stringify({
    "title": "Sports Team Wins Championship After Dramatic Final",
    "content": "In a stunning comeback, the underdogs managed to secure victory in the last minutes of the game."
  }));

  localStorage.setItem("newsThree", JSON.stringify({
    "title": "New Climate Policy Announced",
    "content": "Government officials have unveiled a comprehensive plan to reduce carbon emissions by 50% by 2030."
  }));
})



  document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('loadButton');
    const applyButton = document.getElementById('applyButton');
    const storageKeyInput = document.getElementById('storageKeyInput');
    const articleSelect = document.getElementById('articleSelect');
    const previewContainer = document.getElementById('previewContainer');
    const previewTitle = document.getElementById('previewTitle');
    const previewContent = document.getElementById('previewContent');


    loadButton.addEventListener('click', function() {
      const selectedKey = storageKeyInput.value;

      if (!selectedKey) {
        alert('Please select a content item first');
        return;
      }

      try {
        const storedData = localStorage.getItem(selectedKey);

        if (storedData) {
          const parsedData = JSON.parse(storedData);

          // Show preview
          previewTitle.textContent = parsedData.title;
          previewContent.textContent = parsedData.content;
          previewContainer.classList.remove('hidden');


          if (articleSelect.value) {
            applyButton.classList.remove('hidden');
          }
        } else {
          alert('No data found for the selected key');
        }
      } catch (error) {
        console.error('Error loading data:', error);
        alert('Error loading data');
      }
    });


    articleSelect.addEventListener('change', function() {
      if (articleSelect.value && !previewContainer.classList.contains('hidden')) {
        applyButton.classList.remove('hidden');
      } else {
        applyButton.classList.add('hidden');
      }
    });


    applyButton.addEventListener('click', function() {
      const selectedKey = storageKeyInput.value;
      const selectedArticle = articleSelect.value;

      if (!selectedKey || !selectedArticle) {
        alert('Please select both content and an article to replace');
        return;
      }

      try {

        localStorage.setItem('selectedArticle', localStorage.getItem(selectedKey));
        localStorage.setItem('articleToUpdate', selectedArticle);

        alert('Changes applied! View the website to see your changes.');
      } catch (error) {
        console.error('Error applying changes:', error);
        alert('Error applying changes');
      }
    });
  })




