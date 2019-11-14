const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/data', (req, res) => {
  res.send([
    {
    "data": {
    "id": "glyph9",
    "sbgnbbox": {
    "x": 1452.639173965406,
    "y": 609.3619416544145,
    "w": "120.0",
    "h": "60.0"
    },
    "sbgnclass": "macromolecule",
    "sbgnlabel": "hexokinase",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 1111.6287997422921,
    "y": 1043.3343801499798
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph0",
    "sbgnbbox": {
    "x": 1351.3490293961959,
    "y": 518.9529901384763,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "glucose",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 1046.5127267544701,
    "y": 968.307584024581
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph6",
    "sbgnbbox": {
    "x": 1358.2854747390154,
    "y": 707.9866590968695,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "ATP",
    "sbgnstatesandinfos": [],
    "sbgnclonemarker": true,
    "ports": []
    },
    "position": {
    "x": 1203.822207084513,
    "y": 1026.3604616036287
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph8",
    "sbgnbbox": {
    "x": 1322.9939787691299,
    "y": 614.6878118623499,
    "w": "20.0",
    "h": "20.0"
    },
    "sbgnclass": "process",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 1132.6140587341597,
    "y": 957.4190963606077
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph7",
    "sbgnbbox": {
    "x": 1239.4852011317887,
    "y": 543.2369849876238,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "ADP",
    "sbgnstatesandinfos": [],
    "sbgnclonemarker": true,
    "ports": []
    },
    "position": {
    "x": 1215.9574039199272,
    "y": 928.7615457445613
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph12",
    "sbgnbbox": {
    "x": 841.6855140740067,
    "y": 765.0152660242113,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "ADP",
    "sbgnstatesandinfos": [],
    "sbgnclonemarker": true,
    "ports": []
    },
    "position": {
    "x": 974.101647903414,
    "y": 545.2610826823577
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph13",
    "sbgnbbox": {
    "x": 1019.5908382748769,
    "y": 841.6087025848726,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "ATP",
    "sbgnstatesandinfos": [],
    "sbgnclonemarker": true,
    "ports": []
    },
    "position": {
    "x": 890.0442883049725,
    "y": 553.7120264723198
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph1",
    "sbgnbbox": {
    "x": 1231.2768042260652,
    "y": 673.2683218469676,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "glucose 6P",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 1108.875457801557,
    "y": 868.436986054209
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph2",
    "sbgnbbox": {
    "x": 1039.8995038336504,
    "y": 730.180116446269,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "fructose 6P",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 1008.6750452651474,
    "y": 708.552003598157
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph15",
    "sbgnbbox": {
    "x": 569.5498472077387,
    "y": 506.89980858075364,
    "w": "120.0",
    "h": "60.0"
    },
    "sbgnclass": "macromolecule",
    "sbgnlabel": "triose-P isomerase",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 617.029138744985,
    "y": 848.501397371728
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph3",
    "sbgnbbox": {
    "x": 903.0347368937041,
    "y": 654.3308627056822,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "fructose 1,6P",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 851.216930621302,
    "y": 659.3455292277927
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph17",
    "sbgnbbox": {
    "x": 1195.6310733031135,
    "y": 820.9504141631944,
    "w": "120.0",
    "h": "60.0"
    },
    "sbgnclass": "macromolecule",
    "sbgnlabel": "glucose-6P isomerase",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 1162.0418672015658,
    "y": 741.0348588027871
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph10",
    "sbgnbbox": {
    "x": 1141.2404374322139,
    "y": 732.3190922346248,
    "w": "20.0",
    "h": "20.0"
    },
    "sbgnclass": "process",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 1081.9750202500586,
    "y": 780.8279586001831
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph19",
    "sbgnbbox": {
    "x": 893.1427762830865,
    "y": 856.2695126662625,
    "w": "120.0",
    "h": "60.0"
    },
    "sbgnclass": "macromolecule",
    "sbgnlabel": "phospho fructokinase",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 1029.7198381214419,
    "y": 614.5224738923926
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph11",
    "sbgnbbox": {
    "x": 939.3335184518824,
    "y": 758.3699048922733,
    "w": "20.0",
    "h": "20.0"
    },
    "sbgnclass": "process",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 943.146420879508,
    "y": 630.666279523552
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph18",
    "sbgnbbox": {
    "x": 770.4114528170364,
    "y": 659.2220219290564,
    "w": "120.0",
    "h": "60.0"
    },
    "sbgnclass": "macromolecule",
    "sbgnlabel": "adolase",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 824.0970607627087,
    "y": 764.0543961152389
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph16",
    "sbgnbbox": {
    "x": 818.0111009023315,
    "y": 564.8072603606723,
    "w": "20.0",
    "h": "20.0"
    },
    "sbgnclass": "process",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 759.5059724746263,
    "y": 691.5421746456727
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph22",
    "sbgnbbox": {
    "x": 651.1292498357636,
    "y": 314.1387423188818,
    "w": "120.0",
    "h": "60.0"
    },
    "sbgnclass": "macromolecule",
    "sbgnlabel": "GAPDH",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 594.961345615772,
    "y": 522.0417541748872
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph4",
    "sbgnbbox": {
    "x": 792.0076145303351,
    "y": 454.0225025614517,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "GA-3P",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 662.4787847243726,
    "y": 675.2298760333642
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph23",
    "sbgnbbox": {
    "x": 704.0937009722281,
    "y": 398.0421081673902,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "Pi",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 487.61615672751157,
    "y": 603.1522856700377
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph24",
    "sbgnbbox": {
    "x": 809.2974819306742,
    "y": 231.7141323534711,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "NAD",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 658.8451631465821,
    "y": 581.7001108988744
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph25",
    "sbgnbbox": {
    "x": 890.826951363933,
    "y": 299.74915938409947,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "H+",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 570.6960738862647,
    "y": 695.0552734751661
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph20",
    "sbgnbbox": {
    "x": 786.2625869125006,
    "y": 331.67766378118495,
    "w": "20.0",
    "h": "20.0"
    },
    "sbgnclass": "process",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 574.1924371366047,
    "y": 608.9484231821531
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph26",
    "sbgnbbox": {
    "x": 879.2981049664311,
    "y": 389.27232563593486,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "NADH",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 498.3807896892781,
    "y": 676.3002940106064
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph35",
    "sbgnbbox": {
    "x": 627.088268638501,
    "y": 40.089848876876886,
    "w": "120.0",
    "h": "60.0"
    },
    "sbgnclass": "macromolecule",
    "sbgnlabel": "PGK1",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 366.9139970586849,
    "y": 373.97753053557665
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph36",
    "sbgnbbox": {
    "x": 329.6761506918384,
    "y": 187.20503497360494,
    "w": "120.0",
    "h": "60.0"
    },
    "sbgnclass": "macromolecule",
    "sbgnlabel": "PG mutase",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 518.0977549165863,
    "y": 208.1526848145961
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph37",
    "sbgnbbox": {
    "x": 155.12947729633356,
    "y": 379.5263531900425,
    "w": "120.0",
    "h": "60.0"
    },
    "sbgnclass": "macromolecule",
    "sbgnlabel": "enolase",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 276.26023607062757,
    "y": 30.23957832428289
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph38",
    "sbgnbbox": {
    "x": 70.13952165372024,
    "y": 581.2691021233562,
    "w": "120.0",
    "h": "60.0"
    },
    "sbgnclass": "macromolecule",
    "sbgnlabel": "pyruvate kinase",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 46.7377473535056,
    "y": 221.32608736564873
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph21",
    "sbgnbbox": {
    "x": 713.4639263718316,
    "y": 229.06355211274115,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "1,3 BPG",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 509.1755542479159,
    "y": 522.729824186122
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph42",
    "sbgnbbox": {
    "x": 523.848994074475,
    "y": 108.47701882803744,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "ADP",
    "sbgnstatesandinfos": [],
    "sbgnclonemarker": true,
    "ports": []
    },
    "position": {
    "x": 350.07213069459794,
    "y": 452.7584448470666
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph41",
    "sbgnbbox": {
    "x": 718.966532806447,
    "y": 116.46683749236911,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "ATP",
    "sbgnstatesandinfos": [],
    "sbgnclonemarker": true,
    "ports": []
    },
    "position": {
    "x": 393.95194752466443,
    "y": 522.9647654134311
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph31",
    "sbgnbbox": {
    "x": 621.3138039842713,
    "y": 145.7168752444793,
    "w": "20.0",
    "h": "20.0"
    },
    "sbgnclass": "process",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 438.0668040542705,
    "y": 442.95464186544984
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph27",
    "sbgnbbox": {
    "x": 525.2099120385327,
    "y": 210.92542274858295,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "3 PG",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 454.4439329861533,
    "y": 350.04938066829175
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph32",
    "sbgnbbox": {
    "x": 426.3492127437995,
    "y": 257.85665030680025,
    "w": "20.0",
    "h": "20.0"
    },
    "sbgnclass": "process",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 441.2359462445837,
    "y": 258.7282268796613
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph28",
    "sbgnbbox": {
    "x": 346.30926488002945,
    "y": 344.4562152937847,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "2 PG",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 372.31110615353043,
    "y": 184.18232597220754
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph43",
    "sbgnbbox": {
    "x": 363.54724181648487,
    "y": 486.5705174517715,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "H2O",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 371.5247035618821,
    "y": 54.69545105135097
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph33",
    "sbgnbbox": {
    "x": 276.2797233955059,
    "y": 435.0423711483709,
    "w": "20.0",
    "h": "20.0"
    },
    "sbgnclass": "process",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 297.7083812604981,
    "y": 115.15768260374307
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph29",
    "sbgnbbox": {
    "x": 227.86139816113416,
    "y": 531.824141876398,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "PEP",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 207.6181191900656,
    "y": 133.0100900216337
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph39",
    "sbgnbbox": {
    "x": 104.77693104995387,
    "y": 691.8382969303054,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "ADP",
    "sbgnstatesandinfos": [],
    "sbgnclonemarker": true,
    "ports": []
    },
    "position": {
    "x": 141.00971206745135,
    "y": 234.3348651165328
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph40",
    "sbgnbbox": {
    "x": 292.039416141131,
    "y": 643.4009391289965,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "ATP",
    "sbgnstatesandinfos": [],
    "sbgnclonemarker": true,
    "ports": []
    },
    "position": {
    "x": 30.97156154365922,
    "y": 130.21288019568124
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph34",
    "sbgnbbox": {
    "x": 193.8304385062596,
    "y": 632.9540034207419,
    "w": "20.0",
    "h": "20.0"
    },
    "sbgnclass": "process",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 117.02555107387298,
    "y": 150.35691534513978
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph30",
    "sbgnbbox": {
    "x": 205.4745704273754,
    "y": 733.5181650652648,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "pyruvate",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 106.29438061983728,
    "y": 64.01880644701862
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph14",
    "sbgnbbox": {
    "x": 695.1248473196924,
    "y": 482.8828321494848,
    "w": "20.0",
    "h": "20.0"
    },
    "sbgnclass": "process",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 650.3790180209226,
    "y": 765.6355043481531
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "glyph5",
    "sbgnbbox": {
    "x": 721.6687687330186,
    "y": 570.3868893775194,
    "w": "60.0",
    "h": "60.0"
    },
    "sbgnclass": "simple chemical",
    "sbgnlabel": "DHA-P",
    "sbgnstatesandinfos": [],
    "ports": []
    },
    "position": {
    "x": 733.3264274516343,
    "y": 775.4141282148644
    },
    "group": "nodes",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e22",
    "sbgnclass": "catalysis",
    "sbgncardinality": 0,
    "source": "glyph9",
    "target": "glyph8",
    "portsource": "glyph9",
    "porttarget": "glyph8"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e23",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph0",
    "target": "glyph8",
    "portsource": "glyph0",
    "porttarget": "glyph8"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e24",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph8",
    "target": "glyph1",
    "portsource": "glyph8",
    "porttarget": "glyph1"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e25",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph6",
    "target": "glyph8",
    "portsource": "glyph6",
    "porttarget": "glyph8"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e26",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph8",
    "target": "glyph7",
    "portsource": "glyph8",
    "porttarget": "glyph7"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e27",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph11",
    "target": "glyph12",
    "portsource": "glyph11",
    "porttarget": "glyph12"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e28",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph13",
    "target": "glyph11",
    "portsource": "glyph13",
    "porttarget": "glyph11"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e29",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph1",
    "target": "glyph10",
    "portsource": "glyph1",
    "porttarget": "glyph10"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e30",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph10",
    "target": "glyph2",
    "portsource": "glyph10",
    "porttarget": "glyph2"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e31",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph2",
    "target": "glyph11",
    "portsource": "glyph2",
    "porttarget": "glyph11"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e32",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph11",
    "target": "glyph3",
    "portsource": "glyph11",
    "porttarget": "glyph3"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e33",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph14",
    "target": "glyph4",
    "portsource": "glyph14",
    "porttarget": "glyph4"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e34",
    "sbgnclass": "catalysis",
    "sbgncardinality": 0,
    "source": "glyph15",
    "target": "glyph14",
    "portsource": "glyph15",
    "porttarget": "glyph14"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e35",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph3",
    "target": "glyph16",
    "portsource": "glyph3",
    "porttarget": "glyph16"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e36",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph16",
    "target": "glyph5",
    "portsource": "glyph16",
    "porttarget": "glyph5"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e37",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph16",
    "target": "glyph4",
    "portsource": "glyph16",
    "porttarget": "glyph4"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e38",
    "sbgnclass": "catalysis",
    "sbgncardinality": 0,
    "source": "glyph17",
    "target": "glyph10",
    "portsource": "glyph17",
    "porttarget": "glyph10"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e39",
    "sbgnclass": "catalysis",
    "sbgncardinality": 0,
    "source": "glyph19",
    "target": "glyph11",
    "portsource": "glyph19",
    "porttarget": "glyph11"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e40",
    "sbgnclass": "catalysis",
    "sbgncardinality": 0,
    "source": "glyph18",
    "target": "glyph16",
    "portsource": "glyph18",
    "porttarget": "glyph16"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e41",
    "sbgnclass": "catalysis",
    "sbgncardinality": 0,
    "source": "glyph22",
    "target": "glyph20",
    "portsource": "glyph22",
    "porttarget": "glyph20"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e42",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph4",
    "target": "glyph20",
    "portsource": "glyph4",
    "porttarget": "glyph20"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e43",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph20",
    "target": "glyph21",
    "portsource": "glyph20",
    "porttarget": "glyph21"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e44",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph23",
    "target": "glyph20",
    "portsource": "glyph23",
    "porttarget": "glyph20"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e45",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph24",
    "target": "glyph20",
    "portsource": "glyph24",
    "porttarget": "glyph20"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e46",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph20",
    "target": "glyph25",
    "portsource": "glyph20",
    "porttarget": "glyph25"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e47",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph20",
    "target": "glyph26",
    "portsource": "glyph20",
    "porttarget": "glyph26"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e48",
    "sbgnclass": "catalysis",
    "sbgncardinality": 0,
    "source": "glyph35",
    "target": "glyph31",
    "portsource": "glyph35",
    "porttarget": "glyph31"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e49",
    "sbgnclass": "catalysis",
    "sbgncardinality": 0,
    "source": "glyph36",
    "target": "glyph32",
    "portsource": "glyph36",
    "porttarget": "glyph32"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e50",
    "sbgnclass": "catalysis",
    "sbgncardinality": 0,
    "source": "glyph37",
    "target": "glyph33",
    "portsource": "glyph37",
    "porttarget": "glyph33"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e51",
    "sbgnclass": "catalysis",
    "sbgncardinality": 0,
    "source": "glyph38",
    "target": "glyph34",
    "portsource": "glyph38",
    "porttarget": "glyph34"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e52",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph21",
    "target": "glyph31",
    "portsource": "glyph21",
    "porttarget": "glyph31"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e53",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph42",
    "target": "glyph31",
    "portsource": "glyph42",
    "porttarget": "glyph31"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e54",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph31",
    "target": "glyph41",
    "portsource": "glyph31",
    "porttarget": "glyph41"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e55",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph31",
    "target": "glyph27",
    "portsource": "glyph31",
    "porttarget": "glyph27"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e56",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph27",
    "target": "glyph32",
    "portsource": "glyph27",
    "porttarget": "glyph32"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e57",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph32",
    "target": "glyph28",
    "portsource": "glyph32",
    "porttarget": "glyph28"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e58",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph28",
    "target": "glyph33",
    "portsource": "glyph28",
    "porttarget": "glyph33"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e59",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph33",
    "target": "glyph43",
    "portsource": "glyph33",
    "porttarget": "glyph43"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e60",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph33",
    "target": "glyph29",
    "portsource": "glyph33",
    "porttarget": "glyph29"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e61",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph29",
    "target": "glyph34",
    "portsource": "glyph29",
    "porttarget": "glyph34"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e62",
    "sbgnclass": "consumption",
    "sbgncardinality": 0,
    "source": "glyph39",
    "target": "glyph34",
    "portsource": "glyph39",
    "porttarget": "glyph34"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e63",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph34",
    "target": "glyph40",
    "portsource": "glyph34",
    "porttarget": "glyph40"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e64",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph34",
    "target": "glyph30",
    "portsource": "glyph34",
    "porttarget": "glyph30"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    },
    {
    "data": {
    "id": "e65",
    "sbgnclass": "production",
    "sbgncardinality": 0,
    "source": "glyph14",
    "target": "glyph5",
    "portsource": "glyph14",
    "porttarget": "glyph5"
    },
    "position": {},
    "group": "edges",
    "removed": false,
    "selected": false,
    "selectable": true,
    "locked": false,
    "grabbable": true,
    "classes": ""
    }
    ]);
});