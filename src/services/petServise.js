const url = 'http://localhost:5000/pets';

export const getAll = (category = '') => {
    let petsUrl = url + ((category && category != 'all') ? `?category=${category}` : '');

     return fetch(petsUrl)
        .then(res => res.json())
        .catch(err => console.log(err));
};

export const getOne = (petId) => {
    return fetch(`${url}/${petId}`)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const create = (petName, description, imageURL, category) => {
    let pet = {
        name: petName,
        description,
        imageURL,
        category
    };

    //vmesto .then v CreatePet.js
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
    });
};