export const verifyAdmin = (req, res, next) =>
{
try{
    if(req.user && req.user.role === "admin")
    {
        next();
    }
    else {
        res.status(403).json({message: "Access denied"});
    }
}
catch(error)
{
    res.status(403).json({message: "Access denied"});
}
};