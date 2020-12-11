const inputUSD = document.querySelectorAll('#usd'),
    inputRUB = document.querySelectorAll('#rub'),
    btnConvert = document.querySelectorAll('.convert'),
    select = document.getElementById('currency'),
    inputName = document.querySelectorAll('.input-name');

const convertCurr = () => fetch('https://api.exchangeratesapi.io/latest?base=USD', {
      method: 'GET'
    });
      convertCurr()
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    return response.json();
                })
                .then(response => {
                  btnConvert[0].addEventListener('click', () => {
                    if (inputUSD[0].value.trim() === '') {
                      alert('Введите число!!!')
                    } else {
                      inputRUB[0].value = inputUSD[0].value * response.rates.RUB;
                    }
                  });
                  btnConvert[1].addEventListener('click', () => {
                    if (inputRUB[1].value.trim() === '') {
                      alert('Введите число!!!')
                    } else {
                      inputUSD[1].value = inputRUB[1].value / response.rates.RUB;
                    }
                  });
                })
                .catch(error => console.log(error));

select.addEventListener('change', () => {
  const inputAll = document.querySelectorAll('input');
  inputAll.forEach(item => {
    item.value = '';
  });
  if (select.value === 'usd') {
    inputName.forEach(item => {
      item.textContent = 'Доллар США';
    });
    const convertCurr = () => fetch('https://api.exchangeratesapi.io/latest?base=USD', {
      method: 'GET'
    });
      convertCurr()
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    return response.json();
                })
                .then(response => {
                  btnConvert[0].addEventListener('click', () => {
                    if (inputUSD[0].value.trim() === '') {
                      alert('Введите число!!!')
                    } else {
                      inputRUB[0].value = inputUSD[0].value * response.rates.RUB;
                    }
                  });
                  btnConvert[1].addEventListener('click', () => {
                    if (inputRUB[1].value.trim() === '') {
                      alert('Введите число!!!')
                    } else {
                      inputUSD[1].value = inputRUB[1].value / response.rates.RUB;
                    }
                  });
                })
                .catch(error => console.log(error));
  }
  if (select.value === 'eur') {
    inputName.forEach(item => {
      item.textContent = 'Евро';
    });
    const convertCurr = () => fetch('https://api.exchangeratesapi.io/latest?base=EUR', {
      method: 'GET'
    });
      convertCurr()
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    return response.json();
                })
                .then(response => {
                  btnConvert[0].addEventListener('click', () => {
                    if (inputUSD[0].value.trim() === '') {
                      alert('Введите число!!!')
                    } else {
                      inputRUB[0].value = Math.floor(inputUSD[0].value * response.rates.RUB);
                    }
                  });
                  btnConvert[1].addEventListener('click', () => {
                    if (inputRUB[1].value.trim() === '') {
                      alert('Введите число!!!')
                    } else {
                      inputUSD[1].value = Math.ceil(inputRUB[1].value / response.rates.RUB);
                    }
                  });
                })
                .catch(error => console.log(error));
  }
});
