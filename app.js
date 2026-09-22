const questions = [
  {
    id: 1,
    title: "Explore Your Linux Location",
    topic: "Introduction To Linux & Linux Architecture",
    subtopic: "Exploring Linux Environment • Getting Comfortable With the Terminal",
    focus: "pwd • ls • cd",
    focusArea: "filesystem",
    focusSubsystem: "Path & Directory Navigation",
    focusDesc: "Practice pwd, ls, and cd to navigate between your home directory and subdirectories.",
    focusTags: ["Navigation", "pwd", "ls", "cd"],
    highlightTarget: "/home/student",
    tasks: [
      "Navigate to your home directory using the tilde (~) shortcut.",
      "Print your current working directory to confirm your exact location in the filesystem.",
      "List the files in your directory using standard, long (-l), all/hidden (-a), and combined detailed (-la) formats.",
      "Practice directory navigation by entering linux-handson, moving up to its parent directory, returning into linux-handson, switching to the previous directory with cd -, and finally heading back to home.",
    ],
    commands: [
      [
        "cd ~",
        "Move to your home directory.",
        "Your working directory becomes /home/student.",
      ],
      [
        "pwd",
        "Print the current working directory.",
        "The terminal reports exactly where you are.",
      ],
      [
        "ls",
        "List visible files/folders.",
        "You see the contents of the current directory.",
      ],
      [
        "ls -l",
        "Show detailed file information.",
        "Permissions, owner, group, size and names appear.",
      ],
      [
        "ls -a",
        "Include hidden files.",
        "Names such as .bashrc become visible.",
      ],
      [
        "ls -la",
        "Combine detailed + hidden.",
        "You get the most useful directory overview.",
      ],
      [
        "cd ~/linux-handson",
        "Enter the practice directory.",
        "The shell location changes to the lab folder.",
      ],
      ["cd ..", "Move to the parent directory.", "You move one level upward."],
      [
        "cd linux-handson",
        "Return using a relative path.",
        "The shell enters the lab directory again.",
      ],
      [
        "cd -",
        "Return to the previous directory.",
        "The shell switches to the last working directory.",
      ],
      ["cd ~", "Return home.", "The shell returns to your home directory."],
    ],
  },
  {
    id: 2,
    title: "Build a Small Project Structure",
    topic: "Linux File System Structure",
    subtopic: "Creating and Managing Files and Folders",
    focus: "mkdir • mkdir -p • touch • file • cat",
    focusArea: "filesystem",
    focusSubsystem: "File & Directory Creation",
    focusDesc: "Watch directories and files appear dynamically in the virtual filesystem tree as you create them.",
    focusTags: ["Filesystem", "mkdir", "touch", "cat"],
    highlightTarget: "web-project",
    tasks: [
      "Create a main project directory named web-project, then use mkdir -p to create html, css, and js subdirectories inside it in a single command.",
      "Create deeply nested subdirectories web-project/js/src/components using the -p flag to create any missing parent folders automatically.",
      "Create three empty files: index.html in html/, style.css in css/, and app.js in js/ using the touch command.",
      "Write the text 'My First Linux Project' into web-project/html/index.html using the echo command with output redirection (>), then read its contents with cat.",
      "Inspect the file types of index.html and app.js using the file command to see how Linux identifies them.",
    ],
    commands: [
      [
        "mkdir web-project",
        "Create the project directory.",
        "A new folder named web-project appears.",
      ],
      [
        "mkdir -p web-project/html web-project/css web-project/js",
        "Create three child folders.",
        "All three directories are created in one command.",
      ],
      [
        "mkdir -p web-project/js/src/components",
        "Create nested directories.",
        "Missing parent folders are created automatically.",
      ],
      [
        "touch web-project/html/index.html web-project/css/style.css web-project/js/app.js",
        "Create empty files.",
        "Three files appear in the virtual filesystem.",
      ],
      [
        "echo 'My First Linux Project' > web-project/html/index.html",
        "Write text into the HTML file.",
        "The file gets content; > replaces existing content.",
      ],
      [
        "cat web-project/html/index.html",
        "Read the file.",
        "The terminal prints its content.",
      ],
      [
        "file web-project/html/index.html",
        "Detect the file type.",
        "The simulator reports a text/HTML-like file.",
      ],
      [
        "file web-project/js/app.js",
        "Detect the file type.",
        "The simulator reports a text/JavaScript-like file.",
      ],
    ],
  },
  {
    id: 3,
    title: "Copy, Move, Rename and Delete",
    topic: "Linux File System Structure",
    subtopic: "Creating, Copying, Moving, and Deleting Files",
    focus: "cp • cp -r • mv • rm • rm -r • rmdir",
    focusArea: "filesystem",
    focusSubsystem: "File Operations (cp, mv, rm)",
    focusDesc: "Observe real-time duplication, relocation, and deletion of files and directories in the tree.",
    focusTags: ["File Ops", "cp", "mv", "rm", "rmdir"],
    highlightTarget: "file-lab",
    tasks: [
      "Create a folder named file-lab and create two files inside it: notes.txt and todo.txt.",
      "Make a copy of notes.txt called notes-backup.txt, then create a backup folder and copy the entire file-lab directory recursively into backup/file-lab-copy using cp -r.",
      "Move todo.txt into the backup/ directory, and rename notes-backup.txt to notes-final.txt using the mv command.",
      "Create an empty directory named empty-folder and remove it using rmdir.",
      "Delete notes-final.txt using rm, delete the copied directory backup/file-lab-copy recursively using rm -r, and check the remaining files with ls -la.",
    ],
    commands: [
      [
        "mkdir file-lab",
        "Create the lab directory.",
        "A new file-lab folder appears.",
      ],
      [
        "touch file-lab/notes.txt file-lab/todo.txt",
        "Create two files.",
        "Both files appear inside file-lab.",
      ],
      [
        "cp file-lab/notes.txt file-lab/notes-backup.txt",
        "Copy a file.",
        "A second file with the same content is created.",
      ],
      [
        "mkdir backup",
        "Create a backup directory.",
        "A backup folder appears.",
      ],
      [
        "cp -r file-lab backup/file-lab-copy",
        "Copy a whole directory recursively.",
        "The complete directory tree is duplicated.",
      ],
      [
        "mv file-lab/todo.txt backup/",
        "Move a file.",
        "todo.txt changes location to backup/.",
      ],
      [
        "mv file-lab/notes-backup.txt file-lab/notes-final.txt",
        "Rename a file.",
        "The file keeps its contents but gets a new name.",
      ],
      [
        "mkdir empty-folder",
        "Create an empty directory.",
        "The empty folder appears.",
      ],
      [
        "rmdir empty-folder",
        "Remove an empty directory.",
        "The directory disappears.",
      ],
      [
        "rm file-lab/notes-final.txt",
        "Delete one file.",
        "The selected file is removed from the virtual filesystem.",
      ],
      [
        "rm -r backup/file-lab-copy",
        "Delete a directory recursively.",
        "The copied directory and its contents are removed.",
      ],
      [
        "ls -la",
        "Verify the remaining state.",
        "You can inspect what remains.",
      ],
    ],
  },
  {
    id: 4,
    title: "Understand Linux Permissions",
    topic: "Understanding Permissions and Ownership",
    subtopic: "Managing File Permissions (chmod & rwx)",
    focus: "ls -l • chmod",
    focusArea: "identity",
    focusSubsystem: "Permissions & Mode Bits (chmod)",
    focusDesc: "Watch rwx bits and octal codes update live with an interactive decoder widget as you run chmod.",
    focusTags: ["Permissions", "chmod", "rwx", "Octal"],
    highlightTarget: "script.sh",
    tasks: [
      "Create a new file named script.sh and inspect its initial default permissions using the long listing command (ls -l).",
      "Change the permissions of script.sh to 755 using numeric chmod so that the owner has full read, write, and execute access.",
      "Modify the file permissions symbolically by removing user execute (u-x), adding it back (u+x), removing group write (g-w), and granting read access to others (o+r).",
      "Display the detailed information of script.sh again to verify that the final permissions are set correctly.",
    ],
    commands: [
      [
        "touch script.sh",
        "Create the script file.",
        "An empty script file appears.",
      ],
      [
        "ls -l script.sh",
        "Inspect permissions.",
        "The permission string and owner/group are shown.",
      ],
      [
        "chmod 755 script.sh",
        "Set numeric permissions.",
        "User gets rwx; group and others get r-x.",
      ],
      [
        "chmod u-x script.sh",
        "Remove execute from the user.",
        "The user permission changes from rwx to rw-.",
      ],
      ["chmod u+x script.sh", "Add execute back.", "The user again has rwx."],
      [
        "chmod g-w script.sh",
        "Remove group write.",
        "The group cannot write to the file.",
      ],
      [
        "chmod o+r script.sh",
        "Give others read permission.",
        "Others can read the file.",
      ],
      [
        "ls -l script.sh",
        "Verify final permissions.",
        "The current rwx state is displayed.",
      ],
    ],
  },
  {
    id: 5,
    title: "Understand Ownership and sudo",
    topic: "Understanding Permissions and Ownership",
    subtopic: "Managing Ownership (chown, chgrp, sudo)",
    focus: "whoami • id • chown • chgrp • sudo",
    focusArea: "identity",
    focusSubsystem: "Ownership & Sudo Privileges",
    focusDesc: "Watch file ownership, group associations, and administrative privileges change dynamically.",
    focusTags: ["Ownership", "chown", "chgrp", "sudo"],
    highlightTarget: "ownership.txt",
    tasks: [
      "Check your active username with whoami and inspect your user ID, group ID, and group memberships with id.",
      "Create a file named ownership.txt and view its initial owner and group information using ls -l.",
      "Explicitly assign the file's ownership to your current user using sudo chown $(whoami) ownership.txt.",
      "Create a new system group named linuxlearners with sudo groupadd, change the group ownership of ownership.txt to linuxlearners with sudo chgrp, and verify the changes with ls -l.",
    ],
    commands: [
      [
        "whoami",
        "Show the current username.",
        "The terminal tells you which simulated user is active.",
      ],
      [
        "id",
        "Show UID, GID and groups.",
        "Identity and group membership are displayed.",
      ],
      [
        "touch ownership.txt",
        "Create the ownership test file.",
        "The file is created with the current user as owner.",
      ],
      [
        "ls -l ownership.txt",
        "Inspect owner and group.",
        "The file metadata becomes visible.",
      ],
      [
        "sudo chown $(whoami) ownership.txt",
        "Change owner.",
        "The file owner is set to the current user.",
      ],
      [
        "sudo groupadd linuxlearners",
        "Create a group.",
        "A new group becomes available.",
      ],
      [
        "sudo chgrp linuxlearners ownership.txt",
        "Change group ownership.",
        "ownership.txt now belongs to linuxlearners.",
      ],
      [
        "ls -l ownership.txt",
        "Verify owner and group.",
        "The visualizer shows the updated owner/group.",
      ],
    ],
  },
  {
    id: 6,
    title: "Install and Inspect Software with APT",
    topic: "Package Management and Software Installation",
    subtopic: "Installing and Updating Software with APT",
    focus: "apt update • install • search • show • remove",
    focusArea: "packages",
    focusSubsystem: "APT Package Management",
    focusDesc: "Watch package indexes refresh, search software, and install Git with live status transitions.",
    focusTags: ["Packages", "apt update", "apt install", "git"],
    highlightTarget: "git",
    tasks: [
      "Refresh the local package index cache using sudo apt update to ensure the latest software package lists are available.",
      "Search for packages matching git with apt search git, and inspect package details such as version and description using apt show git.",
      "Install Git using sudo apt install git, verify the installation by checking git --version, and confirm it appears in the installed packages list with apt list --installed | grep '^git/'.",
      "Simulate upgrading installed packages with sudo apt upgrade, practice removing Git with sudo apt remove git, and clean up any orphaned dependencies using sudo apt autoremove.",
    ],
    commands: [
      [
        "sudo apt update",
        "Refresh package lists.",
        "The simulator marks package indexes as refreshed.",
      ],
      [
        "apt search git",
        "Search available packages.",
        "Matching packages are listed.",
      ],
      [
        "apt show git",
        "Inspect package information.",
        "Package version, description and dependencies are shown.",
      ],
      [
        "sudo apt install git",
        "Install Git.",
        "Git changes from available to installed.",
      ],
      [
        "git --version",
        "Verify Git.",
        "The terminal prints the simulated Git version.",
      ],
      [
        "apt list --installed | grep '^git/'",
        "Check installed packages.",
        "The Git package appears in the simulated installed list.",
      ],
      [
        "sudo apt upgrade",
        "Upgrade installed software.",
        "The simulator reports packages are checked/upgraded.",
      ],
      [
        "sudo apt remove git",
        "Remove a package.",
        "Git would be removed — use only if the instructor asks.",
      ],
      [
        "sudo apt autoremove",
        "Remove unused dependencies.",
        "The simulator checks for removable unused dependencies.",
      ],
    ],
  },
  {
    id: 7,
    title: "Create and Manage a User",
    topic: "Package Management and Software Installation",
    subtopic: "Working with Users (adduser, su, passwd)",
    focus: "adduser • passwd • su • whoami • id • groups",
    focusArea: "identity",
    focusSubsystem: "User Accounts & Sessions",
    focusDesc: "Create user accounts (linuxstudent), switch shell sessions with su -, and return with exit.",
    focusTags: ["Users", "adduser", "su", "passwd"],
    highlightTarget: "linuxstudent",
    tasks: [
      "Create a new user account named linuxstudent with administrative privileges using sudo adduser linuxstudent.",
      "Switch to the new user account with a full login shell environment using su - linuxstudent.",
      "Verify your identity as the new user by running whoami, checking your UID/GID with id, and listing your groups with groups.",
      "Log out and return to your original user session using exit, then simulate updating linuxstudent's password using sudo passwd linuxstudent.",
    ],
    commands: [
      [
        "sudo adduser linuxstudent",
        "Create a user.",
        "A simulated user account is added.",
      ],
      [
        "su - linuxstudent",
        "Switch to that user.",
        "The active user becomes linuxstudent.",
      ],
      [
        "whoami",
        "Verify the current user.",
        "The terminal prints linuxstudent.",
      ],
      ["id", "View identity information.", "UID, GID and groups are shown."],
      [
        "groups",
        "List group membership.",
        "The current user's groups are displayed.",
      ],
      [
        "exit",
        "Return to the previous user.",
        "The shell returns to the original simulated user.",
      ],
      [
        "sudo passwd linuxstudent",
        "Change the user's password.",
        "The simulator records that a password operation occurred.",
      ],
    ],
  },
  {
    id: 8,
    title: "Create a Developer Group",
    topic: "Package Management and Software Installation",
    subtopic: "Working with Groups (groupadd, usermod)",
    focus: "groupadd • usermod -aG • groups • id",
    focusArea: "identity",
    focusSubsystem: "Groups & Membership",
    focusDesc: "Create developer groups, assign supplementary memberships, and inspect user groups.",
    focusTags: ["Groups", "groupadd", "usermod", "id"],
    highlightTarget: "developers",
    tasks: [
      "Create a new group named developers using sudo groupadd developers.",
      "Add the user linuxstudent to the developers group as a supplementary group using sudo usermod -aG developers linuxstudent.",
      "Verify that linuxstudent has been added to the new group by checking groups linuxstudent.",
      "Inspect the complete user and group ID details of linuxstudent using id linuxstudent to confirm their group membership.",
    ],
    commands: [
      [
        "sudo groupadd developers",
        "Create a group.",
        "The developers group is added.",
      ],
      [
        "sudo usermod -aG developers linuxstudent",
        "Append linuxstudent to developers.",
        "The user gains developers as a supplementary group.",
      ],
      [
        "groups linuxstudent",
        "Inspect groups.",
        "The terminal lists linuxstudent's groups.",
      ],
      [
        "id linuxstudent",
        "Inspect UID/GID/groups.",
        "The group membership appears in the identity output.",
      ],
    ],
  },
  {
    id: 9,
    title: "Work with Environment Variables",
    topic: "Package Management and Software Installation",
    subtopic: "Working with Environment Variables (export, unset, env)",
    focus: "env • echo • export • unset",
    focusArea: "env",
    focusSubsystem: "Environment Variables",
    focusDesc: "Read system variables and watch custom variables appear on export and vanish on unset.",
    focusTags: ["Environment", "export", "unset", "echo $VAR"],
    highlightTarget: "APP_ENV",
    tasks: [
      "Display all current shell environment variables using the env command.",
      "Print the values of common system variables $HOME, $USER, and $PATH individually using the echo command.",
      "Create and export a new environment variable named APP_ENV with the value development using export APP_ENV=development.",
      "Check that APP_ENV is active using echo $APP_ENV, delete it from the environment with unset APP_ENV, and verify that it is empty by running echo $APP_ENV again.",
    ],
    commands: [
      [
        "env",
        "Show environment variables.",
        "The terminal prints the current simulated environment.",
      ],
      ["echo $HOME", "Read HOME.", "The shell substitutes the value of HOME."],
      ["echo $USER", "Read USER.", "The shell prints the active username."],
      ["echo $PATH", "Read PATH.", "The shell prints the command search path."],
      [
        "export APP_ENV=development",
        "Create/export a variable.",
        "APP_ENV becomes available to the current shell and child processes.",
      ],
      ["echo $APP_ENV", "Read APP_ENV.", "The terminal prints development."],
      [
        "unset APP_ENV",
        "Remove the variable.",
        "APP_ENV is deleted from the current shell environment.",
      ],
      [
        "echo $APP_ENV",
        "Check after removal.",
        "The variable is now empty/undefined.",
      ],
    ],
  },
  {
    id: 10,
    title: "Final Mini Project — Linux Developer Workspace",
    topic: "Package Management and Software Installation",
    subtopic: "Integrated Final Project (Capstone Lab)",
    focus: "Integrated practice",
    focusArea: "all",
    focusSubsystem: "Integrated Developer Workspace",
    focusDesc: "An end-to-end hands-on project combining directories, permissions, groups, and environment variables.",
    focusTags: ["Mini Project", "Integrated", "Full Stack"],
    highlightTarget: "final-project",
    tasks: [
      "Create the project directory structure with backend, frontend, and docs folders under ~/linux-handson/final-project using mkdir -p.",
      "Create initial files: backend/app.sh, frontend/index.html, and docs/README.txt, then write 'Linux Developer Workspace' into the README file.",
      "Create a full backup of the final-project directory tree named final-project-backup using recursive copy (cp -r).",
      "Rename backend/app.sh to backend/start.sh with mv, give it 755 executable permissions using chmod, and inspect its updated permissions with ls -l.",
      "Set and verify a project environment variable PROJECT_ENV=development using export and echo.",
      "Create a group named projectteam using sudo groupadd and add linuxstudent to it with sudo usermod -aG.",
      "Inspect the directory contents with ls -la, then run a chained command (whoami && id && groups && echo $PROJECT_ENV) to verify your user, identity, groups, and environment.",
    ],
    commands: [
      [
        "mkdir -p ~/linux-handson/final-project/backend ~/linux-handson/final-project/frontend ~/linux-handson/final-project/docs",
        "Build the project structure.",
        "Backend, frontend and docs folders appear.",
      ],
      [
        "touch ~/linux-handson/final-project/backend/app.sh ~/linux-handson/final-project/frontend/index.html ~/linux-handson/final-project/docs/README.txt",
        "Create project files.",
        "Three files appear in their respective folders.",
      ],
      [
        "echo 'Linux Developer Workspace' > ~/linux-handson/final-project/docs/README.txt",
        "Add README content.",
        "The README contains the project title.",
      ],
      [
        "cp -r ~/linux-handson/final-project ~/linux-handson/final-project-backup",
        "Back up the project.",
        "A second copy of the project tree is created.",
      ],
      [
        "mv ~/linux-handson/final-project/backend/app.sh ~/linux-handson/final-project/backend/start.sh",
        "Rename the script.",
        "app.sh becomes start.sh.",
      ],
      [
        "chmod 755 ~/linux-handson/final-project/backend/start.sh",
        "Make the script executable.",
        "start.sh gets rwx for user and r-x for group/others.",
      ],
      [
        "ls -l ~/linux-handson/final-project/backend/start.sh",
        "Verify permissions.",
        "The final permission state is shown.",
      ],
      [
        "export PROJECT_ENV=development",
        "Set project environment.",
        "PROJECT_ENV becomes development.",
      ],
      [
        "echo $PROJECT_ENV",
        "Verify environment.",
        "The terminal prints development.",
      ],
      [
        "sudo groupadd projectteam",
        "Create project group.",
        "projectteam is added.",
      ],
      [
        "sudo usermod -aG projectteam linuxstudent",
        "Add practice user to projectteam.",
        "linuxstudent gains projectteam membership.",
      ],
      [
        "ls -la ~/linux-handson/final-project",
        "Inspect final project.",
        "The directory contents are shown.",
      ],
      [
        "whoami && id && groups && echo $PROJECT_ENV",
        "Final identity/environment check.",
        "User, IDs, groups and project environment are printed.",
      ],
    ],
  },
];

