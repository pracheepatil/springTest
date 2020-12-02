module.exports = (sequelize, DataTypes) => {
    const userCompanyMap = sequelize.define('userCompanyMap', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }

    }, { 
        timestamps : false,
        uniqueKeys: {
            composite_unique: {
                fields: ['userId', 'companyId']
            }
        }
    });

    userCompanyMap.associate = (models) => {
        models.userCompanyMap.belongsTo(models.company);
        models.userCompanyMap.belongsTo(models.user)
    }

    return userCompanyMap;
}

 