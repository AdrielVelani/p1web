const connection = require("../views/config");

const User = {

    getAll: (callback) => {

        connection.query("SELECT * FROM usuarios", callback);
    },

    getById: (id, callback) => {

        connection.query("SELECT * FROM usuarios WHERE id = ?", [id], callback);
    },

    create: (user, callback) => {

        const { nome, email, senha } = user;
        
        connection.query(
            
            "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
            
            [nome, email, senha],
            
            callback
        );
    },

    update: (id, user, callback) => {
        
        const { nome, email, senha } = user;
        
        connection.query(
            
            "UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?",
           
            [nome, email, senha, id],
           
            callback
        );
    },

    delete: (id, callback) => {
        
        connection.query("DELETE FROM usuarios WHERE id = ?", [id], callback);
    }
};

module.exports = User;
