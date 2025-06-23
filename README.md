# Lexical Analyzer & Parse Tree Generator 🌐

This project is a web-based interactive tool that allows users to:

- Analyze source code using a lexical analyzer
- Visualize the parse tree of arithmetic expressions
- Generate intermediate code
- Apply code optimization techniques
- Explore language syntax reference guides

---

## 🔧 Features

### 1. **Lexical Analyzer**
- Tokenizes C language code input
- Identifies keywords, identifiers, literals, operators, and separators
- Provides a summary and detailed token list

### 2. **Parse Tree Generator**
- Parses arithmetic expressions like `a = b * c + d - e`
- Constructs and displays a visual tree structure
- Supports operators: `=`, `+`, `-`, `*`, `/`, `%`

### 3. **Intermediate Code Generator**
- Generates Three-Address Code (TAC)
- Displays temporary variables and operations

### 4. **Code Optimizer**
- Supports:
  - Constant Folding
  - Dead Code Elimination
  - Common Subexpression Elimination
  - Strength Reduction
- Shows original and optimized code with step-by-step logs

### 5. **Language Reference**
- Includes guides for:
  - Keywords
  - Operators
  - Separators
  - Literals
- Currently supports: C (UI ready for C++, Java, Python, JS)

## 👥 Team Members

- **Abhishek Agrawal** (220111249)  
- **Dhrve Sahdev** (22021842)  
- **Shaurya Bhardwaj** (220112851)

---

## 📁 Project Structure

```plaintext
├── project_pbl.html       # Main HTML file with UI layout
├── style.css              # CSS for styling the interface
└── javascrip.js           # JavaScript file containing core logic
