
        // Tab switching for main sections
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const tabId = tab.getAttribute('data-tab');
                document.querySelectorAll('.content-container').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(`${tabId}-content`).classList.add('active');
            });
        });
        
        // Toggle language reference dropdown
        const dropdownHeader = document.querySelector('.dropdown-header');
        const dropdownContent = document.querySelector('.dropdown-content');
        const dropdownIcon = document.querySelector('.dropdown-icon');
        
        dropdownHeader.addEventListener('click', () => {
            dropdownContent.classList.toggle('show');
            dropdownIcon.textContent = dropdownContent.classList.contains('show') ? '▲' : '▼';
        });
        
        // Tab switching for language reference
        const refTabs = document.querySelectorAll('.reference-tab');
        refTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                refTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const refId = tab.getAttribute('data-ref');
                document.querySelectorAll('.reference-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(`${refId}-content`).classList.add('active');
            });
        });
        
        // Language data for icons, colors, and descriptions
        const languageData = {
            cpp: {
                name: 'C++',
                icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#00599C"/><text x="50%" y="55%" text-anchor="middle" fill="#fff" font-size="18" font-family="Arial" dy=".3em">C++</text></svg>`,
                color: '#00599C',
                backgroundColor: '#e3f0fa',
                description: 'C++ is a powerful general-purpose programming language, widely used for system/software development and game programming.',
                keywords: [
                    { keyword: 'int', description: 'Integer data type', example: 'int x = 5;' },
                    { keyword: 'if', description: 'Conditional statement', example: 'if (x > 0) { ... }' },
                    { keyword: 'for', description: 'Loop construct', example: 'for (int i = 0; i < 10; i++) { ... }' },
                    { keyword: 'while', description: 'Loop construct', example: 'while (x > 0) { ... }' },
                    { keyword: 'class', description: 'Class definition', example: 'class MyClass { ... };' },
                    { keyword: 'return', description: 'Return statement', example: 'return value;' },
                    { keyword: 'void', description: 'No return type', example: 'void function() { ... }' },
                    { keyword: 'const', description: 'Constant value', example: 'const int MAX = 100;' },
                    { keyword: 'static', description: 'Static storage', example: 'static int count = 0;' },
                    { keyword: 'namespace', description: 'Namespace declaration', example: 'namespace myspace { ... }' }
                ],
                operators: [
                    { operator: '+, -, *, /', type: 'Arithmetic', example: 'a + b, a - b, a * b, a / b' },
                    { operator: '==, !=, >, <, >=, <=', type: 'Comparison', example: 'a == b, a != b, a > b' },
                    { operator: '&&, ||, !', type: 'Logical', example: 'a && b, a || b, !a' },
                    { operator: '=, +=, -=, *=, /=', type: 'Assignment', example: 'a = b, a += b, a -= b' },
                    { operator: '&, |, ^, ~, <<, >>', type: 'Bitwise', example: 'a & b, a | b, a ^ b, ~a' }
                ],
                separators: [
                    { separator: '{ }', description: 'Braces - Block of code', example: 'if (condition) { statements; }' },
                    { separator: '( )', description: 'Parentheses - Function calls, conditions', example: 'function(param1, param2)' },
                    { separator: '[ ]', description: 'Brackets - Arrays', example: 'int array[10];' },
                    { separator: ';', description: 'Semicolon - End of statement', example: 'int x = 10;' },
                    { separator: ',', description: 'Comma - Separator for parameters, declarations', example: 'int x, y, z;' },
                    { separator: '.', description: 'Dot - Member access', example: 'object.member' },
                    { separator: '::', description: 'Scope resolution', example: 'std::cout' }
                ],
                literals: [
                    { type: 'Integer', description: 'Whole numbers', example: '42, 0, -10, 0xFF (hex), 077 (octal)' },
                    { type: 'Floating Point', description: 'Decimal numbers', example: '3.14, 2.5e2, .5, 1.0f' },
                    { type: 'Character', description: 'Single character', example: "'a', '5', '\\n', '\\t'" },
                    { type: 'String', description: 'Sequence of characters', example: '"Hello", "123", "", "x"' },
                    { type: 'Boolean', description: 'Logical values', example: 'true, false' }
                ]
            },
            c: {
                name: 'C',
                icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#283593"/><text x="50%" y="55%" text-anchor="middle" fill="#fff" font-size="20" font-family="Arial" dy=".3em">C</text></svg>`,
                color: '#283593',
                backgroundColor: '#e3e6fa',
                description: 'C is a foundational procedural programming language, known for its efficiency and control over system resources.',
                keywords: [
                    { keyword: 'int', description: 'Integer data type', example: 'int x = 5;' },
                    { keyword: 'if', description: 'Conditional statement', example: 'if (x > 0) { ... }' },
                    { keyword: 'for', description: 'Loop construct', example: 'for (i = 0; i < 10; i++) { ... }' },
                    { keyword: 'while', description: 'Loop construct', example: 'while (x > 0) { ... }' },
                    { keyword: 'struct', description: 'Structure definition', example: 'struct Point { int x, y; };' },
                    { keyword: 'return', description: 'Return statement', example: 'return value;' },
                    { keyword: 'void', description: 'No return type', example: 'void function() { ... }' },
                    { keyword: 'const', description: 'Constant value', example: 'const int MAX = 100;' },
                    { keyword: 'static', description: 'Static storage', example: 'static int count = 0;' },
                    { keyword: 'typedef', description: 'Type definition', example: 'typedef int Integer;' }
                ],
                operators: [
                    { operator: '+, -, *, /', type: 'Arithmetic', example: 'a + b, a - b, a * b, a / b' },
                    { operator: '==, !=, >, <, >=, <=', type: 'Comparison', example: 'a == b, a != b, a > b' },
                    { operator: '&&, ||, !', type: 'Logical', example: 'a && b, a || b, !a' },
                    { operator: '=, +=, -=, *=, /=', type: 'Assignment', example: 'a = b, a += b, a -= b' },
                    { operator: '&, |, ^, ~, <<, >>', type: 'Bitwise', example: 'a & b, a | b, a ^ b, ~a' }
                ],
                separators: [
                    { separator: '{ }', description: 'Braces - Block of code', example: 'if (condition) { statements; }' },
                    { separator: '( )', description: 'Parentheses - Function calls, conditions', example: 'function(param1, param2)' },
                    { separator: '[ ]', description: 'Brackets - Arrays', example: 'int array[10];' },
                    { separator: ';', description: 'Semicolon - End of statement', example: 'int x = 10;' },
                    { separator: ',', description: 'Comma - Separator for parameters, declarations', example: 'int x, y, z;' },
                    { separator: '.', description: 'Dot - Member access', example: 'struct.member' },
                    { separator: '->', description: 'Arrow - Pointer member access', example: 'ptr->member' }
                ],
                literals: [
                    { type: 'Integer', description: 'Whole numbers', example: '42, 0, -10, 0xFF (hex), 077 (octal)' },
                    { type: 'Floating Point', description: 'Decimal numbers', example: '3.14, 2.5e2, .5, 1.0f' },
                    { type: 'Character', description: 'Single character', example: "'a', '5', '\\n', '\\t'" },
                    { type: 'String', description: 'Sequence of characters', example: '"Hello", "123", "", "x"' },
                    { type: 'Boolean', description: 'Logical values', example: '1, 0' }
                ]
            },
            java: {
                name: 'Java',
                icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#E76F00"/><text x="50%" y="55%" text-anchor="middle" fill="#fff" font-size="16" font-family="Arial" dy=".3em">Java</text></svg>`,
                color: '#E76F00',
                backgroundColor: '#fff3e6',
                description: 'Java is a versatile, object-oriented language used for building cross-platform applications and enterprise solutions.',
                keywords: [
                    { keyword: 'int', description: 'Integer data type', example: 'int x = 5;' },
                    { keyword: 'if', description: 'Conditional statement', example: 'if (x > 0) { ... }' },
                    { keyword: 'for', description: 'Loop construct', example: 'for (int i = 0; i < 10; i++) { ... }' },
                    { keyword: 'while', description: 'Loop construct', example: 'while (x > 0) { ... }' },
                    { keyword: 'class', description: 'Class definition', example: 'public class MyClass { ... }' },
                    { keyword: 'return', description: 'Return statement', example: 'return value;' },
                    { keyword: 'void', description: 'No return type', example: 'public void method() { ... }' },
                    { keyword: 'final', description: 'Constant value', example: 'final int MAX = 100;' },
                    { keyword: 'static', description: 'Static storage', example: 'static int count = 0;' },
                    { keyword: 'package', description: 'Package declaration', example: 'package com.example;' }
                ],
                operators: [
                    { operator: '+, -, *, /', type: 'Arithmetic', example: 'a + b, a - b, a * b, a / b' },
                    { operator: '==, !=, >, <, >=, <=', type: 'Comparison', example: 'a == b, a != b, a > b' },
                    { operator: '&&, ||, !', type: 'Logical', example: 'a && b, a || b, !a' },
                    { operator: '=, +=, -=, *=, /=', type: 'Assignment', example: 'a = b, a += b, a -= b' },
                    { operator: 'instanceof', type: 'Type comparison', example: 'obj instanceof String' }
                ],
                separators: [
                    { separator: '{ }', description: 'Braces - Block of code', example: 'if (condition) { statements; }' },
                    { separator: '( )', description: 'Parentheses - Function calls, conditions', example: 'method(param1, param2)' },
                    { separator: '[ ]', description: 'Brackets - Arrays', example: 'int[] array = new int[10];' },
                    { separator: ';', description: 'Semicolon - End of statement', example: 'int x = 10;' },
                    { separator: ',', description: 'Comma - Separator for parameters, declarations', example: 'int x, y, z;' },
                    { separator: '.', description: 'Dot - Member access', example: 'object.method()' },
                    { separator: '::', description: 'Method reference', example: 'System.out::println' }
                ],
                literals: [
                    { type: 'Integer', description: 'Whole numbers', example: '42, 0, -10, 0xFF (hex), 077 (octal)' },
                    { type: 'Floating Point', description: 'Decimal numbers', example: '3.14, 2.5e2, .5, 1.0f' },
                    { type: 'Character', description: 'Single character', example: "'a', '5', '\\n', '\\t'" },
                    { type: 'String', description: 'Sequence of characters', example: '"Hello", "123", "", "x"' },
                    { type: 'Boolean', description: 'Logical values', example: 'true, false' }
                ]
            },
            python: {
                name: 'Python',
                icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#FFD43B"/><text x="50%" y="55%" text-anchor="middle" fill="#306998" font-size="16" font-family="Arial" dy=".3em">Py</text></svg>`,
                color: '#FFD43B',
                backgroundColor: '#fffbe6',
                description: 'Python is a popular, easy-to-learn language known for its readability and wide range of applications.',
                keywords: [
                    { keyword: 'if', description: 'Conditional statement', example: 'if x > 0: ...' },
                    { keyword: 'for', description: 'Loop construct', example: 'for i in range(10): ...' },
                    { keyword: 'while', description: 'Loop construct', example: 'while x > 0: ...' },
                    { keyword: 'def', description: 'Function definition', example: 'def function(): ...' },
                    { keyword: 'class', description: 'Class definition', example: 'class MyClass: ...' },
                    { keyword: 'return', description: 'Return statement', example: 'return value' },
                    { keyword: 'import', description: 'Module import', example: 'import math' },
                    { keyword: 'from', description: 'Selective import', example: 'from math import sqrt' },
                    { keyword: 'try', description: 'Exception handling', example: 'try: ... except: ...' },
                    { keyword: 'with', description: 'Context manager', example: 'with open(file) as f: ...' }
                ],
                operators: [
                    { operator: '+, -, *, /, //, **, %', type: 'Arithmetic', example: 'a + b, a - b, a * b, a / b' },
                    { operator: '==, !=, >, <, >=, <=', type: 'Comparison', example: 'a == b, a != b, a > b' },
                    { operator: 'and, or, not', type: 'Logical', example: 'a and b, a or b, not a' },
                    { operator: '=, +=, -=, *=, /=', type: 'Assignment', example: 'a = b, a += b, a -= b' },
                    { operator: 'in, is', type: 'Membership/Identity', example: 'x in list, a is b' }
                ],
                separators: [
                    { separator: ':', description: 'Colon - Start of block', example: 'if condition: ...' },
                    { separator: '( )', description: 'Parentheses - Function calls, tuples', example: 'function(param1, param2)' },
                    { separator: '[ ]', description: 'Brackets - Lists, indexing', example: 'list[0]' },
                    { separator: '{ }', description: 'Braces - Dictionaries, sets', example: '{"key": "value"}' },
                    { separator: ',', description: 'Comma - Separator for items', example: 'x, y, z' },
                    { separator: '.', description: 'Dot - Member access', example: 'object.method()' },
                    { separator: '@', description: 'Decorator', example: '@decorator' }
                ],
                literals: [
                    { type: 'Integer', description: 'Whole numbers', example: '42, 0, -10, 0xFF (hex), 0o77 (octal)' },
                    { type: 'Float', description: 'Decimal numbers', example: '3.14, 2.5e2, .5' },
                    { type: 'String', description: 'Text', example: '"Hello", \'World\', """Multi-line"""' },
                    { type: 'Boolean', description: 'Logical values', example: 'True, False' },
                    { type: 'None', description: 'Null value', example: 'None' }
                ]
            },
            js: {
                name: 'JavaScript',
                icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#F7DF1E"/><text x="50%" y="55%" text-anchor="middle" fill="#323330" font-size="14" font-family="Arial" dy=".3em">JS</text></svg>`,
                color: '#F7DF1E',
                backgroundColor: '#fffde6',
                description: 'JavaScript is the language of the web, enabling interactive and dynamic web applications.',
                keywords: [
                    { keyword: 'let', description: 'Variable declaration', example: 'let x = 5;' },
                    { keyword: 'const', description: 'Constant declaration', example: 'const MAX = 100;' },
                    { keyword: 'if', description: 'Conditional statement', example: 'if (x > 0) { ... }' },
                    { keyword: 'for', description: 'Loop construct', example: 'for (let i = 0; i < 10; i++) { ... }' },
                    { keyword: 'function', description: 'Function definition', example: 'function name() { ... }' },
                    { keyword: 'return', description: 'Return statement', example: 'return value;' },
                    { keyword: 'class', description: 'Class definition', example: 'class MyClass { ... }' },
                    { keyword: 'import', description: 'Module import', example: 'import { name } from "module";' },
                    { keyword: 'export', description: 'Module export', example: 'export const name = value;' },
                    { keyword: 'async', description: 'Async function', example: 'async function name() { ... }' }
                ],
                operators: [
                    { operator: '+, -, *, /, **, %', type: 'Arithmetic', example: 'a + b, a - b, a * b, a / b' },
                    { operator: '==, ===, !=, !==, >, <, >=, <=', type: 'Comparison', example: 'a === b, a !== b, a > b' },
                    { operator: '&&, ||, !', type: 'Logical', example: 'a && b, a || b, !a' },
                    { operator: '=, +=, -=, *=, /=', type: 'Assignment', example: 'a = b, a += b, a -= b' },
                    { operator: '?.', type: 'Optional chaining', example: 'obj?.prop' }
                ],
                separators: [
                    { separator: '{ }', description: 'Braces - Block of code', example: 'if (condition) { statements; }' },
                    { separator: '( )', description: 'Parentheses - Function calls, conditions', example: 'function(param1, param2)' },
                    { separator: '[ ]', description: 'Brackets - Arrays, indexing', example: 'array[0]' },
                    { separator: ';', description: 'Semicolon - End of statement', example: 'let x = 10;' },
                    { separator: ',', description: 'Comma - Separator for items', example: 'let x, y, z;' },
                    { separator: '.', description: 'Dot - Member access', example: 'object.method()' },
                    { separator: '=>', description: 'Arrow function', example: '() => { ... }' }
                ],
                literals: [
                    { type: 'Number', description: 'Numeric values', example: '42, 3.14, 0xFF, 1e3' },
                    { type: 'String', description: 'Text', example: '"Hello", \'World\', `Template`' },
                    { type: 'Boolean', description: 'Logical values', example: 'true, false' },
                    { type: 'Array', description: 'List of values', example: '[1, 2, 3]' },
                    { type: 'Object', description: 'Key-value pairs', example: '{ key: "value" }' }
                ]
            }
        };
        
        // Change language reference content based on selection
        const langRefSelect = document.getElementById('reference-language');
        langRefSelect.addEventListener('change', () => {
            const lang = langRefSelect.value;
            const data = languageData[lang];
            
            // Update heading
            document.querySelectorAll('.reference-content h3').forEach(heading => {
                const contentType = heading.parentElement.id.split('-')[0];
                heading.textContent = `${contentType.charAt(0).toUpperCase() + contentType.slice(1)} in ${data.name}`;
            });

            // Update icon and description
            const iconEl = document.getElementById('language-icon');
            iconEl.classList.remove('animated');
            void iconEl.offsetWidth; // trigger reflow for animation
            iconEl.innerHTML = data.icon;
            setTimeout(() => iconEl.classList.add('animated'), 50);
            document.getElementById('language-description').textContent = data.description;

            // Update background color
            const refDropdown = document.querySelector('.reference-dropdown');
            refDropdown.classList.add('dynamic-bg');
            refDropdown.style.backgroundColor = data.backgroundColor;

            // Update content tables
            updateReferenceTable('keywords-content', data.keywords, ['Keyword', 'Description', 'Example']);
            updateReferenceTable('operators-content', data.operators, ['Operator', 'Type', 'Example']);
            updateReferenceTable('separators-content', data.separators, ['Separator', 'Description', 'Example']);
            updateReferenceTable('literals-content', data.literals, ['Type', 'Description', 'Example']);
        });

        function updateReferenceTable(contentId, data, headers) {
            const content = document.getElementById(contentId);
            const table = content.querySelector('.reference-table');
            
            table.innerHTML = `
                <tr>
                    ${headers.map(h => `<th>${h}</th>`).join('')}
                </tr>
                ${data.map(item => `
                    <tr>
                        ${Object.values(item).map(value => `<td>${value}</td>`).join('')}
                    </tr>
                `).join('')}
            `;
        }

        // Set initial language info and color
        window.addEventListener('DOMContentLoaded', () => {
            const lang = langRefSelect.value;
            const data = languageData[lang];
            
            const iconEl = document.getElementById('language-icon');
            iconEl.innerHTML = data.icon;
            setTimeout(() => iconEl.classList.add('animated'), 100);
            document.getElementById('language-description').textContent = data.description;
            document.querySelector('.reference-dropdown').style.backgroundColor = data.backgroundColor;

            // Initialize content tables
            updateReferenceTable('keywords-content', data.keywords, ['Keyword', 'Description', 'Example']);
            updateReferenceTable('operators-content', data.operators, ['Operator', 'Type', 'Example']);
            updateReferenceTable('separators-content', data.separators, ['Separator', 'Description', 'Example']);
            updateReferenceTable('literals-content', data.literals, ['Type', 'Description', 'Example']);
        });
        
        // Lexical Analyzer Implementation
        class LexicalAnalyzer {
            constructor() {
                this.keywords = new Set([
                    'if', 'else', 'while', 'for', 'do', 'switch', 'case', 'break', 'continue',
                    'return', 'void', 'int', 'float', 'double', 'char', 'string', 'bool',
                    'true', 'false', 'null', 'class', 'public', 'private', 'protected',
                    'static', 'final', 'const', 'using', 'namespace', 'include', 'import'
                ]);
                
                this.operators = new Set([
                    '+', '-', '*', '/', '%', '=', '==', '!=', '>', '<', '>=', '<=',
                    '&&', '||', '!', '&', '|', '^', '~', '<<', '>>', '+=', '-=', '*=', '/='
                ]);
                
                this.separators = new Set([
                    '(', ')', '{', '}', '[', ']', ';', ',', '.', ':', '::'
                ]);
            }

            analyze(code) {
                const tokens = [];
                let currentToken = '';
                let line = 1;
                let column = 1;

                for (let i = 0; i < code.length; i++) {
                    const char = code[i];
                    
                    // Handle whitespace
                    if (char === ' ' || char === '\t') {
                        if (currentToken) {
                            tokens.push(this.classifyToken(currentToken, line, column - currentToken.length));
                            currentToken = '';
                        }
                        column++;
                        continue;
                    }

                    // Handle newlines
                    if (char === '\n') {
                        if (currentToken) {
                            tokens.push(this.classifyToken(currentToken, line, column - currentToken.length));
                            currentToken = '';
                        }
                        line++;
                        column = 1;
                        continue;
                    }

                    // Handle comments
                    if (char === '/' && code[i + 1] === '/') {
                        if (currentToken) {
                            tokens.push(this.classifyToken(currentToken, line, column - currentToken.length));
                            currentToken = '';
                        }
                        while (i < code.length && code[i] !== '\n') i++;
                        line++;
                        column = 1;
                        continue;
                    }

                    // Handle operators and separators
                    if (this.operators.has(char) || this.separators.has(char)) {
                        if (currentToken) {
                            tokens.push(this.classifyToken(currentToken, line, column - currentToken.length));
                            currentToken = '';
                        }
                        tokens.push({
                            type: this.operators.has(char) ? 'Operator' : 'Separator',
                            value: char,
                            line,
                            column
                        });
                        column++;
                        continue;
                    }

                    currentToken += char;
                    column++;
                }

                // Handle last token if exists
                if (currentToken) {
                    tokens.push(this.classifyToken(currentToken, line, column - currentToken.length));
                }

                return tokens;
            }

            classifyToken(token, line, column) {
                if (this.keywords.has(token.toLowerCase())) {
                    return { type: 'Keyword', value: token, line, column };
                }
                if (/^[0-9]+(\.[0-9]+)?$/.test(token)) {
                    return { type: 'Number', value: token, line, column };
                }
                if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
                    return { type: 'Identifier', value: token, line, column };
                }
                if (/^"[^"]*"$/.test(token) || /^'[^']*'$/.test(token)) {
                    return { type: 'String', value: token, line, column };
                }
                return { type: 'Unknown', value: token, line, column };
            }
        }

        // Parse Tree Generator Implementation
        class ParseTreeGenerator {
            constructor() {
                this.precedence = {
                    '=': 1,
                    '+': 2, '-': 2,
                    '*': 3, '/': 3, '%': 3
                };
            }

            generateTree(expression) {
                const tokens = this.tokenize(expression);
                return this.buildTree(tokens);
            }

            tokenize(expression) {
                const tokens = [];
                let current = '';
                
                for (let i = 0; i < expression.length; i++) {
                    const char = expression[i];
                    
                    if (char === ' ') continue;
                    
                    if (this.isOperator(char)) {
                        if (current) {
                            tokens.push({ type: 'operand', value: current });
                            current = '';
                        }
                        tokens.push({ type: 'operator', value: char });
                    } else {
                        current += char;
                    }
                }
                
                if (current) {
                    tokens.push({ type: 'operand', value: current });
                }
                
                return tokens;
            }

            isOperator(char) {
                return ['+', '-', '*', '/', '%', '='].includes(char);
            }

            buildTree(tokens) {
                const output = [];
                const operators = [];
                
                for (const token of tokens) {
                    if (token.type === 'operand') {
                        output.push(token);
                    } else {
                        while (operators.length > 0 && 
                               this.precedence[operators[operators.length - 1].value] >= this.precedence[token.value]) {
                            output.push(operators.pop());
                        }
                        operators.push(token);
                    }
                }
                
                while (operators.length > 0) {
                    output.push(operators.pop());
                }
                
                return this.constructTree(output);
            }

            constructTree(postfix) {
                const stack = [];
                
                for (const token of postfix) {
                    if (token.type === 'operand') {
                        stack.push({ value: token.value, left: null, right: null });
                    } else {
                        const right = stack.pop();
                        const left = stack.pop();
                        stack.push({ value: token.value, left, right });
                    }
                }
                
                return stack[0];
            }

            // Improved systematic vertical tree printer
            treeToString(node) {
                if (!node) return '';
                // Helper to recursively build lines and return [lines, width, rootPos]
                function buildLines(node) {
                    if (!node) return [[''], 0, 0];
                    const val = String(node.value);
                    const valWidth = val.length;

                    // Leaf node
                    if (!node.left && !node.right) {
                        return [[val], valWidth, Math.floor(valWidth / 2)];
                    }

                    // Build left and right subtrees
                    const [leftLines, leftWidth, leftRoot] = node.left ? buildLines(node.left) : [[''], 0, 0];
                    const [rightLines, rightWidth, rightRoot] = node.right ? buildLines(node.right) : [[''], 0, 0];

                    // Calculate positions
                    const minSpace = 2; // Minimum space between subtrees
                    const between = leftWidth > 0 && rightWidth > 0 ? minSpace : 0;
                    const width = leftWidth + between + rightWidth;
                    const rootPos = leftWidth + Math.floor(between / 2);

                    // First line: node value centered
                    let firstLine = ' '.repeat(leftWidth) + val + ' '.repeat(rightWidth);

                    // Second line: connectors
                    let secondLine = '';
                    if (node.left) {
                        secondLine += ' '.repeat(leftRoot) + '/' + ' '.repeat(leftWidth - leftRoot - 1);
                    } else {
                        secondLine += ' '.repeat(leftWidth);
                    }
                    secondLine += ' '.repeat(valWidth);
                    if (node.right) {
                        secondLine += ' '.repeat(rightRoot) + '\\' + ' '.repeat(rightWidth - rightRoot - 1);
                    } else {
                        secondLine += ' '.repeat(rightWidth);
                    }

                    // Merge left and right lines
                    const maxLen = Math.max(leftLines.length, rightLines.length);
                    const merged = [];
                    for (let i = 0; i < maxLen; i++) {
                        const leftLine = leftLines[i] || ' '.repeat(leftWidth);
                        const rightLine = rightLines[i] || ' '.repeat(rightWidth);
                        merged.push(leftLine + ' '.repeat(between) + rightLine);
                    }

                    return [[firstLine, secondLine, ...merged], width + valWidth, rootPos + Math.floor(valWidth / 2)];
                }
                return buildLines(node)[0].join('\n');
            }
        }

        // Handle the analyze code button
        const analyzeBtn = document.getElementById('analyze-btn');
        const lexicalAnalyzer = new LexicalAnalyzer();
        
        analyzeBtn.addEventListener('click', () => {
            const codeInput = document.getElementById('code-input').value;
            const lang = document.getElementById('language-select').value;
            
            if (!codeInput.trim()) {
                alert("Please enter some code to analyze.");
                return;
            }
            
            const tokens = lexicalAnalyzer.analyze(codeInput);
            
            // Count token types
            const tokenCounts = {};
            tokens.forEach(token => {
                tokenCounts[token.type] = (tokenCounts[token.type] || 0) + 1;
            });
            
            // Update summary table
            const summaryTable = document.querySelector('.token-summary .token-table');
            summaryTable.innerHTML = `
                <tr>
                    <th>Token Type</th>
                    <th>Count</th>
                </tr>
                ${Object.entries(tokenCounts).map(([type, count]) => `
                    <tr>
                        <td>${type}</td>
                        <td>${count}</td>
                    </tr>
                `).join('')}
            `;
            
            // Update detailed tokens table
            const detailedTable = document.querySelector('.detailed-tokens .token-table');
            detailedTable.innerHTML = `
                <tr>
                    <th>No.</th>
                    <th>Token Type</th>
                    <th>Token Value</th>
                    <th>Line</th>
                    <th>Column</th>
                </tr>
                ${tokens.map((token, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${token.type}</td>
                        <td><code>${token.value}</code></td>
                        <td>${token.line}</td>
                        <td>${token.column}</td>
                    </tr>
                `).join('')}
            `;
        });
        
        // Handle the parse tree generation button
        const parseBtn = document.getElementById('parse-btn');
        const parseTreeGenerator = new ParseTreeGenerator();
        
        parseBtn.addEventListener('click', () => {
            const expressionInput = document.getElementById('expression-input').value;
            
            if (!expressionInput.trim()) {
                alert("Please enter an expression to parse.");
                return;
            }
            
            try {
                const tree = parseTreeGenerator.generateTree(expressionInput);
                const treeString = parseTreeGenerator.treeToString(tree);
                
                const parseResultBox = document.querySelector('#parse-content .result-box');
                parseResultBox.innerHTML = `
                    <div class="result-summary">
                        <b>Output Summary:</b> This section displays the parse tree for the given expression.
                    </div>
                    <div>
                        <div class="summary-title">Expression: ${expressionInput}</div>
                        <div class="parse-tree">
                            <pre>${treeString}</pre>
                        </div>
                    </div>
                `;
            } catch (error) {
                alert("Error parsing expression: " + error.message);
            }
        });

        // Intermediate Code Generator Implementation
        class IRGenerator {
            constructor() {
                this.tempCounter = 1;
                this.tempVars = new Set();
            }

            generate(expression) {
                this.tempCounter = 1;
                this.tempVars.clear();
                
                const tokens = this.tokenize(expression);
                const postfix = this.toPostfix(tokens);
                return this.generateThreeAddressCode(postfix);
            }

            tokenize(expression) {
                const tokens = [];
                let current = '';
                
                for (let i = 0; i < expression.length; i++) {
                    const char = expression[i];
                    
                    if (char === ' ') continue;
                    
                    if (this.isOperator(char)) {
                        if (current) {
                            tokens.push({ type: 'operand', value: current });
                            current = '';
                        }
                        tokens.push({ type: 'operator', value: char });
                    } else {
                        current += char;
                    }
                }
                
                if (current) {
                    tokens.push({ type: 'operand', value: current });
                }
                
                return tokens;
            }

            isOperator(char) {
                return ['+', '-', '*', '/', '%', '='].includes(char);
            }

            getPrecedence(operator) {
                switch (operator) {
                    case '=': return 1;
                    case '+': case '-': return 2;
                    case '*': case '/': case '%': return 3;
                    default: return 0;
                }
            }

            toPostfix(tokens) {
                const output = [];
                const operators = [];
                
                for (const token of tokens) {
                    if (token.type === 'operand') {
                        output.push(token);
                    } else {
                        while (operators.length > 0 && 
                               this.getPrecedence(operators[operators.length - 1].value) >= this.getPrecedence(token.value)) {
                            output.push(operators.pop());
                        }
                        operators.push(token);
                    }
                }
                
                while (operators.length > 0) {
                    output.push(operators.pop());
                }
                
                return output;
            }

            generateThreeAddressCode(postfix) {
                const stack = [];
                const code = [];
                
                for (const token of postfix) {
                    if (token.type === 'operand') {
                        stack.push(token.value);
                    } else {
                        const right = stack.pop();
                        const left = stack.pop();
                        
                        if (token.value === '=') {
                            code.push(`${left} = ${right}`);
                            stack.push(left);
                        } else {
                            const temp = `t${this.tempCounter++}`;
                            this.tempVars.add(temp);
                            code.push(`${temp} = ${left} ${token.value} ${right}`);
                            stack.push(temp);
                        }
                    }
                }
                
                return {
                    code: code,
                    tempVars: Array.from(this.tempVars)
                };
            }
        }

        // Handle the IR generation button
        const irGenerateBtn = document.getElementById('ir-generate-btn');
        const irGenerator = new IRGenerator();
        
        irGenerateBtn.addEventListener('click', () => {
            const expressionInput = document.getElementById('ir-expression-input').value;
            
            if (!expressionInput.trim()) {
                alert("Please enter an expression to generate IR.");
                return;
            }
            
            try {
                const ir = irGenerator.generate(expressionInput);
                
                // Update IR code display with styled elements
                document.getElementById('ir-code').innerHTML = `
                    <div class="ir-code-block">
                        ${ir.code.map(line => {
                            const parts = line.split(/([=+\-*/])/);
                            return `
                                <div class="ir-line">
                                    ${parts.map(part => {
                                        if (part === '=') return `<span class="equals">${part}</span>`;
                                        if (['+', '-', '*', '/', '%'].includes(part)) return `<span class="operator">${part}</span>`;
                                        if (part.startsWith('t')) return `<span class="temp-var">${part}</span>`;
                                        return part;
                                    }).join('')}
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;

                // Update temporary variables display with styled elements
                document.getElementById('temp-vars').innerHTML = `
                    <div class="temp-vars-list">
                        ${ir.tempVars.map(temp => `
                            <div class="temp-var">${temp}</div>
                        `).join('')}
                    </div>
                `;
                
            } catch (error) {
                alert("Error generating IR: " + error.message);
            }
        });

        // Enhanced IR Generator with Optimizations
        class OptimizedIRGenerator extends IRGenerator {
            constructor() {
                super();
                this.optimizationSteps = [];
            }

            optimize(expression, options) {
                this.optimizationSteps = [];
                const ir = this.generate(expression);
                let optimizedCode = [...ir.code];

                if (options.constantFolding) {
                    optimizedCode = this.constantFolding(optimizedCode);
                }

                if (options.commonSubexpr) {
                    optimizedCode = this.commonSubexpressionElimination(optimizedCode);
                }

                if (options.strengthReduction) {
                    optimizedCode = this.strengthReduction(optimizedCode);
                }

                if (options.deadCode) {
                    optimizedCode = this.deadCodeElimination(optimizedCode);
                }

                return {
                    original: ir.code,
                    optimized: optimizedCode,
                    steps: this.optimizationSteps
                };
            }

            constantFolding(code) {
                const optimized = [];
                const constants = new Map();

                for (const line of code) {
                    const [target, expr] = line.split('=').map(s => s.trim());
                    const parts = expr.split(/([+\-*/])/).map(s => s.trim());
                    
                    if (parts.length === 3) {
                        const [left, op, right] = parts;
                        const leftVal = constants.get(left) ?? left;
                        const rightVal = constants.get(right) ?? right;
                        
                        if (!isNaN(leftVal) && !isNaN(rightVal)) {
                            const result = eval(`${leftVal} ${op} ${rightVal}`);
                            constants.set(target, result);
                            this.optimizationSteps.push({
                                type: 'constant',
                                original: line,
                                optimized: `${target} = ${result}`,
                                description: `Folded constant expression: ${expr} = ${result}`
                            });
                            continue;
                        }
                    }
                    optimized.push(line);
                }

                return optimized;
            }

            commonSubexpressionElimination(code) {
                const optimized = [];
                const expressions = new Map();

                for (const line of code) {
                    const [target, expr] = line.split('=').map(s => s.trim());
                    
                    if (expressions.has(expr)) {
                        const existingTemp = expressions.get(expr);
                        this.optimizationSteps.push({
                            type: 'common',
                            original: line,
                            optimized: `${target} = ${existingTemp}`,
                            description: `Reused common subexpression: ${expr}`
                        });
                        optimized.push(`${target} = ${existingTemp}`);
                    } else {
                        expressions.set(expr, target);
                        optimized.push(line);
                    }
                }

                return optimized;
            }

            deadCodeElimination(code) {
                const usedVars = new Set();
                const optimized = [];

                for (const line of code) {
                    const [target, expr] = line.split('=').map(s => s.trim());
                    const vars = expr.split(/[+\-*/]/).map(s => s.trim());
                    vars.forEach(v => usedVars.add(v));
                }

                for (const line of code) {
                    const [target] = line.split('=').map(s => s.trim());
                    if (usedVars.has(target) || !target.startsWith('t')) {
                        optimized.push(line);
                    } else {
                        this.optimizationSteps.push({
                            type: 'dead',
                            original: line,
                            optimized: '',
                            description: `Removed dead code: ${line}`
                        });
                    }
                }

                return optimized;
            }

            strengthReduction(code) {
                const optimized = [];
                
                for (const line of code) {
                    const [target, expr] = line.split('=').map(s => s.trim());
                    const parts = expr.split(/([+\-*/])/).map(s => s.trim());
                    
                    if (parts.length === 3) {
                        const [left, op, right] = parts;
                        let newExpr = expr;
                        let description = '';

                        // Multiplication by 2^n
                        if (op === '*' && !isNaN(right)) {
                            const power = Math.log2(Number(right));
                            if (Number.isInteger(power)) {
                                newExpr = `${left} << ${power}`;
                                description = `Replaced multiplication by ${right} with left shift by ${power}`;
                            }
                        }
                        // Multiplication by 2
                        else if (op === '*' && right === '2') {
                            newExpr = `${left} + ${left}`;
                            description = 'Replaced multiplication by 2 with addition';
                        }
                        // Division by 2^n
                        else if (op === '/' && !isNaN(right)) {
                            const power = Math.log2(Number(right));
                            if (Number.isInteger(power)) {
                                newExpr = `${left} >> ${power}`;
                                description = `Replaced division by ${right} with right shift by ${power}`;
                            }
                        }

                        if (newExpr !== expr) {
                            this.optimizationSteps.push({
                                type: 'strength',
                                original: line,
                                optimized: `${target} = ${newExpr}`,
                                description: description
                            });
                            optimized.push(`${target} = ${newExpr}`);
                            continue;
                        }
                    }
                    optimized.push(line);
                }

                return optimized;
            }
        }

        // Handle the optimization button
        const optimizeBtn = document.getElementById('optimize-btn');
        const optimizedIRGenerator = new OptimizedIRGenerator();
        
        optimizeBtn.addEventListener('click', () => {
            const expressionInput = document.getElementById('optimize-expression-input').value;
            const options = {
                constantFolding: document.getElementById('constant-folding').checked,
                commonSubexpr: document.getElementById('common-subexpr').checked,
                deadCode: document.getElementById('dead-code').checked,
                strengthReduction: document.getElementById('strength-reduction').checked
            };
            
            if (!expressionInput.trim()) {
                alert("Please enter an expression to optimize.");
                return;
            }
            
            try {
                const result = optimizedIRGenerator.optimize(expressionInput, options);
                
                // Display original IR
                document.getElementById('original-ir').innerHTML = `
                    <div class="ir-code-block">
                        ${result.original.map(line => {
                            const parts = line.split(/([=+\-*/])/);
                            return `
                                <div class="ir-line">
                                    ${parts.map(part => {
                                        if (part === '=') return `<span class="equals">${part}</span>`;
                                        if (['+', '-', '*', '/', '%'].includes(part)) return `<span class="operator">${part}</span>`;
                                        if (part.startsWith('t')) return `<span class="temp-var">${part}</span>`;
                                        return part;
                                    }).join('')}
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;

                // Display optimized IR
                document.getElementById('optimized-ir').innerHTML = `
                    <div class="ir-code-block">
                        ${result.optimized.map(line => {
                            const parts = line.split(/([=+\-*/])/);
                            return `
                                <div class="ir-line">
                                    ${parts.map(part => {
                                        if (part === '=') return `<span class="equals">${part}</span>`;
                                        if (['+', '-', '*', '/', '%'].includes(part)) return `<span class="operator">${part}</span>`;
                                        if (part.startsWith('t')) return `<span class="temp-var">${part}</span>`;
                                        return part;
                                    }).join('')}
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;

                // Display optimization steps
                document.getElementById('optimization-steps').innerHTML = `
                    ${result.steps.map(step => `
                        <div class="optimization-step">
                            <div class="step-title">
                                ${step.type === 'constant' ? 'Constant Folding' : 
                                  step.type === 'dead' ? 'Dead Code Elimination' : 
                                  step.type === 'strength' ? 'Strength Reduction' :
                                  'Common Subexpression Elimination'}
                                <span class="optimization-badge badge-${step.type}">
                                    ${step.type === 'constant' ? 'CF' : 
                                      step.type === 'dead' ? 'DCE' : 
                                      step.type === 'strength' ? 'SR' :
                                      'CSE'}
                                </span>
                            </div>
                            <div class="step-description">
                                ${step.description}
                            </div>
                        </div>
                    `).join('')}
                `;
                
            } catch (error) {
                alert("Error optimizing code: " + error.message);
            }
        });
    