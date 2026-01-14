// CPE301 Quiz Questions Data
// Parsed from questions.txt - Contains review questions, facts, and exercises

export interface Question {
    id: number;
    type: 'mcq' | 'fill-blank' | 'true-false' | 'review';
    section: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
}

export const questions: Question[] = [
    // Chapter 2 Facts - Quick Knowledge Check
    {
        id: 1,
        type: 'mcq',
        section: 'Chapter 2 - Cache Memory',
        question: 'What happens when the requested data is NOT found in cache memory?',
        options: [
            'Cache hit',
            'Cache miss',
            'Memory overflow',
            'Data corruption'
        ],
        correctAnswer: 1,
        explanation: 'A cache miss occurs when the CPU looks for data in the cache but the data is not present, requiring a fetch from main memory.'
    },
    {
        id: 2,
        type: 'mcq',
        section: 'Chapter 2 - Cache Memory',
        question: 'What happens when the requested data IS found in cache memory?',
        options: [
            'Memory hit',
            'Data sync',
            'Cache hit',
            'Buffer overflow'
        ],
        correctAnswer: 2,
        explanation: 'A cache hit occurs when the CPU successfully finds the requested data in the cache memory.'
    },
    {
        id: 3,
        type: 'fill-blank',
        section: 'Chapter 2 - Program Loading',
        question: 'Before a program is executed, it is loaded into memory by a utility program called:',
        options: [
            'Compiler',
            'Linker',
            'Program loader',
            'Debugger'
        ],
        correctAnswer: 2,
        explanation: 'A program loader is a utility program that loads programs into memory before execution.'
    },
    {
        id: 4,
        type: 'mcq',
        section: 'Chapter 2 - Cache Memory',
        question: 'How many types of cache exist in the x86 processor family?',
        options: [
            '1',
            '2',
            '3',
            '4'
        ],
        correctAnswer: 1,
        explanation: 'In the x86 family, there are 2 types of cache: Level 1 (primary/inside CPU) and Level 2 (secondary/outside CPU).'
    },
    {
        id: 5,
        type: 'mcq',
        section: 'Chapter 2 - Cache Memory',
        question: 'The cache located inside the CPU is called:',
        options: [
            'Level 2 cache / Secondary cache',
            'Level 1 cache / Primary cache',
            'External cache',
            'Buffer cache'
        ],
        correctAnswer: 1,
        explanation: 'The cache inside the CPU is called Level 1 or Primary cache.'
    },
    {
        id: 6,
        type: 'mcq',
        section: 'Chapter 2 - Cache Memory',
        question: 'The cache located outside the CPU is called:',
        options: [
            'Level 1 cache / Primary cache',
            'Level 2 cache / Secondary cache',
            'Internal cache',
            'Register cache'
        ],
        correctAnswer: 1,
        explanation: 'The cache outside the CPU is called Level 2 or Secondary cache.'
    },
    {
        id: 7,
        type: 'mcq',
        section: 'Chapter 2 - Cache Memory',
        question: 'Why is Level 2 cache slower than Level 1 cache?',
        options: [
            'It uses older technology',
            'It has smaller capacity',
            'It is located outside the CPU',
            'It uses different voltage'
        ],
        correctAnswer: 2,
        explanation: 'Level 2 cache is slower because it is located outside the CPU, requiring data to travel through the high-speed data bus.'
    },
    {
        id: 8,
        type: 'mcq',
        section: 'Chapter 2 - Cache Memory',
        question: 'How is Level 2 cache connected to the CPU?',
        options: [
            'Through a serial connection',
            'Through a high-speed data bus',
            'Through USB interface',
            'Through wireless connection'
        ],
        correctAnswer: 1,
        explanation: 'Level 2 cache is connected to the CPU through a high-speed data bus.'
    },
    {
        id: 9,
        type: 'mcq',
        section: 'Chapter 2 - Cache Memory',
        question: 'Why is cache memory faster than conventional RAM?',
        options: [
            'It is closer to the CPU',
            'It uses static RAM (SRAM)',
            'It has larger capacity',
            'It uses higher voltage'
        ],
        correctAnswer: 1,
        explanation: 'Cache memory is faster because it uses static RAM (SRAM), which doesn\'t need to be constantly refreshed to keep its content.'
    },
    {
        id: 10,
        type: 'mcq',
        section: 'Chapter 2 - Cache Memory',
        question: 'What is a key difference between Static RAM and Dynamic RAM?',
        options: [
            'SRAM is cheaper than DRAM',
            'DRAM doesn\'t need refreshing',
            'SRAM doesn\'t need to be constantly refreshed to keep its content',
            'DRAM is faster than SRAM'
        ],
        correctAnswer: 2,
        explanation: 'Static RAM doesn\'t need to be constantly refreshed to keep its content, making it faster but more expensive than DRAM.'
    },
    {
        id: 11,
        type: 'mcq',
        section: 'Chapter 2 - Memory Types',
        question: 'Comparing Static RAM and Dynamic RAM, which statement is TRUE?',
        options: [
            'SRAM is slower and cheaper than DRAM',
            'SRAM is faster and more expensive than DRAM',
            'DRAM is faster and more expensive than SRAM',
            'They have the same speed and cost'
        ],
        correctAnswer: 1,
        explanation: 'Static RAM is faster but more expensive than Dynamic RAM.'
    },

    // Section 1.7.1 Short Answer Questions - Review Exercises
    {
        id: 12,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'In an 8-bit binary number, which is the most significant bit (MSB)?',
        options: [
            'Bit 0 (rightmost)',
            'Bit 4 (middle)',
            'Bit 7 (leftmost)',
            'Bit 8'
        ],
        correctAnswer: 2,
        explanation: 'In an 8-bit binary number, bit 7 (the leftmost bit) is the most significant bit (MSB). Bits are numbered 0-7 from right to left.'
    },
    {
        id: 13,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the decimal representation of unsigned binary integer 00110101?',
        options: [
            '35',
            '53',
            '45',
            '51'
        ],
        correctAnswer: 1,
        explanation: '00110101 = 32 + 16 + 4 + 1 = 53 in decimal.'
    },
    {
        id: 14,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the decimal representation of unsigned binary integer 10010110?',
        options: [
            '150',
            '148',
            '152',
            '146'
        ],
        correctAnswer: 0,
        explanation: '10010110 = 128 + 16 + 4 + 2 = 150 in decimal.'
    },
    {
        id: 15,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the decimal representation of unsigned binary integer 11001100?',
        options: [
            '200',
            '204',
            '196',
            '208'
        ],
        correctAnswer: 1,
        explanation: '11001100 = 128 + 64 + 8 + 4 = 204 in decimal.'
    },
    {
        id: 16,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the result of binary 00001101 minus 00000111?',
        options: [
            '00000100',
            '00000101',
            '00000110',
            '00001000'
        ],
        correctAnswer: 2,
        explanation: 'Binary 00001101 (13) - 00000111 (7) = 00000110 (6).'
    },
    {
        id: 17,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'How many bits are used by a WORD data type?',
        options: [
            '8 bits',
            '16 bits',
            '32 bits',
            '64 bits'
        ],
        correctAnswer: 1,
        explanation: 'A word is 2 bytes = 16 bits.'
    },
    {
        id: 18,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'How many bits are used by a DOUBLEWORD data type?',
        options: [
            '16 bits',
            '32 bits',
            '64 bits',
            '128 bits'
        ],
        correctAnswer: 1,
        explanation: 'A doubleword is 4 bytes = 32 bits.'
    },
    {
        id: 19,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'How many bits are used by a QUADWORD data type?',
        options: [
            '32 bits',
            '64 bits',
            '128 bits',
            '256 bits'
        ],
        correctAnswer: 1,
        explanation: 'A quadword is 8 bytes = 64 bits.'
    },
    {
        id: 20,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'How many bits are used by a DOUBLE QUADWORD data type?',
        options: [
            '64 bits',
            '128 bits',
            '256 bits',
            '512 bits'
        ],
        correctAnswer: 1,
        explanation: 'A double quadword is 16 bytes = 128 bits.'
    },
    {
        id: 21,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the minimum number of binary bits needed to represent unsigned decimal 4095?',
        options: [
            '10 bits',
            '11 bits',
            '12 bits',
            '13 bits'
        ],
        correctAnswer: 2,
        explanation: '4095 = 2^12 - 1, so 12 bits are needed (2^11 = 2048, which is less than 4095).'
    },
    {
        id: 22,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the minimum number of binary bits needed to represent unsigned decimal 65534?',
        options: [
            '14 bits',
            '15 bits',
            '16 bits',
            '17 bits'
        ],
        correctAnswer: 2,
        explanation: '65534 = 2^16 - 2, so 16 bits are needed.'
    },
    {
        id: 23,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the hexadecimal representation of binary 0011 0101 1101 1010?',
        options: [
            '35DA',
            '35AD',
            '53DA',
            '3D5A'
        ],
        correctAnswer: 0,
        explanation: '0011=3, 0101=5, 1101=D, 1010=A, so the answer is 35DA.'
    },
    {
        id: 24,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the hexadecimal representation of binary 1100 1110 1010 0011?',
        options: [
            'CEAB',
            'CEA3',
            'CE3A',
            'C3EA'
        ],
        correctAnswer: 1,
        explanation: '1100=C, 1110=E, 1010=A, 0011=3, so the answer is CEA3.'
    },
    {
        id: 25,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the hexadecimal representation of binary 1111 1110 1101 1011?',
        options: [
            'FEBD',
            'FEDB',
            'FBDE',
            'FBED'
        ],
        correctAnswer: 1,
        explanation: '1111=F, 1110=E, 1101=D, 1011=B, so the answer is FEDB.'
    },
    {
        id: 26,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the unsigned decimal representation of hexadecimal 3A?',
        options: [
            '56',
            '58',
            '60',
            '62'
        ],
        correctAnswer: 1,
        explanation: '3A hex = 3×16 + 10 = 48 + 10 = 58 decimal.'
    },
    {
        id: 27,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the unsigned decimal representation of hexadecimal 1BF?',
        options: [
            '445',
            '447',
            '449',
            '451'
        ],
        correctAnswer: 1,
        explanation: '1BF hex = 1×256 + 11×16 + 15 = 256 + 176 + 15 = 447 decimal.'
    },
    {
        id: 28,
        type: 'mcq',
        section: '1.7 Review Questions',
        question: 'What is the unsigned decimal representation of hexadecimal 1001?',
        options: [
            '4095',
            '4096',
            '4097',
            '4098'
        ],
        correctAnswer: 2,
        explanation: '1001 hex = 1×4096 + 0×256 + 0×16 + 1 = 4097 decimal.'
    },

    // Section 1.1.3 Section Review
    {
        id: 29,
        type: 'review',
        section: '1.1.3 Section Review',
        question: 'How do assemblers and linkers work together?',
        options: [
            'Assembler converts source to machine code, linker combines files into executable',
            'Linker converts source to machine code, assembler combines files',
            'Both do the same thing',
            'They don\'t work together'
        ],
        correctAnswer: 0,
        explanation: 'An assembler converts source code from assembly language into machine language. A linker combines individual files created by an assembler into a single executable program.'
    },
    {
        id: 30,
        type: 'review',
        section: '1.1.3 Section Review',
        question: 'How will studying assembly language enhance your understanding of operating systems?',
        options: [
            'It won\'t help at all',
            'You\'ll understand how programs interact with hardware and OS system calls',
            'Only useful for game development',
            'Only useful for web development'
        ],
        correctAnswer: 1,
        explanation: 'Assembly language helps you understand how application programs communicate with the operating system via interrupt handlers and system calls.'
    },
    {
        id: 31,
        type: 'review',
        section: '1.1.3 Section Review',
        question: 'What is meant by a one-to-many relationship when comparing a high-level language to machine language?',
        options: [
            'One machine instruction generates many high-level statements',
            'One high-level statement expands into multiple machine instructions',
            'They have a one-to-one relationship',
            'There is no relationship between them'
        ],
        correctAnswer: 1,
        explanation: 'High-level languages have a one-to-many relationship with machine language: A single statement in a high-level language expands into multiple assembly/machine instructions.'
    },
    {
        id: 32,
        type: 'review',
        section: '1.1.3 Section Review',
        question: 'What is the concept of portability as it applies to programming languages?',
        options: [
            'Programs can run on any device without modification',
            'Source programs can be compiled and run on a wide variety of computer systems',
            'Programs can only run on one specific computer',
            'Programs must be rewritten for each operating system'
        ],
        correctAnswer: 1,
        explanation: 'A portable language is one whose source programs can be compiled and run on a wide variety of computer systems with minimal changes.'
    },
    {
        id: 33,
        type: 'true-false',
        section: '1.1.3 Section Review',
        question: 'Is the assembly language for x86 processors the same as those for Vax or Motorola 68x00 systems?',
        options: [
            'Yes, all assembly languages are the same',
            'No, assembly language is tied to a specific processor family',
            'Only partially compatible',
            'It depends on the operating system'
        ],
        correctAnswer: 1,
        explanation: 'Assembly language is not portable because it is designed for a specific processor family. Different processor families (x86, Vax, Motorola 68x00) have different assembly languages.'
    },
    {
        id: 34,
        type: 'review',
        section: '1.1.3 Section Review',
        question: 'What is an example of an embedded systems application?',
        options: [
            'Microsoft Word',
            'Web browser',
            'Automobile fuel and ignition systems, air-conditioning controls',
            'Cloud computing platform'
        ],
        correctAnswer: 2,
        explanation: 'Embedded systems are single-purpose devices such as telephones, automobile fuel and ignition systems, air-conditioning control systems, security systems, etc.'
    },
    {
        id: 35,
        type: 'review',
        section: '1.1.3 Section Review',
        question: 'What is a device driver?',
        options: [
            'A person who operates computer hardware',
            'A program that translates general OS commands into specific hardware references',
            'A type of storage device',
            'A network protocol'
        ],
        correctAnswer: 1,
        explanation: 'Device drivers are programs that translate general operating system commands into specific references to hardware details.'
    },
    {
        id: 36,
        type: 'review',
        section: '1.1.3 Section Review',
        question: 'Is type checking on pointer variables stronger in assembly language or in C/C++?',
        options: [
            'Assembly language has stronger type checking',
            'C and C++ have stronger type checking',
            'Both have equal type checking',
            'Neither has type checking'
        ],
        correctAnswer: 1,
        explanation: 'C and C++ have stronger type checking. Assembly language has fewer rules and programmers can easily bypass restrictions.'
    },
    {
        id: 37,
        type: 'review',
        section: '1.1.3 Section Review',
        question: 'Name two types of applications that would be better suited to assembly language than a high-level language:',
        options: [
            'Web applications and databases',
            'Hardware device drivers and embedded systems',
            'Word processors and spreadsheets',
            'Social media and cloud applications'
        ],
        correctAnswer: 1,
        explanation: 'Hardware device drivers and embedded systems are better suited to assembly language because of direct hardware access and efficient memory usage.'
    },
    {
        id: 38,
        type: 'review',
        section: '1.1.3 Section Review',
        question: 'Why would a high-level language not be an ideal tool for writing a program that directly accesses a printer port?',
        options: [
            'High-level languages are too fast',
            'High-level languages may not provide direct hardware access, or require awkward coding',
            'High-level languages are too expensive',
            'High-level languages can\'t compile'
        ],
        correctAnswer: 1,
        explanation: 'High-level languages may not provide for direct hardware access. Even if they do, awkward coding techniques may be required, resulting in maintenance difficulties.'
    },
    {
        id: 39,
        type: 'review',
        section: '1.1.3 Section Review',
        question: 'Why is assembly language not usually used when writing large application programs?',
        options: [
            'Assembly language is too fast for large programs',
            'They would take too much time to write and maintain',
            'Assembly language doesn\'t support large file sizes',
            'Modern computers can\'t run assembly programs'
        ],
        correctAnswer: 1,
        explanation: 'Large application programs coded in assembly language would take too much time to write and maintain.'
    },

    // Section 1.2.1 Virtual Machine Section Review
    {
        id: 40,
        type: 'review',
        section: '1.2.1 Section Review',
        question: 'What is the virtual machine concept?',
        options: [
            'A way to run Windows on a Mac',
            'A software program that emulates functions of another physical or virtual computer',
            'A type of computer virus',
            'A gaming console technology'
        ],
        correctAnswer: 1,
        explanation: 'A virtual machine is a software program that emulates the functions of some other physical or virtual computer, representing layers in computer architecture.'
    },
    {
        id: 41,
        type: 'review',
        section: '1.2.1 Section Review',
        question: 'Why do translated programs often execute more quickly than interpreted ones?',
        options: [
            'Translation uses faster algorithms',
            'The entire program is converted to machine code before execution, avoiding runtime decoding',
            'Interpreters are always buggy',
            'Hardware prefers translated code'
        ],
        correctAnswer: 1,
        explanation: 'Translated programs are converted entirely to machine code before execution, while interpreted programs must decode each instruction at runtime before executing it.'
    },
    {
        id: 42,
        type: 'true-false',
        section: '1.2.1 Section Review',
        question: '(True/False): When an interpreted program written in language L1 runs, each of its instructions is decoded and executed by a program written in language L0.',
        options: [
            'False - Instructions execute directly on hardware',
            'True - The interpreter (L0 program) decodes and executes each L1 instruction',
            'False - Instructions are compiled first',
            'True - But only for Java programs'
        ],
        correctAnswer: 1,
        explanation: 'This is TRUE. In interpretation, as the L1 program runs, each instruction is decoded and executed by a program written in language L0.'
    },
    {
        id: 43,
        type: 'mcq',
        section: '1.2.1 Section Review',
        question: 'At which level does assembly language appear in the virtual machine model?',
        options: [
            'Level 1',
            'Level 2',
            'Level 3',
            'Level 4'
        ],
        correctAnswer: 2,
        explanation: 'Assembly language appears at Level 3, above the Instruction Set Architecture (Level 2) and Digital Logic (Level 1).'
    },
    {
        id: 44,
        type: 'mcq',
        section: '1.2.1 Section Review',
        question: 'What software utility permits compiled Java programs to run on almost any computer?',
        options: [
            'Java Compiler',
            'Java Virtual Machine (JVM)',
            'Java Native Interface',
            'Java Development Kit'
        ],
        correctAnswer: 1,
        explanation: 'The Java Virtual Machine (JVM) has been implemented on many different computer systems, making Java programs relatively system independent.'
    },
    {
        id: 45,
        type: 'mcq',
        section: '1.2.1 Section Review',
        question: 'Order the four virtual machine levels from lowest to highest:',
        options: [
            'High-level language, Assembly language, ISA, Digital logic',
            'Digital logic, ISA, Assembly language, High-level language',
            'ISA, Digital logic, Assembly language, High-level language',
            'Assembly language, Digital logic, ISA, High-level language'
        ],
        correctAnswer: 1,
        explanation: 'From lowest to highest: Digital logic (Level 1), Instruction Set Architecture (Level 2), Assembly language (Level 3), High-level language (Level 4).'
    },
    {
        id: 46,
        type: 'review',
        section: '1.2.1 Section Review',
        question: 'Why don\'t programmers write applications in machine language?',
        options: [
            'Machine language is faster to write',
            'Machine language is enormously detailed and consists purely of numbers',
            'Machine language doesn\'t exist anymore',
            'Applications must use high-level languages by law'
        ],
        correctAnswer: 1,
        explanation: 'Programmers would have a difficult time writing programs in machine language because it is enormously detailed and consists purely of numbers.'
    },
    {
        id: 47,
        type: 'mcq',
        section: '1.2.1 Section Review',
        question: 'Machine language is used at which level of the virtual machine?',
        options: [
            'Level 1 - Digital logic',
            'Level 2 - Instruction Set Architecture (ISA)',
            'Level 3 - Assembly language',
            'Level 4 - High-level language'
        ],
        correctAnswer: 1,
        explanation: 'Machine language is used at Level 2, the Instruction Set Architecture (ISA) level.'
    },
    {
        id: 48,
        type: 'mcq',
        section: '1.2.1 Section Review',
        question: 'Statements at the assembly language level are translated into statements at which other level?',
        options: [
            'Level 4 - High-level language',
            'Level 2 - ISA (machine language)',
            'Level 1 - Digital logic',
            'All levels'
        ],
        correctAnswer: 1,
        explanation: 'Assembly language (Level 3) statements are translated to machine language at the ISA level (Level 2).'
    },

    // Section 1.3.9 Data Representation Section Review
    {
        id: 49,
        type: 'review',
        section: '1.3.9 Section Review',
        question: 'Explain the term least significant bit (LSB).',
        options: [
            'The leftmost bit in a binary number',
            'The rightmost bit in a binary number, representing the smallest value (2^0)',
            'The middle bit in a binary number',
            'The bit with highest value'
        ],
        correctAnswer: 1,
        explanation: 'The LSB is the bit on the right side of a binary number. It represents 2^0 = 1, the smallest positional value.'
    },
    {
        id: 50,
        type: 'mcq',
        section: '1.3.9 Section Review',
        question: 'What is the decimal representation of unsigned binary 11111000?',
        options: [
            '246',
            '248',
            '250',
            '252'
        ],
        correctAnswer: 1,
        explanation: '11111000 = 128 + 64 + 32 + 16 + 8 = 248 decimal.'
    },
    {
        id: 51,
        type: 'mcq',
        section: '1.3.9 Section Review',
        question: 'What is the decimal representation of unsigned binary 11001010?',
        options: [
            '200',
            '202',
            '204',
            '198'
        ],
        correctAnswer: 1,
        explanation: '11001010 = 128 + 64 + 8 + 2 = 202 decimal.'
    },
    {
        id: 52,
        type: 'mcq',
        section: '1.3.9 Section Review',
        question: 'What is the decimal representation of unsigned binary 11110000?',
        options: [
            '236',
            '238',
            '240',
            '242'
        ],
        correctAnswer: 2,
        explanation: '11110000 = 128 + 64 + 32 + 16 = 240 decimal.'
    },
    {
        id: 53,
        type: 'mcq',
        section: '1.3.9 Section Review',
        question: 'What is the sum of 00001111 + 00000010?',
        options: [
            '00010000',
            '00010001',
            '00001111',
            '00001101'
        ],
        correctAnswer: 1,
        explanation: '00001111 (15) + 00000010 (2) = 00010001 (17).'
    },
    {
        id: 54,
        type: 'mcq',
        section: '1.3.9 Section Review',
        question: 'How many bytes are contained in a WORD?',
        options: [
            '1 byte',
            '2 bytes',
            '4 bytes',
            '8 bytes'
        ],
        correctAnswer: 1,
        explanation: 'A word contains 2 bytes (16 bits).'
    },
    {
        id: 55,
        type: 'mcq',
        section: '1.3.9 Section Review',
        question: 'How many bytes are contained in a DOUBLEWORD?',
        options: [
            '2 bytes',
            '4 bytes',
            '8 bytes',
            '16 bytes'
        ],
        correctAnswer: 1,
        explanation: 'A doubleword contains 4 bytes (32 bits).'
    },
    {
        id: 56,
        type: 'mcq',
        section: '1.3.9 Section Review',
        question: 'How many bytes are contained in a QUADWORD?',
        options: [
            '4 bytes',
            '8 bytes',
            '16 bytes',
            '32 bytes'
        ],
        correctAnswer: 1,
        explanation: 'A quadword contains 8 bytes (64 bits).'
    },
    {
        id: 57,
        type: 'mcq',
        section: '1.3.9 Section Review',
        question: 'What is the minimum number of bits needed to represent unsigned decimal 65?',
        options: [
            '5 bits',
            '6 bits',
            '7 bits',
            '8 bits'
        ],
        correctAnswer: 2,
        explanation: '65 requires 7 bits because 2^6 = 64 < 65 < 128 = 2^7.'
    },
    {
        id: 58,
        type: 'mcq',
        section: '1.3.9 Section Review',
        question: 'What is the minimum number of bits needed to represent unsigned decimal 409?',
        options: [
            '8 bits',
            '9 bits',
            '10 bits',
            '11 bits'
        ],
        correctAnswer: 1,
        explanation: '409 requires 9 bits because 2^8 = 256 < 409 < 512 = 2^9.'
    },
    {
        id: 59,
        type: 'mcq',
        section: '1.3.9 Section Review',
        question: 'What is the minimum number of bits needed to represent unsigned decimal 16385?',
        options: [
            '13 bits',
            '14 bits',
            '15 bits',
            '16 bits'
        ],
        correctAnswer: 2,
        explanation: '16385 requires 15 bits because 2^14 = 16384 < 16385 < 32768 = 2^15.'
    },

    // Section 1.4.2 Boolean Expressions Section Review
    {
        id: 60,
        type: 'review',
        section: '1.4.2 Section Review',
        question: 'Describe the boolean expression: ¬X ∨ Y',
        options: [
            'X AND Y',
            '(NOT X) OR Y',
            'X OR (NOT Y)',
            'NOT (X OR Y)'
        ],
        correctAnswer: 1,
        explanation: '¬X ∨ Y means (NOT X) OR Y. First negate X, then OR with Y.'
    },
    {
        id: 61,
        type: 'review',
        section: '1.4.2 Section Review',
        question: 'Describe the boolean expression: (X ∧ Y)',
        options: [
            'X OR Y',
            'X AND Y',
            'NOT X AND NOT Y',
            'X XOR Y'
        ],
        correctAnswer: 1,
        explanation: '(X ∧ Y) means X AND Y. The result is true only when both X and Y are true.'
    },
    {
        id: 62,
        type: 'mcq',
        section: '1.4.2 Section Review',
        question: 'What is the value of the boolean expression: (T ∧ F) ∨ T ?',
        options: [
            'False',
            'True',
            'Undefined',
            'Error'
        ],
        correctAnswer: 1,
        explanation: '(T AND F) OR T = F OR T = T (True). AND is evaluated first, giving False, then OR with True gives True.'
    },
    {
        id: 63,
        type: 'mcq',
        section: '1.4.2 Section Review',
        question: 'What is the value of the boolean expression: ¬(F ∨ T) ?',
        options: [
            'True',
            'False',
            'Undefined',
            'Error'
        ],
        correctAnswer: 1,
        explanation: 'NOT(F OR T) = NOT(T) = F (False). First evaluate OR (F OR T = T), then negate to get False.'
    },
    {
        id: 64,
        type: 'mcq',
        section: '1.4.2 Section Review',
        question: 'What is the value of the boolean expression: ¬F ∨ ¬T ?',
        options: [
            'False',
            'True',
            'Undefined',
            'Error'
        ],
        correctAnswer: 1,
        explanation: '(NOT F) OR (NOT T) = T OR F = T (True). NOT has highest precedence, so ¬F=T and ¬T=F, then OR gives True.'
    },

    // Additional Data Representation Questions
    {
        id: 65,
        type: 'mcq',
        section: 'Data Representation',
        question: 'What is the basic storage unit for all data in an x86 computer?',
        options: [
            'Bit',
            'Nibble',
            'Byte',
            'Word'
        ],
        correctAnswer: 2,
        explanation: 'The basic storage unit for all data in an x86 computer is a byte, containing 8 bits.'
    },
    {
        id: 66,
        type: 'mcq',
        section: 'Data Representation',
        question: 'One kilobyte is equal to:',
        options: [
            '1000 bytes',
            '1024 bytes (2^10)',
            '1048 bytes',
            '512 bytes'
        ],
        correctAnswer: 1,
        explanation: 'One kilobyte is equal to 2^10 = 1024 bytes.'
    },
    {
        id: 67,
        type: 'mcq',
        section: 'Data Representation',
        question: 'One megabyte (1 MByte) is equal to:',
        options: [
            '1,000,000 bytes',
            '1,048,576 bytes (2^20)',
            '1,024,000 bytes',
            '1,073,741,824 bytes'
        ],
        correctAnswer: 1,
        explanation: 'One megabyte is equal to 2^20 = 1,048,576 bytes.'
    },
    {
        id: 68,
        type: 'mcq',
        section: 'Data Representation',
        question: 'One gigabyte (1 GByte) is equal to:',
        options: [
            '1,000,000,000 bytes',
            '1,048,576 bytes',
            '1,073,741,824 bytes (2^30)',
            '1,099,511,627,776 bytes'
        ],
        correctAnswer: 2,
        explanation: 'One gigabyte is equal to 2^30 = 1,073,741,824 bytes.'
    },
    {
        id: 69,
        type: 'mcq',
        section: 'Data Representation',
        question: 'One terabyte (1 TByte) is equal to:',
        options: [
            '10^12 bytes',
            '2^40 bytes (1,099,511,627,776 bytes)',
            '2^30 bytes',
            '10^9 bytes'
        ],
        correctAnswer: 1,
        explanation: 'One terabyte is equal to 2^40 = 1,099,511,627,776 bytes.'
    },
    {
        id: 70,
        type: 'mcq',
        section: 'Character Storage',
        question: 'What does ASCII stand for?',
        options: [
            'American Standard Code for Information Interchange',
            'Advanced System Code for Internet Integration',
            'Automated Standard Computing Interface Implementation',
            'Assembly System Code for Input Integration'
        ],
        correctAnswer: 0,
        explanation: 'ASCII stands for American Standard Code for Information Interchange.'
    },
    {
        id: 71,
        type: 'mcq',
        section: 'Character Storage',
        question: 'How many bits does a standard ASCII character use?',
        options: [
            '5 bits',
            '6 bits',
            '7 bits',
            '8 bits'
        ],
        correctAnswer: 2,
        explanation: 'ASCII uses 7 bits, allowing for 128 unique characters (0-127). The 8th bit is often used for extended character sets.'
    },
    {
        id: 72,
        type: 'mcq',
        section: 'Character Storage',
        question: 'What is a null-terminated string?',
        options: [
            'A string that contains no characters',
            'A string of characters followed by a single byte containing zero',
            'A string that ends with the letter N',
            'A string stored in reverse order'
        ],
        correctAnswer: 1,
        explanation: 'A null-terminated string is a string of characters followed by a single byte containing zero (null character). Used in C/C++.'
    },
    {
        id: 73,
        type: 'mcq',
        section: 'Character Storage',
        question: 'Which Unicode transformation format is used in HTML and has the same byte values as ASCII?',
        options: [
            'UTF-32',
            'UTF-16',
            'UTF-8',
            'UTF-7'
        ],
        correctAnswer: 2,
        explanation: 'UTF-8 is used in HTML and has the same byte values as ASCII for the first 128 characters.'
    },
    {
        id: 74,
        type: 'mcq',
        section: 'Character Storage',
        question: 'Which Unicode transformation format does recent versions of Microsoft Windows use?',
        options: [
            'UTF-8',
            'UTF-16',
            'UTF-32',
            'ASCII only'
        ],
        correctAnswer: 1,
        explanation: 'Recent versions of Microsoft Windows use UTF-16 encoding, where each character is encoded in 16 bits.'
    },
    {
        id: 75,
        type: 'mcq',
        section: 'Binary Representation',
        question: 'In two\'s complement representation, what is the first step to get the negative of a binary number?',
        options: [
            'Add 1 to all bits',
            'Subtract 1 from all bits',
            'Invert (complement) all the bits',
            'Shift all bits left'
        ],
        correctAnswer: 2,
        explanation: 'The first step in two\'s complement is to invert (complement) all the bits. Then you add 1.'
    },
    {
        id: 76,
        type: 'mcq',
        section: 'Binary Representation',
        question: 'In a signed binary integer, what does the MSB (most significant bit) indicate?',
        options: [
            'The magnitude of the number',
            'The sign: 0 is positive, 1 is negative',
            'The parity of the number',
            'The data type'
        ],
        correctAnswer: 1,
        explanation: 'For x86 processors with signed binary integers, the MSB indicates the sign: 0 is positive and 1 is negative.'
    },
    {
        id: 77,
        type: 'mcq',
        section: 'Binary Representation',
        question: 'What is the decimal value of signed binary 11110000 (8-bit two\'s complement)?',
        options: [
            '240',
            '-240',
            '-16',
            '16'
        ],
        correctAnswer: 2,
        explanation: 'Since MSB is 1, it\'s negative. Two\'s complement of 11110000: invert→00001111, add 1→00010000 = 16. So the value is -16.'
    },
    {
        id: 78,
        type: 'mcq',
        section: 'Hexadecimal',
        question: 'You can tell a hexadecimal integer is negative if its most significant digit is:',
        options: [
            '0 through 7',
            '8 through F',
            'A through F only',
            'F only'
        ],
        correctAnswer: 1,
        explanation: 'If the most significant hexadecimal digit is ≥ 8, the number is negative; if ≤ 7, the number is positive.'
    },
    {
        id: 79,
        type: 'mcq',
        section: 'Boolean Operations',
        question: 'In boolean operator precedence, which operator has the HIGHEST precedence?',
        options: [
            'AND',
            'OR',
            'NOT',
            'XOR'
        ],
        correctAnswer: 2,
        explanation: 'NOT has the highest precedence, followed by AND, then OR.'
    },
    {
        id: 80,
        type: 'mcq',
        section: 'Boolean Operations',
        question: 'For the AND operation, when is the output TRUE?',
        options: [
            'When at least one input is true',
            'When both inputs are false',
            'When both inputs are true',
            'When inputs are different'
        ],
        correctAnswer: 2,
        explanation: 'For AND, the output is true only when BOTH inputs are true.'
    },
    {
        id: 81,
        type: 'mcq',
        section: 'Boolean Operations',
        question: 'For the OR operation, when is the output FALSE?',
        options: [
            'When at least one input is false',
            'When both inputs are true',
            'When both inputs are false',
            'When inputs are different'
        ],
        correctAnswer: 2,
        explanation: 'For OR, the output is false only when BOTH inputs are false.'
    },
    {
        id: 82,
        type: 'mcq',
        section: 'Assembly Language Basics',
        question: 'Assembly language has what kind of relationship with machine language?',
        options: [
            'One-to-many',
            'Many-to-one',
            'One-to-one',
            'Many-to-many'
        ],
        correctAnswer: 2,
        explanation: 'Assembly language has a one-to-one relationship with machine language: Each assembly instruction corresponds to a single machine instruction.'
    },
    {
        id: 83,
        type: 'mcq',
        section: 'Assembly Language Basics',
        question: 'What are registers in the context of CPU?',
        options: [
            'Types of memory cards',
            'Named storage locations in the CPU that hold intermediate results',
            'External hard drives',
            'Network interfaces'
        ],
        correctAnswer: 1,
        explanation: 'Registers are named storage locations in the CPU that hold intermediate results of operations.'
    },
    {
        id: 84,
        type: 'mcq',
        section: 'Assembly Language Basics',
        question: 'What is MASM?',
        options: [
            'Memory Access System Module',
            'Microsoft Macro Assembler',
            'Machine Architecture System Manager',
            'Modular Assembly Source Manager'
        ],
        correctAnswer: 1,
        explanation: 'MASM stands for Microsoft Macro Assembler, an industrial-strength assembler for x86 systems.'
    },
    {
        id: 85,
        type: 'mcq',
        section: 'Assembly Language Basics',
        question: 'A debugger is a utility that lets you:',
        options: [
            'Convert code between languages',
            'Step through a program while it\'s running and examine registers and memory',
            'Compile source code faster',
            'Encrypt program files'
        ],
        correctAnswer: 1,
        explanation: 'A debugger lets you step through a program while it\'s running and examine registers and memory.'
    },
    {
        id: 86,
        type: 'mcq',
        section: 'Virtual Machine Concept',
        question: 'What is a microprogram?',
        options: [
            'A very small application',
            'A program embedded in the microprocessor chip that executes machine instructions',
            'A virus-scanning utility',
            'A type of Java applet'
        ],
        correctAnswer: 1,
        explanation: 'A microprogram is a program embedded in the microprocessor chip that executes machine-language instructions.'
    },
    {
        id: 87,
        type: 'mcq',
        section: 'Data Types',
        question: 'The range of an unsigned byte is:',
        options: [
            '0 to 127',
            '0 to 255 (2^8 - 1)',
            '-128 to 127',
            '0 to 511'
        ],
        correctAnswer: 1,
        explanation: 'An unsigned byte (8 bits) has a range of 0 to 2^8 - 1 = 255.'
    },
    {
        id: 88,
        type: 'mcq',
        section: 'Data Types',
        question: 'The range of a signed byte is:',
        options: [
            '0 to 255',
            '-127 to 128',
            '-128 to 127 (-2^7 to 2^7 - 1)',
            '-256 to 255'
        ],
        correctAnswer: 2,
        explanation: 'A signed byte (8 bits) uses two\'s complement with range -2^7 to 2^7 - 1 = -128 to 127.'
    },
    {
        id: 89,
        type: 'mcq',
        section: 'Hexadecimal',
        question: 'What is the hexadecimal equivalent of decimal 15?',
        options: [
            'E',
            'F',
            '10',
            'FF'
        ],
        correctAnswer: 1,
        explanation: 'Decimal 15 = Hexadecimal F (the letters A-F represent decimal 10-15).'
    },
    {
        id: 90,
        type: 'mcq',
        section: 'Hexadecimal',
        question: 'Each hexadecimal digit represents how many binary bits?',
        options: [
            '2 bits',
            '3 bits',
            '4 bits',
            '8 bits'
        ],
        correctAnswer: 2,
        explanation: 'Each hexadecimal digit represents exactly 4 binary bits (one nibble).'
    },
    {
        id: 91,
        type: 'mcq',
        section: 'Number Systems',
        question: 'What is the base of the octal number system?',
        options: [
            '2',
            '8',
            '10',
            '16'
        ],
        correctAnswer: 1,
        explanation: 'The octal number system has base 8, using digits 0-7.'
    },
    {
        id: 92,
        type: 'mcq',
        section: 'Binary Arithmetic',
        question: 'What is 1 + 1 in binary?',
        options: [
            '1',
            '2',
            '10',
            '11'
        ],
        correctAnswer: 2,
        explanation: 'In binary, 1 + 1 = 10 (which is 2 in decimal). This generates a carry to the next bit position.'
    },
    {
        id: 93,
        type: 'mcq',
        section: 'Multiplication',
        question: 'A boolean function that uses a selector bit (S) to choose between two outputs is called a:',
        options: [
            'Decoder',
            'Encoder',
            'Multiplexer',
            'Amplifier'
        ],
        correctAnswer: 2,
        explanation: 'A multiplexer uses a selector bit (S) to select one of multiple inputs as the output.'
    },
    {
        id: 94,
        type: 'mcq',
        section: 'Programming',
        question: 'In the C statement: int X = (Y + 4) * 3; how many assembly language instructions approximately correspond to this?',
        options: [
            '1 instruction',
            '3 instructions',
            '5 instructions',
            '10 instructions'
        ],
        correctAnswer: 2,
        explanation: 'A single C statement like this expands to approximately 5 assembly instructions: move Y to register, add 4, move 3 to register, multiply, move result to X.'
    },
    {
        id: 95,
        type: 'mcq',
        section: 'Memory',
        question: 'One petabyte is equal to:',
        options: [
            '2^40 bytes',
            '2^50 bytes',
            '2^60 bytes',
            '2^70 bytes'
        ],
        correctAnswer: 1,
        explanation: 'One petabyte is equal to 2^50 bytes = 1,125,899,906,842,624 bytes.'
    },
    {
        id: 96,
        type: 'mcq',
        section: 'Memory',
        question: 'One exabyte is equal to:',
        options: [
            '2^50 bytes',
            '2^60 bytes',
            '2^70 bytes',
            '2^80 bytes'
        ],
        correctAnswer: 1,
        explanation: 'One exabyte is equal to 2^60 bytes.'
    },
    {
        id: 97,
        type: 'mcq',
        section: 'Number Representation',
        question: 'A binary integer is stored in memory in multiples of:',
        options: [
            '4 bits',
            '6 bits',
            '8 bits',
            '10 bits'
        ],
        correctAnswer: 2,
        explanation: 'Binary integers are stored in memory in multiples of 8 bits (such as 8, 16, 32, or 64 bits).'
    },
    {
        id: 98,
        type: 'mcq',
        section: 'ASCII',
        question: 'What ASCII control character moves to the next output line?',
        options: [
            'Carriage return (13)',
            'Horizontal tab (9)',
            'Line feed (10)',
            'Form feed (12)'
        ],
        correctAnswer: 2,
        explanation: 'Line feed (ASCII code 10) moves to the next output line.'
    },
    {
        id: 99,
        type: 'mcq',
        section: 'ASCII',
        question: 'What ASCII control character moves to the leftmost output column?',
        options: [
            'Backspace (8)',
            'Carriage return (13)',
            'Escape (27)',
            'Form feed (12)'
        ],
        correctAnswer: 1,
        explanation: 'Carriage return (ASCII code 13) moves to the leftmost output column.'
    },
    {
        id: 100,
        type: 'mcq',
        section: 'Number Conversion',
        question: 'To convert unsigned decimal to binary, you repeatedly divide by:',
        options: [
            '8',
            '10',
            '2',
            '16'
        ],
        correctAnswer: 2,
        explanation: 'To convert unsigned decimal to binary, repeatedly divide by 2 and save each remainder as a binary digit.'
    }
];
