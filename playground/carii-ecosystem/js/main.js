$(function(){

    /**
     * http://visjs.org/docs/network/
     * 
     * TO-DO
     * 1. Dynamic Data => http://visjs.org/examples/network/data/dynamicData.html
     */

    var nodes = null;
    var edges = null;
    var network = null;
    var imgDir = './img/community-samples/';
    var imgBroken = imgDir + '9.png';

     // create an array with nodes
    nodes = new vis.DataSet([
        {id: 1, shape: 'image', image: imgDir + '1.png', brokenImage: imgBroken, label: 'Community Name #1'},
        {id: 2, shape: 'image', image: imgDir + '2.png', brokenImage: imgBroken, label: 'Community Name #2'}
        /*,
        {id: 3, shape: 'image', image: imgDir + '3.png', brokenImage: imgBroken, label: 'Community Name #3'},
        {id: 4, shape: 'image', image: imgDir + '4.png', brokenImage: imgBroken, label: 'Community Name #4'},
        {id: 5, shape: 'image', image: imgDir + '5.png', brokenImage: imgBroken, label: 'Community Name #5'}
        */
    ]);

    // create an array with edges
    edges = new vis.DataSet([
        {id: 1, from: 1, to: 2}
        /*,
        {from: 1, to: 3},
        {from: 2, to: 4},
        {from: 2, to: 5}
        */
    ]);

    // create a network
    var container = document.getElementById('ecosystem-vis');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };

    var options = {
        autoResize: true,
        height: '480px',
        width: '100%',
        nodes: {
            borderWidth: 4,
            size: 30,
            color: {
                border: '#616161',
                background: '#bdbdbd'
            },
            font:{
                color: '#212121'
            },
            shapeProperties: {
                useBorderWithImage:true
            }
        },
        edges: {
            color: 'lightgray'
        },
        interaction:{hover:true},
        manipulation: {
            enabled: true
        },
        manipulation: {
            enabled: true,
            initiallyActive: true
            /*,
            deleteNode: function(nodeData, callback){
                console.log(nodeData);
                console.log(callback);
                console.log(console.log('deleteNode'));
            }*/
        }
    };

    // initialize your network!
    network = new vis.Network(container, data, options);

    // animate the intro
    network.once("beforeDrawing", function() {
        network.focus(2, {
            scale: 12
        });
    });

    network.once("afterDrawing", function() {
        network.fit({
            animation: {
                duration: 400,
                easingFunction: 'easeInOutQuad'
            }
        });
    });

    $('.ecosystem-list__item').each(function(index, value){
        var el = $(this);
        el.click(function(e){
            e.preventDefault();
            var dataId = $(this).attr('data-id');
            var dataLabel = $(this).attr('data-label');
            var dataImage = $(this).attr('data-image');
            
            if(!el.hasClass('ecosystem-list__item--active')){
                try {
                    nodes.add({
                        id: dataId,
                        shape: 'image',
                        image: dataImage,
                        brokenImage: imgBroken,
                        label: dataLabel
                    });

                    el.stop().toggleClass('ecosystem-list__item--active');

                }
                catch (err) {
                    alert(err);
                }
            }else{
                var confirmDelete = confirm('Remove ' + dataLabel + ' from this ecosystem?');
                if(confirmDelete){
                    try{
                        
                        // http://visjs.org/docs/network/
                        /*
                        network.unselectAll();
                        
                        network.setSelection({
                            nodes: [dataId]
                        });
                        
                        */
                        nodes.remove({
                            id: dataId
                        });
                        /*
                        edges.remove({
                            id: dataId
                        });
                        */
                        el.stop().toggleClass('ecosystem-list__item--active');
                    }
                    catch (err) {
                        alert(err);
                    }
                }
            }

            return false;
        });
    });

    /**
     * Events
     */

    var ecoMsg = document.getElementById('ecosystem-msg');

    /*
    
    network.on("click", function (params) {
        params.event = "[original event]";
        ecoMsg.innerHTML = '<strong>Click event:</strong>' + JSON.stringify(params, null, 4);
        console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
    });
    network.on("doubleClick", function (params) {
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<strong>doubleClick event:</strong>' + JSON.stringify(params, null, 4);
    });
    network.on("oncontext", function (params) {
        params.event = "[original event]";
        ecoMsg.innerHTML = '<strong>oncontext (right click) event:</strong>' + JSON.stringify(params, null, 4);
    });
    network.on("dragStart", function (params) {
        // There's no point in displaying this event on screen, it gets immediately overwritten
        params.event = "[original event]";
        console.log('dragStart Event:', params);
        console.log('dragStart event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
    });
    network.on("dragging", function (params) {
        params.event = "[original event]";
        ecoMsg.innerHTML = '<strong>dragging event:</strong>' + JSON.stringify(params, null, 4);
    });
    network.on("dragEnd", function (params) {
        params.event = "[original event]";
        ecoMsg.innerHTML = '<strong>dragEnd event:</strong>' + JSON.stringify(params, null, 4);
        console.log('dragEnd Event:', params);
        console.log('dragEnd event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
    });

    network.on("hidePopup", function () {
        console.log('hidePopup Event');
    });
    network.on("select", function (params) {
        console.log('select Event:', params);
    });
    network.on("selectNode", function (params) {
        console.log('selectNode Event:', params);
    });
    network.on("selectEdge", function (params) {
        console.log('selectEdge Event:', params);
    });
    network.on("deselectNode", function (params) {
        console.log('deselectNode Event:', params);
    });
    network.on("deselectEdge", function (params) {
        console.log('deselectEdge Event:', params);
    });
    network.on("hoverNode", function (params) {
        console.log('hoverNode Event:', params);
    });
    network.on("hoverEdge", function (params) {
        console.log('hoverEdge Event:', params);
    });
    network.on("blurNode", function (params) {
        console.log('blurNode Event:', params);
    });
    network.on("blurEdge", function (params) {
        console.log('blurEdge Event:', params);
    });

    */

});