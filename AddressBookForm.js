class Person {
  get name() {
    return this._name;
  }

  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-z]{2,}$");
    if (nameRegex.test(name)) this._name = name;
    else throw "Name is Incorrect";
  }

  get address() {
    return this._address;
  }

  set address(address) {
    this._address = address;
  }

  get state() {
    return this._state;
  }

  set state(state) {
    this._state = state;
  }

  get city() {
    return this._city;
  }

  set city(city) {
    this._city = city;
  }

  get zip() {
    return this._zip;
  }

  set zip(zip) {
    this._zip = zip;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  set phoneNumber(phoneNumber) {
    this._phoneNumber = phoneNumber;
  }
}

const save = () => {
  alert("Save Method Called");
  try {
    let personData = setPersonData();
    createAndStore(personData);
  } catch (e) {
    return;
  }
  resetForm(personData);
};

const setPersonData = () => {
  let personData = new Person();
  try {
    personData.name = getInputValueById("#name");
  } catch (e) {
    setTextValue(".text-error", e);
    throw e;
  }

  personData.address = getInputValueById("#address").pop();
  personData.city = getInputValueById("#city");
  personData.state = getInputValueById("#state");
  personData.zip = getInputValueById("#zipcode");
  personData.phoneNumber = getInputValueById("#phonenumber");
  return personData;
};

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

const createAndStore = (personData) => {
  
  alert(personData._name);
  let personList = JSON.parse(localStorage.getItem('personList'));
  if(personList != undefined){
      personList.push(personData);
  }else{
      personList = [personData];
  }
  localStorage.setItem("personList",JSON.stringify(personList));
}

window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const textError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.lenght == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new Person().name = name.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });
});


