# 🐧 Linux Command Playground

An interactive, browser-based Linux learning sandbox and real-time visualizer. Students can practice real Linux terminal commands safely—watching files, directories, permissions, users, and packages change dynamically in real time without touching their real system.

---

## 🌟 Key Features

- **100% Client-Side & Safe**: Runs entirely in modern browsers using vanilla HTML, CSS, and JavaScript. No backend, Node.js runtime, Docker, or real system access required.
- **Curriculum-Aligned Learning (14 Hands-On Questions)**: Structured exercises grouped under 4 core topics:
  - *Introduction To Linux & Linux Architecture* (Q1)
  - *Linux File System Structure* (Q2–Q3)
  - *Understanding Permissions and Ownership* (Q4–Q9: basic chmod/rwx, chown/chgrp/sudo, private 600 vs public 644, executable scripts +x/755, directory modes 700/750/755 & ls -ld, and recursive team permissions chown -R / chmod -R 775)
  - *Package Management and Software Installation* (Q10–Q14: APT, user accounts, groups, environment variables, and final mini project)
- **Three Progressive Stages**:
  1. **01 Learn**: Read clear task objectives, command explanations, and verified solutions.
  2. **02 Practice**: Execute commands in a simulated CLI with command history (Up/Down arrows) and one-click `▶ Run` buttons.
  3. **03 Review**: Track command coverage statistics and execution history.
- **Dynamic Linux Visualizer**:
  - **Virtual Filesystem Tree**: Live folder/file hierarchy with a click-to-inspect modal (file metadata & contents).
  - **Identity & Permission Decoder**: Live user/group memberships and an interactive Octal & Symbolic permission decoder (`755` ⇄ `rwxr-xr-x`).
  - **APT Package Manager**: Simulates `apt update`, `search`, `show`, `install`, `remove`, and `autoremove`.
  - **Environment Variables**: Live inspection of `$HOME`, `$USER`, `$PATH`, `export`, and `unset`.
- **Beginner Walkthrough Tour**: An interactive 9-step spotlight tour that introduces new learners to every feature with viewport-aware positioning and scroll locking.
- **Fully Responsive**: Seamlessly adapts to desktop, tablet, and mobile devices (with touch-friendly targets and iOS auto-zoom prevention).

---

## 🚀 Getting Started

No build steps or package installations are required:

1. Clone or download this repository:
   ```bash
   git clone https://github.com/spacharya-ugsot/linux-command-playground.git
   cd linux-command-playground
   ```
2. Open `index.html` directly in any modern web browser, or serve it using an extension like VS Code Live Server:
   ```bash
   # Optional: serve locally with Python
   python3 -m http.server 8000
   ```

---

## 📁 Project Architecture

```
linux-command-playground/
├── index.html       # Semantic HTML layout, modals, and tour overlay
├── styles.css       # Design system, CSS variables, animations, and media queries
├── app.js          # In-memory virtual Linux state, command interpreter, visualizer, & tour
└── README.md        # Documentation
```

### How It Works (`app.js`)

1. **Virtual State (`state`)**: Maintains the simulated Linux environment in memory:
   - `state.files`: Virtual file tree storing paths, types (`dir`/`file`), modes (`0755`, `0644`), owners, and text content.
   - `state.currentUser`, `state.groups`, `state.users`: User and group identity tables.
   - `state.packages`: APT package database with installed/available states and versions.
   - `state.env`: Shell environment variables (`$HOME`, `$PATH`, custom exports).
   - `state.history`, `state.output`: Terminal command history and output log.
2. **Command Parser & Interpreter (`execute(cmd)`)**:
   - Tokenizes input, parses flags, supports pipelines (`| grep`), output redirection (`>`, `>>`), chained commands (`&&`), and environment variable expansion (`$VAR`).
   - Simulates core Linux utilities: `pwd`, `cd`, `ls`, `mkdir`, `touch`, `cat`, `file`, `cp`, `mv`, `rm`, `rmdir`, `echo`, `chmod`, `chown`, `chgrp`, `whoami`, `id`, `groups`, `adduser`, `groupadd`, `usermod`, `su`, `apt`, `git`, `export`, `unset`, `env`, `clear`, and `history`.
3. **Reactive UI Renderers**:
   - `renderTerminal()`: Updates virtual terminal output and dynamic prompt (`user@linux-lab:path$`).
   - `renderTree()`: Rebuilds the filesystem tree with pulse animations on changed nodes.
   - `renderIdentity()`, `renderPackages()`, `renderEnv()`: Re-renders visualizer cards with spotlight effects.
   - `renderQuestionFocusBanner()`: Dynamically highlights the subsystems relevant to the active exercise.

---

## 🤝 Contributing

Contributions are welcome! Whether you want to add new simulated commands, improve the visualizer, or add new exercises:

### 1. Adding a New Question
In [`app.js`](file:///Users/s.p.acharya/Desktop/OS-Track-Code/linux-command-playground/app.js), locate the `questions` array. Add a new object following this structure:
```javascript
{
  id: 11,
  topic: "Your Topic Name",
  subtopic: "Specific Subtopic",
  title: "Exercise Title",
  focus: "Subsystem Focus (e.g. Filesystem, Networking)",
  focusDesc: "One sentence explaining what this exercise demonstrates.",
  tags: ["Tag1", "Tag2"],
  spotlightCards: ["cardFilesystem"], // Visualizer cards to highlight
  tasks: [
    "Clear, actionable sentence for step 1.",
    "Clear, actionable sentence for step 2."
  ],
  commands: [
    ["command string", "Why this command is used", "Effect on the system"]
  ]
}
```

### 2. Supporting a New Linux Command
In [`app.js`](file:///Users/s.p.acharya/Desktop/OS-Track-Code/linux-command-playground/app.js), find the command dispatch in `executeSingleCommand()`. Add a new case handling the command, update `state`, and invoke the appropriate renderers:
```javascript
if (c === "mycommand") {
  // 1. Validate arguments and permissions
  // 2. Mutate virtual state (files, env, users, etc.)
  // 3. Append to state.output
  // 4. Trigger UI renderers (renderTree(), renderIdentity(), etc.)
  return;
}
```

### 3. Guidelines
- **Zero External Dependencies**: Keep the application purely client-side with native vanilla JavaScript and CSS.
- **Aesthetic Excellence**: Maintain the dark-mode terminal aesthetics, clean card layouts, smooth transitions, and responsive mobile design.
- **Safety First**: All operations must remain strictly inside the in-memory simulation.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
