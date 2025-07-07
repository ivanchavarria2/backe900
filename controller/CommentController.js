import { CommentModel } from "../models/CommentModel.js";
import { UserModel } from "../models/UserModel.js";

// Guardar comentario
export const saveComments = async (req, res) => {
  try {
    const { comment, user_id, movie_id } = req.body;

    if (!(comment && user_id && movie_id)) {
      return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    const userExists = await UserModel.findOne({ where: { id: user_id } });
    if (!userExists) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const newComment = await CommentModel.create({
      description: comment,
      user_id,
      movie_id
    });

    return res.status(201).json({ message: "Comentario creado exitosamente", comment: newComment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Obtener comentarios de una película
export const getComments = async (req, res) => {
  try {
    const { movie_id } = req.params;

    if (!movie_id) {
      return res.status(400).json({ error: "movie_id es requerido" });
    }

    const comments = await CommentModel.findAll({
      where: { movie_id },
      include: [{
        model: UserModel,
        attributes: ['id', 'user', 'email']
      }]
    });

    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
