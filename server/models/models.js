const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user_data', {
    id_user: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login_user: {type: DataTypes.STRING, unique: true},
    password_user: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING,unique: true},
    image_user: {type: DataTypes.STRING},
    description_user: {type: DataTypes.STRING},
    data_registration: {type: DataTypes.DATE},
})

const Title_data = sequelize.define('title_data', {
    id_title: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_title: {type: DataTypes.STRING,},
    image_title: {type: DataTypes.STRING},
    description_title: {type: DataTypes.STRING},
    date_release_title: {type: DataTypes.DATE},
    views:{type:DataTypes.INTEGER, defaultValue: 0},
    rating:{type:DataTypes.INTEGER, defaultValue: 0},
    recomend_title:{type:DataTypes.BOOLEAN, defaultValue:false},
})

const Chapter = sequelize.define('chapter_data', {
    id_chapter: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_chapter: {type: DataTypes.STRING},
    number_chapter: {type: DataTypes.INTEGER},
    date_release_chapter: {type: DataTypes.DATE},
})

const Page = sequelize.define('page_data', {
    id_page: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number_page: {type: DataTypes.STRING},
    image_page: {type: DataTypes.STRING},
})

const News = sequelize.define('news_data', {
    id_news: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title_news: {type: DataTypes.STRING, },
    body_news: {type: DataTypes.STRING, },
    link_news: {type: DataTypes.STRING, },
    images_news: {type: DataTypes.STRING, },
})

const Role_user = sequelize.define('role_user', {
    id_role: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_role: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Artist = sequelize.define('artist_data', {
    id_artist: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_artist: {type: DataTypes.STRING},
    image_artist: {type: DataTypes.STRING},
    description_artist: {type: DataTypes.STRING},
    data_registration: {type: DataTypes.DATE},
})

const Genre = sequelize.define('genre_title', {
    id_genre: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_genre: {type: DataTypes.STRING},
})

const Screenwriter = sequelize.define('screenwriter_data', {
    id_screenwriter: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_screenwriter: {type: DataTypes.STRING, allowNull: false},
    image_screenwriter: {type: DataTypes.STRING},
    description_screenwriter: {type: DataTypes.STRING},
    data_registration: {type: DataTypes.DATE},
})

const Status_data = sequelize.define('status_data', {
    id_status: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_status: {type: DataTypes.STRING, allowNull: false},
})

const Type_title = sequelize.define('type_title', {
    id_type: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_type: {type: DataTypes.STRING, allowNull: false},
})

const Translate = sequelize.define('translate_data', {
    id_translate: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name_translate: {type: DataTypes.STRING, allowNull: false},

    description_translate: {type: DataTypes.STRING},
    image_translate: {type: DataTypes.STRING},
    data_registration: {type: DataTypes.DATE},

})

const Rating = sequelize.define('rating',{
    id_rating:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    views:{type:DataTypes.BOOLEAN, defaultValue:false },
    rating:{type: DataTypes.BOOLEAN, defaultValue:false},
})

const Marker = sequelize.define('marker_user_data', {
    id_marker: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const TitleGenre = sequelize.define('key_title_genre', {
    id_title_genre: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const TitleArtist = sequelize.define('key_title_artist', {
    id_title_artist: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const TitleScreenwriter = sequelize.define('key_title_screenwriter', {
    id_title_screenwriter: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const TitleTranslate = sequelize.define('key_title_translate', {
    id_title_translate: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


Role_user.hasOne(User)
User.belongsTo(Role_user)

//зв'зок до таблиці перекладачі
Translate.hasOne(User)//translateDatumIdTranslate FK
User.belongsTo(Translate)

Title_data.hasMany(Rating)
Rating.belongsTo(Title_data)

User.hasMany(Rating)
Rating.belongsTo(User)

Status_data.hasOne(Title_data)
Title_data.belongsTo(Status_data)

Type_title.hasOne(Title_data)
Title_data.belongsTo(Type_title)

Title_data.hasMany(Chapter)
Chapter.belongsTo(Title_data)

Chapter.hasMany(Page,{as: 'masPage'});
Page.belongsTo(Chapter)

User.belongsToMany(Title_data, {through: Marker })
Title_data.belongsToMany(User, {through: Marker })

Title_data.belongsToMany(Artist, {through: TitleArtist })
Artist.belongsToMany(Title_data, {through: TitleArtist })

Title_data.belongsToMany(Genre, {through: TitleGenre })
Genre.belongsToMany(Title_data, {through: TitleGenre })

Title_data.belongsToMany(Screenwriter, {through: TitleScreenwriter })
Screenwriter.belongsToMany(Title_data, {through: TitleScreenwriter })

Title_data.belongsToMany(Translate, {through: TitleTranslate })
Translate.belongsToMany(Title_data, {through: TitleTranslate })


module.exports = {
    User,
    Title_data,
    Chapter,
    Page, 
    News,
    Role_user,
    Artist, 
    Genre,
    Screenwriter,
    Status_data,
    Type_title,
    Translate,
    Rating,
    Marker, 
    TitleGenre,
    TitleArtist,
    TitleScreenwriter,
    TitleTranslate
}