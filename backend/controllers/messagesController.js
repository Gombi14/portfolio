import Messages from '../models/messagesModel.js';

export const getMessages = async (req,res)=>{
    try{
        const messages = await Messages.find()
        res.json(messages)
    }
    catch (err){
        res.status(500).json({error:'Error al obtener los datos de messages'})
    }
}

export const getMessagesById = async (req,res)=>{
    try{
        const message = await Messages.findById(req.params.id)
        if(!message) return res.status(404).json({error:'No se ha encontrado'})
        res.json(message)
    }
    catch (err){
        res.status(500).json({error:'Error al buscar mensajes por id'})
    }
}

export const createMessage = async (req,res)=>{
    try{
        const {nombre, email, mensaje} = req.body
        const newExperience = new Experience({nombre,email,mensaje})
        await newExperience.save()
        res.status(200)
    }catch (err){
        res.status(500).json('No se ha podido crear el mensaje')
    }
}