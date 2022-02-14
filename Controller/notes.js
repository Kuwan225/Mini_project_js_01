const express = require("express");
const { DataTypes } = require("sequelize");
const sequelize = require("../models").sequelize;

const db = require("../helper/relation");

const { Notes, User } = db;

module.exports = {
  createData: async (req, res) => {
    try {
      const data = await Notes.create({
        userId: req.body.userId,
        nama: req.body.nama,
        jadwal: req.body.jadwal,
        catatan: req.body.catatan,
      });
      res.status(202).json({ message: "Berhasil tambah data", data: data });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getNote: async (req, res) => {
    try {
      const data = await Notes.findAll();
      if (data.length > 0) {
        res.status(201).json({ message: "berhasil ambil data", data: data });
      } else {
        res.status(201).json({ message: "data tidak ada" });
      }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  deleteNote: async (req, res) => {
    try {
      const data = await Notes.destroy({
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
  updateNote: async (req, res) => {
    try {
      const data = await Notes.update(
        {
          nama: req.body.nama,
          jadwal: req.body.jadwal,
          catatan: req.body.catatan,
        },
        {
          where: { id: req.params.id },
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
};
