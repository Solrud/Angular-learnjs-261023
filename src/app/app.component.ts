import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Angular-learnjs-261023';

    test = 'тест для коммитаЮ пройдет ли';
    warning =
        'Error:Initialization error (typescript). Cannot set property parseJsonConfigFileContent of #Object> which has only a getter\n' +
        'TypeError: Cannot set property parseJsonConfigFileContent of #Object> which has only a getter\n' +
        '    at overrideParseJsonConfigFileContent (C:\\Program Files\\JetBrains IntelliJ IDEA Ultimate 2020.1 x64\\plugins\\JavaScriptLanguage\\jsLanguageServicesImpl\\typescript\\session\\old\\ts-project-service-21.js:37:40)\n' +
        '    at Object.extendProjectService21 (C:\\Program Files\\JetBrains IntelliJ IDEA Ultimate 2020.1 x64\\plugins\\JavaScriptLanguage\\jsLanguageServicesImpl\\typescript\\session\\old\\ts-project-service-21.js:6:5)\n' +
        '    at Object.createSessionLatestClass (C:\\Program Files\\JetBrains IntelliJ IDEA Ultimate 2020.1 x64\\plugins\\JavaScriptLanguage\\jsLanguageServicesImpl\\typescript\\ts-session-latest.js:21:29)\n' +
        '    at Object.createSessionClass (C:\\Program Files\\JetBrains IntelliJ IDEA Ultimate 2020.1 x64\\plugins\\JavaScriptLanguage\\jsLanguageServicesImpl\\typescript\\ts-session-provider.js:29:36)\n' +
        '    at TypeScriptLanguagePlugin.createSessionClass (C:\\Program Files\\JetBrains IntelliJ IDEA Ultimate 2020.1 x64\\plugins\\JavaScriptLanguage\\jsLanguageServicesImpl\\typescript\\ts-plugin.js:116:38)\n' +
        '    at TypeScriptLanguagePlugin.getSession (C:\\Program Files\\JetBrains IntelliJ IDEA Ultimate 2020.1 x64\\plugins\\JavaScriptLanguage\\jsLanguageServicesImpl\\typescript\\ts-plugin.js:109:33)\n' +
        '    at new TypeScriptLanguagePlugin (C:\\Program Files\\JetBrains IntelliJ IDEA Ultimate 2020.1 x64\\plugins\\JavaScriptLanguage\\jsLanguageServicesImpl\\typescript\\ts-plugin.js:20:30)\n' +
        '    at TypeScriptLanguagePluginFactory.create (C:\\Program Files\\JetBrains IntelliJ IDEA Ultimate 2020.1 x64\\plugins\\JavaScriptLanguage\\jsLanguageServicesImpl\\typescript\\ts-plugin.js:128:40)\n' +
        '    at Interface.anonymous> (C:\\Program Files\\JetBrains IntelliJ IDEA Ultimate 2020.1 x64\\plugins\\JavaScriptLanguage\\jsLanguageServicesImpl\\js-language-service.js:82:52)\n' +
        '    at Interface.emit (node:events:513:28)';
}
