'use strict';


module.exports = function(sequelize, DataTypes) {
    var MeanOfLogin = sequelize.define('MeanOfLogin', {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 

        name: { 
            type: DataTypes.STRING
        },

        isRemoved: { 
            type: DataTypes.BOOLEAN,
            defaultValue: false 
        }
    },

    {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                MeanOfLogin.hasMany(models.User, { 
                    as: 'Users', 
                    through: models.MeanOfLoginUsers
                });
            }
        }
    });

    return MeanOfLogin;
};
