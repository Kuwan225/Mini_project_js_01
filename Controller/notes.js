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
      data.length > 0
        ? res.status(201).json({ message: "berhasil ambil data", data: data })
        : res.status(404).json({ message: "tidak ada data" });
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
      data > 0
        ? res.status(201).json({ message: "data berhasil di delete" })
        : res.status(404).json({ message: "data tidak ada" });
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
      data.length > 0
        ? res.status(201).json({ message: "data berhasil di update" })
        : res.status(404).json({ message: "tidak ada data" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};
