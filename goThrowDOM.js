recurseDomChildren(document.documentElement, true);

function recurseDomChildren(start, output)
{
    var nodes;
    if(start.childNodes)
    {
        nodes = start.childNodes;
        loopNodeChildren(nodes, output);
    }
}

function loopNodeChildren(nodes, output)
{
    var node;
    for(var i=0;i<nodes.length;i++)
    {
        node = nodes[i];
        if(output)
        {
            outputNode(node);
        }
        if(node.childNodes)
        {
            recurseDomChildren(node, output);
        }
    }
}

function outputNode(node)
{
    var whitespace = /^\s+$/g;
    if(node.nodeType === 1)
    {
        console.log("element: " + node.tagName);  
    }else if(node.nodeType === 3)
    {
        node.data = node.data.replace(whitespace, "");
        if(node.data)
        {
            console.log("text: " + node.data); 
        }  
    }  
}