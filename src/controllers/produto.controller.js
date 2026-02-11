const produtoController = {    
    uploadImagem: async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ error: 'Arquivo não enviado' });
            }

            return res.status(200).json({
                nome: req.file.filename,
                tamanho: req.file.size
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    criarProdutos: async (req, res) => {
        try {
            const { idCategoria, nomeProduto, valorProduto, vinculoImagem } = req.body;

            if (!idCategoria || !nomeProduto || !valorProduto) {
                return res.status(400).json({ error: 'Erro' });
            }
            
            return res.status(201).json({ message: 'Produto inserido' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    listarProdutos: async (req, res) => {
        try {
            const { id } = req.params;

            return res.status(200).json([]);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    atualizarProdutos: async (req, res) => {
        try {
            const { id } = req.params;
            const dados = req.body;

            return res.status(200).json({ message: 'Produto atualizado com sucesso' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    excluirProdutos: async (req, res) => {
        try {
            const { id } = req.params;
            
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};

export default produtoController;