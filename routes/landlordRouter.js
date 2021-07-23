const express = require('express')

const router = express.Router()

router.post("/registerLandlord",require("../controller/landlord_controller").register_landlord)



module.exports = router