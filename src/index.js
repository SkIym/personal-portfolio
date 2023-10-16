import './assets/style.css';

const dropDownCnt = document.querySelector('.dropdown-content');
const dropDownBtn = document.querySelector('#dropdown-button');

function showDropDown() {
  console.log("assad")
  dropDownCnt.classList.toggle('show');
}

dropDownBtn.onclick = showDropDown;