import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette, MainAreaWidget
} from '@jupyterlab/apputils';

import {
  Widget
} from '@lumino/widgets';

import { 
  jupyterIcon
} from "@jupyterlab/ui-components";

/**
 * Initialization data for the myextension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'weather',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {

  // Create a blank content widget inside of a MainAreaWidget
  const content = new Widget();
  const widget = new MainAreaWidget({content});
  widget.id = 'weather';
  widget.title.label = 'Weather Finder';
  widget.title.closable = true;
      
  //creating the form
  var my_form=(<HTMLFormElement> document.createElement('FORM'));
  my_form.name='myForm';
  my_form.method='POST';

  var my_tb= (<HTMLInputElement> document.createElement('INPUT'));
  my_tb.type='TEXT';
  my_tb.id='myInput';
  my_tb.placeholder='Enter a city';
  my_form.appendChild(my_tb);  

  var button = (<HTMLButtonElement> document.createElement('button'));
  button.innerHTML = 'Submit';
  button.onclick = function(){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", 'http://www.mocky.io/v2/5e63e16c3600006500e8ddb7', false ); 
      xmlHttp.send( null );
      alert("Weather in "+my_tb.value+" is "+xmlHttp.responseText+" degrees celsius");
      return false;
  };
      
  my_form.appendChild(button);    
  content.node.appendChild(my_form);    

  // Add an application command
  const command: string = 'weater:open';
  app.commands.addCommand(command, {
    label: 'weather finder',
    execute: () => {
      if (!widget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.add(widget, 'main');
        app.shell.add(widget, 'left');    
      }
      // Activate the widget
      app.shell.activateById(widget.id);
    }
  });

  // Add the command to the palette.
  jupyterIcon.element({backgroundColor: 'black',height: '16px',width: '16px',marginLeft: '2px'});       
  palette.addItem({command, category: 'Extension'});      
}

};

export default extension;