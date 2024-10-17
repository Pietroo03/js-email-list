const emailListEl = document.querySelector('ul')
const buttonEl = document.querySelector('button')

buttonEl.addEventListener('click', () => {
    emailListEl.innerHTML = ''
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                console.log(response);
                const emailEl = response.data.response
                console.log(emailEl);
                const listItemEl = document.createElement('li')
                listItemEl.classList.add('col-lg-4', 'col-md-5','col-sm-12', 'pb-2', 'fs-4')
                listItemEl.innerHTML = emailEl
                emailListEl.appendChild(listItemEl)
            }) 
        }
})

