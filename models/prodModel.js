const connection = require("../views/config");

const Prod = {

    getAll: (callback) => {

        
        connection.query("SELECT * FROM produtos", callback);
    },

    getById: (id, callback) => {
        
        connection.query("SELECT * FROM produtos WHERE id = ?", [id], callback);
    },

    create: (prod, callback) => {
        
        const { nome, preco, estoque } = prod;
        
        connection.query(
            
            "INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)",
            
            [nome, preco, estoque],
            
            callback
        
        );
    },

    update: (id, prod, callback) => {

        const { nome, preco, estoque } = prod;
        
        connection.query(
            
            "UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?",
            
            [nome, preco, estoque, id],
            
            callback
        );
    },

    delete: (id, callback) => {
        
        connection.query("DELETE FROM produtos WHERE id = ?", [id], callback);
    }
};

module.exports = Prod;