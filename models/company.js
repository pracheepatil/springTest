module.exports = (sequelize, DataTypes) => {
    const company = sequelize.define('company', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name:  {
            type: DataTypes.STRING,
            allowNull: false
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    }, { timestamps : false})

    company.associate = (models) => {
        models.company.hasMany(models.userCompanyMap);
    }

    return company;
}

 