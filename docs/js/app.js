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
  // const other = addOther(data.other);
  const sports = addSport(data.other.sport);
  const music = addMusic(data.other.muziek);
  const work = addWork(data.other.werkplek);
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

const addSport = (sport) => {
  let content = document.getElementById('content');
  let element = document.createElement('h2');
  let textnode = document.createTextNode('Doet aan:');
  element.appendChild(textnode);
  content.appendChild(element);

  let elem = document.createElement('p');
  let text = document.createTextNode(sport);
  elem.appendChild(text);
  content.appendChild(elem);
};

const addMusic = (music) => {
  let content = document.getElementById('content');
  let element = document.createElement('h2');
  let textnode = document.createTextNode('Luistert graag naar:');
  element.appendChild(textnode);
  content.appendChild(element);

  let elem = document.createElement('p');
  let text = document.createTextNode(music);
  elem.appendChild(text);
  content.appendChild(elem);
};

const addWork = (work) => {
  let content = document.getElementById('content');
  let element = document.createElement('h2');
  let textnode = document.createTextNode('Verder hou ik er van om:');
  element.appendChild(textnode);
  content.appendChild(element);

  let elem = document.createElement('p');
  let text = document.createTextNode(work);
  elem.appendChild(text);
  content.appendChild(elem);
};

const addGit = (data) => {
  let content = document.getElementById('content');
  let element = document.createElement('a');
  let text = document.createTextNode('Bekijk mijn GitHub');
  element.href = data;
  element.target = '_blank';
  content.appendChild(element);
  element.appendChild(text);
};

// // // PUT REQUEST
// const putData = {
//   id: 39,
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
