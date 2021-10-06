import { Task } from '../database/db';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
        });
        console.log(error);
    }
};

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
        });
        console.log(error);
    }
};

export const getTasksCount = async (req, res) => {
    try {
        const count = await Task.count();

        res.status(200).json(count);
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
        });
        console.log(error);
    }
};

export const saveTask = async (req, res) => {
    try {
        const task = await Task.create(req.body, {
            fields: ['title', 'description'],
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
        });
        console.log(error);
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(204).end();
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
        });
        console.log(error);
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        res.status(204).end();
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
        });
        console.log(error);
    }
};
