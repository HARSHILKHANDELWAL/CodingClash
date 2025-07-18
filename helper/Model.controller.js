const express = require("express");
const router = express.Router();
const service = require("./Model.service"); // Import a generic service

// Dynamic route for creating a record in any model
router.post("/:model", async (req, res) => {
  service.createRecord(req.params.model, req.body, res);
});

// Dynamic route for fetching all records from any model
router.get("/:model", async (req, res) => {

  service.getAllRecords(req.params.model, res);
});

// Dynamic route for fetching record by id
router.get("/:model/:id", async (req, res) => {
  service.findRecordById(req.params.model, req.params.id, res);
});

// Dynamic route for updating record by id
router.put("/:model/:id", async (req, res) => {
  service.updateRecord(req.params.model, req.params.id, req.body, res);
});

// Dynamic route for deleting record by id
router.delete("/:model/:id", async (req, res) => {
  service.deleteRecord(req.params.model, req.params.id, res);
});

module.exports = router;
