const {
    response
} = require("express")
const landlord = require("../models/landlord")

exports.register_landlord = async( req, res) => {

    const { email,username,phonenumber  } = req.body
    const existsLand =landlord.findOne({
        where: {username }
    });
    existsLand.then(res => {
        if (res) {
            res.status(409).json({
                message: "user exists"
            })
        } else {
            existsLand.create(req.body).then((res) => {
                res.status(201).json({
                    message: "landlord created",
                    detail: res
                })
            })
        }
    }).catch(err => {
        console.log(err)
    })
};