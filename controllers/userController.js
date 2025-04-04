const Usuario = require("../models/userModel");

const userController = {

    listarTodos: (req, res) => {

        Usuario.getAll((err, results) => {

            if (err) return res.status(500).json({ error: err.message });
            
            res.json(results);
        });
    },

    listarPorId: (req, res) => {

        Usuario.getById(req.params.id, (err, results) => {
            
            if (err) return res.status(500).json({ error: err.message });
            
            if (results.length === 0) return res.status(404).json({ message: "Usuário não encontrado!" });
            
            res.json(results[0]);
        });
    },

    criar: (req, res) => {
        const { nome, email, senha } = req.body;

        // Validações
        if (!nome || nome.length < 3) return res.status(400).json({ message: "Nome inválido! Deve ter pelo menos 3 caracteres." });
       
        if (!email.includes("@")) return res.status(400).json({ message: "E-mail inválido!" });
       
        if (!senha || senha.length < 6) return res.status(400).json({ message: "A senha deve ter no mínimo 6 caracteres." });

        Usuario.create({ nome, email, senha }, (err, result) => {
           
            if (err) return res.status(500).json({ error: err.message });
            
            res.status(201).json({ message: "Usuário cadastrado com sucesso!", id: result.insertId });
        });
    },

    atualizar: (req, res) => {
        const { nome, email, senha } = req.body;
        
        const { id } = req.params;

        // Validações
        if (!nome || nome.length < 3) return res.status(400).json({ message: "Nome inválido!" });
        
        if (!email.includes("@")) return res.status(400).json({ message: "E-mail inválido!" });
       
        if (!senha || senha.length < 6) return res.status(400).json({ message: "A senha deve ter no mínimo 6 caracteres." });

        Usuario.update(id, { nome, email, senha }, (err, result) => {
           
            if (err) return res.status(500).json({ error: err.message });
           
            if (result.affectedRows === 0) return res.status(404).json({ message: "Usuário não encontrado!" });
           
            res.json({ message: "Usuário atualizado com sucesso!" });
        });
    },

    deletar: (req, res) => {
        
        const { id } = req.params;

        Usuario.delete(id, (err, result) => {
            
            if (err) return res.status(500).json({ error: err.message });
            
            if (result.affectedRows === 0) return res.status(404).json({ message: "Usuário não encontrado!" });
            
            res.json({ message: "Usuário deletado com sucesso!" });
        });
    }
};

module.exports = userController;
