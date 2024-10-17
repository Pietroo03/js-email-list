const emailListEl = document.querySelector('ul')




for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => {
            console.log(response);
            const emailEl = response.data.response
            console.log(emailEl);
            const listItemEl = document.createElement('li')
            listItemEl.classList.add('col-4')
            listItemEl.innerHTML = emailEl
            emailListEl.appendChild(listItemEl)
        }) 
    }
