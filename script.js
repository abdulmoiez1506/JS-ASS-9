const softwareCompany = {
    name : '404 NOT FOUND',
    founder: 'MOIEZ ABDULLAH TALHA',
    yearFounded: 2024,
    products: ['Operating Systems', 'Development Tools', 'Cloud Services']
}
console.log(`Name of the company is ${softwareCompany.name}`);
console.log(`Name of the founder of company is ${softwareCompany.founder}`);
console.log(`Company was founded in ${softwareCompany.yearFounded}`);
console.log(`Products of the company are ${softwareCompany.products}`);


const car = {
    brand: 'LAMBORGINI',
    model: 'DESERT EDTION',
    year: 2024,
    drive: function() {
        console.log(`The ${this.year} ${this.brand} ${this.model} is being driven.`);
    }
};
car.drive();