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
const showModalEditClient = (ClientID, clientName, telefones)  => {
    let labelNameClient = document.querySelector('[data-js="label-name-client-edit"]');
    let clientIDInput = document.querySelector('#id-client-edit');
    let clientNameInput= document.querySelector('#name-client-edit');
    
    labelNameClient.innerHTML = clientName
    clientNameInput.value = clientName;
    clientIDInput.value = ClientID;

    modalWrapEditClient.style.display = 'block';
}
const showModalDeleteClient = (ClientID, clientName) => {
    let labelNameClient = document.querySelector('[data-js="label-name-client-delete"]');
    let clientIDInput = document.querySelector('#id-client-delete');
    
    labelNameClient.innerHTML = clientName
    clientIDInput.value = ClientID;
    
    modalWrapDeleteClient.style.display = 'block';
}

const showModalAddPhone = (ClientID, nameClient, phones) => {
    let labelNameClient = document.querySelector('[data-js="label-name-phone-add"]');
    let listPhone = document.querySelector('[data-js="list-phone-add"]');
    let clientIDInput = document.querySelector('#client-id-add-phone');

    labelNameClient.innerHTML = nameClient
    clientIDInput.value = ClientID

    listPhone.innerHTML = ''
    phones.forEach(phone => {
        let li = document.createElement('li');
        li.innerHTML = `<span> ${phone.ddd} ${phone.phoneNumber} </span>
            <span> 
                <i id="btn-edit-delete" onclick="showModalEditPhone('${phone.phoneID}', '${phone.ddd}', '${phone.phoneNumber}')" class="fas fa-edit fa-lg mx-0 text-warning d-none" aria-hidden="true"></i>
                <i id="btn-delete-phone" onclick="showModalDeletePhone('${phone.phoneID}')" class="far fa-trash-alt mx-0 fa-lg text-danger d-none" aria-hidden="true"></i>
            </span>
        ` 
        li.classList.add('d-flex', 'justify-content-between');
        listPhone.appendChild(li)
    })

    modalWrapAddPhone.style.display = 'block';
}
const showModalEditPhone = (phoneID, ddd, phoneNumber) => {
    let phoneIDInput = document.querySelector('#id-phone-edit');
    let phoneDDDInput = document.querySelector('#edit-ddd-phone');
    let phoneNumberInput = document.querySelector('#edit-phone-number');

    phoneIDInput.value = phoneID
    phoneDDDInput.value = ddd
    phoneNumberInput.value = phoneNumber

    modalWrapEditPhone.style.display = 'block';
}
const showModalDeletePhone = PhoneID => {
    let phoneIDInput = document.querySelector('#id-phone-delete')

    phoneIDInput.value = PhoneID

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