const dummyData = [
    // Java Questions
    {
        _id: 1,
        language: 'Java',
        question: 'What is Java?',
        options: [
            'A programming language',
            'A coffee brand',
            'A type of car',
            'A fruit',
        ],
        correctAnswer: 'A programming language',
    },
    {
        _id: 2,
        language: 'Java',
        question: 'What does JVM stand for?',
        options: [
            'Java Virtual Machine',
            'JavaScript Virtual Module',
            'Just Very Messy',
            'Java Vending Machine',
        ],
        correctAnswer: 'Java Virtual Machine',
    },
    {
        _id: 3,
        language: 'Java',
        question: 'Which keyword is used to define a class in Java?',
        options: [
            'class',
            'vo_id',
            'new',
            'interface',
        ],
        correctAnswer: 'class',
    },
    {
        _id: 4,
        language: 'Java',
        question: 'What is an interface in Java?',
        options: [
            'A class that cannot be instantiated',
            'A concrete class',
            'A data type',
            'A variable',
        ],
        correctAnswer: 'A class that cannot be instantiated',
    },
    {
        _id: 5,
        language: 'Java',
        question: 'What is the main purpose of a constructor in Java?',
        options: [
            'Initializing object state',
            'Creating an interface',
            'Defining a class',
            'Declaring variables',
        ],
        correctAnswer: 'Initializing object state',
    },
    {
        _id: 6,
        language: 'Java',
        question: 'What is method overloading in Java?',
        options: [
            'Defining multiple methods with the same name in a class',
            'Using more methods than needed',
            'Creating a new class',
            'Overr_iding a superclass method',
        ],
        correctAnswer: 'Defining multiple methods with the same name in a class',
    },
    {
        _id: 7,
        language: 'Java',
        question: 'What is a static method in Java?',
        options: [
            'A method that belongs to the class rather than an instance of the class',
            'A method used for debugging',
            'A method that is never executed',
            'A method that creates objects',
        ],
        correctAnswer: 'A method that belongs to the class rather than an instance of the class',
    },
    {
        _id: 8,
        language: 'Java',
        question: 'What is inheritance in Java?',
        options: [
            'A mechanism that allows a class to inherit properties and methods from another class',
            'A way to delete classes',
            'A way to h_ide class properties',
            'A way to create private methods',
        ],
        correctAnswer: 'A mechanism that allows a class to inherit properties and methods from another class',
    },
    {
        _id: 9,
        language: 'Java',
        question: 'What is the default value of a boolean in Java?',
        options: ['false', 'true', '0', '1'],
        correctAnswer: 'false',
    },
    {
        _id: 10,
        language: 'Java',
        question: 'What is the purpose of the "super" keyword in Java?',
        options: [
            'To call a method in the superclass',
            'To define a new class',
            'To create a variable',
            'To break out of a loop',
        ],
        correctAnswer: 'To call a method in the superclass',
    },

    // PHP Questions
    {
        _id: 11,
        language: 'PHP',
        question: 'What is PHP?',
        options: [
            'A programming language',
            'A type of fish',
            'A planet',
            'A book',
        ],
        correctAnswer: 'A programming language',
    },
    {
        _id: 12,
        language: 'PHP',
        question: 'What does PHP stand for?',
        options: [
            'Hypertext Preprocessor',
            'Personal Home Page',
            'Pretty Heavy Programming',
            'Python High Performance',
        ],
        correctAnswer: 'Hypertext Preprocessor',
    },
    {
        _id: 13,
        language: 'PHP',
        question: 'Which symbol is used to concatenate strings in PHP?',
        options: [
            '.',
            '+',
            '-',
            '*',
        ],
        correctAnswer: '.',
    },
    {
        _id: 14,
        language: 'PHP',
        question: 'What is an associative array in PHP?',
        options: [
            'An array with named keys',
            'An array with numeric keys',
            'A type of function',
            'An object',
        ],
        correctAnswer: 'An array with named keys',
    },
    {
        _id: 15,
        language: 'PHP',
        question: 'What is a PHP session?',
        options: [
            'A way to store user data on the server for use across multiple pages',
            'A method for sending emails',
            'A type of loop',
            'A database query',
        ],
        correctAnswer: 'A way to store user data on the server for use across multiple pages',
    },
    {
        _id: 16,
        language: 'PHP',
        question: 'How do you declare a variable in PHP?',
        options: [
            '$variableName = value;',
            'let variableName = value;',
            'var variableName = value;',
            'const variableName = value;',
        ],
        correctAnswer: '$variableName = value;',
    },
    {
        _id: 17,
        language: 'PHP',
        question: 'What is the purpose of the "require" statement in PHP?',
        options: [
            'To include and evaluate an external PHP file',
            'To create a new function',
            'To delete a file',
            'To declare a variable',
        ],
        correctAnswer: 'To include and evaluate an external PHP file',
    },
    {
        _id: 18,
        language: 'PHP',
        question: 'What is the PHP "echo" statement used for?',
        options: [
            'To output data to the browser',
            'To perform arithmetic calculations',
            'To create a database',
            'To define a constant',
        ],
        correctAnswer: 'To output data to the browser',
    },
    {
        _id: 19,
        language: 'PHP',
        question: 'What is the purpose of the "if" statement in PHP?',
        options: [
            'To conditionally execute code',
            'To declare a variable',
            'To create a loop',
            'To include a file',
        ],
        correctAnswer: 'To conditionally execute code',
    },
    {
        _id: 20,
        language: 'PHP',
        question: 'What is a PHP class?',
        options: [
            'A blueprint for creating objects',
            'A mathematical equation',
            'A type of loop',
            'A function',
        ],
        correctAnswer: 'A blueprint for creating objects',
    },

    // JavaScript Questions
    {
        _id: 21,
        language: 'JavaScript',
        question: 'What is JavaScript?',
        options: [
            'A programming language',
            'A type of coffee',
            'A planet',
            'A bird',
        ],
        correctAnswer: 'A programming language',
    },
    {
        _id: 22,
        language: 'JavaScript',
        question: 'Which keyword is used to declare a variable in JavaScript?',
        options: [
            'var',
            'let',
            'const',
            'int',
        ],
        correctAnswer: 'var',
    },
    {
        _id: 23,
        language: 'JavaScript',
        question: 'Which operator is used for strict equality in JavaScript?',
        options: [
            '===',
            '==',
            '!=',
            '!==',
        ],
        correctAnswer: '===',
    },
    {
        _id: 24,
        language: 'JavaScript',
        question: 'What is an arrow function in JavaScript?',
        options: [
            'A type of function',
            'A type of arrow',
            'A type of food',
            'A type of animal',
        ],
        correctAnswer: 'A type of function',
    },
    {
        _id: 25,
        language: 'JavaScript',
        question: 'What is the DOM in JavaScript?',
        options: [
            'Document Object Model',
            'Data Output Mechanism',
            'Dynamic Object Memory',
            'Document Orientation Module',
        ],
        correctAnswer: 'Document Object Model',
    },
    {
        _id: 26,
        language: 'JavaScript',
        question: 'What is an event handler in JavaScript?',
        options: [
            'A function that responds to user actions',
            'A type of loop',
            'A way to define variables',
            'A form element',
        ],
        correctAnswer: 'A function that responds to user actions',
    },
    {
        _id: 27,
        language: 'JavaScript',
        question: 'What is the purpose of the "setTimeout" function in JavaScript?',
        options: [
            'To delay the execution of a function',
            'To perform mathematical calculations',
            'To create an element',
            'To define a class',
        ],
        correctAnswer: 'To delay the execution of a function',
    },
    {
        _id: 28,
        language: 'JavaScript',
        question: 'What is an array in JavaScript?',
        options: [
            'An ordered list of values',
            'A type of variable',
            'A function',
            'A loop',
        ],
        correctAnswer: 'An ordered list of values',
    },
    {
        _id: 29,
        language: 'JavaScript',
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        options: [
            'To refer to the current object',
            'To declare a function',
            'To create an array',
            'To define a variable',
        ],
        correctAnswer: 'To refer to the current object',
    },
    {
        _id: 30,
        language: 'JavaScript',
        question: 'What is a callback function in JavaScript?',
        options: [
            'A function passed as an argument to another function',
            'A way to style HTML elements',
            'A type of loop',
            'A data structure',
        ],
        correctAnswer: 'A function passed as an argument to another function',
    },
];

export const users = [
    {
        name: 'John Doe',
        id: 1,
        contact_number: '123-456-7890',
        language: 'PHP',
        email: 'john.doe@example.com',
    },
    {
        name: 'Jane Smith',
        id: 2,
        contact_number: '987-654-3210',
        language: 'Java',
        email: 'jane.smith@example.com',
    },
    {
        name: 'Alice Johnson',
        id: 3,
        contact_number: '555-555-5555',
        language: 'JavaScript',
        email: 'alice.johnson@example.com',
    }
    // Add more users as needed
];



export default dummyData;
