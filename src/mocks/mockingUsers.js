import { faker } from "@faker-js/faker";
import { createHash,passwordValidation } from "../utils/index.js";

export const generateUser = async (numUsers) =>{
    let users = [];

    for(let i = 0; i<numUsers; i++){
        const user ={
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: await createHash('coder123'),
            role: faker.helpers.arrayElement(['user', 'admin']),
            pets:[]
        }
        
        users.push(user);
    }
    return users;
};