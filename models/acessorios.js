// models/produto.js
module.exports = (sequelize, DataTypes) => {
    const Acessorio = sequelize.define('Acessorio', {
    nome: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
        },
        },
        {
        freezeTableName: true,
        tableName: 'Acessorios',
        timestamps: true,
        createdAt: 'dataCriacao',
        updatedAt: 'dataAtualizacao',
        version: 'versao'
        }
        );
        return Acessorio;
        };
        