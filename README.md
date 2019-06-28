translate.js
============

A jQuery plugin to translate text in the client side. You can set language with LocalStorage.

## Home and demo
View a live [demo](http://www.openxrest.com/translatejs/index.html).

## Usage
Step 1: include JQuery, translate.js and meta tag in your page

    <script src="jquery.js"/>
    <script src="jquery.translate.js"/>

Step 2: Insert Meta tag in header
	
	<meta http-equiv="Content-Language" content="YourLangCode">
	
Step 3: every text you want translated include the trn class

    <span class="trn">text to translate</span>

Step 4: create your dictionary

    var dict = {
      "Home": {
        pt: "Início"
      },
      "Download plugin": {
         pt: "Descarregar plugin",
         en: "Download plugin"
      }
    }

Step 5: initialize the plugin and translate the entire page body

    var translator = $('body').translate({lang: "en", t: dict}); //use English

Step 6: change to another language

    translator.lang("pt"); //change to Portuguese

## License
You may use translate.js under the terms of the MIT License. [More information](http://en.wikipedia.org/wiki/MIT_License).
