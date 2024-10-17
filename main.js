
const emailListEl = document.querySelector('ul')
console.log(emailListEl);




axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
        console.log(response);
        console.log(response.data.response);
        for (let i = 0; i < 10; i++) {
            const emailEl = response.data.response
            console.log(emailEl);
            const listItemEl = document.createElement('li')
            listItemEl.innerHTML = emailEl
            emailListEl.appendChild(listItemEl)
        }

        
    })
