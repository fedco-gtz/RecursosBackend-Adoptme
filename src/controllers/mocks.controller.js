import { generatePet } from "../mocks/mockingPets.js";
import { generateUser } from "../mocks/mockingUsers.js";
import { petsService, usersService } from "../services/index.js";
import logger from "../utils/loggers.js";

const generatePets = (req,res) =>{ 
    const npets = req.query.num || 50;

    if(isNaN(npets) || npets < 1){
        return res.status(400).json({error: 'Valor invalido'});
    }

    const pets = generatePet(npets) 
    res.status(200).json(pets);
}

const  generateUsers = async (req,res) =>{
    const nusers = req.query.num || 50;

    if(isNaN(nusers) || nusers < 1){
        return res.status(400).json({error: 'Valor invalido'});
    }

    const users = await generateUser(nusers);
    res.status(200).json(users);
}

const generateData = async(req,res) =>{
    const nusers = req.params.users;
    const nupets = req.params.pets;

    try {

        if(isNaN(nusers) || nusers < 1 && isNaN(nupets) || nupets < 1){
            return res.status(400).json({error: 'Valor invalido'});
        }

        const users = await generateUser(nusers);
        const pets =  await generatePet(nupets);

        const responseUsers = await usersService.create(users);
        const responsepets = await petsService.create(pets);

        res.status(200).send({ status: 'success', payload: {users,pets} });

    } catch (error) {
        logger.error(error);
    }
    
}

export default{
    generateData,
    generatePets,
    generateUsers
}