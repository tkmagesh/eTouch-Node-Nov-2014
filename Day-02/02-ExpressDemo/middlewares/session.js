var sessionStore = {};
module.exports = function(req,res,next){
    var sessionId = req.cookies["sessionId"];
    if (!sessionId || !sessionStore[sessionId]){
        sessionId = new Date().getTime().toString();
        var sessionObj = {};
        sessionObj.id = sessionId;
        sessionStore[sessionId] = sessionObj;
    }
    req.session = sessionStore[sessionId];
    console.log(req.session);
    res.cookie("sessionId",req.session.id,{ httpOnly: true });
    
    next();
}