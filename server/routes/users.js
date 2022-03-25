import express from 'express';
import {getUsers, createUser} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.route('/add').post(createUser);


export default router;