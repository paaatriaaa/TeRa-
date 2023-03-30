//menghubungkan model controller dan router
const db = require("../models");
const Materi = db.materies;

//create: untuk menambahkan data kedalam tabel materi
exports.create = async (req, res) => {
    try{
        const data = await Materi.create(req.body)
        res.json({
            message: "MATERI BERHASIL DI TAMBAHKAN. ",
            data: data,
        })
    }   catch(error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//READ: menamilkan atau mengambil semua data materi sesuai model dari database 
exports.getAll = async(req,res) => {
    try{
        const materies = await Materi.findAll()
        res.json({
            message:" Materi berhasil ditampilkan.",
            data: materies,
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
        const materi = await Materi.findByPk(id, {rejectOnEmpty:true})
        materi.update(req.body,{
            where: {id}
        })
        res.json({
            message: "  Materi berhasil diupdate",
            data: materi,
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
        const materi = await Materi.findByPk(id, { rejectOnEmpety: true})
        materi.destroy()

        res.json ({
            message:"Materi berhasil dihapus"
        });
    } catch (error) {
        res.status(500).json ({
            message: error.message || "some error occured while retrieving materi",
            data: null,
        });
    }
}

//mengambil data sesuai id yang dikirimkan 
exports.findOne = async (req, res) =>{
    const id = req.params.id
    try{
        const materi = await Materi.findByPk(id, {rejectOnEmpty:true})
        res.json({
            message: `Materi berhasil ditampilkan dengan id ${id}`,
            data: materi,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}