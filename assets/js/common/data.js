const data1 = {
    name: 'john',
    age: '32',


    describe: () => {
        //Ici vaux mieux utiliser le nom de l'objet ici "data1" plutôt que this.
        console.log(`Hello ${data1.name} vous avez ${data1.age} ans.`)
    }
};

const data2 = {
    name: 'jane',
    age: '64',
};

export {data1, data2}

//Ou second choix :

/*
    export default data2;
    export {data1};
 */

