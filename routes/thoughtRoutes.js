const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

router.get("/", getAllThoughts);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.post("/", createThought);

router.post("/:thoughtId/reactions", addReaction);
router.delete("/:thoughtId/reactions/:reactionId", removeReaction);

module.exports = router;
