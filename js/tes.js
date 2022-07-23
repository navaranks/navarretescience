const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".subcontent");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("activetab");
    });
    e.target.classList.add("activetab");

    contents.forEach((content) => {
      content.classList.remove("activetab");
    });
    const element = document.getElementById(id);
    element.classList.add("activetab");
  }
};
