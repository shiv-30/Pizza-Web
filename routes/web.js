const homeController = require("../app/http/controllers/homeController");
const cartController = require("../app/http/controllers/customers/cartController");
const authController = require("../app/http/controllers/authController");
const guest = require("../app/http/middleware/guest")

function initRoutes(app) {
    
    app.get("/", homeController().index);
    
    app.get("/login", guest, authController().login);

    app.get("/register", guest, authController().register);

    app.get("/cart", cartController().index);

    app.post("/update-cart", cartController().update);
    app.post("/register", authController().postRegister);
    app.post("/login", authController().postLogin);
    app.post("/logout", authController().logout);

}


module.exports = initRoutes;