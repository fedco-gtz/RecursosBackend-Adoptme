import MockingService from "../services/mocking.js";
import userModel from "../dao/models/User.js";
import petModel from "../dao/models/Pet.js";

const getMockingPets = async (req, res) => {
    const pets = await MockingService.generateMockingPets(100);
    res.send({ status: "success", payload: pets });
}

const getMockingUsers = async (req, res) => {
    const users = await MockingService.generateMockingUsers(50);
    res.send({ status: "success", payload: users });
}

const generateData = async (req, res) => {
    const { users, pets } = req.body;

    if (!users || !pets) {
        return res.status(400).send({ status: "error", message: "Parámetros 'users' y 'pets' son requeridos" });
    }

    try {
        const generatedUsers = await MockingService.generateMockingUsers(users);
        const generatedPets = await MockingService.generateMockingPets(pets);

        await userModel.insertMany(generatedUsers);
        await petModel.insertMany(generatedPets);

        res.send({ status: "success", message: "Datos generados e insertados correctamente" });
    } catch (error) {
        res.status(500).send({ status: "error", message: "Error al generar o insertar datos", error: error.message });
    }
}

export default { getMockingPets, getMockingUsers, generateData };
