const userModel = require("../database/model/userModel")

class UserController{
    static async createNewUser(req,res,next){
        const {name, email, password} = req.body
        try {
            const user = await userModel.create({name, email, password})
            console.log(user)
            return res.status(201).json({results: "Usuario criado com sucesso!",results: [], status: 201})
        } catch (error) {
            next(error)
        }
    }

    static async getAllUsers(req,res,next){
        try {
            const users = await userModel.find({})
            if(!users){
                return res.status(200).json({results: [], msg: "Nenhum usuario encontrado!", status: 200})
            }
            return res.status(200).json({results: users, status: 200})
        } catch (error) {
            next(error)
        }
    }

    static async updateUser(req,res,next){
        const {id, name, email, password} = req.body
        let payload = {}

        try {

            if(name){
                payload.name = name
            }

            if(email){
                payload.email = email
            }

            if(password){
                payload.password = password
            }


            if(!payload){
                return res.status(301).json({msg: "Nenhum campo foi recebido", results: [], status: 301})
            }else{
                const update = await userModel.findByIdAndUpdate({_id: id}, payload)
                console.log(update)
                return res.status(200).json({results: [], msg: "Dados atualizado com sucesso, status: 200"})
            }
            
        } catch (error) {
            next(error)
        }
    }

    static async removeUser(token, req, res, next){
        try {
            const remove = await userModel.findByIdAndDelete({_id: token.id})
            console.log(remove)
            return res.status(201).json({msg: "Usuario removido com sucesso", results: [], status: 201})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController