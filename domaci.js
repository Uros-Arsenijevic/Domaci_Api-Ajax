$.ajax({
    type: "Get",
    url: 'https://reqres.in/api/users?page=2',
    success: (response) => {
        let data = response.data;

        $(data).each((index, singleElements) => {
            let element = document.createElement('div')
            $(element).addClass('character')
                        .html(
                            `
                            <p>${singleElements.email}</p>
                            // <b>${singleElements.first_name}</b>
                            <img src="${singleElements.avatar}">
                            `
                        )
                        .appendTo('.all-Characters')

        })             
    }
})
