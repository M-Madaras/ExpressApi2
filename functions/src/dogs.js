export function getDogs(req, res) {
    res.send([{name : 'Ryder', age: 4, breed: 'Dumbass', gender: 'MN'},
    {name: 'Duke', age: 2, breed: 'Rotweiler', gender: 'M'},
    {name: 'Indago', age: 10, breed: 'Great dane/ lab mix', gender: 'F'}
    

]);
}

