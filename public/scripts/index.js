((document) => {
    const Page = (title, body) => {
        return {
            title: title,
            body: body
        }
    }

    const Button = (title, target, action) => {
        return {
            title: title,
            target: target,
            action: action
        }
    }

    const Wizard = ((document) => {
        return {
            currentPage: 0,
            history: [],
            pages: [
                Page(
                    "Step 1 Content",
                    `Step 1 lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.`
                ),
                Page(
                    "Step 2 Content",
                    `It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.`
                ),
                Page(
                    "Step 3 Content",
                    `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.`
                ),
                Page(
                    "Step 4 Content",
                    `<div class="card">
                        <div class="card-header">My Details</div>
                            <div class="card-block">
                                <table class="table">
                                    <tbody>
                                    <tr>
                                        <th>Name:</th>
                                        <td>Tim Smith</td>
                                    </tr>
                                    <tr>
                                        <th>Email:</th>
                                        <td>example@example.com</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>`
                )
            ],

            buttons: [
                Button("Prev", "prev-btn", () => {
                    Wizard.currentPage = Wizard.currentPage - 1;
                    Wizard.renderPage();
                }),
                Button("Next", "next-btn", () => {
                    Wizard.currentPage = Wizard.currentPage + 1;
                    Wizard.renderPage();
                })
            ],
            
            renderButtons: () => {
                
                Wizard.buttons.map((button) => {

                    const createdButton = document.createElement('button');
                    createdButton.classList.add(button.target);
                    createdButton.innerText = button.title;

                    document.querySelector('#buttons').appendChild(createdButton);
                    createdButton.addEventListener('click', button.action);

                })

            },

            renderPage: () => {
                const page = Wizard.pages[Wizard.currentPage];
                const markup = `
                    <h1 class="title">${page.title}</h1>
                    <div class="body">${page.body}</div>
                `;
                document.querySelector('#page').innerHTML = markup;
            },

            render: () => {
                Wizard.renderPage();
                Wizard.renderButtons();
            }
        }
    })(document);

    Wizard.render();
    
})(document);