<!DOCTYPE html>
<html>
<head>
<title>Codeac</title>
<link rel="stylesheet" type="text/css" href="/editr/editr.css">
<link rel="stylesheet" type="text/css" href="/editr/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="/css/style.css">
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
</head>
<body>
<?php
/*
$xml = simplexml_load_file('subscribe.xml');
$xml_ = simplexml_load_file('_subscribe.xml');
$result = $xml_->xpath('//item[@id="picking"]');
$item = $result[0];
foreach ($xml_->xpath('//slot') as $slot){
    $dom = dom_import_simplexml($slot);
    $dom->parentNode->removeChild($dom);
}
$xml_->asXML('_subscribe.xml');
foreach ($xml->item->slot as $key => $slot) {
    $option = $item->addChild('slot');
    $option->addAttribute('date', $slot['date']);
    $option->addAttribute('time', $slot['time']);
    $option->addAttribute('places', $slot['places']);
}
echo $xml_->asXML();
$xml_->asXML('_subscribe.xml');
echo '________<br>';
echo '<br>';
die;*/
?>
<div id='main' class='container jumbotron'>
    <header>
    <h1>CODEWAC</h1>
    </header>
    <div id='left_panel' class="col-xs-2 col-sm-2 col-lg-2">
       <div id='menu_left_panel'>
           <h2>MENU</h2>
       </div>
        <div id='item_left_panel'>
            <div class="html">
                <h3>Bouton HTML</h3>
            </div>
            <div class="css">
                <h3>Bouton CSS</h3>
            </div>
        </div>
    </div>
    <div id='wrap_main_panel' class='col-xs-6 col-sm-6 col-lg-6'>
        <h2>GAME</h2>
        <div id="main_panel">

        </div>
    </div>
    <div id='right_panel' class='col-xs-4 col-sm-4 col-lg-4'>
        <h2>RESULT</h2>
        <div id='result_panel' class="col-xs-12 col-sm-12 col-lg-12 jumbotron">
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-danger">Danger</button>
        </div>
        <div class="editr col-xs-12 col-sm-12 col-lg-12" data-item="lelle" data-files-html="index.html" data-files-css="!bootstrap.min.css;style.css">
        </div>
    </div>
</div>
<script src="/editr/libs/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script src="//cdn.jsdelivr.net/ace/1.1.01/min/ace.js"></script>
<script src="//cdn.jsdelivr.net/ace/1.1.01/min/ext-emmet.js"></script>
<script src="/editr/libs/ext.emmet.js"></script>
<script src="/editr/editr.js"></script>
<script src="/js/game.js"></script>
</body>
</html>

