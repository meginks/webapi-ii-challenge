const checkID = (id) => {
    if (!id) {
        return (
    res.status(404)
    .json({
        error: "The post with the specified ID does not exist."
          }) )
} else {
    return id
}
};

const checkReqBody = (res) => {
    return 
    ( res.status(400) 
     .json({
         error: "Please provide title and contents for the post."
     })
    )
}

module.exports = { checkID, checkReqBody };