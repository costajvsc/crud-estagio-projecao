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

const showModalAddClient = data => {
    modalWrapAddClient.style.display = 'block';
}
const showModalEditClient = (ClientID, nome, telefones)  => {
    let labelNameClient = document.querySelector('[data-js="label-name-client-edit"]');
    let inputId = document.querySelector('#id-client-edit');
    let inputName = document.querySelector('#name-client-edit');
    
    labelNameClient.innerHTML = nome
    inputName.value = nome;
    inputId.value = ClientID;

    modalWrapEditClient.style.display = 'block';
}
const showModalDeleteClient = (ClientID, nome, telefones) => {
    let labelNameClient = document.querySelector('[data-js="label-name-client-delete"]');
    let inputId = document.querySelector('#id-client-delete');
    
    labelNameClient.innerHTML = nome
    inputId.value = ClientID;
    
    modalWrapDeleteClient.style.display = 'block';
}

const showModalAddPhone = (ClientID, nome, telefones) => {
    let labelNameClient = document.querySelector('[data-js="label-name-phone-add"]');
    let listPhone = document.querySelector('[data-js="list-phone-add"]');
    let inputId = document.querySelector('#client-id-add-phone');

    labelNameClient.innerHTML = nome
    inputId.value = ClientID

    console.log(telefones)

    listPhone.innerHTML = ''
    telefones.forEach(phone => {
        let li = document.createElement('li');
        li.innerHTML = `<span> ${phone.ddd} ${phone.telefone} </span>
            <span> 
                <i id="btn-edit-delete" onclick="showModalEditPhone('${phone.telefoneID}', '${phone.ddd}', '${phone.telefone}')" class="fas fa-edit fa-lg mx-0 text-warning d-none" aria-hidden="true"></i>
                <i id="btn-delete-phone" onclick="showModalDeletePhone('${phone.telefoneID}')" class="far fa-trash-alt mx-0 fa-lg text-danger d-none" aria-hidden="true"></i>
            </span>
        ` 
        li.classList.add('d-flex', 'justify-content-between');
        listPhone.appendChild(li)
    })

    modalWrapAddPhone.style.display = 'block';
}
const showModalEditPhone = (TelefoneID, ddd, telefone) => {
    let phoneID = document.querySelector('#id-phone-edit');
    let phoneDDD = document.querySelector('#edit-ddd-phone');
    let phoneNumber = document.querySelector('#edit-phone-number');

    phoneID.value = TelefoneID
    phoneDDD.value = ddd
    phoneNumber.value = telefone

    modalWrapEditPhone.style.display = 'block';
}
const showModalDeletePhone = TelefoneID => {
    let phoneID = document.querySelector('#id-phone-delete')

    phoneID.value = TelefoneID

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