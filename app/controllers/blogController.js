// Create

export const createBlog =  async (req, res) => {
    return res.json({message:'Blog create successfully'});
}

// Read
export const readBlog =  async (req, res) => {
    return res.json({message:'Blog read successfully'});
}


// Update
export const updateBlog =  async (req, res) => {
    return res.json({message:'Blog update successfully'});
}


// Delete
export const deleteBlog =  async (req, res) =>{
    return res.json({message:'Blog delete successfully'});
}


//postman link create blog: http://localhost:5070/api/create-blog

//postman link read blog: http://localhost:5070/api/read-blog

//postman link update blog: http://localhost:5070/api/update-blog

//postman link delete blog: http://localhost:5070/api/delete-blog

