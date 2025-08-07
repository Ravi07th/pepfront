import { QuantitativeQuestion } from "../types";

export const timeSpeedDistanceQuestions: QuantitativeQuestion[] = [
    {
      id: 'tsd-1',
      topicId: 'time-speed-distance',
      question: "A train covers a distance of 300 km in 4 hours. What is its speed in km/h?",
      options: ['60 km/h', '70 km/h', '75 km/h', '80 km/h'],
      correctAnswer: 2,
      explanation: "Speed = Distance ÷ Time = 300 ÷ 4 = 75 km/h"
    },
    {
      id: 'tsd-2',
      topicId: 'time-speed-distance',
      question: "If a car travels at 60 km/h, how long will it take to cover 180 km?",
      options: ['2 hours', '2.5 hours', '3 hours', '3.5 hours'],
      correctAnswer: 2,
      explanation: "Time = Distance ÷ Speed = 180 ÷ 60 = 3 hours"
    },
    {
      id: 'tsd-3',
      topicId: 'time-speed-distance',
      question: "A person walks 5 km in 1 hour and 15 minutes. What is his speed in km/h?",
      options: ['3 km/h', '4 km/h', '5 km/h', '6 km/h'],
      correctAnswer: 1,
      explanation: "Time = 1 hour 15 minutes = 1.25 hours. Speed = 5 ÷ 1.25 = 4 km/h"
    },
    {
      id: 'tsd-4',
      topicId: 'time-speed-distance',
      question: "Two trains start from the same station at the same time. One travels at 50 km/h and the other at 60 km/h. After 3 hours, what is the distance between them?",
      options: ['30 km', '40 km', '50 km', '60 km'],
      correctAnswer: 0,
      explanation: "Distance covered by first train = 50 × 3 = 150 km. Distance covered by second train = 60 × 3 = 180 km. Difference = 180 - 150 = 30 km"
    },
    {
      id: 'tsd-5',
      topicId: 'time-speed-distance',
      question: "A cyclist covers a distance of 24 km in 2 hours. What is his speed in m/s?",
      options: ['2.5 m/s', '3 m/s', '3.5 m/s', '4 m/s'],
      correctAnswer: 2,
      explanation: "Speed in km/h = 24 ÷ 2 = 12 km/h. Speed in m/s = 12 × (1000/3600) = 3.33 m/s ≈ 3.5 m/s"
    },
    {
      id: 'tsd-6',
      topicId: 'time-speed-distance',
      question: "A train travels 240 km in 3 hours. What is its speed in m/s?",
      options: ['20 m/s', '22.22 m/s', '25 m/s', '27.78 m/s'],
      correctAnswer: 1,
      explanation: "Speed in km/h = 240 ÷ 3 = 80 km/h. Speed in m/s = 80 × (1000/3600) = 22.22 m/s"
    },
    {
      id: 'tsd-7',
      topicId: 'time-speed-distance',
      question: "If a car travels 150 km in 2.5 hours, what is its average speed?",
      options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h'],
      correctAnswer: 2,
      explanation: "Average speed = Distance ÷ Time = 150 ÷ 2.5 = 60 km/h"
    },
    {
      id: 'tsd-8',
      topicId: 'time-speed-distance',
      question: "Two cars start from the same point. One travels north at 40 km/h and the other travels east at 30 km/h. After 2 hours, what is the distance between them?",
      options: ['80 km', '100 km', '120 km', '140 km'],
      correctAnswer: 1,
      explanation: "North distance = 40 × 2 = 80 km. East distance = 30 × 2 = 60 km. Distance between them = √(80² + 60²) = √(6400 + 3600) = √10000 = 100 km"
    },
    {
      id: 'tsd-9',
      topicId: 'time-speed-distance',
      question: "A bus covers a distance of 180 km in 4 hours. What is its speed in km/h?",
      options: ['40 km/h', '45 km/h', '50 km/h', '55 km/h'],
      correctAnswer: 1,
      explanation: "Speed = Distance ÷ Time = 180 ÷ 4 = 45 km/h"
    },
    {
      id: 'tsd-10',
      topicId: 'time-speed-distance',
      question: "If a train travels at 80 km/h, how long will it take to cover 320 km?",
      options: ['3 hours', '3.5 hours', '4 hours', '4.5 hours'],
      correctAnswer: 2,
      explanation: "Time = Distance ÷ Speed = 320 ÷ 80 = 4 hours"
    },
    {
      id: 'tsd-11',
      topicId: 'time-speed-distance',
      question: "A person runs 8 km in 40 minutes. What is his speed in km/h?",
      options: ['10 km/h', '12 km/h', '15 km/h', '18 km/h'],
      correctAnswer: 1,
      explanation: "Time = 40 minutes = 40/60 = 2/3 hours. Speed = 8 ÷ (2/3) = 8 × (3/2) = 12 km/h"
    },
    {
      id: 'tsd-12',
      topicId: 'time-speed-distance',
      question: "Two trains start from opposite stations. One travels at 60 km/h and the other at 80 km/h. If the distance between stations is 280 km, when will they meet?",
      options: ['1 hour', '1.5 hours', '2 hours', '2.5 hours'],
      correctAnswer: 2,
      explanation: "Relative speed = 60 + 80 = 140 km/h. Time to meet = Distance ÷ Relative speed = 280 ÷ 140 = 2 hours"
    },
    {
      id: 'tsd-13',
      topicId: 'time-speed-distance',
      question: "A car travels 120 km in 2 hours and 30 minutes. What is its average speed?",
      options: ['45 km/h', '48 km/h', '50 km/h', '52 km/h'],
      correctAnswer: 1,
      explanation: "Time = 2 hours 30 minutes = 2.5 hours. Average speed = 120 ÷ 2.5 = 48 km/h"
    },
    {
      id: 'tsd-14',
      topicId: 'time-speed-distance',
      question: "If a train travels at 90 km/h, how long will it take to cover 450 km?",
      options: ['4 hours', '4.5 hours', '5 hours', '5.5 hours'],
      correctAnswer: 2,
      explanation: "Time = Distance ÷ Speed = 450 ÷ 90 = 5 hours"
    },
    {
      id: 'tsd-15',
      topicId: 'time-speed-distance',
      question: "A person walks 6 km in 1 hour and 30 minutes. What is his speed in km/h?",
      options: ['3 km/h', '4 km/h', '5 km/h', '6 km/h'],
      correctAnswer: 1,
      explanation: "Time = 1 hour 30 minutes = 1.5 hours. Speed = 6 ÷ 1.5 = 4 km/h"
    }
  ]; 