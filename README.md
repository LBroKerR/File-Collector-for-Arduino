# File Collector for Arduino

This extension automatically copies files from a source folder to a destination folder, including subfolders (recursively), when a file is saved in VS Code. 

## Features

- Recursively copy all files from a source directory to a destination directory.
- Allows users to configure source and destination paths in the VS Code settings.
- Automatically copies the file every time it is saved (on `Ctrl+S`).

## Requirements

- **Visual Studio Code**: Ensure that you are using a compatible version (1.70.0 or higher).
- **Node.js**: Required for the extension's functionality.

## Installation

To install this extension:

1. **Clone or download the repository**:
    - If using Git, run:
    ```bash
    git clone <repository-url>
    ```
    - If manually downloading, click on the **"Download"** option on the extension page.

2. **Install via `.vsix` file**:
    - In Visual Studio Code, go to the **Extensions** view (`Ctrl+Shift+X`).
    - Click on the **three dots** in the top-right corner and choose **"Install from VSIX..."**.
    - Select the downloaded `.vsix` file.

## Extension Settings

This extension contributes the following settings to your VS Code configuration:

### Source and Destination Paths
- `fileCopyExtension.sourcePath`: The directory path for the source folder where files will be copied from.
- `fileCopyExtension.destinationPath`: The directory path for the destination folder where files will be copied to.

### Example settings:
1. Open VS Code settings (`Ctrl+,`).
2. Add the following to your `settings.json` file:
```json
{
    "fileCopyExtension.sourcePath": "C:\\path\\to\\source\\folder",
    "fileCopyExtension.destinationPath": "C:\\path\\to\\destination\\folder"
}
Usage
After configuring the sourcePath and destinationPath in your settings, every time a file is saved (using Ctrl+S), the extension will automatically copy it from the source folder to the destination folder.

If a folder exists in the source directory, the extension will copy its contents, but only files, not subdirectories.

The file name and status will be displayed in the status bar after each successful copy.

Known Issues
If there are large files, the copy operation may take longer depending on the file size.

The extension may not work as expected if source or destination paths are incorrect.

Release Notes
1.0.0
Initial release of File Collector for Arduino extension.

1.1.0
Added recursive copying feature for all files in subfolders.

Working with Markdown
You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

Split the editor (Cmd+\ on macOS or Ctrl+\ on Windows and Linux)

Toggle preview (Shift+Cmd+V on macOS or Shift+Ctrl+V on Windows and Linux)

Press Ctrl+Space (Windows, Linux, macOS) to see a list of Markdown snippets

For more information
Visual Studio Code's Markdown Support

Markdown Syntax Reference

Enjoy!

css
Másolás
Szerkesztés

---

### **Hogyan használhatod?**
1. **Másold ki a fenti tartalmat.**
2. **Nyisd meg a `README.md` fájlt** a bővítményed projektjében, és illeszd be a tartalmat.
3. **Mentsd el** a fájlt.
4. Ha szükséges, **csomagold be és telepítsd** a bővítményt.

Ezáltal az összes információ világosan és áttekinthetően elérhető lesz a felhasználók számára, és a bővítmény telepítése, beállítása és használata is egyszerűbbé válik.

Ha bármi másra van szükséged, jelezd nyugodtan! 😊