import { Router } from 'express';
import * as tasksController from '../controllers/tasks.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint.
 */

/**
 * @swagger 
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks]
 */
router.get('/tasks', tasksController.getTasks);

/**
 * @swagger 
 * /tasks/count:
 *  get:
 *      summary: Get the number of all tasks.
 *      tags: [Tasks]
 */
router.get('/tasks/count', tasksController.getTasksCount);

/**
 * @swagger 
 * /tasks:
 *  get:
 *      summary: Get task by id.
 *      tags: [Tasks]
 */
router.get('/tasks/:id', tasksController.getTaskById);

/**
 * @swagger 
 * /tasks:
 *  post:
 *      summary: Save a new task.
 *      tags: [Tasks]
 */
router.post('/tasks', tasksController.saveTask);

/**
 * @swagger 
 * /tasks:
 *  delete:
 *      summary: Delete a task by id.
 *      tags: [Tasks]
 */
router.delete('/tasks/:id', tasksController.deleteTask);

/**
 * @swagger 
 * /tasks:
 *  put:
 *      summary: Update a task by id.
 *      tags: [Tasks]
 */
router.put('/tasks/:id', tasksController.updateTask);

export default router;
