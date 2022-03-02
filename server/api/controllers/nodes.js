const mongoose = require('mongoose');
const Node = require('../models/nodes');
const rootID = "621deb836c95eb4010a19a56";

module.exports = {
    getAllNodes: (req, res) => {
        Node.find().then((nodes) => {
            res.status(200).json(
                nodes
            )
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    getTree: (req, res) => {
        Node.find().then((nodes) => {
            const dictNodes = Object.assign({}, ...nodes.map((node) => ({[node._id]: {"name" : node.name, "children" : node.children} })));
            res.status(200).json(
                dictNodes
            )
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
      },
    getRootId: (req, res) => {
        res.json({id: rootID})
      },
    createNode: (req, res) => {
        const { name, children } = req.body;

        const node = new Node({
            _id: new mongoose.Types.ObjectId(),
            name,
            children
        });

        node.save().then(() => {
            res.status(200).json({
                id: 'Created node'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    getNode: (req, res) => {
        const nodeId = req.params.nodeId;
        Node.findById(nodeId).then((node) => {
            res.status(200).json({
                node
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    updateNode: (req, res) => {
        const nodeId = req.params.nodeId

        Node.update({_id: nodeId}, req.body).then(() => {
            res.status(200).json({
                message: 'Node Updated'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },
    deleteNode: (req, res) => {
        const nodeId = req.params.nodeId

        Node.remove({_id: nodeId}).then(() => {
            res.status(200).json({
                message: `Node _id:${nodeId} Deleted`
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    }
}