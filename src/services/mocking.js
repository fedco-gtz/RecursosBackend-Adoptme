import {faker} from "@faker-js/faker"; 
import { createHash } from "../utils/index.js";

class MockingService {
    static async generateMockingUsers(num) {
        const users = [];
    
        for (let i = 0; i < num; i++) {
            users.push({
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []
            });
        }
        return users;
    }

    static async generateMockingPets(num){
        const pets = []; 

        for (let i = 0; i < num; i++) {
            pets.push({
                name: faker.animal.dog(),
                specie: faker.animal.type(),
                adopted: false
            })
        }
        console.log(pets);
        return pets; 
    }
}

export default MockingService; 