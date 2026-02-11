const categoriaController = {       
    criarCategoria: async (req, res) => {
        try {
            const { descricaoCategoria } = req.body;
            
            return res.status(201).json({ message: 'Categoria' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    listarCategoria: async (req, res) => {
        try {
            const { id } = req.params;

            return res.status(200).json([]);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    atualizarCategorias: async (req, res) => {
        try {
            const { id } = req.params;
            const descricaoCategoria = req.body;

            return res.status(200).json({ message: 'Categoria Atualizada' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    excluirCategoria: async (req, res) => {
        try {
            const { id } = req.params;
            
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};

export default categoriaController;