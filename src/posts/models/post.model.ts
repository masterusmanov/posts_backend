import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface PostCreateAttr{
    title: string;
    content: string;
    image: string;
    image_link: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreateAttr>{
   
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    
    @Column({
        type: DataType.STRING
    })
    title: string;

    @Column({
        type: DataType.STRING
    })
    content: string;

    @Column({
        type: DataType.STRING,
    })
    image: string;

    @Column({
        type: DataType.STRING,
    })
    image_link: string;


}