const commandCoverage = [
  "pwd",
  "ls",
  "ls -l",
  "ls -a",
  "ls -la",
  "cd",
  "cd ..",
  "cd ~",
  "cd -",
  "mkdir",
  "mkdir -p",
  "touch",
  "cat",
  "cp",
  "cp -r",
  "mv",
  "rm",
  "rm -r",
  "rmdir",
  "file",
  "whoami",
  "id",
  "groups",
  "chmod",
  "chown",
  "chgrp",
  "sudo",
  "apt update",
  "apt upgrade",
  "apt install",
  "apt remove",
  "apt search",
  "apt show",
  "apt list --installed",
  "apt autoremove",
  "adduser",
  "passwd",
  "groupadd",
  "usermod -aG",
  "env",
  "echo",
  "export",
  "unset",
  "source",
];

const state = {
  currentPath: "/home/student",
  currentUser: "student",
  previousPath: "/home/student",
  uid: 1000,
  gid: 1000,
  files: {},
  users: {
    student: {
      uid: 1000,
      gid: 1000,
      groups: ["student", "sudo"],
      passwordSet: true,
    },
    root: { uid: 0, gid: 0, groups: ["root"], passwordSet: true },
  },
  groups: {
    student: { gid: 1000, members: ["student"] },
    sudo: { gid: 27, members: ["student"] },
    root: { gid: 0, members: ["root"] },
  },
  env: {
    HOME: "/home/student",
    USER: "student",
    SHELL: "/bin/bash",
    PATH: "/usr/local/bin:/usr/bin:/bin",
    PWD: "/home/student",
  },
  packages: { git: false, curl: false, nginx: false, python3: false },
  packageIndex: false,
  history: [],
  covered: new Set(),
  events: [],
  selectedQuestion: 1,
  output: [],
  sessionStack: [],
  bashrc: ["# simulated .bashrc"],
  historyIndex: -1,
  lastUpdatedSubsystem: null,
  lastUpdatedItem: null,
  lastPermissionTarget: "script.sh",
};

