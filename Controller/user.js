const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

const db = require("../helper/relation");
const { User, Notes } = db;

module.exports = {
  user: async (req, res) => {
    try {
      const data = await User.findOne({
        where: {
          id: req.payload.ID,
        },
        include: [{ model: Notes }],
      });
      res.json({ data });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  createUser: async (req, res) => {
    try {
      const saltRound = 10;
      const password = req.body.password;
      const hashPassword = await bcrypt.hash(password, saltRound);
      const data = await User.create({
        username: req.body.username,
        password: hashPassword,
        isActive: req.body.isActive,
      });
      res.status(201).json({ message: "create data succes", data: data });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const data = await User.findAll({
        include: [{ model: Notes }],
        // attributes: ["id", "Username"], //Pengambilan data berdasarkan id dan Username
        // attributes: [
        //   ["id", "idUser"],
        //   ["Username", "namaPengguna"],
        //   ["password", "kataSandi"],
        //   ["isActive", "aktif"],
        // ], //Pengaliasan nama
        // where: {
        // [Op.and]: [{ password: "senin sore" }], //menampilkan data dengan op.and
        //   [Op.or]: [{ id: "1" }, { password: "senin sore" }], //menampilkan data dengan Op.or(atau)
        // },
      });
      if (data.length > 0) {
        res.status(201).json({ message: "Get Data succes", data: data });
      } else {
        res.status(201).json({ message: "data tidak ada" });
      }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  getOneUser: async (req, res) => {
    try {
      const data = await User.findAll({
        where: { id: req.params.id },
      });
      if (data.length > 0) {
        res.status(201).json({ message: "berhasil get one data", data: data });
      } else {
        res.status(201).json({ message: "data tidak ada" });
      }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const saltRound = 10;
      const password = req.body.password;
      const hashPassword = await bcrypt.hash(password, saltRound);
      const data = await User.update(
        {
          username: req.body.username,
          password: hashPassword,
          isActive: req.body.isActive,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      if (data > 0) {
        res.status(201).json({ message: "data berhasil di update" });
      } else {
        res.status(201).json({ message: "data tidak ada" });
      }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const data = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (data > 0) {
        res.status(201).json({ message: "data berhasil di delete" });
      } else {
        res.status(201).json({ message: "data tidak ada" });
      }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const username = req.body.username;
      const data = await User.findOne({
        where: {
          username: username,
        },
      });
      console.log(req.payload);
      res.json({ userId: data.id, username: data.username });
    } catch (error) {
      res.status(422).json({ message: error.sqlMessage });
    }
  },

  register: async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;

      const data = await User.findOne({
        where: {
          username: username,
        },
      });
      if (!data) {
        throw Error(`Data tidak di temukan`);
      }
      const isVeryfied = await bcrypt.compare(password, data.password);
      console.log(isVeryfied);
      if (!isVeryfied) {
        throw Error(`Password salah`);
      }

      const payload = {
        ID: data.dataValues.id,
        username: username,
      };
      const token = jwt.sign(payload, "say hello");
      res.json({ username: data.username, token: token });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
};
