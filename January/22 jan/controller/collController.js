const home=(req, res)=>{
    res.render("index");
}

const about=(req, res)=>{
    res.render("about");
}
const course=(req, res)=>{
    res.render("course");
}
const faculty=(req, res)=>{
    res.render("faculty");
}
const contact=(req, res)=>{
    res.render("contact");
}



module.exports={
    home,
    about,
    course,
    faculty,
    contact
}