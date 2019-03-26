const checkID = (id) => {
    if (!id) {
    res.status(404)
    .json({
        success: false,
        message: "The post with the specified ID does not exist."
    })
} else {
    return id
}
};

const checkReqBody = (res) => {
    return res.status(400) 
     .json({
         success: false,
         message: "Please provide title and contents for the post."
     })
}

module.exports = { checkID, checkReqBody };