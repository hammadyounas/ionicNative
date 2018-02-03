import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//plugins
import { DocumentViewer } from '@ionic-native/document-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PdfView } from '../pages/pdf-view/pdf-view'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PdfView
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PdfViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PdfView
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DocumentViewer
  ]
})
export class AppModule {}
