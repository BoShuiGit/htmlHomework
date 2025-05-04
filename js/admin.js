
  document.addEventListener("DOMContentLoaded", function() {

  const targetSelect = document.getElementById("targetSelect");
  const sourceSelect = document.getElementById("sourceSelect");
  const replaceButton = document.getElementById("replaceButton");
  const successMessage = document.getElementById("successMessage");
  const deleteSelect = document.getElementById("deleteSelect");
  const deleteButton = document.getElementById("deleteButton");
  const deleteSuccessMessage = document.getElementById("deleteSuccessMessage");


  replaceButton.addEventListener("click", function() {
  const targetKey = targetSelect.value;
  const sourceKey = sourceSelect.value;


  if (!targetKey || !sourceKey) {
  alert("Please select both a target article and a source article.");
  return;
}


  const sourceData = JSON.parse(localStorage.getItem(sourceKey));


  const newData = {
  title: sourceData.title,
  content: sourceData.content,
  img: sourceData.imgsrc || sourceData.img,
  link: sourceData.linkhref || sourceData.link,
  date: new Date().toISOString().split('T')[0]
};


  localStorage.setItem(targetKey, JSON.stringify(newData));


  successMessage.classList.remove("hidden");
  setTimeout(function() {
  successMessage.classList.add("hidden");
}, 3000);
});


  deleteButton.addEventListener("click", function() {
  const deleteKey = deleteSelect.value;

  if (!deleteKey) {
  alert("Please select an article to delete.");
  return;
}


  localStorage.removeItem(deleteKey);


  deleteSuccessMessage.classList.remove("hidden");
  setTimeout(function() {
  deleteSuccessMessage.classList.add("hidden");
}, 3000);
});
});
