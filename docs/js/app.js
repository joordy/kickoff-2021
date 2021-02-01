const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/';

// GET REQUEST
const teams = fetch(`${url}/squads/2/teams/6/members/`)
  .then((response) => response.json())
  .then((data) => {
    console.log('fetch', data);
    const justMyself = getMyName(data);
    console.log(justMyself[0]);
    const addHTML = createElements(justMyself[0]);
  });

const getMyName = (data) => {
  return data.filter((item) => {
    return item.name === 'Jordy';
  });
};

const createElements = (data) => {
  const name = addName(data.name, data.surname);
  const image = addImage(data.mugshot);
  const other = addOther(data.other);
  const gitHub = addGit(data.githubHandle);
};

const addName = (name, surname) => {
  let content = document.getElementById('content');
  let element = document.createElement('h1');
  let textnode = document.createTextNode(`${name} ${surname}`);
  element.appendChild(textnode);
  content.appendChild(element);
};

const addImage = (image) => {
  let content = document.getElementById('contentImage');
  let element = document.createElement('img');
  element.src = image;
  content.appendChild(element);
};

const addOther = (data) => {
  let content = document.getElementById('content');
  let element = document.createElement('ul');
  content.appendChild(element);

  let listItem = document.createElement('li');
  let itemOne = document.createTextNode(data.sport);
  listItem.appendChild(itemOne);
  element.appendChild(listItem);

  let listItemTwo = document.createElement('li');
  let itemTwo = document.createTextNode(data.muziek);
  listItemTwo.appendChild(itemTwo);
  element.appendChild(listItemTwo);

  let listItemThree = document.createElement('li');
  let itemThree = document.createTextNode(data.werkplek);
  listItemThree.appendChild(itemThree);
  element.appendChild(listItemThree);
};

const addGit = (data) => {
  let content = document.getElementById('content');
  let element = document.createElement('a');
  // let text = document.createTextNode('');

  element.href = data;
  element.target = '_blank';
  content.appendChild(element);
  // element.appendChild(text);
};

// const addName = (name, surname) => {
//   let element = document.createElement('h1');
//   let textnode = document.createTextNode(`${name} ${surname}`);
//   element.appendChild(textnode);
//   document.getElementById('content').appendChild(element);
// };
// // PUT REQUEST
// const putData = {
//   id: 1,
//   teamId: 6,
//   createdAt: '',
//   name: 'Jordy',
//   prefix: '',
//   surname: 'Fronik',
//   avatar: '',
//   mugshot: 'https://avatars.githubusercontent.com/u/48051912?s=400&u=346ea9e1040bca4b04cd890b47987e35176a2421&v=4',
//   githubHandle: 'https://github.com/joordy',
//   other: {
//     sport: 'Fitness, fietsen, hardlopen',
//     muziek: 'Noem maar op en ik vind het leuk',
//     werkplek: 'Thuis, achter mijn ultrawide',
//   },
// };

// async function postData(url = '', data = {}) {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// }

// postData(`${url}/squads/2/teams/6/members/`, putData).then((data) => {
//   console.log('add', data);
//   let element = document.createElement('h1');
//   let textnode = document.createTextNode(`${data.name} ${data.surname}`);
//   element.appendChild(textnode);
//   document.getElementById('content').appendChild(element);

//   console.log(data.name);
// });
