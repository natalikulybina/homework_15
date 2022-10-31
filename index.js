const request = new XMLHttpRequest();

request.open('GET', 'https://users-api-id.herokuapp.com/users');

request.send();

request.onload = () => {
  const reply = JSON.parse(request.response);
  reply.forEach(renderItem);
};

const list = document.querySelector("ul");

function renderItem({ name, photo, position }) {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <h2>${name}</h2>
    <img src="${photo}">
    <p>${position}</p>
    `,
    list.append(listItem);
}
