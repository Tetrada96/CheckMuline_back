const db = require("../models");
const Color = db.colors;
const User = db.users;
const UserColor = db.user_color;
const Op = db.Sequelize.Op;

const findColors = async (userId) => {
  return User.findOne({where: {id: userId},include: {model: Color}}).then(user => {
    return user.colors.map(color => {return {
      "id": color.id,
      "color": color.color,
      "name_color_eng": color.name_color_eng,
      "dmc": color.dmc,
      "name_color_ru": color.name_color_ru,
      "count": color.user_color.count
      }});
})}

exports.findAll = async function (req, res) {
  const userId = req.params?.userId;
  try{
    const newColors = await findColors(userId);
    res.send(newColors.sort((a,b) => a.id > b.id ? 1 : -1)); 
  }
  catch {
    res.status(404).send('Not Found User')
  }
};

exports.changeColorCount = async (req, res) => {
  const userId = req.params.userId;
  const colordmc = req.params.colorId;
  const newCount = req.body.count;
  const user = await User.findByPk(userId);
  if (!user) {
    res.status(404).send('Пользователь не найден');
  return }
  Color.findOne({where: {dmc: colordmc}}).then(color => {
    UserColor.update({count: newCount},{where: {[Op.and]: [{user_id: userId, color_id:color.id}]}}).then(() => {
      res.send()
     })
    .catch(() => res.status(404).send('Not Update Color'))
  })
  .catch(() =>res.status(404).send('Not Found Color') )
  
}

exports.checkColors = async (req, res) => {
  const userId = req.params.userId;
  const colordmc = req.body.colors;
  try{
    let colorsWithCount = await findColors(userId)
    let ar = colordmc.map((colorReq) => colorsWithCount.map(c => c.dmc).includes(colorReq) ? colorsWithCount.find(cwc => cwc.dmc === colorReq) : {dmc: colorReq, error: 'Такого цвета нет'})
    res.send(ar)
  }
  catch(e) {
    res.status(400).send(e.message)
  }
  
}