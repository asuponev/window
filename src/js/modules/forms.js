import checkNumInputs from './checkNumInputs';

const forms = (state) => {
  const allForms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input');

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Loading...',
    success: 'Thank you! Our specialist will contact you soon.',
    failure: 'Oops, something went wrong...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;

    let res = await fetch(url, {
      method: 'POST',
      body: new URLSearchParams(data)
    });

    return await res.json();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  allForms.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      };

      // output the received data to the console when the server is down
      const formDataObj = {};
      formData.forEach((value, key) => (formDataObj[key] = value));
      console.log(formDataObj);
      // ---

      postData('http://localhost:4001/clients', formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => statusMessage.textContent = message.failure)
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;