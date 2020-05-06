const Usuario = (sequelize, DataTypes) => {
  let usuario = sequelize.define(
    'Usuario',
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: "usuario",
      timestamps: false
    }
  );

  usuario.associate = (models) => {
    //usuario.hasMany(models.Endereco, { foreignKey: 'fk_usuario', as: 'enderecos' });
    //usuario.hasMany(models.Pedido, { foreignKey: 'fk_usuario', as: 'pedidos' });
  };

  return usuario;

};

module.exports = Usuario;