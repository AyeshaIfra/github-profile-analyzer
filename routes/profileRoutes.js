const router=require("express").Router();

const controller=
require("../controllers/profileController");

router.get(
"/analyze/:username",
controller.analyzeProfile
);

router.get(
"/profiles",
controller.getProfiles
);

router.get(
"/profiles/:id",
controller.getProfile
);

module.exports=router;