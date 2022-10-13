import db from "../db/DBConnection.js";
import express from "express";
const router = express.Router();
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();

//get request from query 
router.get('/', async function (req, res) {
    try{
        const posts = await db.any('SELECT * FROM posts ORDER BY id', [true]);
        res.send(posts);
    }catch(e){
        console.log(e);
        return res.status(400).json({e});
    }
    
});

//post request
router.post('/', async (req, res) => {
    const contacts = {
      id: req.body.id,
      authorfirstname: req.body.authorfirstname,
      email: req.body.email,
      phone_number: req.body.phone_number,
      contact_id: req.body.contact_id,
      notes: req.body.notes,
      image: req.body.image,
    }
    console.log(contacts);
    try {
      const createdContacts = await db.one(
        `INSERT INTO contacts(id, name, email, phone_number, contact_id, notes, image) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [contacts.id, contacts.name, contacts.email, contacts.phone_number, contacts.contact_id, contacts.notes, contacts.image]
      );
      console.log(req.body);
      res.send(createdContacts);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ e });
    }
  });
export default router;