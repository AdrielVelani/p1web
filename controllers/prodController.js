const Prod = require("../models/prodModel");

const prodController = {
    
    listarTodos: (req, res) => {
        
        Prod.getAll((err, results) => {
            
            if (err) return res.status(500).json({ error: err.message });
            
            res.json(results);
        });
    },

    listarPorId: (req, res) => {
        
        Prod.getById(req.params.id, (err, results) => {
            
            if (err) return res.status(500).json({ error: err.message });
            
            if (results.length === 0) return res.status(404).json({ message: "Produto não encontrado!" });
            
            res.json(results[0]);
        });
    },

    criar: (req, res) => {
        
        const { nome, preco, estoque } = req.body;
        
        if (!nome || nome.length < 3) return res.status(400).json({ message: "Nome inválido!" });
        
        if (preco <= 0) return res.status(400).json({ message: "Preço deve ser positivo!" });
        
        if (estoque < 0) return res.status(400).json({ message: "Estoque não pode ser negativo!" });

        Prod.create({ nome, preco, estoque }, (err, result) => {
            
            if (err) return res.status(500).json({ error: err.message });
            
            res.status(201).json({ message: "Produto criado com sucesso!", id: result.insertId });
        });
    },

    atualizar: (req, res) => {
        
        const { nome, preco, estoque } = req.body;
        
        Prod.update(req.params.id, { nome, preco, estoque }, (err, result) => {
            
            if (err) return res.status(500).json({ error: err.message });
            
            res.json({ message: "Produto atualizado com sucesso!" });
        });
    },

    deletar: (req, res) => {
        
        Prod.delete(req.params.id, (err, result) => {
            
            if (err) return res.status(500).json({ error: err.message });
            
            res.json({ message: "Produto excluído com sucesso!" });
        });
    }
};

module.exports = prodController;