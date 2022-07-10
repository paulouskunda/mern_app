"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { createWorkout, getAllWorkouts, getWorkout, updateWork, deleteWorkout } = require('../controllers/WorkoutControllers');
const router = express_1.default.Router();
router.get('/', getAllWorkouts);
router.get('/:id', getWorkout);
router.post('/', createWorkout);
router.patch('/:id', updateWork);
router.delete('/:id', deleteWorkout);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya291dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlcy93b3Jrb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQTZCO0FBQzdCLE1BQU0sRUFDRixhQUFhLEVBQ2IsY0FBYyxFQUNkLFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNoQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2hELE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUE7QUFFL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUE7QUFFOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUE7QUFFL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsVUFBVSxDQUFDLENBQUE7QUFFL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsYUFBYSxDQUFDLENBQUE7QUFFbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUEifQ==