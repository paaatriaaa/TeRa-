//menghubungkan model controller dan router
const db = require("../models");
const Quiz = db.quizzes;

//create: untuk menambahkan data kedalam tabel quiz
exports.create = async (req, res) => {
    //eh
    try{
        const data = await Quiz.create(req.body)
        res.json({
            message: "QUIZ BERHASIL DI TAMBAHKAN. ",
            data: data,
        })
    }   catch(error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//READ: menamilkan atau mengambil semua data quiz sesuai model dari database 
exports.getAll = async(req,res) => {
    try{
        const quizzes = await Quiz.findAll()
        res.json({
            message:" Quiz berhasil ditampilkan.",
            data: quizzes,
        });
    }catch (error) {
        res.status(500).json({
            message:error.message,
            data:null,
        });
    }
}

//Mengubah data sesuai id yang dikirimkan 
exports.update = async (req, res) =>{
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:true})
        quiz.update(req.body,{
            where: {id}
        })
        res.json({
            message: "  Quiz berhasil diupdate",
            data: quiz,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}

//Menghapus data sesuai id yang dikirimkan 
exports.delete = async (req, res) => {
    const id = req.params.id 
    try{
        const quiz = await Quiz.findByPk(id, { rejectOnEmpety: true})
        quiz.destroy()

        res.json ({
            message:"Quis berhasil dihapus"
        });
    } catch (error) {
        res.status(500).json ({
            message: error.message || "some error occured while retrieving quiz",
            data: null,
        });
    }
}

//mengambil data sesuai id yang dikirimkan 
exports.findOne = async (req, res) =>{
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:true})
        res.json({
            message: `Quiz berhasil ditampilkan dengan id ${id}`,
            data: quiz,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}

//menampilkan atau mengambil semua data quiz berdasarkan category tertentu 
exports.getByCategoryId = async (req, res) =>{
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            categoryId: id
        }
    })
        res.json({
            message: `Quiz berhasil ditampilkan dengan id ${id}`,
            data: quizzes,
        });

}

//menampilkan atau mengambil semua data quiz berdasarkan level terentu 
exports.getByLevelId = async (req,res) => {
    const id = req.params.id 
    const  quizzes = await Quiz.findAll({
        where : {
            levelId: id
        }
    })
    res.json ({
        message: `Quizzes retrieved successfully with levelId=${id}.`,
        data: quizzes,
    });
}