const { getAllAtores } = require('../service/atorService');

const getAllAtoresController = async (_req, res) => {
    const { status, data } = await getAllAtores();
    return res.status(200).json(data);
    };


const deleteAtorController = async (req, res) => {
    const { id } = req.params;
    try {
        await atorService.deleteAtor(id);
        res.status(200).json({ message: 'Ator deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
        }
    };


module.exports = {
    getAllAtoresController,
    deleteAtorController,
};
// Adicione os métodos de CRUD aqui