function dir(path) {
  return { type: "dir", owner: state.currentUser || "student", group: state.currentUser || "student", mode: 755 };
}

function fil(path, content = "") {
  return {
    type: "file",
    owner: state.currentUser || "student",
    group: state.currentUser || "student",
    mode: 644,
    content,
  };
}

function normalize(path) {
  if (!path) return state.currentPath;
  if (path.startsWith("~")) path = "/home/student" + path.slice(1);
  if (!path.startsWith("/"))
    path = state.currentPath.replace(/\/$/, "") + "/" + path;
  const parts = [];
  path.split("/").forEach((p) => {
    if (!p || p === ".") return;
    if (p === "..") parts.pop();
    else parts.push(p);
  });
  return "/" + parts.join("/");
}

function parent(path) {
  if (path === "/") return "/";
  const a = path.split("/");
  a.pop();
  return a.join("/") || "/";
}

function basename(path) {
  return path.split("/").filter(Boolean).pop() || "/";
}

function ensureParents(path) {
  let p = parent(path),
    chain = [];
  while (p !== "/" && !state.files[p]) {
    chain.push(p);
    p = parent(p);
  }
  chain.reverse().forEach((x) => (state.files[x] = dir(x)));
}

function addFile(path, obj) {
  path = normalize(path);
  ensureParents(path);
  state.files[path] = obj;
}

function exists(path) {
  return !!state.files[normalize(path)];
}

function children(path) {
  path = normalize(path);
  const prefix = path === "/" ? "/" : path + "/";
  const set = new Set();
  Object.keys(state.files).forEach((p) => {
    if (p.startsWith(prefix) && p !== path) {
      const rest = p.slice(prefix.length);
      const first = rest.split("/")[0];
      set.add(prefix + first);
    }
  });
  return [...set].sort();
}

function modeString(mode, type = "file") {
  const n = [(mode >> 6) & 7, (mode >> 3) & 7, mode & 7];
  const chars = (v) =>
    (v & 4 ? "r" : "-") + (v & 2 ? "w" : "-") + (v & 1 ? "x" : "-");
  return (type === "dir" ? "d" : "-") + n.map(chars).join("");
}

function parseMode(s) {
  const n = s.split("").map(Number);
  if (n.length !== 3 || n.some(isNaN)) return null;
  return n[0] * 64 + n[1] * 8 + n[2];
}

function addHistory(cmd) {
  state.history.push(cmd);
  if (state.history.length > 50) state.history.shift();
}

function event(msg, cmd = "") {
  state.events.unshift({
    msg,
    cmd,
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  });
  state.events = state.events.slice(0, 8);
}

function mark(command) {
  const base = command.trim().replace(/^sudo\s+/, "");
  let key = base.split(/\s+/).slice(0, 2).join(" ");
  if (base.startsWith("echo ")) key = "echo";
  if (base.startsWith("export ")) key = "export";
  if (base.startsWith("unset ")) key = "unset";
  if (base.startsWith("source ")) key = "source";
  if (base.startsWith("chmod ")) key = "chmod";
  if (base.startsWith("chown ")) key = "chown";
  if (base.startsWith("chgrp ")) key = "chgrp";
  if (base.startsWith("usermod ")) key = "usermod -aG";
  if (base.startsWith("groupadd ")) key = "groupadd";
  if (base.startsWith("adduser ")) key = "adduser";
  if (base.startsWith("passwd ")) key = "passwd";
  if (base.startsWith("apt ")) key = "apt " + (base.split(/\s+/)[1] || "");
  if (base.startsWith("rm -r")) key = "rm -r";
  if (base.startsWith("cp -r")) key = "cp -r";
  if (base === "cd ..") key = "cd ..";
  if (base === "cd ~") key = "cd ~";
  if (base === "cd -") key = "cd -";
  if (command.trim() === "sudo") key = "sudo";
  if (command.trim().startsWith("sudo ")) state.covered.add("sudo");
  if (command.trim().startsWith("su ")) key = "su";
  if (command.trim() === "exit") key = "exit";
  if (command.trim().startsWith("git --version")) return;
  if (command.trim().startsWith("mkdir -p")) key = "mkdir -p";
  if (command.trim().startsWith("mkdir ")) key = "mkdir";
  if (command.trim().startsWith("touch ")) key = "touch";
  if (command.trim().startsWith("cat ")) key = "cat";
  if (command.trim().startsWith("file ")) key = "file";
  if (command.trim().startsWith("cp ")) key = "cp";
  if (command.trim().startsWith("mv ")) key = "mv";
  if (command.trim().startsWith("rm ")) key = "rm";
  if (command.trim().startsWith("rmdir ")) key = "rmdir";
  if (command.trim().startsWith("ls -la")) key = "ls -la";
  else if (command.trim().startsWith("ls -l")) key = "ls -l";
  else if (command.trim().startsWith("ls -a")) key = "ls -a";
  else if (command.trim() === "ls") key = "ls";
  if (command.trim() === "pwd") key = "pwd";
  if (command.trim() === "whoami") key = "whoami";
  if (command.trim() === "id") key = "id";
  if (command.trim().startsWith("groups")) key = "groups";
  if (command.trim().startsWith("env")) key = "env";
  if (command.trim().startsWith("echo ")) key = "echo";
  if (command.trim().startsWith("export ")) key = "export";
  if (command.trim().startsWith("unset ")) key = "unset";
  if (command.trim().startsWith("source ")) key = "source";
  if (key) state.covered.add(key);
}

function shellSubstitute(s) {
  return s
    .replace(/\$\((whoami)\)/g, () => state.currentUser)
    .replace(/\$([A-Za-z_][A-Za-z0-9_]*)/g, (_, k) => state.env[k] ?? "");
}

function splitChain(s) {
  return s
    .split(/\s*&&\s*/)
    .map((x) => x.trim())
    .filter(Boolean);
}

function splitWords(s) {
  const out = [];
  let cur = "",
    quote = null;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (quote) {
      if (c === quote) {
        quote = null;
      } else cur += c;
    } else if (c === "'" || c === '"') {
      quote = c;
    } else if (/\s/.test(c)) {
      if (cur) {
        out.push(cur);
        cur = "";
      }
    } else cur += c;
  }
  if (cur) out.push(cur);
  return out;
}

function output(text, type = "normal") {
  state.output.push({ text, type });
  if (state.output.length > 200) state.output.shift();
}

