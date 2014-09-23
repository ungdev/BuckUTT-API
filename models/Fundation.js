'use strict';


module.exports = function(sequelize, DataTypes) {
    var Fundation = sequelize.define('Fundation', {
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
                Fundation.hasMany(models.Period);
                Fundation.hasMany(models.Group);
                Fundation.hasMany(models.Article);
            }
        }
    });

    return Fundation;
};
