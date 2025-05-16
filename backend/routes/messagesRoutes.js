import express from 'express'

import {
    getMessages,
    getMessagesById,
    createMessage
} from '../controllers/messagesController.js'

const router = express.Router()

router.get('/', getMessages)
router.get('/:id', getMessagesById)
router.post('/', createMessage)

export default router