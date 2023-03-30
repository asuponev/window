const forms = () => {
  const allForms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });

  const message = {
    loading: 'Loading...',
    success: 'Thank you! Our specialist will contact you soon.',
    failure: 'Oops, something went wrong...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;

    let res = await fetch(url, {
      method: 'POST',
      body: data
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
      console.log('user_name:', formData.get('user_name'));
      console.log('user_phone:', formData.get('user_phone'));
      const data = new URLSearchParams(formData);

      postData('http://localhost:4001/clients', data)
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