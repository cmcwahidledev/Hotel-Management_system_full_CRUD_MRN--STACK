import express from 'express';
import { login, register } from '../controllers/userController.js';
import { customerAdd, customerGet } from '../controllers/customerController.js';
import { roomAdd, roomGet } from '../controllers/roomController.js';
import { reservationAdd, reservationGet } from '../controllers/reservationController.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/customer", customerAdd);
router.get("/customer", customerGet);

router.post("/room", roomAdd);
router.get("/room", roomGet);

router.post("/reservation", reservationAdd);
router.get("/reservation", reservationGet);

export default router;