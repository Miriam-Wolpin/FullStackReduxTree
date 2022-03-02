const express = require('express');
const router = express.Router();

const {
    getAllNodes,
    getTree,
    getRootId,
    createNode,
    updateNode,
    deleteNode
} = require('../controllers/nodes');

router.get('/', getAllNodes);
router.get("/getTree", getTree);
router.get("/getRootId", getRootId);
router.post('/', createNode);
router.patch('/:nodeId', updateNode);
router.delete('/:nodeId', deleteNode);

module.exports = router;