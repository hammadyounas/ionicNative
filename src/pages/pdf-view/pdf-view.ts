import { Component } from '@angular/core';
import {  NavParams ,Platform } from 'ionic-angular';
import { DocumentViewer , DocumentViewerOptions } from '@ionic-native/document-viewer';
declare var cordova: any;

@Component({
  selector: 'pdf-view',
  templateUrl: 'pdf-view.html'
})

export class PdfView{
    item;

    constructor(params: NavParams,private document: DocumentViewer,  public platform:Platform) {
        // this.platform.ready().then(() => {
        //     if(!this.platform.is('cordova')){
        //       return false;
        //     }
        // })
      
      this.item = params.data.item;
    //   const options: DocumentViewerOptions = {
    //     title: 'My PDF'
    //   }
    //   const imgeLocation = `${cordova.file.applicationDirectory}src/assets/${'pdf-sample.pdf'}`;
    //   this.document.viewDocument(imgeLocation, 'application/pdf', options)
     }

}