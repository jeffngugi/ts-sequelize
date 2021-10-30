'use strict';
import {Model } from 'sequelize'

interface ProjectAssignmentAttributes{
  ProjectId:number;
  UserId:string;
}

module.exports = (sequelize:any, DataTypes:any) => {
  class ProjectAssignment extends Model<ProjectAssignmentAttributes>
  implements ProjectAssignmentAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    ProjectId!:number;
    UserId!:string;
    static associate(models:any) {
      // define association here
    }
  };
  ProjectAssignment.init({
    
    ProjectId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      references:{
        model:'Projects',
        key:'id'
      }
    },
    UserId:{
      type:DataTypes.STRING,
      primaryKey:true,
      allowNull:false,
      references:{
        model:'Users',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ProjectAssignment',
  });
  return ProjectAssignment;
};