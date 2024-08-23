import { Column, DataType, Model, Table, Unique } from "sequelize-typescript";

@Table({
    tableName: "user",
    timestamps: true,
    paranoid: true,
})

export class User extends Model {
    @Unique
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string

    @Unique
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    uid: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    upw: string;
}


