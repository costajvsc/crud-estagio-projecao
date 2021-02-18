const btnAddClient = document.querySelector('#btn-add-client');
const btnEditClient = document.querySelector('#btn-edit-client');
const btnDeleteClient = document.querySelector('#btn-delete-client');
const btnAddPhone = document.querySelector('#btn-add-phone');
const btnEditPhone = document.querySelector('#btn-edit-phone');
const btnDeletePhone = document.querySelector('#btn-add-phone');

const modalWrapAddClient = document.querySelector('[data-js="modal-add-client"]');
const modalWrapEditClient = document.querySelector('[data-js="modal-edit-client"]');
const modalWrapDeleteClient = document.querySelector('[data-js="modal-delete-client"]');
const modalWrapAddPhone = document.querySelector('[data-js="modal-add-phone"]');
const modalWrapEditPhone = document.querySelector('[data-js="modal-edit-phone"]');
const modalWrapDeletePhone = document.querySelector('[data-js="modal-delete-phone"]');


const labelNameClientEdit = document.querySelector('[data-js="label-name-client-edit"]');
const labelNameClientDelete = document.querySelector('[data-js="label-name-client-delete"]');


const showModalAddClient = data => {
    modalWrapAddClient.style.display = 'block';
}
const showModalEditClient = (ClientID, nome, telefones)  => {
    labelNameClientEdit.innerHTML = nome

    let inputId = document.querySelector('#id-client-edit');
    let inputName = document.querySelector('#name-client-edit');

    inputId.value = ClientID;
    inputName.value = nome;

    modalWrapEditClient.style.display = 'block';
}
const showModalDeleteClient = (ClientID, nome, telefones) => {
    labelNameClientDelete.innerHTML = nome

    let inputId = document.querySelector('#id-client-delete');

    inputId.value = ClientID;

    modalWrapDeleteClient.style.display = 'block';
}

const showModalAddPhone = data => {
    modalWrapAddPhone.style.display = 'block';
}
const showModalEditPhone = data => {
    modalWrapEditPhone.style.display = 'block';
}
const showModalDeletePhone = data => {
    modalWrapDeletePhone.style.display = 'block';
}

modalWrapAddClient.addEventListener('click', event => {
    const target = event.target.classList[0]
    const classNames = ['modal-wrap', 'btn-dismiss-add-client']
    const closeModal = classNames.some(className => className === target)

    if (closeModal) {
        modalWrapAddClient.style.display = 'none'
    }
})

modalWrapEditClient.addEventListener('click', event => {
    const target = event.target.classList[0]
    const classNames = ['modal-wrap', 'btn-dismiss-edit-client']
    const closeModal = classNames.some(className => className === target)

    if (closeModal) {
        modalWrapEditClient.style.display = 'none'
    }
})

modalWrapDeleteClient.addEventListener('click', event => {
    const target = event.target.classList[0]
    const classNames = ['modal-wrap', 'btn-dismiss-delete-client']
    const closeModal = classNames.some(className => className === target)

    if (closeModal) {
        modalWrapDeleteClient.style.display = 'none'
    }
})

modalWrapAddPhone.addEventListener('click', event => {
    const target = event.target.classList[0]
    const classNames = ['modal-wrap', 'btn-dismiss-add-phone']
    const closeModal = classNames.some(className => className === target)

    if (closeModal) {
        modalWrapAddPhone.style.display = 'none'
    }
})

modalWrapEditPhone.addEventListener('click', event => {
    const target = event.target.classList[0]
    const classNames = ['modal-wrap', 'btn-dismiss-add-phone']
    const closeModal = classNames.some(className => className === target)

    if (closeModal) {
        modalWrapEditPhone.style.display = 'none'
    }
})

modalWrapDeletePhone.addEventListener('click', event => {
    const target = event.target.classList[0]
    const classNames = ['modal-wrap', 'btn-dismiss-add-phone']
    const closeModal = classNames.some(className => className === target)

    if (closeModal) {
        modalWrapDeletePhone.style.display = 'none'
    }
})