import express from 'express';
import { saveComments, getComments } from '../controller/CommentController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/comment', verifyToken, saveComments);
router.get('/comment/:movie_id', verifyToken, getComments);

export const RouterComment = router;
