const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
    // Automatikus fájl másolás mentéskor
    let disposable = vscode.workspace.onDidSaveTextDocument((document) => {
        const destinationPath = vscode.workspace.getConfiguration('fileCopyExtension').get('destinationPath');

        console.log('Destination Path:', destinationPath);
        console.log('Saved File:', document.fileName);

        if (!destinationPath) {
            console.log('❌ Nincs beállítva célmappa (destinationPath).');
            return; // Ne csináljon semmit, ha nincs célmappa beállítva
        }

        // Ellenőrizzük, hogy a célmappa létezik-e, ha nem, hozzuk létre
        if (!fs.existsSync(destinationPath)) {
            fs.mkdirSync(destinationPath, { recursive: true });
        }

        const fileName = path.basename(document.fileName);
        const destinationFilePath = path.join(destinationPath, fileName);

        // Fájl másolása
        fs.copyFile(document.fileName, destinationFilePath, (err) => {
            if (err) {
                vscode.window.showErrorMessage(`⚠️ Hiba a másoláskor: ${err.message}`);
            } else {
                vscode.window.showInformationMessage(`✅ ${fileName} sikeresen másolva ide: ${destinationPath}`);
            }
        });
    });

    context.subscriptions.push(disposable);

    // Manuális fájl másolás parancs
    let manualCopyDisposable = vscode.commands.registerCommand('file-copy-extension.copyFiles', function () {
        vscode.window.showInformationMessage('📂 Fájlok másolása manuálisan!');

        const sourcePath = vscode.window.activeTextEditor?.document.fileName;
        const destinationPath = vscode.workspace.getConfiguration('fileCopyExtension').get('destinationPath');

        if (!sourcePath) {
            vscode.window.showErrorMessage('⚠️ Nincs aktív fájl a másoláshoz.');
            return;
        }

        if (!destinationPath) {
            vscode.window.showErrorMessage('⚠️ Nincs beállítva célmappa (destinationPath).');
            return;
        }

        // Ellenőrizzük, hogy a célmappa létezik-e, ha nem, hozzuk létre
        if (!fs.existsSync(destinationPath)) {
            fs.mkdirSync(destinationPath, { recursive: true });
        }

        const fileName = path.basename(sourcePath);
        const destinationFilePath = path.join(destinationPath, fileName);

        // Fájl másolása
        fs.copyFile(sourcePath, destinationFilePath, (err) => {
            if (err) {
                vscode.window.showErrorMessage(`⚠️ Hiba a másoláskor: ${err.message}`);
            } else {
                vscode.window.showInformationMessage(`✅ ${fileName} sikeresen másolva ide: ${destinationPath}`);
            }
        });
    });

    context.subscriptions.push(manualCopyDisposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