function executeSingle(raw) {
  let cmd = shellSubstitute(raw.trim());
  if (!cmd) return true;
  addHistory(raw.trim());
  mark(raw.trim());
  const words = splitWords(cmd);
  const base = words[0];

  if (base === "sudo") {
    if (words.length === 1) {
      output("sudo: command required", "error");
      return false;
    }
    return executeSingle(words.slice(1).join(" "));
  }

  if (cmd === "help") {
    output(
      "Supported commands: pwd, ls, cd, mkdir, touch, cat, echo, cp, mv, rm, rmdir, file, chmod, chown, chgrp, whoami, id, groups, groupadd, usermod, sudo, apt, adduser, passwd, su, exit, env, export, unset, source, clear, history, git --version",
      "info",
    );
    return true;
  }

  if (base === "clear") {
    state.output = [];
    welcome();
    renderTerminal();
    return true;
  }

  if (base === "history") {
    output(
      state.history
        .map((c, i) => `${String(i + 1).padStart(4, " ")}  ${c}`)
        .join("\n") || "No commands in history.",
    );
    return true;
  }

  if (base === "pwd") {
    output(state.currentPath, "normal");
    return true;
  }

  if (base === "ls") {
    let opts = { long: false, all: false };
    let target = state.currentPath;
    words.slice(1).forEach((w) => {
      if (w.startsWith("-")) {
        opts.long ||= w.includes("l");
        opts.all ||= w.includes("a");
      } else target = normalize(w);
    });
    if (!exists(target)) {
      output(`ls: cannot access '${target}': No such file or directory`, "error");
      return false;
    }
    if (state.files[target].type === "file") {
      const o = state.files[target];
      output(
        opts.long
          ? `${modeString(o.mode, o.type)}  ${o.owner}  ${o.group}  ${String((o.content || "").length).padStart(4, " ")}  ${basename(target)}`
          : basename(target),
      );
      return true;
    }
    let names = children(target);
    if (!opts.all) names = names.filter((p) => !basename(p).startsWith("."));
    output(
      names
        .map((p) =>
          opts.long
            ? `${modeString(state.files[p].mode, state.files[p].type)}  ${state.files[p].owner}  ${state.files[p].group}  ${String((state.files[p].content || "").length).padStart(4, " ")}  ${basename(p)}`
            : basename(p),
        )
        .join("\n") || "(empty)",
    );
    return true;
  }

  if (base === "cd") {
    const dest = words[1] || "~";
    let target;
    if (dest === "-") {
      target = state.previousPath;
    } else target = normalize(dest);
    if (!exists(target) || state.files[target].type !== "dir") {
      output(`bash: cd: ${dest}: No such directory`, "error");
      return false;
    }
    state.previousPath = state.currentPath;
    state.currentPath = target;
    state.env.PWD = target;
    state.lastUpdatedSubsystem = "filesystem";
    state.lastUpdatedItem = target;
    output(dest === "-" ? target : `Now in ${target}`, "success");
    event(`Working directory changed to ${target}`, raw.trim());
    return true;
  }

  if (base === "mkdir") {
    let parents = false;
    let paths = [];
    words.slice(1).forEach((w) => {
      if (w === "-p") parents = true;
      else paths.push(w);
    });
    for (const p0 of paths) {
      const p = normalize(p0);
      if (exists(p)) {
        if (!parents) {
          output(
            `mkdir: cannot create directory '${p0}': File exists`,
            "error",
          );
          return false;
        }
        continue;
      }
      if (!parents && !exists(parent(p))) {
        output(
          `mkdir: cannot create directory '${p0}': No such file or directory`,
          "error",
        );
        return false;
      }
      if (parents) ensureParents(p);
      state.files[p] = dir(p);
      state.lastUpdatedSubsystem = "filesystem";
      state.lastUpdatedItem = p;
      event(`Directory created: ${p}`, raw.trim());
    }
    output(
      paths.map((p) => `created directory '${normalize(p)}'`).join("\n"),
      "success",
    );
    return true;
  }

  if (base === "touch") {
    words.slice(1).forEach((p0) => {
      const p = normalize(p0);
      if (!exists(p)) {
        addFile(p, fil(p));
        state.lastUpdatedSubsystem = "filesystem";
        state.lastUpdatedItem = p;
        state.lastPermissionTarget = p;
        event(`File created: ${p}`, raw.trim());
      }
    });
    output("Files updated/created.", "success");
    return true;
  }

  if (base === "echo") {
    const redirIndex = cmd.search(/\s(>>?)\s/);
    if (redirIndex >= 0) {
      const m = cmd.match(/^(?:echo\s+)?(.*?)\s(>>?)\s(.+)$/);
      let rawText = (m[1] || "").replace(/^echo\s+/, "");
      const text = shellSubstitute(rawText).replace(/^['"]|['"]$/g, "");
      const path = normalize((m[3] || "").replace(/^['"]|['"]$/g, ""));
      if (!exists(path)) {
        addFile(path, fil(path, text));
      } else {
        state.files[path].content =
          m[2] === ">" ? text : state.files[path].content + "\n" + text;
      }
      output(`Wrote message to ${path}`, "success");
      event(
        `Text ${m[2] === ">" ? "written" : "appended"} to ${path}`,
        raw.trim(),
      );
      state.lastUpdatedSubsystem = "filesystem";
      state.lastUpdatedItem = path;
      return true;
    }
    output(
      shellSubstitute(words.slice(1).join(" ")).replace(/^['"]|['"]$/g, ""),
    );
    return true;
  }

  if (base === "cat") {
    for (const p0 of words.slice(1)) {
      const p = normalize(p0);
      if (!exists(p)) {
        output(`cat: ${p0}: No such file`, "error");
        return false;
      }
      output(state.files[p].content || "(empty file)");
    }
    return true;
  }

  if (base === "cp") {
    const recursive = words.includes("-r");
    const args = words.slice(1).filter((x) => x !== "-r");
    if (args.length < 2) {
      output("cp: missing destination", "error");
      return false;
    }
    const src = normalize(args[0]),
      destRaw = args[args.length - 1],
      dest = normalize(destRaw);
    if (!exists(src)) {
      output(`cp: cannot stat '${args[0]}'`, "error");
      return false;
    }
    const srcObj = state.files[src];
    if (srcObj.type === "dir" && !recursive) {
      output("cp: omitting directory (use -r)", "error");
      return false;
    }
    let final = dest;
    if (exists(dest) && state.files[dest].type === "dir")
      final = normalize(dest + "/" + basename(src));
    const clone = (p, baseDest) => {
      const rel = p.slice(src.length);
      const target = baseDest + rel;
      const o = state.files[p];
      ensureParents(target);
      state.files[target] = { ...o };
      return target;
    };
    if (srcObj.type === "dir") {
      Object.keys(state.files)
        .filter((p) => p === src || p.startsWith(src + "/"))
        .forEach((p) => {
          clone(p, final);
        });
    } else {
      ensureParents(final);
      state.files[final] = { ...srcObj };
    }
    state.lastUpdatedSubsystem = "filesystem";
    state.lastUpdatedItem = final;
    output(`Copied ${src} → ${final}`, "success");
    event(`Copied ${src} to ${final}`, raw.trim());
    return true;
  }

  if (base === "mv") {
    const args = words.slice(1);
    if (args.length < 2) {
      output("mv: missing destination", "error");
      return false;
    }
    const src = normalize(args[0]),
      dest = normalize(args[1]);
    if (!exists(src)) {
      output(`mv: cannot stat '${args[0]}'`, "error");
      return false;
    }
    let final = dest;
    if (exists(dest) && state.files[dest].type === "dir")
      final = normalize(dest + "/" + basename(src));
    ensureParents(final);
    const affected = Object.keys(state.files).filter(
      (p) => p === src || p.startsWith(src + "/"),
    );
    affected
      .sort((a, b) => a.length - b.length)
      .forEach((p) => {
        const rel = p.slice(src.length);
        state.files[final + rel] = state.files[p];
      });
    affected
      .sort((a, b) => b.length - a.length)
      .forEach((p) => delete state.files[p]);
    state.lastUpdatedSubsystem = "filesystem";
    state.lastUpdatedItem = final;
    output(`Moved/renamed ${src} → ${final}`, "success");
    event(`Moved/renamed ${src} to ${final}`, raw.trim());
    return true;
  }

  if (base === "rm") {
    const recursive = words.includes("-r");
    const targets = words.slice(1).filter((x) => x !== "-r" && x !== "-i");
    for (const t of targets) {
      const p = normalize(t);
      if (!exists(p)) {
        output(`rm: cannot remove '${t}': No such file or directory`, "error");
        return false;
      }
      if (state.files[p].type === "dir" && !recursive) {
        output(`rm: cannot remove '${t}': Is a directory`, "error");
        return false;
      }
      Object.keys(state.files)
        .filter((x) => x === p || x.startsWith(p + "/"))
        .forEach((x) => delete state.files[x]);
      state.lastUpdatedSubsystem = "filesystem";
      state.lastUpdatedItem = p;
      event(`Deleted ${p}${recursive ? " recursively" : ""}`, raw.trim());
    }
    output("Removal complete.", "success");
    return true;
  }

  if (base === "rmdir") {
    for (const t of words.slice(1)) {
      const p = normalize(t);
      if (!exists(p) || state.files[p].type !== "dir") {
        output(`rmdir: failed to remove '${t}': No such directory`, "error");
        return false;
      }
      if (children(p).length) {
        output(`rmdir: failed to remove '${t}': Directory not empty`, "error");
        return false;
      }
      delete state.files[p];
      state.lastUpdatedSubsystem = "filesystem";
      state.lastUpdatedItem = p;
      event(`Empty directory removed: ${p}`, raw.trim());
    }
    output("Directory removed.", "success");
    return true;
  }

  if (base === "file") {
    for (const t of words.slice(1)) {
      const p = normalize(t);
      if (!exists(p)) {
        output(`file: ${t}: cannot open`, "error");
        return false;
      }
      const o = state.files[p];
      let desc = o.type === "dir" ? "directory" : "ASCII text";
      if (p.endsWith(".html")) desc = "HTML document, ASCII text";
      if (p.endsWith(".js")) desc = "JavaScript source, ASCII text";
      if (p.endsWith(".css")) desc = "CSS stylesheet, ASCII text";
      if (p.endsWith(".sh")) desc = "Bourne-Again shell script, ASCII text executable";
      output(`${t}: ${desc}`);
    }
    return true;
  }

  if (base === "chmod") {
    const args = words.slice(1);
    if (args.length < 2) {
      output("chmod: usage: chmod MODE FILE", "error");
      return false;
    }
    const modeArg = args[0],
      p = normalize(args[1]);
    if (!exists(p)) {
      output(`chmod: cannot access '${args[1]}'`, "error");
      return false;
    }
    if (/^\d{3}$/.test(modeArg)) {
      state.files[p].mode = parseMode(modeArg);
    } else {
      const m = modeArg.match(/^([ugoa]*)([+-])([rwx]+)$/);
      if (!m) {
        output("chmod: unsupported symbolic mode in simulator", "error");
        return false;
      }
      let mask = 0;
      for (const c of m[3]) mask |= c === "r" ? 4 : c === "w" ? 2 : 1;
      let groups = m[1] || "a";
      for (const g of groups) {
        if (g === "u")
          state.files[p].mode =
            m[2] === "+"
              ? state.files[p].mode | (mask << 6)
              : state.files[p].mode & ~(mask << 6);
        if (g === "g")
          state.files[p].mode =
            m[2] === "+"
              ? state.files[p].mode | (mask << 3)
              : state.files[p].mode & ~(mask << 3);
        if (g === "o")
          state.files[p].mode =
            m[2] === "+"
              ? state.files[p].mode | mask
              : state.files[p].mode & ~mask;
        if (g === "a")
          state.files[p].mode =
            m[2] === "+"
              ? state.files[p].mode | mask | (mask << 3) | (mask << 6)
              : state.files[p].mode & ~(mask | (mask << 3) | (mask << 6));
      }
    }
    state.lastPermissionTarget = p;
    state.lastUpdatedSubsystem = "identity";
    state.lastUpdatedItem = p;
    output(
      `${p}: ${modeString(state.files[p].mode, state.files[p].type)} (octal: ${(state.files[p].mode).toString(8)})`,
      "success",
    );
    event(
      `Permissions changed for ${p} → ${modeString(state.files[p].mode, state.files[p].type)}`,
      raw.trim(),
    );
    return true;
  }

  if (base === "whoami") {
    output(state.currentUser);
    return true;
  }

  if (base === "id") {
    const u = words[1] || state.currentUser;
    const user = state.users[u];
    if (!user) {
      output(`id: '${u}': no such user`, "error");
      return false;
    }
    output(
      `uid=${user.uid}(${u}) gid=${user.gid}(${Object.keys(state.groups).find((g) => state.groups[g].gid === user.gid) || u}) groups=${user.groups.map((g) => `${state.groups[g]?.gid ?? "?"}(${g})`).join(",")}`,
    );
    return true;
  }

  if (base === "groups") {
    const u = words[1] || state.currentUser;
    const user = state.users[u];
    if (!user) {
      output(`groups: '${u}': no such user`, "error");
      return false;
    }
    output(`${u} : ${user.groups.join(" ")}`);
    return true;
  }

  if (base === "groupadd") {
    const grp = words[1];
    if (!grp) {
      output("groupadd: missing group name", "error");
      return false;
    }
    if (state.groups[grp]) {
      output(`groupadd: group '${grp}' already exists`, "error");
      return false;
    }
    const next =
      Math.max(...Object.values(state.groups).map((g) => g.gid), 1000) + 1;
    state.groups[grp] = { gid: next, members: [] };
    state.lastUpdatedSubsystem = "identity";
    state.lastUpdatedItem = grp;
    output(`groupadd: group '${grp}' created (simulated).`, "success");
    event(`Group created: ${grp}`, raw.trim());
    return true;
  }

  if (base === "usermod") {
    let append = false;
    let group = null;
    let targetUser = null;
    const args = words.slice(1);
    for (let i = 0; i < args.length; i++) {
      const a = args[i];
      if (a === "-aG" || a === "-Ga") {
        append = true;
        group = args[++i];
      } else if (a === "-a") {
        append = true;
      } else if (a === "-G") {
        group = args[++i];
      } else if (!a.startsWith("-")) {
        if (!group) group = a;
        else targetUser = a;
      }
    }
    if (!targetUser && args.length >= 2) {
      targetUser = args[args.length - 1];
    }
    if (!group || !targetUser) {
      output("usermod: usage: usermod -aG GROUP USER", "error");
      return false;
    }
    if (!state.users[targetUser]) {
      output(`usermod: user '${targetUser}' does not exist`, "error");
      return false;
    }
    if (!state.groups[group]) {
      output(`usermod: group '${group}' does not exist`, "error");
      return false;
    }
    if (!state.users[targetUser].groups.includes(group)) {
      state.users[targetUser].groups.push(group);
    }
    if (!state.groups[group].members.includes(targetUser)) {
      state.groups[group].members.push(targetUser);
    }
    state.lastUpdatedSubsystem = "identity";
    state.lastUpdatedItem = group;
    output(
      `usermod: user '${targetUser}' added to group '${group}' (simulated).`,
      "success",
    );
    event(`User ${targetUser} added to group ${group}`, raw.trim());
    return true;
  }

  if (base === "chown") {
    const args = words.slice(1);
    if (args.length < 2) {
      output("chown: missing operand", "error");
      return false;
    }
    let ownerGroup = args[0],
      p = normalize(args[1]);
    if (!exists(p)) {
      output(`chown: cannot access '${args[1]}'`, "error");
      return false;
    }
    const [owner, grp] = ownerGroup.split(":");
    if (owner && !state.users[owner]) {
      output(`chown: unknown user '${owner}'`, "error");
      return false;
    }
    state.files[p].owner = owner || state.files[p].owner;
    if (grp) {
      if (!state.groups[grp]) {
        output(`chown: unknown group '${grp}'`, "error");
        return false;
      }
      state.files[p].group = grp;
    }
    state.lastUpdatedSubsystem = "identity";
    state.lastUpdatedItem = p;
    output(
      `Ownership updated: ${state.files[p].owner}:${state.files[p].group}`,
      "success",
    );
    event(`Ownership changed for ${p}`, raw.trim());
    return true;
  }

  if (base === "chgrp") {
    const args = words.slice(1);
    if (args.length < 2) {
      output("chgrp: missing operand", "error");
      return false;
    }
    const group = args[0],
      p = normalize(args[1]);
    if (!state.groups[group]) {
      output(`chgrp: invalid group '${group}'`, "error");
      return false;
    }
    if (!exists(p)) {
      output(`chgrp: cannot access '${args[1]}'`, "error");
      return false;
    }
    state.files[p].group = group;
    state.lastUpdatedSubsystem = "identity";
    state.lastUpdatedItem = p;
    output(`Group changed to ${group}`, "success");
    event(`Group ownership changed for ${p} → ${group}`, raw.trim());
    return true;
  }

  if (base === "apt") {
    const sub = words[1];
    if (sub === "update") {
      state.packageIndex = true;
      state.lastUpdatedSubsystem = "packages";
      state.lastUpdatedItem = "index";
      output(
        "Hit:1 simulated://ubuntu stable InRelease\nPackage lists refreshed successfully.",
        "success",
      );
      event("APT package index refreshed", raw.trim());
      return true;
    }
    if (sub === "upgrade") {
      state.lastUpdatedSubsystem = "packages";
      output(
        "Reading package lists... Done\nSimulated upgrade complete. No real software was changed.",
        "success",
      );
      event("APT upgrade simulated", raw.trim());
      return true;
    }
    if (sub === "install") {
      const pkg = words[2];
      if (!pkg) {
        output("apt install: missing package name", "error");
        return false;
      }
      state.packages[pkg] = true;
      state.lastUpdatedSubsystem = "packages";
      state.lastUpdatedItem = pkg;
      output(`Installed ${pkg} (simulated).`, "success");
      event(`Package installed: ${pkg}`, raw.trim());
      return true;
    }
    if (sub === "remove") {
      const pkg = words[2];
      if (pkg) {
        state.packages[pkg] = false;
        state.lastUpdatedSubsystem = "packages";
        state.lastUpdatedItem = pkg;
        output(`Removed ${pkg} (simulated).`, "success");
        event(`Package removed: ${pkg}`, raw.trim());
      }
      return true;
    }
    if (sub === "search") {
      const term = words.slice(2).join(" ");
      output(
        `Sorting... Done\nFull Text Search: ${term}\n${["git", "git-man", "git-lfs", "node-git"].filter((x) => x.includes(term)).join("\n") || "No matching packages in simulation."}`,
      );
      return true;
    }
    if (sub === "show") {
      const pkg = words[2] || "git";
      output(
        `Package: ${pkg}\nVersion: simulated-2.49\nArchitecture: amd64\nDescription: Simulated package information for ${pkg}.`,
      );
      return true;
    }
    if (sub === "list" && words[2] === "--installed") {
      const installed = Object.keys(state.packages)
        .filter((p) => state.packages[p])
        .map((p) => `${p}/stable 2.49 amd64 [installed]`);
      output(installed.join("\n") || "No simulated packages installed.");
      return true;
    }
    if (sub === "autoremove") {
      output(
        "Checking dependencies...\n0 packages marked for removal. Simulation only.",
        "success",
      );
      return true;
    }
    output(
      "apt: supported in this lab: update, upgrade, install, remove, search, show, list --installed, autoremove",
      "info",
    );
    return true;
  }

  if (base === "git") {
    if (words[1] === "--version") {
      if (!state.packages.git) {
        output(
          "Command 'git' not found, but can be installed with:\nsudo apt install git",
          "error",
        );
        return false;
      }
      output("git version 2.49.0 (simulated)", "success");
      return true;
    }
  }

  if (base === "adduser") {
    const u = words[1];
    if (!u) {
      output("adduser: missing username", "error");
      return false;
    }
    if (state.users[u]) {
      output(`adduser: user '${u}' already exists`, "error");
      return false;
    }
    const next = Math.max(...Object.values(state.users).map((x) => x.uid)) + 1;
    state.users[u] = { uid: next, gid: next, groups: [u], passwordSet: true };
    state.groups[u] = { gid: next, members: [u] };
    ensureHome(u);
    state.lastUpdatedSubsystem = "identity";
    state.lastUpdatedItem = u;
    output(
      `Adding user '${u}'...\nAdding home directory '/home/${u}'...\nUser '${u}' created (simulated).`,
      "success",
    );
    event(`User created: ${u}`, raw.trim());
    return true;
  }

  if (base === "passwd") {
    const u = words[1] || state.currentUser;
    if (!state.users[u]) {
      output(`passwd: user '${u}' does not exist`, "error");
      return false;
    }
    state.users[u].passwordSet = true;
    state.lastUpdatedSubsystem = "identity";
    output(
      `Password updated successfully for ${u} (simulated; no real password was changed).`,
      "success",
    );
    event(`Password operation completed for ${u}`, raw.trim());
    return true;
  }

  if (base === "su") {
    let u = words[2] || words[1];
    if (words[1] === "-" && !words[2]) u = "root";
    if (!u) {
      output("su: missing username", "error");
      return false;
    }
    if (!state.users[u]) {
      output(`su: user '${u}' does not exist`, "error");
      return false;
    }
    state.sessionStack.push(state.currentUser);
    state.previousPath = state.currentPath;
    state.currentUser = u;
    state.currentPath = `/home/${u}`;
    state.env.USER = u;
    state.env.HOME = `/home/${u}`;
    state.env.PWD = state.currentPath;
    ensureHome(u);
    state.lastUpdatedSubsystem = "identity";
    state.lastUpdatedItem = u;
    output(`Switched to user ${u} (simulated).`, "success");
    event(`Active user changed to ${u}`, raw.trim());
    return true;
  }

  if (base === "exit") {
    const u = state.sessionStack.pop();
    if (u) {
      state.currentUser = u;
      state.env.USER = u;
      state.env.HOME = `/home/${u}`;
      state.currentPath = `/home/${u}`;
      state.env.PWD = state.currentPath;
      state.lastUpdatedSubsystem = "identity";
      state.lastUpdatedItem = u;
      output(`Returned to user ${u}.`, "success");
      event(`Returned to user ${u}`, raw.trim());
      return true;
    }
    output("logout", "info");
    return true;
  }

  if (base === "env") {
    output(
      Object.entries(state.env)
        .map(([k, v]) => `${k}=${v}`)
        .join("\n"),
    );
    return true;
  }

  if (base === "export") {
    const pair = cmd.slice(7).trim();
    const idx = pair.indexOf("=");
    if (idx < 0) {
      output("export: usage export NAME=value", "error");
      return false;
    }
    const k = pair.slice(0, idx),
      v = pair.slice(idx + 1).replace(/^['"]|['"]$/g, "");
    state.env[k] = v;
    state.lastUpdatedSubsystem = "env";
    state.lastUpdatedItem = k;
    output(`${k}=${v}`, "success");
    event(`Environment variable exported: ${k}=${v}`, raw.trim());
    return true;
  }

  if (base === "unset") {
    for (const k of words.slice(1)) {
      delete state.env[k];
      state.lastUpdatedSubsystem = "env";
      state.lastUpdatedItem = k;
      output(`${k} unset`, "success");
      event(`Environment variable removed: ${k}`, raw.trim());
    }
    return true;
  }

  if (base === "source") {
    const f = words[1];
    if (f === "~/.bashrc" || f === "/home/" + state.currentUser + "/.bashrc") {
      state.bashrc.forEach((line) => {
        const m = line.match(/^export\s+([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
        if (m) state.env[m[1]] = m[2];
      });
      state.lastUpdatedSubsystem = "env";
      output(".bashrc loaded into the current simulated shell.", "success");
      event("Current shell reloaded from .bashrc", raw.trim());
      return true;
    }
    output(`source: ${f}: file not found`, "error");
    return false;
  }

  if (base === "grep") {
    output(
      "grep is only supported as part of apt list --installed | grep ... in this lab.",
      "info",
    );
    return true;
  }

  output(
    `bash: ${base}: command not found in this playground\nTip: type help for supported commands.`,
    "error",
  );
  return false;
}

function ensureHome(u) {
  const p = `/home/${u}`;
  if (!exists("/home")) state.files["/home"] = dir("/home");
  if (!exists(p))
    state.files[p] = { type: "dir", owner: u, group: u, mode: 755 };
}

function execute(raw) {
  const input = raw.trim();
  if (!input) return;
  output(
    `${state.currentUser}@linux-lab:${state.currentPath === "/home/" + state.currentUser ? "~" : state.currentPath} $ ${input}`,
    "command",
  );
  let ok = true;
  const chains = splitChain(input);
  chains.forEach((c) => {
    if (ok) {
      if (c.includes("|")) {
        const parts = c.split("|").map((x) => x.trim());
        if (parts[0].startsWith("apt list --installed")) {
          executeSingle(parts[0]);
          const last = state.output[state.output.length - 1]?.text || "";
          const termMatch = parts[1].match(/grep\s+['"]?([^'"]+)['"]?/);
          const term = termMatch ? termMatch[1] : "git";
          let regex;
          try {
            regex = new RegExp(term);
          } catch (e) {
            regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
          }
          const lines = last.split("\n").filter((x) => regex.test(x));
          state.output[state.output.length - 1] = {
            text: lines.join("\n") || "no matches",
            type: "normal",
          };
        } else output("Pipelines are limited in this lab.", "info");
      } else ok = executeSingle(c);
    }
  });
  renderAll();
}

// Global helper for running commands directly from UI
window.runCommand = function (cmdStr) {
  const inputEl = document.getElementById("terminalInput");
  inputEl.value = cmdStr;
  execute(cmdStr);
  inputEl.value = "";
  // Flash terminal status
  const statusEl = document.getElementById("terminalStatus");
  if (statusEl) {
    statusEl.textContent = "EXECUTED";
    setTimeout(() => (statusEl.textContent = "READY"), 1000);
  }
};

window.runQuestionCommands = async function (qId) {
  const q = questions.find((x) => x.id === qId);
  if (!q) return;
  const statusEl = document.getElementById("terminalStatus");
  if (statusEl) statusEl.textContent = "RUNNING...";
  for (let i = 0; i < q.commands.length; i++) {
    const cmd = q.commands[i][0];
    runCommand(cmd);
    await new Promise((r) => setTimeout(r, 280));
  }
  if (statusEl) {
    statusEl.textContent = "DONE";
    setTimeout(() => (statusEl.textContent = "READY"), 1200);
  }
};

function resetState() {
  state.currentPath = "/home/student";
  state.currentUser = "student";
  state.previousPath = "/home/student";
  state.uid = 1000;
  state.gid = 1000;
  state.files = {
    "/": { type: "dir", owner: "root", group: "root", mode: 755 },
    "/home": { type: "dir", owner: "root", group: "root", mode: 755 },
    "/home/student": {
      type: "dir",
      owner: "student",
      group: "student",
      mode: 755,
    },
    "/home/student/linux-handson": {
      type: "dir",
      owner: "student",
      group: "student",
      mode: 755,
    },
    "/home/student/.bashrc": {
      type: "file",
      owner: "student",
      group: "student",
      mode: 644,
      content: "# simulated bashrc\n",
    },
  };
  state.users = {
    student: {
      uid: 1000,
      gid: 1000,
      groups: ["student", "sudo"],
      passwordSet: true,
    },
    root: { uid: 0, gid: 0, groups: ["root"], passwordSet: true },
  };
  state.groups = {
    student: { gid: 1000, members: ["student"] },
    sudo: { gid: 27, members: ["student"] },
    root: { gid: 0, members: ["root"] },
  };
  state.env = {
    HOME: "/home/student",
    USER: "student",
    SHELL: "/bin/bash",
    PATH: "/usr/local/bin:/usr/bin:/bin",
    PWD: "/home/student",
  };
  state.packages = { git: false, curl: false, nginx: false, python3: false };
  state.packageIndex = false;
  state.history = [];
  state.covered = new Set();
  state.events = [];
  state.output = [];
  state.sessionStack = [];
  state.bashrc = ["# simulated .bashrc"];
  state.historyIndex = -1;
  state.lastUpdatedSubsystem = null;
  state.lastUpdatedItem = null;
  state.lastPermissionTarget = "script.sh";
  renderAll();
  welcome();
}

function welcome() {
  output("Welcome to the Linux Command Playground.", "info");
  output(
    "This terminal is 100% simulated. No real files, users or packages are changed.",
    "info",
  );
  output(
    "Choose a question in Learn, then use Practice or click ▶ Run on any step to see live changes.",
    "info",
  );
}

function renderQuestionFocusBanner() {
  const q = questions.find((x) => x.id === state.selectedQuestion) || questions[0];
  const pill = document.getElementById("focusPill");
  const title = document.getElementById("focusTitle");
  const desc = document.getElementById("focusDesc");
  const tags = document.getElementById("focusTags");

  if (pill) pill.textContent = `🎯 Question Focus: Q${q.id}`;
  if (title) title.textContent = q.focusSubsystem || q.title;
  if (desc) desc.textContent = q.focusDesc || "Observing live state changes.";
  if (tags) {
    tags.innerHTML = `<span class="tag active-tag">${(q.focusArea || "SYSTEM").toUpperCase()}</span>` +
      (q.focusTags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
  }

  // Update visualizer card spotlights
  const cards = {
    filesystem: document.getElementById("cardFilesystem"),
    identity: document.getElementById("cardIdentity"),
    packages: document.getElementById("cardPackages"),
    env: document.getElementById("cardEnv"),
    history: document.getElementById("cardHistory"),
    event: document.getElementById("cardEvent"),
  };

  Object.values(cards).forEach((c) => c && c.classList.remove("spotlight"));

  if (q.focusArea === "filesystem" && cards.filesystem) cards.filesystem.classList.add("spotlight");
  if (q.focusArea === "identity" && cards.identity) cards.identity.classList.add("spotlight");
  if (q.focusArea === "packages" && cards.packages) cards.packages.classList.add("spotlight");
  if (q.focusArea === "env" && cards.env) cards.env.classList.add("spotlight");
  if (q.focusArea === "all") {
    if (cards.filesystem) cards.filesystem.classList.add("spotlight");
    if (cards.identity) cards.identity.classList.add("spotlight");
    if (cards.packages) cards.packages.classList.add("spotlight");
    if (cards.env) cards.env.classList.add("spotlight");
  }

  // Flash card if subsystem was updated
  if (state.lastUpdatedSubsystem && cards[state.lastUpdatedSubsystem]) {
    const el = cards[state.lastUpdatedSubsystem];
    el.classList.add("card-flash");
    setTimeout(() => el.classList.remove("card-flash"), 800);
  }
}

function renderQuestionList() {
  const el = document.getElementById("questionList");
  el.innerHTML = "";
  let lastTopic = null;

  questions.forEach((q) => {
    // Insert topic header above the respective questions
    if (q.topic !== lastTopic) {
      lastTopic = q.topic;
      const topicEl = document.createElement("div");
      topicEl.className = "topic-header";
      topicEl.innerHTML = `<span class="topic-pin">📌</span><span>${escapeHtml(q.topic)}</span>`;
      el.appendChild(topicEl);
    }

    const b = document.createElement("button");
    b.className = "q-btn" + (q.id === state.selectedQuestion ? " active" : "");
    b.innerHTML = `
      <span class="q-num">Q${q.id}</span>
      <span class="q-info">
        <b class="q-title">${escapeHtml(q.title)}</b>
        <small class="q-focus">${escapeHtml(q.focus)}</small>
      </span>
    `;
    b.onclick = () => {
      state.selectedQuestion = q.id;
      renderQuestionList();
      renderQuestionDetail();
      renderSelectedTask();
      renderQuestionFocusBanner();
    };
    el.appendChild(b);
  });
  document.getElementById("questionCounter").textContent =
    `${state.selectedQuestion} / ${questions.length}`;
}

function renderQuestionDetail() {
  const q = questions.find((x) => x.id === state.selectedQuestion);
  const el = document.getElementById("questionDetail");
  el.innerHTML = `<div class="detail-top">
    <div>
      <div class="detail-topic-banner">
        <span class="topic-tag">TOPIC: ${escapeHtml(q.topic)}</span>
        ${q.subtopic ? `<span class="subtopic-tag">${escapeHtml(q.subtopic)}</span>` : ""}
      </div>
      <h4>Q${q.id}. ${escapeHtml(q.title)}</h4>
      <p>Complete the task in the simulated Linux terminal. Watch the visualizer below update dynamically as each command runs.</p>
    </div>
    <span class="focus-tag">${escapeHtml(q.focus)}</span>
  </div>
  <ol class="task-list">${q.tasks.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ol>
  <div class="solution-panel">
    <div class="solution-head">
      <b>🧩 Solution & command explanations</b>
      <div style="display: flex; gap: 6px;">
        <button class="copy-mini" id="runAllMini" style="background: #171a26; color: #74d6a2;" title="Run all commands step-by-step in simulated terminal">▶ Run all steps</button>
        <button class="copy-mini" id="copyMini">Copy all</button>
      </div>
    </div>
    <div class="command-explain">
      ${q.commands
        .map(
          (c, index) => `
        <div class="cmd-row">
          <div class="cmd-code">
            <span class="cmd-number">${index + 1}</span>
            <span class="cmd-text">${escapeHtml(c[0])}</span>
            <div class="cmd-actions">
              <button class="cmd-run-btn" onclick="runCommand('${escapeHtml(c[0]).replace(/'/g, "\\'")}')" title="Run this step in the terminal">▶ Run</button>
              <button class="cmd-copy-btn" onclick="copyText('${escapeHtml(c[0]).replace(/'/g, "\\'")}')" title="Copy command">📋</button>
            </div>
          </div>
          <div class="cmd-why">
            <b>Why:</b> ${c[1]}<br>
            <b>Effect:</b> ${c[2]}
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  </div>`;

  document.getElementById("copyMini").onclick = () =>
    copyText(q.commands.map((c) => c[0]).join("\n"));
  document.getElementById("runAllMini").onclick = () =>
    runQuestionCommands(q.id);
}

function renderSelectedTask() {
  const q = questions.find((x) => x.id === state.selectedQuestion);
  document.getElementById("selectedTask").innerHTML = `
    <div class="eyebrow">CURRENT EXERCISE</div>
    <div class="task-topic-badge">📚 ${escapeHtml(q.topic)}</div>
    <h4>Q${q.id}. ${escapeHtml(q.title)}</h4>
    <p>${escapeHtml(q.focus)}</p>
    <ul class="mini-task">${q.tasks.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
    <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 7px;">
      <button class="btn primary" onclick="runQuestionCommands(${q.id})" style="font-size: 11px; padding: 7px 10px; width: 100%; text-align: center;">
        ▶ Run all steps for Q${q.id}
      </button>
    </div>
  `;
}

function renderTerminal() {
  const out = document.getElementById("terminalOutput");
  out.innerHTML = state.output
    .map(
      (x) => `<div class="terminal-line ${x.type}">${escapeHtml(x.text)}</div>`,
    )
    .join("");
  out.scrollTop = out.scrollHeight;
  const promptPath =
    state.currentPath === `/home/${state.currentUser}`
      ? "~"
      : state.currentPath;
  document.getElementById("prompt").textContent =
    `${state.currentUser}@linux-lab:${promptPath}$`;
}

function renderTree() {
  const el = document.getElementById("fileTree");
  el.innerHTML = "";

  function row(path, depth) {
    const o = state.files[path];
    const isCurrentPwd = path === state.currentPath;
    const isRecentlyUpdated = path === state.lastUpdatedItem;
    const div = document.createElement("div");
    div.className = "tree-row" +
      (isCurrentPwd ? " active-pwd" : "") +
      (isRecentlyUpdated ? " highlight-pulse" : "");
    div.style.paddingLeft = 7 + depth * 16 + "px";
    div.title = `Click to inspect ${basename(path)}`;
    div.innerHTML = `
      <span class="${o.type === "dir" ? "folder-icon" : "file-icon"}">${o.type === "dir" ? "📁" : "📄"}</span>
      <span class="name">${basename(path)}</span>
      <span class="tree-inspect-hint">inspect</span>
      <span class="meta">${o.type === "dir" ? "DIR" : `${modeString(o.mode, o.type)} (${(o.content || "").length}b)`}</span>
    `;
    div.onclick = () => showFileModal(path);
    el.appendChild(div);
  }

  function walk(path, depth) {
    children(path).forEach((p) => {
      row(p, depth);
      if (state.files[p].type === "dir") walk(p, depth + 1);
    });
  }

  row("/", 0);
  walk("/", 1);

  // Update card badge
  const fsBadge = document.getElementById("fsBadge");
  if (fsBadge) {
    const count = Object.keys(state.files).length;
    fsBadge.textContent = `${count} nodes • ${state.currentPath}`;
  }
}

function renderIdentity() {
  const el = document.getElementById("identityPanel");
  const u = state.users[state.currentUser] || {
    uid: 1000,
    gid: 1000,
    groups: [state.currentUser],
  };

  // Find a target file for permissions decoder
  let targetPath = state.lastPermissionTarget;
  if (!targetPath || !state.files[targetPath]) {
    targetPath = Object.keys(state.files).find((p) => state.files[p].type === "file") || "/home/student/.bashrc";
  }
  const targetFile = state.files[targetPath] || { mode: 644, type: "file", owner: "student", group: "student" };
  const mode = targetFile.mode || 644;
  const uMode = (mode >> 6) & 7;
  const gMode = (mode >> 3) & 7;
  const oMode = mode & 7;

  const chars = (v) =>
    (v & 4 ? "r" : "-") + (v & 2 ? "w" : "-") + (v & 1 ? "x" : "-");

  const ownedFiles = Object.entries(state.files)
    .filter(([p]) => p !== "/" && p !== "/home")
    .slice(0, 6);

  el.innerHTML = `
    <div class="identity-body">
      <div class="identity-user">
        <b>👤 ${state.currentUser}</b>
        <small>UID ${u.uid} • Primary GID ${u.gid} • Groups: ${u.groups.join(", ")}</small>
      </div>

      <!-- Permission Decoder Widget -->
      <div class="perm-decoder">
        <div class="perm-decoder-head">
          <b>🔐 Mode Decoder: ${basename(targetPath)}</b>
          <span>${modeString(mode, targetFile.type)} (${mode.toString(8)})</span>
        </div>
        <div class="perm-decoder-grid">
          <div class="perm-chunk">
            <div class="perm-chunk-role">User (${targetFile.owner})</div>
            <div class="perm-chunk-bits">${chars(uMode)}</div>
            <div class="perm-chunk-octal">${uMode} = ${(uMode & 4 ? 4 : 0)}+${(uMode & 2 ? 2 : 0)}+${(uMode & 1 ? 1 : 0)}</div>
          </div>
          <div class="perm-chunk">
            <div class="perm-chunk-role">Group (${targetFile.group})</div>
            <div class="perm-chunk-bits">${chars(gMode)}</div>
            <div class="perm-chunk-octal">${gMode} = ${(gMode & 4 ? 4 : 0)}+${(gMode & 2 ? 2 : 0)}+${(gMode & 1 ? 1 : 0)}</div>
          </div>
          <div class="perm-chunk">
            <div class="perm-chunk-role">Others (world)</div>
            <div class="perm-chunk-bits">${chars(oMode)}</div>
            <div class="perm-chunk-octal">${oMode} = ${(oMode & 4 ? 4 : 0)}+${(oMode & 2 ? 2 : 0)}+${(oMode & 1 ? 1 : 0)}</div>
          </div>
        </div>
      </div>

      <div class="identity-sections" style="margin-top: 10px;">
        <div>
          <div class="sub-section-title">
            <span>Users & Groups</span>
            <small>${Object.keys(state.users).length} users • ${Object.keys(state.groups).length} groups</small>
          </div>
          <div class="groups-wrap">
            ${Object.keys(state.users)
              .map(
                (user) => `
              <span class="user-chip ${user === state.currentUser ? "active-user" : ""}">
                👤 ${user}${user === state.currentUser ? " (active)" : ""}
              </span>
            `,
              )
              .join("")}
            ${Object.keys(state.groups)
              .map(
                (grp) => `
              <span class="group-chip ${u.groups.includes(grp) ? "active-member" : ""}">
                👥 ${grp} (${state.groups[grp].members.length || (grp === "student" ? 1 : 0)})
              </span>
            `,
              )
              .join("")}
          </div>
        </div>

        <div>
          <div class="sub-section-title"><span>Sample Permissions</span></div>
          <table class="permission-table">
            <tr><th>File</th><th>Owner</th><th>Group</th><th>Mode</th></tr>
            ${ownedFiles
              .map(
                ([p, o]) => `
              <tr onclick="showFileModal('${p}')" style="cursor: pointer;" title="Inspect ${basename(p)}">
                <td>${basename(p)}</td>
                <td>${o.owner}</td>
                <td>${o.group}</td>
                <td><span class="permission-chip">${modeString(o.mode, o.type)}</span></td>
              </tr>
            `,
              )
              .join("")}
          </table>
        </div>
      </div>
    </div>
  `;

  const idBadge = document.getElementById("identityBadge");
  if (idBadge) idBadge.textContent = `${state.currentUser} (UID ${u.uid})`;
}

function renderPackages() {
  const el = document.getElementById("packagePanel");
  const isUpdated = state.lastUpdatedSubsystem === "packages";

  el.innerHTML = `
    <div class="package-body">
      <div class="pkg-row ${isUpdated && state.lastUpdatedItem === "index" ? "highlight-pulse" : ""}">
        <span>Package index</span>
        <b class="${state.packageIndex ? "status-installed" : "status-available"}">
          ${state.packageIndex ? "✓ REFRESHED" : "NOT REFRESHED"}
        </b>
      </div>
      ${Object.entries(state.packages)
        .map(
          ([p, v]) => `
        <div class="pkg-row ${isUpdated && state.lastUpdatedItem === p ? "highlight-pulse" : ""}">
          <span>📦 <b>${p}</b></span>
          <span class="${v ? "status-installed" : "status-available"}">
            ${v ? "✓ INSTALLED" : "available"}
          </span>
        </div>
      `,
        )
        .join("")}
    </div>
  `;

  const pkgBadge = document.getElementById("pkgBadge");
  if (pkgBadge) {
    const installedCount = Object.values(state.packages).filter(Boolean).length;
    pkgBadge.textContent = `${installedCount} installed • ${state.packageIndex ? "Index OK" : "Needs Update"}`;
  }
}

function renderEnv() {
  const el = document.getElementById("envPanel");
  const isUpdated = state.lastUpdatedSubsystem === "env";

  el.innerHTML = `
    <div class="env-body">
      ${Object.entries(state.env)
        .map(
          ([k, v]) => `
        <div class="env-row ${isUpdated && state.lastUpdatedItem === k ? "highlight-pulse" : ""}">
          <span>🌱 <b>${k}</b></span>
          <small>${escapeHtml(v)}</small>
        </div>
      `,
        )
        .join("")}
    </div>
  `;

  const envBadge = document.getElementById("envBadge");
  if (envBadge) envBadge.textContent = `${Object.keys(state.env).length} variables`;
}

function renderHistory() {
  const el = document.getElementById("historyPanel");
  el.innerHTML = `
    <div class="history-body">
      ${state.history
        .slice(-12)
        .reverse()
        .map(
          (x, i) => `
        <div class="history-item" onclick="runCommand('${escapeHtml(x).replace(/'/g, "\\'")}')" style="cursor: pointer;" title="Click to re-run">
          <span style="color: #9a57c7; font-weight: bold;">${String(state.history.length - i).padStart(2, "0")}</span>  ${escapeHtml(x)}
        </div>
      `,
        )
        .join("") || "<div class='history-item'>No commands executed yet.</div>"}
    </div>
  `;

  const historyBadge = document.getElementById("historyBadge");
  if (historyBadge) historyBadge.textContent = `${state.history.length} commands`;
}

function renderEvent() {
  const el = document.getElementById("eventPanel");
  const e = state.events[0];
  el.innerHTML = `
    <div class="event-body">
      ${e
        ? `
        <div class="event-main highlight-pulse">
          ⚡ <b>${escapeHtml(e.msg)}</b>
          <div class="event-command">${escapeHtml(e.cmd)} • ${e.time}</div>
        </div>
      `
        : "<div class='event-main'>Run a command to see why the visualizer changes in real time.</div>"}
    </div>
  `;
}

function renderBadges() {
  document.getElementById("stateBadges").innerHTML = `
    <span class="state-badge">👤 ${state.currentUser}</span>
    <span class="state-badge">📍 ${state.currentPath}</span>
    <span class="state-badge">📦 ${Object.values(state.packages).filter(Boolean).length} packages</span>
    <span class="state-badge">⌨ ${state.history.length} commands</span>
  `;
}

function renderReview() {
  const done = [...state.covered].filter((x) =>
    commandCoverage.includes(x),
  ).length;
  const files = Object.keys(state.files).length;
  document.getElementById("reviewSummary").innerHTML = `
    <div class="stat"><b>${files}</b><span>virtual filesystem entries</span></div>
    <div class="stat"><b>${Object.keys(state.users).length}</b><span>simulated users</span></div>
    <div class="stat"><b>${Object.values(state.packages).filter(Boolean).length}</b><span>installed packages</span></div>
    <div class="stat"><b>${done}/${commandCoverage.length}</b><span>command types practiced</span></div>
  `;
  const cov = document.createElement("div");
  cov.className = "coverage";
  cov.innerHTML = `
    <h4>Command coverage</h4>
    <div class="coverage-grid">
      ${commandCoverage
        .map(
          (c) => `
        <div class="coverage-item ${state.covered.has(c) ? "done" : ""}">
          ${c}
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  const stage = document.getElementById("reviewStage");
  if (stage) {
    const old = stage.querySelector(".coverage");
    if (old) old.remove();
    stage.appendChild(cov);
  }
}

function showFileModal(path) {
  path = normalize(path);
  const o = state.files[path];
  if (!o) return;

  const modal = document.getElementById("fileModal");
  if (!modal) return;

  document.getElementById("fileModalIcon").textContent = o.type === "dir" ? "📁" : "📄";
  document.getElementById("fileModalName").textContent = basename(path);
  document.getElementById("fileModalPath").textContent = path;
  document.getElementById("fileModalType").textContent = o.type === "dir" ? "Directory" : "Regular file";
  document.getElementById("fileModalSize").textContent = `${(o.content || "").length} bytes`;
  document.getElementById("fileModalOwner").textContent = `${o.owner}:${o.group}`;
  document.getElementById("fileModalMode").textContent = `${modeString(o.mode, o.type)} (octal: ${(o.mode || 755).toString(8)})`;
  document.getElementById("fileModalContent").textContent = o.type === "dir"
    ? `Directory contents (${children(path).length} items):\n${children(path).map((c) => `  ▸ ${basename(c)}`).join("\n") || "  (empty directory)"}`
    : (o.content || "(empty file)");

  modal.style.display = "flex";
}

function closeFileModal() {
  const modal = document.getElementById("fileModal");
  if (modal) modal.style.display = "none";
}

function renderAll() {
  renderQuestionFocusBanner();
  renderQuestionList();
  renderQuestionDetail();
  renderSelectedTask();
  renderTerminal();
  renderTree();
  renderIdentity();
  renderPackages();
  renderEnv();
  renderHistory();
  renderEvent();
  renderBadges();
  renderReview();
}

function escapeHtml(s) {
  return String(s).replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[m],
  );
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  const statusEl = document.getElementById("terminalStatus");
  if (statusEl) {
    statusEl.textContent = "COPIED";
    setTimeout(() => (statusEl.textContent = "READY"), 1200);
  }
}

// Stage Navigation
document.querySelectorAll(".stage").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".stage")
      .forEach((x) => x.classList.remove("active"));
    btn.classList.add("active");
    document
      .querySelectorAll(".stage-panel")
      .forEach((x) => x.classList.remove("active-panel"));
    document
      .getElementById(btn.dataset.stage + "Stage")
      .classList.add("active-panel");
    if (btn.dataset.stage === "practice")
      document.getElementById("terminalInput").focus();
    window.scrollTo({
      top: document.querySelector(".hero").offsetTop - 80,
      behavior: "smooth",
    });
  }),
);

// Terminal Input & Up/Down Arrow Key History Navigation
const terminalInput = document.getElementById("terminalInput");
terminalInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    execute(e.target.value);
    e.target.value = "";
    state.historyIndex = -1;
  } else if (e.key === "ArrowUp") {
    if (state.history.length > 0) {
      if (state.historyIndex === -1) {
        state.historyIndex = state.history.length - 1;
      } else if (state.historyIndex > 0) {
        state.historyIndex--;
      }
      e.target.value = state.history[state.historyIndex] || "";
      e.preventDefault();
    }
  } else if (e.key === "ArrowDown") {
    if (state.historyIndex !== -1) {
      if (state.historyIndex < state.history.length - 1) {
        state.historyIndex++;
        e.target.value = state.history[state.historyIndex] || "";
      } else {
        state.historyIndex = -1;
        e.target.value = "";
      }
      e.preventDefault();
    }
  }
});

// Clear, Reset, and Modal Close Handlers
document.getElementById("clearTerminalBtn").onclick = () => {
  state.output = [];
  welcome();
  renderTerminal();
};

document.getElementById("resetBtn").onclick = () => {
  if (confirm("Reset the simulated Linux lab?")) resetState();
};

document.getElementById("copySolutionBtn").onclick = () => {
  const q = questions.find((x) => x.id === state.selectedQuestion);
  copyText(q.commands.map((c) => c[0]).join("\n"));
};

const modalClose = document.getElementById("fileModalClose");
if (modalClose) modalClose.onclick = closeFileModal;

const modalBackdrop = document.getElementById("fileModalBackdrop");
if (modalBackdrop) modalBackdrop.onclick = closeFileModal;

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeFileModal();
});

// Initial startup
resetState();
