const { status } = require("express/lib/response");
const jwt = require("jsonwebtoken");


const verifyToken = (req,res,next)=>{
  const authenticationHeaders = req.headers.token;

  if(authenticationHeaders){
    const token = authenticationHeaders.split(" ")[1];
    jwt.verify(token,process.env.jwt_key,(error,success)=>{
      if(err){
        res.status(403).json("token is Invalid!!");
        req.success = success;
        next();
      }
    })
  }else{
    return res.status(401).json("You're not verified to go on")
  }
};

const verifyTokenAndAuthorization=(req,res,next)=>{
  verifyToken(req,res,()=>{
    if(req.success.id ===req.params.id || req.success.isAdmin){
      next()
    }else{
      res.status(403).json("you're not allowed to do that")
    };
  });
};

const verifyTokenAndAdmin =(req,res,next)=>{
  verifyToken(req,res,()=>{
    if (req.user.isAdmin){
      next()
    }else{
      res.status(403).json("you're not allowed to do that")
      
    };
  });
};

module.exports ={verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorization}