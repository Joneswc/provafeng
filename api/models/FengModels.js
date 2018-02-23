'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    data: [{
        id: {
            type: Number
        },
        name: {
            type: String
        },
        description: {
            type: String
        },
        category: {
            type: String
        },
        basePoints: {
            type: Number
        },
        startDate: {
            type: Date,
            default: Date.now
        },
        endDate: {
            type: Date,
            default: Date.now
        },
        isActive: {
            type: Boolean
        },
        alreadyAnswered: {
            type: Boolean
        },
        questions: [
            {
                id: {
                    type: Number
                },
                name: {
                    type: String
                },
                description: {
                    type: String
                }
            },
            {
                id: {
                    type: Number
                },
                name: {
                    type: String
                },
                description: {
                    type: String
                },
                options: [
                    {
                        id: {
                            type: Number
                        },
                        text: {
                            type: String
                        },
                        value: {
                            type: String
                        }
                    },
                    {
                        id: {
                            type: Number
                        },
                        text: {
                            type: String
                        },
                        value: {
                            type: String
                        }
                    }
                ]
            }
        ]
    }],
});

module.exports = mongoose.model('Tasks', TaskSchema);
